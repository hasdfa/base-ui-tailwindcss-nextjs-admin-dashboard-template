import * as React from 'react'
import { twMerge } from 'tailwind-merge'

type ComponentsMap = {
  h1: HTMLHeadElement
  h2: HTMLHeadElement
  h3: HTMLHeadElement
  h4: HTMLHeadElement
  div: HTMLSpanElement
  span: HTMLSpanElement
}

type TypographyProps<Component extends keyof ComponentsMap> = {
  component?: Component
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle1' | 'subtitle2' | 'body'
} & (Component extends keyof ComponentsMap
  ? React.HTMLProps<ComponentsMap[Component]>
  : React.HTMLProps<HTMLSpanElement>)

const variantDefaultComponentMap: Record<
  NonNullable<TypographyProps<any>['variant']>,
  keyof ComponentsMap
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
  body: 'text-gray-600 py-1',
}

const Typography = React.forwardRef(function Typography<
  Component extends keyof ComponentsMap = 'span',
>(
  { variant, component, ...props }: TypographyProps<Component>,
  ref: React.ForwardedRef<ComponentsMap[Component]>
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
