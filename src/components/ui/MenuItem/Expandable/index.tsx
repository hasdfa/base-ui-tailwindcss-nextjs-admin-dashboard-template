import * as React from 'react'
import { twMerge } from 'tailwind-merge'

import BaseMenuItem, { BaseMenuItemProps } from '@/components/ui/MenuItem/Base'
import KeyboardArrowDownIcon from '@/components/icons/KeyboardArrowDownIcon'

import ExpandableMenuItemChild from './expandable'

export interface ExpandableMenuItemProps extends BaseMenuItemProps {
  items: {
    selected?: boolean
    label: string
    href: string

    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    onClick?: () => void
  }[]
}

const classes = {
  endIconRoot: 'transform transition-transform duration-200',
  endIconOpen: 'rotate-180',
}

const ExpandableMenuItem = React.forwardRef(function ExpandableMenuItem(
  { items, children, ...props }: ExpandableMenuItemProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const somethingSelected = items.some((it) => it.selected)
  const [open, setOpen] = React.useState(somethingSelected)

  return (
    <>
      <BaseMenuItem
        {...props}
        ref={ref}
        onClick={() => setOpen((o) => !o)}
        endIcon={
          <KeyboardArrowDownIcon
            className={twMerge(
              classes.endIconRoot,
              open && classes.endIconOpen
            )}
          />
        }
      >
        {children}
      </BaseMenuItem>
      <ExpandableMenuItemChild open={open} items={items} />
    </>
  )
})

export default ExpandableMenuItem
