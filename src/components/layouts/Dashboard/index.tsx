import * as React from 'react'

import Drawer from '@/components/uikit/Drawer'
import SidebarMenu from '@/components/app/SidebarMenu'
import Typography from '@/components/uikit/Typography'
import Button from '@/components/uikit/Button'
import { twMerge } from 'tailwind-merge'
import SidebarContent from '@/components/app/SidebarContent'

interface DashboardLayoutProps {
  children: React.ReactNode
  containerClassName?: string
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <div className="min-h-[100dvh] bg-white">
      <Drawer>
        <SidebarContent />
      </Drawer>
      <main
        className={twMerge(
          'h-[100dvh] px-8 py-4',
          'ml-[var(--base-Drawer-visible-width)]',
          'bg-gray-50'
        )}
      >
        <div
          className={twMerge(
            'grid grid-cols-12',
            'gap-2 sm:gap-4 md:gap-6 lg:gap-8',
            props.containerClassName
          )}
        >
          {props.children}
        </div>
      </main>
    </div>
  )
}
