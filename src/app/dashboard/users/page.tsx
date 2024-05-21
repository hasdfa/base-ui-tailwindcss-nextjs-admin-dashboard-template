import { redirect } from 'next/navigation'

export default function UserRootPage() {
  return redirect('/dashboard/users/me')
}
