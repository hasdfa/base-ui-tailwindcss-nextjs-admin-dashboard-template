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
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      })
    }

    const onResizeHandler = () => {
      if (targetRef.current) {
        setDimensions({
          width: targetRef.current.offsetWidth,
          height: targetRef.current.offsetHeight,
        })
      }
    }

    window.addEventListener('resize', onResizeHandler)
    return () => {
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
