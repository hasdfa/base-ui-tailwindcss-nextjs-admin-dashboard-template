import * as React from 'react'
import { twMerge } from 'tailwind-merge'

import Button from '@/components/uikit/Button'
import Typography from '@/components/uikit/Typography'
import LoadingSpinner from '@/components/uikit/LoadingSpinner'
import Input from '@/components/uikit/Input'

import styles from './page.module.css'

const buttons = {
  variants: ['contained', 'outlined', 'text'],
  sizes: ['sm', 'md', 'lg'],
}

const typographyVariants = [
  {
    variant: 'h1',
    label: 'Heading 1',
  },
  {
    variant: 'h2',
    label: 'Heading 2',
  },
  {
    variant: 'h3',
    label: 'Heading 3',
  },
  {
    variant: 'subtitle1',
    label: 'Subtitle 1',
  },
  {
    variant: 'subtitle2',
    label: 'Subtitle 2',
  },
  {
    variant: 'body',
    label: 'Body',
  },
]

const spinners = {
  sizes: ['sm', 'md', 'lg', 'xl'],
  colors: ['gray', 'white', 'brand', 'success', 'error', 'warning'],
}

function ParamLabel({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  return (
    <span className={twMerge('font-normal text-gray-600 text-xs', className)}>
      {children[0].toUpperCase() + children.slice(1)}
    </span>
  )
}

export default function ComponentsPage() {
  return (
    <div className="col-span-12 gap-4 flex flex-col items-start w-full">
      <Typography variant="h1">All components</Typography>

      <Typography id="button" variant="h2" component="a" href="#button">
        Button
      </Typography>
      <div className="max-w-full overflow-x-auto">
        <table className={styles.table}>
          <thead>
            <tr>
              <th />
              {buttons.variants.map((variant) => (
                <th key={variant} align="left">
                  <ParamLabel>{variant}</ParamLabel>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="gap-2">
            {buttons.sizes.map((size) => (
              <tr key={size}>
                <td>
                  <ParamLabel className="pr-2">{size}</ParamLabel>
                </td>
                {buttons.variants.map((variant) => (
                  <td key={`${variant}-${size}`}>
                    <Button variant={variant as any} size={size as any}>
                      Button
                    </Button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Typography
        id="input"
        variant="h2"
        className="pt-6"
        component="a"
        href="#input"
      >
        Input
      </Typography>
      <div className="max-w-full overflow-x-auto">
        <table className={styles.table}>
          <tbody className="gap-2">
            <tr>
              <td>
                <ParamLabel className="pr-2">Default</ParamLabel>
              </td>
              <td>
                <Input placeholder="Default input" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Typography
        id="typography"
        variant="h2"
        className="pt-6"
        component="a"
        href="#typography"
      >
        Typography
      </Typography>
      <div className="max-w-full overflow-x-auto">
        <table className={styles.table}>
          <tbody className="gap-2">
            {typographyVariants.map(({ variant, label }) => (
              <tr key={variant}>
                <td>
                  <ParamLabel className="pr-2">{variant}</ParamLabel>
                </td>
                <td>
                  <Typography component="span" variant={variant as any}>
                    {label}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Typography
        id="loading-spinner"
        variant="h2"
        className="pt-6"
        component="a"
        href="#loading-spinner"
      >
        LoadingSpinner
      </Typography>
      <div className="max-w-full overflow-x-auto">
        <table className={styles.table}>
          <thead>
            <tr>
              <th />
              {spinners.colors.map((color) => (
                <th key={color} align="left">
                  <ParamLabel>{color}</ParamLabel>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="gap-2">
            {spinners.sizes.map((size) => (
              <tr key={size}>
                <td>
                  <ParamLabel className="pr-2">{size}</ParamLabel>
                </td>
                {spinners.colors.map((color) => (
                  <td key={`${color}-${size}`}>
                    <LoadingSpinner size={size as any} color={color as any} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
