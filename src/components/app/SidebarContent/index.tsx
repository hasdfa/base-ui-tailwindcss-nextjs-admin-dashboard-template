import * as React from 'react'

import Typography from '@/components/uikit/Typography'
import SidebarMenu from '@/components/app/SidebarMenu'
import CompanyLogo from '@/components/app/CompanyLogo'

interface SidebarContentProps {
  mobileOnClose: () => void
}

export default function SidebarContent(props: SidebarContentProps) {
  return (
    <>
      <CompanyLogo />
      <SidebarMenu mobileOnClose={props.mobileOnClose} />
    </>
  )
}
