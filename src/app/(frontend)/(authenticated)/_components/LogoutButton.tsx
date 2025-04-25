'use client'

import { Button } from '@/components/ui/button'
import { LogOutIcon } from 'lucide-react'
import { useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { logout, LogoutResponse } from '../_actions/logout'

const LogoutButton = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogout() {
    setLoading(true)

    const result: LogoutResponse = await logout()

    if (result.success) {
      toast.success('Logged Out Succesfully')
      router.push('/')
    } else {
      toast.error(result.error || 'An error occurred')
    }

    setLoading(false)
  }

  return (
    <Button
      disabled={loading}
      variant="outline"
      className="cursor-pointer rounded-full h-12"
      onClick={handleLogout}
    >
      {loading ? <LoaderCircle className="animate-spin" /> : <LogOutIcon className="size-6" />}
      Logout
    </Button>
  )
}

export default LogoutButton
