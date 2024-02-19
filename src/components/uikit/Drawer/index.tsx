import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface DrawerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const classes = {
  root: twMerge(
    'ui-Drawer-root',
    'h-[100dvh] w-[var(--base-Drawer-width)]',
    'fixed top-0 z-50',
    'flex flex-col gap-1 px-4 py-4',
    'bg-white border-r border-gray-200'
  ),
}

const Drawer = React.forwardRef(function Drawer(
  props: DrawerProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      {...props}
      className={twMerge(classes.root, props.className)}
      ref={ref}
    >
      {props.children}
    </div>
  )
})

export default Drawer
