import React from 'react'

const ContainerDimensionsProvider = ({
  children,
  ...props
}: {
  children: React.FC<{ width: number; height: number }>
} & Omit<React.HTMLProps<HTMLDivElement>, 'children'>) => {
  const targetRef = React.useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })

  React.useLayoutEffect(() => {
    let isMounted = true

    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      })
    }

    const updateDimensions = () => {
      if (isMounted && targetRef.current) {
        setDimensions({
          width: targetRef.current.offsetWidth,
          height: targetRef.current.offsetHeight,
        })
      }
    }

    let latestTimeout: NodeJS.Timeout | null = null
    const onResizeHandler = () => {
      if (latestTimeout) {
        clearTimeout(latestTimeout)
        latestTimeout = null
      }

      updateDimensions()
      latestTimeout = setTimeout(() => {
        updateDimensions()
      }, 500)
    }

    window.addEventListener('resize', onResizeHandler)
    return () => {
      isMounted = false
      window.removeEventListener('resize', onResizeHandler)
    }
  }, [])

  return (
    <div {...props} ref={targetRef}>
      {children({ ...dimensions })}
    </div>
  )
}

export default ContainerDimensionsProvider
