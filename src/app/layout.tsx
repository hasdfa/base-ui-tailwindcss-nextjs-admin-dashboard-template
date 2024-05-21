import * as React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import '../components/ui/index.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Base UI + Tailwind Admin Dashboard',
  description: `
    Base UI is a design system comprised of modern, responsive, living components
    It is used for building consistent, accessible and beautiful products.
    Tailwind CSS is a utility-first CSS framework that is highly customizable and allows developers to build modern, responsive designs directly in their markup.
  `.trim(),
  keywords:
    'tailwindcss, nextjs, react, typescript, admin, dashboard, template',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
