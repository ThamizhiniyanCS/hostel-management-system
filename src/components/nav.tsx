import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4">
      <Link href="/" className="text-2xl font-extrabold">
        Hostel Management System
      </Link>
      <ModeToggle />
    </nav>
  )
}

export default Nav
