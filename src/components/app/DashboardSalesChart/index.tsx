'use client'

import dynamic from 'next/dynamic'
import { NoSsr } from '@mui/base/NoSsr'

import myColors from '@/theme/colors'
import { dashboardSalesChartData } from './data'
import { LineChart } from '@mui/x-charts'
import React from 'react'

// const ReactApexChart = dynamic(() => import('react-apexcharts'))

interface DashboardSalesChartProps {
  height: number
}

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

export default function DashboardSalesChart(props: DashboardSalesChartProps) {
  return (
    <ContainerDimensionsProvider className="w-full">
      {({ width }) => (
        <LineChart
          height={props.height}
          width={width}
          colors={[myColors.brand[500]]}
          xAxis={[
            {
              scaleType: 'point',
              data: dashboardSalesChartData.map((it) => it.label),
            },
          ]}
          series={[
            {
              area: true,
              label: 'Sales ($)',
              data: dashboardSalesChartData.map((it) => it.volume),
            },
          ]}
          sx={{
            '& .MuiAreaElement-root': {
              fill: 'url(#dashboardSalesChartGradient)',
            },
            '& .MuiChartsLegend-root': {
              marginTop: '-32px',
              display: 'none',
            },
          }}
        >
          <defs>
            <linearGradient
              id="dashboardSalesChartGradient"
              gradientTransform="rotate(90)"
            >
              <stop offset="5%" stopColor={myColors.brand[500]} />
              <stop offset="95%" stopColor={myColors.brand[300]} />
            </linearGradient>
          </defs>
        </LineChart>
      )}
    </ContainerDimensionsProvider>
  )

  // return (
  //   <NoSsr>
  //     {typeof window !== 'undefined' && (
  //       <ReactApexChart
  //         series={[
  //           {
  //             name: 'Sales ($)',
  //             data: dashboardSalesChartData.map((it) => it.volume),
  //           },
  //         ]}
  //         width="100%"
  //         height={props.height}
  //         type="area"
  //         options={{
  //           chart: {
  //             type: 'area',
  //             toolbar: {
  //               show: false,
  //             },
  //           },
  //           dataLabels: {
  //             enabled: false,
  //           },
  //           stroke: {
  //             curve: 'smooth',
  //           },
  //           xaxis: {
  //             type: 'category',
  //             categories: dashboardSalesChartData.map((it) => it.label),
  //           },
  //           yaxis: {
  //             title: {
  //               text: 'Sales ($)',
  //             },
  //           },
  //           colors: [myColors.brand[500]],
  //         }}
  //       />
  //     )}
  //   </NoSsr>
  // )
}
