import * as React from 'react'
import { twMerge } from 'tailwind-merge'

import Typography from '@/components/uikit/Typography'

interface FooterProps {
  className?: string
}

export default function Footer(props: FooterProps) {
  return (
    <Typography
      variant="subtitle2"
      className={twMerge(
        'text-center text-gray-400 border-t border-gray-200 pt-4 w-full',
        props.className
      )}
      href="https://github.com/hasdfa"
      component="a"
    >
      Copyright © {new Date().getFullYear()} Vadym Raksha
    </Typography>
  )
}
