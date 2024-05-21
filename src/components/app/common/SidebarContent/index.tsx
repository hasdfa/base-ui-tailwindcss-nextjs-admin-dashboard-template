import * as React from 'react'

import Typography from '@/components/ui/Typography'
import SidebarMenu from '@/components/app/common/SidebarMenu'
import CompanyLogo from '@/components/app/common/CompanyLogo'

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
