'use client'
import { useParams } from 'next/navigation'

import Typography from '@/components/uikit/Typography'

export default function TasksPage() {
  const { slug } = useParams()
  const status = slug[0] || 'all'

  return (
    <>
      <Typography component="h1" variant="h2" className="col-span-12">
        {`Tasks > ${status}`}
      </Typography>
    </>
  )
}
