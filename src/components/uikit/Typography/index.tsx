import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { HTMLAttributes } from 'react'

type TypographyProps<Component extends string> = {
  component?: Component
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle1' | 'subtitle2' | 'body'
} & (Component extends string
  ? React.HTMLProps<HTMLAttributes<Component>>
  : React.HTMLProps<HTMLSpanElement>)

const variantDefaultComponentMap: Record<
  NonNullable<TypographyProps<any>['variant']>,
  string
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  subtitle1: 'span',
  subtitle2: 'span',
  body: 'span',
}

const variants: Record<NonNullable<TypographyProps<any>['variant']>, string> = {
  h1: 'font-bold text-4xl py-2.5',
  h2: 'font-bold text-3xl py-2.5',
  h3: 'font-semibold text-2xl py-.2',
  h4: 'font-semibold text-xl py-.2',
  subtitle1: 'font-medium text-xl text-black py-1.5',
  subtitle2: 'font-semibold text-sm text-black py-1.5',
  body: 'text-sm text-gray-600 py-1',
}

const Typography = React.forwardRef(function Typography<
  Component extends string = 'span',
>(
  { variant, component, ...props }: TypographyProps<Component>,
  ref: React.ForwardedRef<HTMLAttributes<Component>>
) {
  return React.createElement(
    (component
      ? component
      : variant
        ? variantDefaultComponentMap[variant]
        : null) || 'span',
    {
      ...props,
      ref,
      className: twMerge(
        'base-Typography-root',
        'font-normal text-base text-gray-800',
        variant ? variants[variant] : [],
        props.className
      ),
    }
  )
})

export default Typography
