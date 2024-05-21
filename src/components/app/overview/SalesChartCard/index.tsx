import * as React from 'react'

import Typography from '@/components/ui/Typography'
import Card, { CardProps } from '@/components/ui/Card'

import fetchSalesData from '@/data/fetch-sales-data'
import SalesChartContent from './content'
import { twMerge } from 'tailwind-merge'

export default async function DashboardSalesChartCard(props: CardProps) {
  const salesChartData = await fetchSalesData()

  return (
    <Card
      {...props}
      className={twMerge(
        'col-span-12 md:col-span-7 min-h-[250px] pr-0',
        props.className
      )}
    >
      <Typography variant="subtitle2" className="text-lg px-2 pt-1 pb-0">
        Today sales ($)
      </Typography>
      <SalesChartContent height={250} data={salesChartData.data} />
    </Card>
  )
}
