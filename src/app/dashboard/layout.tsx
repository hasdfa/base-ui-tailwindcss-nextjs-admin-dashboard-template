'use client'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

import Drawer from '@/components/ui/Drawer'
import SidebarContent from '@/components/app/common/SidebarContent'
import AppHeader from '@/components/app/common/Header'
import Footer from '@/components/app/common/Footer'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const mobileOnClose = React.useCallback(() => setMobileOpen(false), [])
  const mobileOnOpen = React.useCallback(() => setMobileOpen(true), [])

  return (
    <div className="min-h-[100dvh]">
      <Drawer mobileOpen={mobileOpen} mobileOnClose={mobileOnClose}>
        <SidebarContent mobileOnClose={mobileOnClose} />
      </Drawer>
      <main
        className={twMerge(
          'relative min-h-[100dvh] px-4 md:px-6 lg:px-8 py-4',
          'flex flex-col items-stretch justify-start',
          'ml-[var(--base-Drawer-visible-width)]',
          'transition-all transition-duration-500'
        )}
      >
        <AppHeader setMobileOpen={mobileOnOpen} className="md:hidden" />
        <div
          className={twMerge(
            'flex-1 flex flex-col items-stretch justify-start',
            'gap-2 md:gap-3 lg:gap-4'
          )}
        >
          {props.children}
        </div>
        <Footer className="mt-4" />
      </main>
    </div>
  )
}
