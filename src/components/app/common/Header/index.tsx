import * as React from 'react'
import { twMerge } from 'tailwind-merge'

import CompanyLogo from '@/components/app/common/CompanyLogo'
import Button from '@/components/ui/Button'
import MenuIcon from '@/components/icons/MenuIcon'

interface AppHeaderProps {
  setMobileOpen?: () => void
  className?: string
}

export default function AppHeader(props: AppHeaderProps) {
  return (
    <header
      className={twMerge(
        'ui-Header',
        'flex flex-row items-center justify-start gap-2',
        'mb-4 pb-4 border-b border-gray-200',
        props.className
      )}
    >
      {props.setMobileOpen && (
        <Button
          size="sm"
          variant="outlined"
          className="p-1.5"
          onClick={() => props.setMobileOpen?.()}
        >
          <MenuIcon className="w-4 h-4" />
        </Button>
      )}
      <CompanyLogo withoutIcon className="pb-0" />
    </header>
  )
}
