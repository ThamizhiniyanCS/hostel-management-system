import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function HomePage() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-5xl font-extrabold">Welcome to Hostel Management System</h1>
      <Link href="/login">
        <Button className="cursor-pointer">Login</Button>
      </Link>
    </main>
  )
}
