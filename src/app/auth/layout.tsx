import * as React from 'react'

import AppHeader from '@/components/app/common/Header'
import Footer from '@/components/app/common/Footer'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout(props: AuthLayoutProps) {
  return (
    <main
      className="flex flex-col items-stretch px-4 py-4 min-h-[100dvh]"
      style={{
        backgroundColor: 'rgb(240, 247, 255)',
        backgroundImage:
          'radial-gradient(at 70% 51%, rgb(240, 247, 255), rgb(255, 255, 255))',
      }}
    >
      <AppHeader />
      <div className="flex flex-col items-center justify-center flex-1 pb-[20%]">
        {props.children}
      </div>
      <Footer />
    </main>
  )
}
