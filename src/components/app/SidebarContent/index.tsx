import * as React from 'react'

import Typography from '@/components/uikit/Typography'
import SidebarMenu from '@/components/app/SidebarMenu'
import Button from '@/components/uikit/Button'

export default function SidebarContent() {
  return (
    <>
      <div className="flex flex-row items-center justify-between pb-4">
        <Typography variant="h4">Acme Co.</Typography>
        <Button size="sm">Mode</Button>
      </div>
      <SidebarMenu />
    </>
  )
}
