'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import MenuItem from '@/components/ui/MenuItem'
import Button from '@/components/ui/Button'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import useDelayedValue from '@/hooks/useDelayedValue'

import menuItems from './menu-items'

interface SidebarMenuProps {
  mobileOnClose: () => void
}

export default function SidebarMenu(props: SidebarMenuProps) {
  const originalPathname = usePathname()
  const [optimisticPathname, setOptimisticPathname] =
    React.useState(originalPathname)
  const isLoading = useDelayedValue(
    optimisticPathname !== originalPathname,
    250
  )

  React.useEffect(() => {
    setOptimisticPathname(originalPathname)
    props.mobileOnClose()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalPathname])

  const getStartIcon = (selected: boolean) => {
    return selected && isLoading ? (
      <div className="flex items-center justify-center">
        <LoadingSpinner size="sm" />
      </div>
    ) : null
  }

  const makeOnClick = (href: string) => () => {
    setOptimisticPathname(href)
  }

  return (
    <>
      {menuItems.map((item) => {
        const selected = optimisticPathname === item.href
        return (
          <MenuItem
            key={item.label}
            startIcon={getStartIcon(selected) || item.startIcon}
            endIcon={item.endIcon}
            selected={selected}
            className="my-0.5"
            items={item.items?.map((it) => {
              const selected = it.href === optimisticPathname
              return {
                ...it,
                startIcon: getStartIcon(selected),
                selected: it.href === optimisticPathname,
                onClick: makeOnClick(it.href),
              }
            })}
            {...(item.href
              ? {
                  href: item.href,
                  onClick: makeOnClick(item.href),
                }
              : {})}
          >
            {item.label}
          </MenuItem>
        )
      })}

      <div className="absolute bottom-1 left-0 right-0 h-10 flex flex-col items-center px-2">
        <Link href="/ui-kit" passHref legacyBehavior>
          <Button
            variant="contained"
            className="w-full"
            href="/app/all-components"
          >
            All components
          </Button>
        </Link>
      </div>
    </>
  )
}
