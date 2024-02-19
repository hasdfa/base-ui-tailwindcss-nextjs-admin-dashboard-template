import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps extends React.HTMLProps<HTMLDivElement> {
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

const Card = React.forwardRef(function Card(
  { variant, ...props }: CardProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      {...props}
      className={twMerge(
        classes.root,
        classes[variant || 'contained'],
        props.className
      )}
      ref={ref}
    />
  )
})

export default Card
