import styles from './index.module.css'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

const bars = Array(12).fill(0)

interface LoadingSpinnerProps {
  visible?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'gray' | 'white' | 'brand'

  rootClassName?: string
}

const classes = {
  gray: 'bg-gray-500',
  white: 'bg-white',
  brand: 'bg-brand-500',
  success: 'bg-green-500',
  error: 'bg-red-500',
  warning: 'bg-yellow-500',
}

export default function LoadingSpinner({
  visible,
  size,
  color,
  rootClassName,
}: LoadingSpinnerProps) {
  return (
    <div
      className={clsx(styles.wrapper, styles[size || 'md'], rootClassName)}
      data-visible={visible || true}
    >
      <div className={styles.spinner}>
        {bars.map((_, i) => (
          <div
            className={twMerge(styles.spinnerBar, classes[color || 'gray'])}
            key={`spinner-bar-${i}`}
          />
        ))}
      </div>
    </div>
  )
}
