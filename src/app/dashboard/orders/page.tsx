import Typography from '@/components/ui/Typography'
import Card from '@/components/ui/Card'

import OrdersTableCardCard from '@/components/app/overview/OrdersTableCard'

export default function DashboardHome() {
  return (
    <>
      <Typography component="h1" variant="h2" className="col-span-12">
        Orders
      </Typography>
      <OrdersTableCardCard />
    </>
  )
}
