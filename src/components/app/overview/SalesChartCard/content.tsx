'use client'

import React from 'react'
import { LineChart } from '@mui/x-charts'

import ContainerDimensionsProvider from '@/components/ui/ContainerDimensionsProvider'
import myColors from '@/theme/colors'

import { SalesDataResponse } from '@/data/fetch-sales-data'

interface DashboardSalesChartProps {
  data: SalesDataResponse['data']
  height: number
}

export default function SalesChartContent(props: DashboardSalesChartProps) {
  return (
    <ContainerDimensionsProvider style={{ width: 'calc(100% + 16px)' }}>
      {({ width }) => (
        <LineChart
          height={props.height}
          width={width}
          colors={[myColors.brand[500]]}
          xAxis={[
            {
              scaleType: 'point',
              data: props.data.map((it) => it.label),
            },
          ]}
          series={[
            {
              area: true,
              label: 'Sales ($)',
              data: props.data.map((it) => it.volume),
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
