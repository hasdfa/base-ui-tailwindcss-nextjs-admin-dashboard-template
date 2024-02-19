import DashboardLayout from '@/components/layouts/Dashboard'
import Typography from '@/components/uikit/Typography'

export default function CreateNewUserPage() {
  return (
    <DashboardLayout>
      <Typography component="h1" variant="h2" className="col-span-12">
        Users / Create new user
      </Typography>
    </DashboardLayout>
  )
}
