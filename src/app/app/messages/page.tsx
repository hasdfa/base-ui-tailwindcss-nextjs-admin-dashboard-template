import Typography from '@/components/uikit/Typography'

export default function MessagesHome() {
  return (
    <div className="col-span-12 flex flex-col">
      <Typography component="h1" variant="h2" className="pb-4">
        Messages
      </Typography>
      <div className="flex-1 rounded-md flex items-center justify-center bg-gray-100 border-dashed border-2 border-gray-400">
        Empty placeholder
      </div>
    </div>
  )
}
