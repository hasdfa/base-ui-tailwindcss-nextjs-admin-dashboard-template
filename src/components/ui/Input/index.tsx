import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { Input as BaseInput } from '@base-ui-components/react/input' // Changed import

// Updated InputProps
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean
}

export default function Input({ className, error, ...props }: InputProps) {
  return (
    <BaseInput
      {...props}
      data-invalid={error ? true : undefined} // Use data-invalid for error state
      className={twMerge(
        // Base styles
        'w-full text-sm font-sans font-normal leading-5 transition',
        'px-3 py-2 rounded-lg shadow-md shadow-slate-100 focus:shadow-outline-brand focus:shadow-lg',
        'border border-solid border-slate-300 hover:border-brand-500 focus:border-brand-500',
        'bg-white text-slate-900',
        'focus-visible:outline-0',
        // Disabled state
        'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none',
        // Error state styles using data-invalid attribute selector
        '[&[data-invalid]]:border-pink-500 [&[data-invalid]]:hover:border-pink-600 [&[data-invalid]]:text-pink-600 [&[data-invalid]]:focus:border-pink-500 [&[data-invalid]]:focus:ring-pink-500',
        className // Merge with passed className
      )}
    />
  )
}
