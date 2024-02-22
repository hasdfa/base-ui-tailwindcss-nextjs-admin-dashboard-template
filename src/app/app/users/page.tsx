import { redirect } from 'next/navigation'

export default function UserRootPage() {
  return redirect('/app/users/me')
}
