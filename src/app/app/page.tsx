import DashboardLayout from '@/components/layouts/Dashboard'
import Typography from '@/components/uikit/Typography'

export default function DashboardHome() {
  return (
    <DashboardLayout>
      <Typography component="h1" variant="h2" className="col-span-12">
        Home
      </Typography>
    </DashboardLayout>
  )
}
