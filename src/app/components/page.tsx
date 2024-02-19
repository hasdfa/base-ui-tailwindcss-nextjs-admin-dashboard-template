import Button from '@/components/uikit/Button'
import Typography from '@/components/uikit/Typography'
import * as React from 'react'

const buttons = [
  { variant: 'contained', size: 'sm' },
  { variant: 'contained', size: 'md' },
  { variant: 'contained', size: 'lg' },

  { variant: 'outlined', size: 'sm' },
  { variant: 'outlined', size: 'md' },
  { variant: 'outlined', size: 'lg' },

  { variant: 'text', size: 'sm' },
  { variant: 'text', size: 'md' },
  { variant: 'text', size: 'lg' },
]

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

export default function ComponentsPage() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <table>
        <tbody>
          <tr>
            <td colSpan={3}>Button</td>
          </tr>
          {buttons.map(({ variant, size }) => (
            <tr key={`${variant}-${size}`}>
              <td className="py-2 px-6">{variant}</td>
              <td className="py-2 px-6">{size}</td>
              <td className="py-2 px-6">
                <Button variant={variant as any} size={size as any}>
                  Button
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>Typography</td>
          </tr>
          {typographyVariants.map(({ variant, label }) => (
            <tr key={variant}>
              <td>{variant}</td>
              <td colSpan={2}>
                <Typography key={variant} variant={variant as any}>
                  {label}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
