import * as React from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { Button, ButtonProps } from '@mui/base/Button'

import styles from './index.module.css'

export interface BaseMenuItemProps extends ButtonProps {
  selected?: boolean

  startIcon?: React.ReactNode
  children: React.ReactNode
  endIcon?: React.ReactNode
}

const BaseMenuItem = React.forwardRef(function BaseMenuItem(
  {
    selected,
    startIcon,
    endIcon,
    children,
    className,
    ...props
  }: BaseMenuItemProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const child = (
    <Button
      {...props}
      className={twMerge(
        'base-MenuItem-root',
        styles.root,
        'flex items-center gap-2 min-h-[32px] w-full',
        'px-3 py-1.5 rounded-md',
        'text-gray-500 text-sm',
        'hover:bg-gray-75',
        'active:opacity-80 active:scale-[0.99]',
        selected &&
          'base-MenuItem-selected bg-gray-100 hover:bg-gray-100 active:bg-gray-150',
        className
      )}
      ref={ref}
    >
      {startIcon}
      <div
        className={twMerge(
          'base-MenuItem-label',
          'flex-1 font-medium text-left',
          styles.label
        )}
      >
        {children}
      </div>
      {endIcon}
    </Button>
  )

  return props.href ? (
    <Link href={props.href} passHref legacyBehavior>
      {child}
    </Link>
  ) : (
    child
  )
})

export default BaseMenuItem
