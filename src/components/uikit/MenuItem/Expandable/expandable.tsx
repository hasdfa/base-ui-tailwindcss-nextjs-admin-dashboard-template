import * as React from 'react'

import {
  TransitionContext,
  useTransitionTrigger,
} from '@mui/base/useTransition'

import SlideDown from '@/components/uikit/SlideDown'
import BaseMenuItem from '@/components/uikit/MenuItem/Base'

import type { ExpandableMenuItemProps } from '@/components/uikit/MenuItem/Expandable/index'

const classes = {
  childItemsRoot: 'flex flex-col items-stretch gap-1',
}

interface ExpandableMenuItemChildProps {
  open: boolean
  items: ExpandableMenuItemProps['items']
}

export default function ExpandableMenuItemChild({
  items,
  open,
}: ExpandableMenuItemChildProps) {
  const { contextValue } = useTransitionTrigger(open)
  const containerId = React.useId()

  return (
    <TransitionContext.Provider value={contextValue}>
      <SlideDown>
        <div
          id={containerId}
          aria-hidden={!open}
          className={classes.childItemsRoot}
        >
          {items.map((it, key) => (
            <BaseMenuItem key={key} {...it} startIcon={it.startIcon || <div />}>
              {it.label}
            </BaseMenuItem>
          ))}
        </div>
      </SlideDown>
    </TransitionContext.Provider>
  )
}
