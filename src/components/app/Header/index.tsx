import * as React from 'react'
import { twMerge } from 'tailwind-merge'

import CompanyLogo from '@/components/app/CompanyLogo'
import Button from '@/components/uikit/Button'
import MenuIcon from '@/components/icons/MenuIcon'

interface AppHeaderProps {
  setMobileOpen?: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
}

export default function AppHeader(props: AppHeaderProps) {
  return (
    <header
      className={twMerge(
        'ui-Header',
        'flex flex-row items-center justify-between',
        'mb-4 pb-4 border-b border-gray-200',
        props.className
      )}
    >
      <CompanyLogo className="pb-0" />
      {props.setMobileOpen && (
        <Button
          size="sm"
          variant="outlined"
          className="p-1.5"
          onClick={() => props.setMobileOpen?.((mo) => !mo)}
        >
          <MenuIcon className="w-4 h-4" />
        </Button>
      )}
    </header>
  )
}
