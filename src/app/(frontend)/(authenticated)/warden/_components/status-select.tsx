'use client'

import { toast } from 'sonner'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  CircleCheckIcon,
  CircleDotDashedIcon,
  CircleAlertIcon,
  LoaderCircleIcon,
} from 'lucide-react'
import { useState } from 'react'
import { TypeStatus } from '../_actions/update-leave-request'
import updateLeaveRequestAction, {
  updateLeaveRequestResponse,
} from '../_actions/update-leave-request'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

const StatusSelect = ({ status, id }: { status: TypeStatus; id: string }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [currentStatus, setCurrentStatus] = useState(status)
  const router = useRouter()

  async function handleValueChange(value: TypeStatus) {
    setIsLoading(true)

    try {
      const result: updateLeaveRequestResponse = await updateLeaveRequestAction(value, id)

      if (result.success) {
        setIsLoading(false)
        setCurrentStatus(value)
        toast.success('Status Updated Successfully')
        router.push('/warden/leave-requests')
      } else {
        toast.error(result.error || 'Failed to update status')
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      toast.error('Unable to update status')
    }
  }

  return (
    <Select value={currentStatus} onValueChange={handleValueChange} disabled={isLoading}>
      <SelectTrigger
        className={cn('w-36 rounded-full', isLoading && ' flex justify-center items-center')}
      >
        {isLoading ? <LoaderCircleIcon className="animate-spin" /> : <SelectValue />}
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Pending">
          <CircleDotDashedIcon className="text-gray-500" /> Pending
        </SelectItem>
        <SelectItem value="Approved">
          <CircleCheckIcon className="text-green-400" /> Approved
        </SelectItem>
        <SelectItem value="Rejected">
          <CircleAlertIcon className="text-red-500" /> Rejected
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

export default StatusSelect
