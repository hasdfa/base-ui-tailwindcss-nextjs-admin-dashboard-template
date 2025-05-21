import * as React from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Menu } from '@base-ui-components/react/menu' // Step 1: Import Menu

import styles from './index.module.css'

// Step 2: Update BaseMenuItemProps
export interface BaseMenuItemProps {
  children: React.ReactNode
  className?: string
  selected?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  href?: string
  onClick?: React.MouseEventHandler<HTMLDivElement | HTMLAnchorElement>
  disabled?: boolean
  // Allow other props to be passed down to Menu.Item or the rendered anchor/div
  [key: string]: any
}

const BaseMenuItem = React.forwardRef(function BaseMenuItem(
  {
    selected,
    startIcon,
    endIcon,
    children,
    className,
    href, // Destructure href
    ...props // Remaining props (e.g., onClick, disabled, custom data attributes)
  }: BaseMenuItemProps,
  // Step 3: Change Ref Type
  ref: React.ForwardedRef<HTMLDivElement | HTMLAnchorElement>
) {
  // Step 6: Styling (common classes)
  const commonClassNames = twMerge(
    'base-MenuItem-root',
    styles.root, // CSS Module style
    'flex items-center gap-2 min-h-[32px] w-full',
    'px-3 py-1.5 rounded-md',
    'text-gray-500 text-sm',
    'hover:bg-gray-75', // Preserving hover style
    'active:opacity-80 active:scale-[0.99]', // Preserving active style
    selected &&
      'base-MenuItem-selected bg-gray-100 hover:bg-gray-100 active:bg-gray-150', // Selected style
    className
  )

  // Content structure for the menu item
  const content = (
    <>
      {startIcon}
      <div
        className={twMerge(
          'base-MenuItem-label',
          'flex-1 font-medium text-left',
          styles.label // CSS Module style for label
        )}
      >
        {children}
      </div>
      {endIcon}
    </>
  )

  // Step 5: Handle href Prop
  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        {/* 
          Menu.Item is the child of Link.
          It uses the `render` prop to output an anchor tag.
          The `ref` is passed to Menu.Item, which should forward it to the anchor.
          `commonClassNames` are applied to Menu.Item.
          `...props` (like onClick, disabled) are spread onto Menu.Item.
        */}
        <Menu.Item
          {...props}
          render={<a />} // Render as an anchor tag
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          className={commonClassNames}
        >
          {content}
        </Menu.Item>
      </Link>
    )
  }

  // Step 4: Replace Button with Menu.Item (default rendering as div)
  return (
    <Menu.Item
      {...props}
      ref={ref as React.ForwardedRef<HTMLDivElement>}
      className={commonClassNames}
    >
      {content}
    </Menu.Item>
  )
})

export default BaseMenuItem
