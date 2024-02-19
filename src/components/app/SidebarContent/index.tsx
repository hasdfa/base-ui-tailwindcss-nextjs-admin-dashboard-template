import * as React from 'react'

import Typography from '@/components/uikit/Typography'
import SidebarMenu from '@/components/app/SidebarMenu'

export default function SidebarContent() {
  return (
    <>
      <div className="flex flex-row items-center justify-start pb-4 gap-2">
        <div className="text-sm text-white bg-gradient-brand px-2.5 py-1 rounded-md">
          A
        </div>
        <Typography variant="h4">Acme Co.</Typography>
      </div>
      <SidebarMenu />
    </>
  )
}
