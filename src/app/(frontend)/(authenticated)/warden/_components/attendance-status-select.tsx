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
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { AttendanceStatusType } from '../attendance/page'
import CreateAttendanceAction, { createAttendanceResponse } from '../_actions/create-attendance'
import UpdateAttendanceAction, { updateAttendanceResponse } from '../_actions/update-attendance'

const AttendanceStatusSelect = ({
  student_id,
  status,
  id,
  action,
  date,
}: {
  student_id: string
  status: AttendanceStatusType | undefined
  id: string
  action: 'create' | 'update'
  date: Date
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [currentStatus, setCurrentStatus] = useState(status)
  const router = useRouter()

  async function handleValueChange(value: AttendanceStatusType) {
    setIsLoading(true)

    try {
      if (action === 'create') {
        const result: createAttendanceResponse = await CreateAttendanceAction(
          value,
          student_id,
          date,
        )

        if (result.success) {
          setIsLoading(false)
          setCurrentStatus(value)
          toast.success('Attendance Status Updated Successfully')
          router.refresh()
        } else {
          toast.error(result.error || 'Failed to attendance update status')
          setIsLoading(false)
        }
      } else {
        const result: updateAttendanceResponse = await UpdateAttendanceAction(value, id)

        if (result.success) {
          setIsLoading(false)
          setCurrentStatus(value)
          toast.success('Attendance Status Updated Successfully')
          router.refresh()
        } else {
          setIsLoading(false)
          toast.error(result.error || 'Failed to attendance update status')
        }
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      toast.error('Unable to attendance update status')
    }
  }

  return (
    <Select value={currentStatus} onValueChange={handleValueChange} disabled={isLoading}>
      <SelectTrigger
        className={cn('w-36 rounded-full', isLoading && ' flex justify-center items-center')}
      >
        {isLoading ? (
          <LoaderCircleIcon className="animate-spin" />
        ) : (
          <SelectValue placeholder="Unmarked" />
        )}
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Late">
          <CircleDotDashedIcon className="text-gray-500" /> Late
        </SelectItem>
        <SelectItem value="Present">
          <CircleCheckIcon className="text-green-400" /> Present
        </SelectItem>
        <SelectItem value="Absent">
          <CircleAlertIcon className="text-red-500" /> Absent
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

export default AttendanceStatusSelect
