import { tv } from 'tailwind-variants'
import styles from './index.module.css'

const classes = tv({
  base: styles.spinnerBar,
  slots: {
    container: styles.wrapper,
    spinnerBar: styles.spinnerBar,
  },
  variants: {
    size: {
      xs: { container: styles.xs },
      sm: { container: styles.sm },
      md: { container: styles.md },
      lg: { container: styles.lg },
      xl: { container: styles.xl },
    },
    color: {
      white: { spinnerBar: 'bg-white' },
      gray: { spinnerBar: 'bg-gray-500' },
      brand: { spinnerBar: 'bg-brand-500' },
      success: { spinnerBar: 'bg-green-500' },
      warning: { spinnerBar: 'bg-yellow-500' },
      error: { spinnerBar: 'bg-red-500' },
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'gray',
  },
})

interface LoadingSpinnerProps {
  visible?: boolean
  size?: keyof (typeof classes)['variants']['size']
  color?: keyof (typeof classes)['variants']['color']

  rootClassName?: string
  barClassName?: string
}

const bars = Array(12).fill(0)

export default function LoadingSpinner({
  visible,
  size,
  color,
  rootClassName,
  barClassName,
}: LoadingSpinnerProps) {
  const { container, spinnerBar } = classes({ color, size })

  return (
    <div
      className={container({ className: rootClassName })}
      data-visible={visible || true}
    >
      <div className={styles.spinner}>
        {bars.map((_, i) => (
          <div
            className={spinnerBar({ className: barClassName })}
            key={`spinner-bar-${i}`}
          />
        ))}
      </div>
    </div>
  )
}
