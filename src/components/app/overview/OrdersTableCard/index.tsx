import * as React from 'react'

import Typography from '@/components/ui/Typography'
import Card from '@/components/ui/Card'

import fetchRecentOrders from '@/data/fetch-recent-orders'
import OrdersTableContent from './content'

export default async function DashboardOrdersTableCard() {
  const recentOrdersData = await fetchRecentOrders()

  return (
    <Card className="col-span-12 flex-1">
      <Typography variant="subtitle2" className="text-lg">
        Recent orders
      </Typography>
      <OrdersTableContent rows={recentOrdersData.data} />
    </Card>
  )
}
