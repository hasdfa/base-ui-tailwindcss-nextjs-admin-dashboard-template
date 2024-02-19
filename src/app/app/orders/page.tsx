import DashboardLayout from '@/components/layouts/Dashboard'
import Typography from '@/components/uikit/Typography'
import Card from '@/components/uikit/Card'

import DashboardOrdersTable from '@/components/app/DashboardOrdersTable'

export default function DashboardHome() {
  return (
    <DashboardLayout containerClassName="flex flex-col h-full">
      <Typography component="h1" variant="h2" className="col-span-12">
        Orders
      </Typography>
      <Card
        className="col-span-12 flex-1"
        style={{ maxHeight: 'calc(100dvh - 120px)' }}
      >
        <Typography variant="subtitle2" className="text-lg">
          Recent orders
        </Typography>
        <DashboardOrdersTable className="flex-1" />
      </Card>
    </DashboardLayout>
  )
}
