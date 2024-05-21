import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const classes = tv({
  base: twMerge(
    'base-Card-root',
    'flex flex-col items-stretch',
    'rounded-lg px-4 py-2',
    'border border-gray-200'
  ),
  variants: {
    variant: {
      elevated: 'bg-white shadow-md',
      contained: 'bg-white',
      outlined: '',
    },
  },
  defaultVariants: {
    variant: 'contained',
  },
})

interface CardOwnProps {
  variant?: keyof (typeof classes)['variants']['variant']
}

type CardProps<T extends React.ElementType = 'div'> = CardOwnProps & {
  component?: T
} & React.ComponentProps<T>

export default function Card<Component extends React.ElementType = 'div'>({
  component = 'div',
  className,
  variant,
  ...props
}: CardProps<Component>) {
  return React.createElement(component || 'div', {
    ...props,
    className: twMerge(classes({ variant }), className),
  })
}
