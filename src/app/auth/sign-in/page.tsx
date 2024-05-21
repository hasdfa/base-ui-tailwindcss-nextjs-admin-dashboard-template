'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import z from 'zod'

import Card from '@/components/ui/Card'
import Typography from '@/components/ui/Typography'
import Button from '@/components/ui/Button'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

import useSignInMutation from '@/data/use-sign-in-mutation'
import TextField from '@/components/ui/TextField'

const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password is too short' })
    .max(20, { message: 'Password is too long' }),
})

export default function SignInPage() {
  const router = useRouter()
  const { isMutating, trigger: triggerSignIn } = useSignInMutation()
  const [fieldsError, setFieldsError] = React.useState<
    z.typeToFlattenedError<z.infer<typeof SignInFormSchema>>['fieldErrors']
  >({})

  const onSubmit = async (event: React.FormEvent<any>) => {
    event.preventDefault()

    const targetPath = '/dashboard/overview'
    router.prefetch(targetPath)

    try {
      const formValues = Object.fromEntries(
        new FormData(event.currentTarget).entries()
      )
      const parsed = await SignInFormSchema.safeParseAsync(formValues)
      if (!parsed.success) {
        setFieldsError(parsed.error.flatten().fieldErrors)
        return
      }

      setFieldsError({})
      await triggerSignIn(parsed.data)

      router.push(targetPath)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Card
      variant="elevated"
      component="form"
      onSubmit={onSubmit}
      className="gap-4 w-full sm:w-[400px] px-8 pt-4 pb-8"
    >
      <Typography variant="subtitle1">Welcome back 👋</Typography>
      <div className="w-full border-b border-gray-100 -mt-1" />

      <TextField
        label="Email"
        inputProps={{
          autoFocus: true,
          name: 'email',
          type: 'email',
          placeholder: 'email@site.com',
          disabled: isMutating,
          required: true,

          // Prefill only for demo purposes
          defaultValue: 'example@site.com',
        }}
        error={!!fieldsError.email}
        helperText={fieldsError.email && fieldsError.email[0]}
      />
      <TextField
        label="Password"
        inputProps={{
          name: 'password',
          type: 'password',
          placeholder: '*'.repeat(16),
          disabled: isMutating,
          required: true,

          // Prefill only for demo purposes
          defaultValue: 'very-secret-password',
        }}
        error={!!fieldsError.password}
        helperText={fieldsError.password && fieldsError.password[0]}
      />

      <Button
        type="submit"
        variant="contained"
        className="mt-6 py-2"
        disabled={isMutating}
      >
        {isMutating ? (
          <LoadingSpinner
            rootClassName="m-auto py-2.5"
            color="white"
            size="sm"
          />
        ) : (
          'Sign in'
        )}
      </Button>
    </Card>
  )
}
