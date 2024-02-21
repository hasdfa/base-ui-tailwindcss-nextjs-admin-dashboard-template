import styles from './index.module.css'
import clsx from 'clsx'

const bars = Array(12).fill(0)

interface LoadingSpinnerProps {
  visible?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export default function LoadingSpinner({ visible, size }: LoadingSpinnerProps) {
  return (
    <div
      className={clsx(styles.wrapper, styles[size || 'md'])}
      data-visible={visible || true}
    >
      <div className={styles.spinner}>
        {bars.map((_, i) => (
          <div className={styles.spinnerBar} key={`spinner-bar-${i}`} />
        ))}
      </div>
    </div>
  )
}
