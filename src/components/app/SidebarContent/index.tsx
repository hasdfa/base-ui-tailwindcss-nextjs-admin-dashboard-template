import * as React from 'react'

import Typography from '@/components/uikit/Typography'
import SidebarMenu from '@/components/app/SidebarMenu'
import CompanyLogo from '@/components/app/CompanyLogo'

export default function SidebarContent() {
  return (
    <>
      <CompanyLogo />
      <SidebarMenu />
    </>
  )
}
