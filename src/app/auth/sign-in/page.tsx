import Card from '@/components/uikit/Card'
import Typography from '@/components/uikit/Typography'
import Button from '@/components/uikit/Button'

export default function SignInPage() {
  return (
    <Card className="gap-2 w-full md:w-[400px] px-4 py-2">
      <Typography variant="subtitle1">Welcome back 👋</Typography>
      <div className="w-full border-b border-gray-100 -mt-1" />

      <div className="py-6" />

      <Button variant="contained" href="/app/dashboard">
        Sign In
      </Button>
    </Card>
  )
}
