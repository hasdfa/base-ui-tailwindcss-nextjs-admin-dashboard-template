import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from '@mui/base/Button'

const classes = tv({
  base: twMerge(
    'text-center cursor-pointer select-none',
    'enabled:active:scale-[0.98] transition',
    'transform origin-center transition-all',
    'focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-brand-500',
    'disabled:text-slate-700 disabled:bg-slate-200 disabled:cursor-default disabled:hover:bg-slate-200 disabled:border-none'
  ),
  variants: {
    size: {
      sm: 'rounded-md px-3 py-1.5 text-xs',
      md: 'rounded-md px-4 py-1.5 text-sm',
      lg: 'rounded-md px-5 py-1.5 text-lg',
    },
    variant: {
      text: twMerge(
        'font-medium text-brand-500',
        'hover:bg-brand-100 hover:bg-opacity-30 transition-colors'
      ),
      outlined: twMerge(
        'outline-none',
        'font-medium text-brand-500',
        'bg-brand-50 border border-brand-300',
        'hover:border-brand-200 hover:bg-brand-100'
      ),
      contained: twMerge(
        'outline outline-1 outline-brand-700',
        'text-brand-50 bg-gradient-brand',
        'hover:bg-gradient-brand-solid'
      ),
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'contained',
  },
})

export interface ButtonProps extends BaseButtonProps {
  variant?: keyof (typeof classes)['variants']['variant']
  size?: keyof (typeof classes)['variants']['size']
}

const Button = React.forwardRef(function Button(
  { className, size, variant, ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <BaseButton
      {...props}
      className={twMerge(classes({ size, variant }), className)}
      ref={ref}
    />
  )
})

export default Button
