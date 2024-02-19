'use client'
import { useParams } from 'next/navigation'

import DashboardLayout from '@/components/layouts/Dashboard'
import Typography from '@/components/uikit/Typography'

export default function TasksPage() {
  const { slug } = useParams()
  const status = slug[0] || 'all'

  return (
    <DashboardLayout>
      <Typography component="h1" variant="h2" className="col-span-12">
        {`Tasks > ${status}`}
      </Typography>
    </DashboardLayout>
  )
}
