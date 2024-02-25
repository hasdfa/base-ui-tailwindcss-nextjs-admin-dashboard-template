import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import {
  Input as BaseInput,
  InputProps as BaseInputProps,
} from '@mui/base/Input'

const classes = {
  root: twMerge('w-full'),
  input: twMerge(
    'w-full text-sm font-sans font-normal leading-5',
    'px-3 py-2 rounded-lg shadow-md shadow-slate-100 focus:shadow-outline-brand focus:shadow-lg',
    'border border-solid border-slate-300 hover:border-brand-500 focus:border-brand-500',
    'bg-white text-slate-900',
    'focus-visible:outline-0'
  ),
}

export default function Input(props: BaseInputProps) {
  return (
    <BaseInput
      className={classes.root}
      slotProps={{
        input: {
          className: classes.input,
        },
      }}
      {...props}
    />
  )
}
