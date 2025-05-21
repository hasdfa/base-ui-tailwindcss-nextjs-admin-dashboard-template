import * as React from 'react'
import { useTransitionStateManager } from '@mui/base/useTransition'
import { twMerge } from 'tailwind-merge'

const classes = {
  root: 'grid transition-[grid-template-rows] duration-200 ease-in-out',
  collapsed: 'grid-rows-[0fr]',
  expanded: 'grid-rows-[1fr]',
  inner: 'overflow-hidden',
}

interface SlideDownProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const SlideDown = React.forwardRef(function Collapse(
  { children, ...props }: SlideDownProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { requestedEnter, onExited } = useTransitionStateManager()

  return (
    <div
      {...props}
      ref={ref}
      className={twMerge(
        classes.root,
        requestedEnter ? classes.expanded : classes.collapsed,
        props.className
      )}
      onTransitionEnd={(event) => {
        if (event.propertyName === 'grid-template-rows') {
          if (!requestedEnter) {
            onExited()
          }
        }
      }}
    >
      <div className={classes.inner}>{children}</div>
    </div>
  )
})

export default SlideDown
