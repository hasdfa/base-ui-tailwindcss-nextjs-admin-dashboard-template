import * as React from 'react'
import { twMerge } from 'tailwind-merge'

import Typography from '@/components/ui/Typography'
import Input, { InputProps } from '@/components/ui/Input'

interface TextFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  inputProps: InputProps

  helperText?: string
  error?: boolean
}

export default function TextField({
  className,
  inputProps,
  helperText,
  error,
  label,
  ...props
}: TextFieldProps) {
  return (
    <div {...props} className={twMerge('', className)}>
      <Typography component="label" variant="subtitle2" className="pb-0">
        {label}
      </Typography>
      <Input {...inputProps} aria-label={label} error={error} />
      {helperText && (
        <span className={twMerge('-mt-1 text-xs', error && 'text-pink-600')}>
          {helperText}
        </span>
      )}
    </div>
  )
}
