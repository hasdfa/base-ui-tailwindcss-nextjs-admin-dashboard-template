import * as React from 'react'

import BaseMenuItem, {
  BaseMenuItemProps,
} from '@/components/uikit/MenuItem/Base'

import ExpandableMenuItem, {
  ExpandableMenuItemProps,
} from '@/components/uikit/MenuItem/Expandable'

interface MenuItemProps extends BaseMenuItemProps {
  items?: ExpandableMenuItemProps['items']
}

const MenuItem = React.forwardRef(function MenuItem(
  props: MenuItemProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  if (props.items) {
    return <ExpandableMenuItem {...props} items={props.items} ref={ref} />
  }

  return <BaseMenuItem {...props} ref={ref} />
})

export default MenuItem
