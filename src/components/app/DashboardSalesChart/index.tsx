'use client'

import React from 'react'

import { LineChart } from '@mui/x-charts'

import ContainerDimensionsProvider from '@/components/uikit/ContainerDimensionsProvider'
import myColors from '@/theme/colors'

import { dashboardSalesChartData } from './data'

interface DashboardSalesChartProps {
  height: number
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
}
