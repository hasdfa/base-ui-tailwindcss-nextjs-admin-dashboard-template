import DashboardSalesChart from '@/components/app/DashboardSalesChart'
import DashboardOrdersTable from '@/components/app/DashboardOrdersTable'

import Typography from '@/components/uikit/Typography'
import Button from '@/components/uikit/Button'
import Card from '@/components/uikit/Card'

export default function DashboardHome() {
  return (
    <>
      <Typography component="h1" variant="h2" className="col-span-12">
        Dashboard
      </Typography>
      <Card className="col-span-12 md:col-span-7 min-h-[250px]">
        <Typography variant="subtitle2" className="text-lg px-2 pt-1 pb-0">
          Today sales ($)
        </Typography>
        <DashboardSalesChart height={250} />
      </Card>
      <Card className="col-span-12 md:col-span-5 px-6 py-4 justify-between">
        <Typography variant="subtitle2" className="text-lg">
          Deposits
        </Typography>
        <div className="flex flex-col items-stretch gap-2">
          <span className="text-xl text-primary-500">$3,024.00</span>
        </div>
        <Button variant="outlined">View balance</Button>
      </Card>
      <Card className="col-span-12 min-h-[350px]">
        <Typography variant="subtitle2" className="text-lg">
          Recent orders
        </Typography>
        <DashboardOrdersTable />
      </Card>
    </>
  )
}
