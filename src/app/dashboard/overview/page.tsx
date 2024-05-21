import * as React from 'react'

import SalesChartCard from '@/components/app/overview/SalesChartCard'
import OrdersTableCard from '@/components/app/overview/OrdersTableCard'

import Typography from '@/components/ui/Typography'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function DashboardHome() {
  return (
    <>
      <div className="grid grid-cols-12 gap-2 md:gap-4">
        <Typography component="h1" variant="h2" className="col-span-12">
          Dashboard
        </Typography>
        <SalesChartCard />
        <Card className="col-span-12 md:col-span-5 px-6 py-4 justify-between">
          <Typography variant="subtitle2" className="text-lg">
            Deposits
          </Typography>
          <div className="flex flex-col items-stretch gap-2">
            <span className="text-xl text-primary-500">$3,024.00</span>
          </div>
          <Button variant="outlined">View balance</Button>
        </Card>
      </div>
      <OrdersTableCard />
    </>
  )
}
