'use client'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

import Drawer from '@/components/uikit/Drawer'
import SidebarContent from '@/components/app/SidebarContent'
import AppHeader from '@/components/app/Header'
import Footer from '@/components/app/Footer'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const mobileOnClose = React.useCallback(() => setMobileOpen(false), [])

  return (
    <div className="min-h-[100dvh]">
      <Drawer mobileOpen={mobileOpen} mobileOnClose={mobileOnClose}>
        <SidebarContent mobileOnClose={mobileOnClose} />
      </Drawer>
      <main
        className={twMerge(
          'relative min-h-[100dvh] px-4 md:px-6 lg:px-8 py-4',
          'flex flex-col',
          'ml-[var(--base-Drawer-visible-width)]',
          'transition-all transition-duration-500'
        )}
      >
        <AppHeader setMobileOpen={setMobileOpen} className="md:hidden" />
        <div
          className={twMerge(
            'flex-1 grid grid-cols-12',
            'gap-2 sm:gap-4 md:gap-6 lg:gap-8'
          )}
        >
          {props.children}
        </div>
        <Footer className="mt-4" />
      </main>
    </div>
  )
}
