import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { Collapsible } from '@base-ui-components/react/collapsible' // Added
import BaseMenuItem, { BaseMenuItemProps } from '@/components/ui/MenuItem/Base'
import KeyboardArrowDownIcon from '@/components/icons/KeyboardArrowDownIcon'
// Removed: import ExpandableMenuItemChild from './expandable'

export interface ExpandableMenuItemProps extends BaseMenuItemProps {
  items: {
    selected?: boolean
    label: string
    href: string
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    onClick?: () => void // This onClick on sub-items is fine
  }[]
  // onClick on the main ExpandableMenuItem (trigger) will be handled by Collapsible.Trigger
}

const expandableMenuItemClasses = { // Renamed from 'classes'
  endIconRoot: 'transform transition-transform duration-200',
  endIconOpen: 'rotate-180',
  childItemsRoot: 'flex flex-col items-stretch gap-1 pl-7 py-1', // Added pl-7 for deeper indentation, py-1 for spacing
}

const ExpandableMenuItem = React.forwardRef(function ExpandableMenuItem(
  { items, children, className, ...props }: ExpandableMenuItemProps,
  ref: React.ForwardedRef<HTMLDivElement | HTMLAnchorElement> // Updated ref type
) {
  const somethingSelected = items.some((it) => it.selected)
  const [isOpenForIcon, setIsOpenForIcon] = React.useState(somethingSelected)

  return (
    <Collapsible.Root
      defaultOpen={somethingSelected}
      onOpenChange={setIsOpenForIcon} // Sync icon state with Collapsible state
      className={twMerge('w-full', className)} // Apply className to the root
    >
      <Collapsible.Trigger asChild>
        {/* BaseMenuItem acts as the trigger. Props from Collapsible.Trigger are passed via asChild. */}
        <BaseMenuItem
          {...props} // Original props for BaseMenuItem (like href, selected status for the main item itself)
          ref={ref}   // Forward ref
          // onClick is now handled by Collapsible.Trigger
          endIcon={
            <KeyboardArrowDownIcon
              className={twMerge(
                expandableMenuItemClasses.endIconRoot,
                isOpenForIcon && expandableMenuItemClasses.endIconOpen
              )}
            />
          }
        >
          {children}
        </BaseMenuItem>
      </Collapsible.Trigger>
      <Collapsible.Panel
        className="grid data-[state=closed]:grid-rows-[0fr] data-[state=open]:grid-rows-[1fr] transition-[grid-template-rows] duration-200 ease-out overflow-hidden"
      >
        {/* This div is necessary for the grid animation to work correctly on the content height */}
        <div className={expandableMenuItemClasses.childItemsRoot}>
          {items.map((it, key) => (
            <BaseMenuItem
              key={key}
              {...it} // Spread sub-item props (href, label, selected, onClick for sub-item)
              startIcon={it.startIcon || <div className="w-5 h-5" /> /* Placeholder for alignment */}
            >
              {it.label}
            </BaseMenuItem>
          ))}
        </div>
      </Collapsible.Panel>
    </Collapsible.Root>
  )
})

export default ExpandableMenuItem
