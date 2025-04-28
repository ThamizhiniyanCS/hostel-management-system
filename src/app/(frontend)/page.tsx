import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Nav from '@/components/nav'

export default async function HomePage() {
  return (
    <>
      <Nav />
      <main className="w-full flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl font-extrabold">Welcome to Hostel Management System</h1>
        <Link href="/login">
          <Button className="cursor-pointer">Login</Button>
        </Link>
      </main>
    </>
  )
}
