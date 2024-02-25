import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { HTMLAttributes } from 'react'

interface CardProps<Component extends string = 'div'>
  extends React.HTMLProps<HTMLAttributes<Component>> {
  component?: string
  variant?: 'outlined' | 'contained'
}

const classes = {
  root: twMerge(
    'base-Card-root',
    'flex flex-col items-stretch',
    'rounded-lg px-4 py-2',
    'border border-gray-200'
  ),
  contained: twMerge('bg-white'),
  outlined: '',
}

const Card = React.forwardRef(function Card<Component extends string = 'div'>(
  { variant, component, ...props }: CardProps<Component>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return React.createElement(component || 'div', {
    ...props,
    ref,
    className: twMerge(
      classes.root,
      classes[variant || 'contained'],
      props.className
    ),
  })
})

export default Card
