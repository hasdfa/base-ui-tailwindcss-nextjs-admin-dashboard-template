'use client'
import * as React from 'react'
import { useRouter } from 'next/navigation'

import Card from '@/components/uikit/Card'
import Typography from '@/components/uikit/Typography'
import Button from '@/components/uikit/Button'
import Input from '@/components/uikit/Input'
import LoadingSpinner from '@/components/uikit/LoadingSpinner'

export default function SignInPage() {
  const router = useRouter()
  const [isLoading, setLoading] = React.useState(false)

  const onSubmit = async (event: React.FormEvent<any>) => {
    event.preventDefault()
    setLoading(true)

    try {
      // await signIn('credentials', {})
      await new Promise((resolve) => setTimeout(resolve, 2500))

      router.push('/app/dashboard')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card
      component="form"
      onSubmit={onSubmit}
      className="gap-2 w-full sm:w-[400px] px-4 pt-2 pb-4"
    >
      <Typography variant="subtitle1">Welcome back 👋</Typography>
      <div className="w-full border-b border-gray-100 -mt-1" />

      <Typography variant="subtitle2" className="pb-0">
        Email
      </Typography>
      <Input
        autoFocus
        name="email"
        type="email"
        aria-label="Email"
        placeholder="email@site.com"
      />

      <Typography variant="subtitle2" className="pb-0 mt-2">
        Password
      </Typography>
      <Input
        name="password"
        type="password"
        aria-label="Password"
        placeholder={'* '.repeat(8)}
      />

      <Button type="submit" variant="contained" className="mt-6 py-2">
        {isLoading ? (
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
