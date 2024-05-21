import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const classes = tv({
  base: 'base-Typography-root font-normal text-base text-gray-800',
  variants: {
    variant: {
      h1: 'font-bold text-4xl py-2.5',
      h2: 'font-bold text-3xl py-2.5',
      h3: 'font-semibold text-2xl py-.2',
      h4: 'font-semibold text-xl py-.2',
      subtitle1: 'font-medium text-xl text-black py-1.5',
      subtitle2: 'font-semibold text-sm text-black py-1.5',
      body: 'text-sm text-gray-600 py-1',
    },
  },
})

type TypographyVariantType = keyof (typeof classes)['variants']['variant']

const variantDefaultComponentMap: {
  [key in NonNullable<TypographyVariantType>]?: string
} = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
}

interface TypographyOwnProps {
  variant?: TypographyVariantType
}

type TypographyProps<T extends React.ElementType = 'span'> =
  TypographyOwnProps & {
    component?: T
  } & React.ComponentProps<T>

function TypographyComponent<Component extends React.ElementType = 'span'>(
  { component, variant, className, ...props }: TypographyProps<Component>,
  ref: React.ForwardedRef<React.HTMLAttributes<Component>>
) {
  const elementType =
    component ||
    (variant && variantDefaultComponentMap[variant as TypographyVariantType]) ||
    'span'

  return React.createElement(elementType, {
    ...props,
    ref,
    className: twMerge(classes({ variant }), className),
  })
}

const Typography = React.forwardRef(TypographyComponent)
export default Typography
