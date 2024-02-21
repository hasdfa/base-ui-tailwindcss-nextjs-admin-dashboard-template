'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

import MenuItem from '@/components/uikit/MenuItem'

import HomeIcon from '@/components/icons/HomeIcon'
import DashboardIcon from '@/components/icons/DashboardIcon'
import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon'
import AssignmentIcon from '@/components/icons/AssignmentIcon'
import QuestionAnswerIcon from '@/components/icons/QuestionAnswerIcon'
import GroupIcon from '@/components/icons/GroupIcon'
import { twMerge } from 'tailwind-merge'
import Button from '@/components/uikit/Button'
import Link from 'next/link'
import LoadingSpinner from '@/components/uikit/LoadingSpinner'
import useDelayedValue from '@/app/hooks/useDelayedValue'

const menuItems = [
  {
    label: 'Home',
    startIcon: <HomeIcon />,
    href: '/app',
  },
  {
    label: 'Dashboard',
    startIcon: <DashboardIcon />,
    href: '/app/dashboard',
  },
  {
    label: 'Orders',
    startIcon: <ShoppingCartIcon />,
    href: '/app/orders',
  },
  {
    label: 'Tasks',
    startIcon: <AssignmentIcon />,
    items: [
      {
        label: 'All tasks',
        href: '/app/tasks/all',
      },
      {
        label: 'Backlog',
        href: '/app/tasks/backlog',
      },
      {
        label: 'In progress',
        href: '/app/tasks/in-progress',
      },
      {
        label: 'Done',
        href: '/app/tasks/done',
      },
    ],
  },
  {
    label: 'Messages',
    startIcon: <QuestionAnswerIcon />,
    endIcon: (
      <div className="relative">
        <div
          className={twMerge(
            'absolute inset-0 px-2 pt-0.25',
            'flex items-center justify-center',
            'text-xs text-white bg-brand-500 rounded-md'
          )}
        >
          5
        </div>
      </div>
    ),
    href: '/app/messages',
  },
  {
    label: 'Users',
    startIcon: <GroupIcon />,
    items: [
      {
        label: 'My profile',
        href: '/app/users/me',
      },
      {
        label: 'Create a new user',
        href: '/app/users/new',
      },
      {
        label: 'Roles & permissions',
        href: '/app/users/permissions',
      },
    ],
  },
]

export default function SidebarMenu() {
  const originalPathname = usePathname()
  const [optimisticPathname, setOptimisticPathname] =
    React.useState(originalPathname)
  const isLoading = useDelayedValue(
    optimisticPathname !== originalPathname,
    250
  )

  React.useEffect(() => {
    setOptimisticPathname(originalPathname)
  }, [originalPathname])

  const getStartIcon = (selected: boolean) => {
    return selected && isLoading ? (
      <div className="flex items-center justify-center">
        <LoadingSpinner size="sm" />
      </div>
    ) : null
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
                onClick: () => setOptimisticPathname(it.href),
              }
            })}
            {...(item.href
              ? {
                  href: item.href,
                  onClick: () => setOptimisticPathname(item.href),
                }
              : {})}
          >
            {item.label}
          </MenuItem>
        )
      })}

      <div className="absolute bottom-1 left-0 right-0 h-10 flex flex-col items-center px-2">
        <Link href="/app/all-components" passHref legacyBehavior>
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
