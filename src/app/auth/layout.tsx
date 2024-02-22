import * as React from 'react'

import AppHeader from '@/components/app/Header'
import Footer from '@/components/app/Footer'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout(props: AuthLayoutProps) {
  return (
    <main className="flex flex-col items-stretch px-4 py-4 min-h-[100dvh]">
      <AppHeader />
      <div className="flex flex-col items-center justify-center flex-1 pb-[20%]">
        {props.children}
      </div>
      <Footer />
    </main>
  )
}
