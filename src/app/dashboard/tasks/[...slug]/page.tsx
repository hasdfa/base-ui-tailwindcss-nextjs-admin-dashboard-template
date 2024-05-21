'use client'
import { useParams } from 'next/navigation'

import Typography from '@/components/ui/Typography'

export default function TasksPage() {
  const { slug } = useParams()
  const status = slug[0] || 'all'

  return (
    <>
      <Typography component="h1" variant="h2" className="pb-4">
        {`Tasks > ${status}`}
      </Typography>
      <div className="flex-1 rounded-md flex items-center justify-center bg-gray-100 border-dashed border-2 border-gray-400">
        Empty placeholder
      </div>
    </>
  )
}
