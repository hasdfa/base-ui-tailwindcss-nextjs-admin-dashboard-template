import * as React from 'react'
import { twMerge } from 'tailwind-merge'

import {
  TransitionContext,
  useTransitionTrigger,
} from '@mui/base/useTransition'

import BaseMenuItem, {
  BaseMenuItemProps,
} from '@/components/uikit/MenuItem/Base'
import SlideDown from '@/components/uikit/SlideDown'
import KeyboardArrowDownIcon from '@/components/icons/KeyboardArrowDownIcon'

export interface ExpandableMenuItemProps extends BaseMenuItemProps {
  items: {
    selected?: boolean
    label: string
    href: string
  }[]
}

const classes = {
  endIconRoot: 'transform transition-transform duration-200',
  endIconOpen: 'rotate-180',

  childItemsRoot: 'flex flex-col items-stretch gap-1',
}

const ExpandableMenuItem = React.forwardRef(function ExpandableMenuItem(
  { items, children, ...props }: ExpandableMenuItemProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const somethingSelected = items.some((it) => it.selected)
  const [open, setOpen] = React.useState(somethingSelected)
  const { contextValue } = useTransitionTrigger(open)
  const containerId = React.useId()

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
      <TransitionContext.Provider value={contextValue}>
        <SlideDown>
          <div
            id={containerId}
            aria-hidden={!open}
            className={classes.childItemsRoot}
          >
            {items.map((it, key) => (
              <BaseMenuItem
                key={key}
                href={it.href}
                selected={it.selected}
                startIcon={<div />}
              >
                {it.label}
              </BaseMenuItem>
            ))}
          </div>
        </SlideDown>
      </TransitionContext.Provider>
    </>
  )
})

export default ExpandableMenuItem
