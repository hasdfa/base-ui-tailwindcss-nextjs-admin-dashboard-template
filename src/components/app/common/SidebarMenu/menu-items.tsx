import * as React from 'react'
import { twMerge } from 'tailwind-merge'

import HomeIcon from '@/components/icons/HomeIcon'
import DashboardIcon from '@/components/icons/DashboardIcon'
import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon'
import AssignmentIcon from '@/components/icons/AssignmentIcon'
import QuestionAnswerIcon from '@/components/icons/QuestionAnswerIcon'
import GroupIcon from '@/components/icons/GroupIcon'

const menuItems = [
  {
    label: 'Home',
    startIcon: <HomeIcon />,
    href: '/dashboard',
  },
  {
    label: 'Dashboard',
    startIcon: <DashboardIcon />,
    href: '/dashboard/overview',
  },
  {
    label: 'Orders',
    startIcon: <ShoppingCartIcon />,
    href: '/dashboard/orders',
  },
  {
    label: 'Tasks',
    startIcon: <AssignmentIcon />,
    items: [
      {
        label: 'All tasks',
        href: '/dashboard/tasks/all',
      },
      {
        label: 'Backlog',
        href: '/dashboard/tasks/backlog',
      },
      {
        label: 'In progress',
        href: '/dashboard/tasks/in-progress',
      },
      {
        label: 'Done',
        href: '/dashboard/tasks/done',
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
    href: '/dashboard/messages',
  },
  {
    label: 'Users',
    startIcon: <GroupIcon />,
    items: [
      {
        label: 'My profile',
        href: '/dashboard/users/me',
      },
      {
        label: 'Create a new user',
        href: '/dashboard/users/new',
      },
      {
        label: 'Roles & permissions',
        href: '/dashboard/users/permissions',
      },
    ],
  },
  {
    label: 'Authentication',
    items: [
      {
        label: 'Sign In',
        href: '/auth/sign-in',
      },
    ],
  },
]

export default menuItems
