import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface DrawerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode

  mobileOpen?: boolean
  mobileOnClose?: () => void
}

const Drawer = React.forwardRef(function Drawer(
  { mobileOpen, mobileOnClose, className, ...props }: DrawerProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <>
      <div
        {...props}
        ref={ref}
        className={twMerge(
          'ui-Drawer-root',
          'h-[100dvh] w-[var(--base-Drawer-width)]',
          'fixed top-0 z-50',
          'flex flex-col px-4 py-4',
          'bg-white border-r border-gray-200',
          'transition-transform transition-duration-500',
          'transform -translate-x-full md:translate-x-0',
          mobileOpen && 'translate-x-0',
          className
        )}
      >
        {props.children}
      </div>
      <div
        className={twMerge(
          'ui-Drawer-backdrop',
          'transition-opacity opacity-0 transform translate-x-full',
          'fixed top-0 left-0 w-full h-full bg-black/30 z-40',
          mobileOpen && 'translate-x-0 opacity-100'
        )}
        onClick={mobileOnClose}
      />
    </>
  )
})

export default Drawer
