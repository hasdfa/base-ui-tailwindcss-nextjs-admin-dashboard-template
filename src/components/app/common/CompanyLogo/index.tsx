import Typography from '@/components/ui/Typography'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface CompanyLogoProps extends React.HTMLProps<HTMLDivElement> {
  withoutIcon?: boolean
}

export default function CompanyLogo({
  withoutIcon,
  className,
  ...props
}: CompanyLogoProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex flex-row items-center justify-start pb-4 gap-2',
        className
      )}
    >
      {!withoutIcon && (
        <div className="text-sm text-white bg-gradient-brand px-2.5 py-1 rounded-md">
          A
        </div>
      )}
      <Typography variant="h4">Acme Co.</Typography>
    </div>
  )
}
