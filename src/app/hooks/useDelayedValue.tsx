import React from 'react'

export default function useDelayedValue<T>(value: T, timeout: number) {
  const [delayedValue, setDelayedValue] = React.useState(value)

  React.useEffect(() => {
    const timer = setTimeout(() => setDelayedValue(value), timeout)
    return () => clearTimeout(timer)
  }, [timeout, value])

  return delayedValue
}
