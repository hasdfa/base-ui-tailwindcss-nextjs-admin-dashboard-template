'use client'
import * as React from 'react'

import Drawer from '@/components/uikit/Drawer'
import Button from '@/components/uikit/Button'
import { twMerge } from 'tailwind-merge'
import SidebarContent from '@/components/app/SidebarContent'
import CompanyLogo from '@/components/app/CompanyLogo'
import MenuIcon from '@/components/icons/MenuIcon'

interface DashboardLayoutProps {
  children: React.ReactNode
  containerClassName?: string
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <div className="min-h-[100dvh] bg-white">
      <Drawer
        mobileOpen={mobileOpen}
        mobileOnClose={() => setMobileOpen(false)}
      >
        <SidebarContent />
      </Drawer>
      <main
        className={twMerge(
          'h-[100dvh] px-8 py-4',
          'ml-[var(--base-Drawer-visible-width)]',
          'transition-all transition-duration-500',
          'bg-gray-50'
        )}
      >
        <header className="flex flex-row items-center justify-between mb-4 pb-4 md:hidden border-b border-gray-200">
          <CompanyLogo className="pb-0" />
          <Button
            size="sm"
            variant="outlined"
            className="p-1.5"
            onClick={() => setMobileOpen((mo) => !mo)}
          >
            <MenuIcon className="w-4 h-4" />
          </Button>
        </header>
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
