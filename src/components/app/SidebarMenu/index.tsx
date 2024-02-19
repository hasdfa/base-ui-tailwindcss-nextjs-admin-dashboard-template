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
  const pathname = usePathname()

  return (
    <>
      {menuItems.map((item) => (
        <MenuItem
          key={item.label}
          startIcon={item.startIcon}
          endIcon={item.endIcon}
          selected={pathname === item.href}
          className="my-0.5"
          href={item.href}
          items={item.items?.map((it) => ({
            ...it,
            selected: it.href === pathname,
          }))}
        >
          {item.label}
        </MenuItem>
      ))}

      <div className="absolute bottom-1 left-0 right-0 h-10 flex flex-col items-center px-2">
        <Button variant="contained" className="w-full" href="/all-components">
          All components
        </Button>
      </div>
    </>
  )
}
