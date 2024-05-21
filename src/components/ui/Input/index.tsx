import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import {
  Input as BaseInput,
  InputProps as BaseInputProps,
} from '@mui/base/Input'

export type InputProps = BaseInputProps<'input'> & {
  error?: boolean
}

const classes = tv({
  base: twMerge(
    'w-full text-sm font-sans font-normal leading-5 transition',
    'px-3 py-2 rounded-lg shadow-md shadow-slate-100 focus:shadow-outline-brand focus:shadow-lg',
    'border border-solid border-slate-300 hover:border-brand-500 focus:border-brand-500',
    'bg-white text-slate-900',
    'focus-visible:outline-0',
    // Disabled state
    'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
  ),
  variants: {
    error: {
      true: 'border-pink-500 hover:border-pink-600 text-pink-600 focus:border-pink-500 focus:ring-pink-500',
    },
  },
})

export default function Input({
  className,
  slotProps,
  error,
  ...props
}: InputProps) {
  return (
    <BaseInput
      {...props}
      className={twMerge('w-full', className)}
      slotProps={{
        ...slotProps,
        input: {
          ...slotProps?.input,
          className: classes({
            error,
            className: (slotProps?.input as any)?.className,
          }),
        },
      }}
    />
  )
}
