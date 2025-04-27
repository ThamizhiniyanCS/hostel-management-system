import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { ReceiptTextIcon } from 'lucide-react'
import { Student, Parent, LeaveRequest, Hostel, Warden } from '@/payload-types'
import { CircleCheckIcon, CircleDotDashedIcon, CircleAlertIcon } from 'lucide-react'

const LeaveRequestDetailsDrawer = ({ data }: { data: LeaveRequest }) => {
  const student = data.student ? (data.student as Student) : undefined
  const hostel = student?.hostel_details.hostel
    ? (student?.hostel_details.hostel as Hostel)
    : undefined
  const warden = student?.hostel_details.warden
    ? (student?.hostel_details.warden as Warden)
    : undefined
  const parent = data.parent ? (data.parent as Parent) : undefined

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="cursor-pointer">
          <ReceiptTextIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full flex flex-col items-center">
        <div className="w-full max-w-[60rem]">
          <DrawerHeader className="flex flex-row justify-between">
            <DrawerTitle>Leave Request Details</DrawerTitle>
            <div className="flex items-center gap-2">
              {data.status === 'Pending' && (
                <>
                  <CircleDotDashedIcon className="text-gray-500" /> Pending
                </>
              )}
              {data.status === 'Approved' && (
                <>
                  <CircleCheckIcon className="text-green-400" /> Approved
                </>
              )}
              {data.status === 'Rejected' && (
                <>
                  <CircleAlertIcon className="text-red-500" /> Rejected
                </>
              )}
            </div>
          </DrawerHeader>

          <div className="grid grid-cols-3 gap-6 p-4">
            <div className="flex flex-col gap-2 min-w-60">
              <p className="text-sm">Student Name</p>
              <p className="text-normal font-bold">{student?.name}</p>
            </div>
            <div className="flex flex-col gap-2 min-w-60">
              <p className="text-sm">Student Registration Number</p>
              <p className="text-normal font-bold">{student?.general_details.register_number}</p>
            </div>
            <div className="flex flex-col gap-2 min-w-60">
              <p className="text-sm">Parent Name</p>
              <p className="text-normal font-bold">{parent?.name}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 p-4">
            <div className="flex flex-col gap-2 min-w-60">
              <p className="text-sm">Number of Days</p>
              <p className="text-normal font-bold">{data.number_of_days}</p>
            </div>
            {data.number_of_days === 1 && (
              <div className="flex flex-col gap-2 min-w-40">
                <p className="text-sm">Date of Leave</p>
                <p className="text-normal font-bold">
                  {data.date && new Date(data.date).toLocaleDateString()}
                </p>
              </div>
            )}

            {data.number_of_days !== 1 && (
              <>
                <div className="flex flex-col gap-2 min-w-40">
                  <p className="text-sm">From Date</p>
                  <p className="text-normal font-bold">
                    {data.from_date && new Date(data.from_date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-w-40">
                  <p className="text-sm">To Date</p>
                  <p className="text-normal font-bold">
                    {data.to_date && new Date(data.to_date).toLocaleDateString()}
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="grid grid-cols-3 gap-6 p-4">
            <div className="flex flex-col gap-2 min-w-60">
              <p className="text-sm">Hostel Name</p>
              <p className="text-normal font-bold">{hostel?.name}</p>
            </div>
            <div className="flex flex-col gap-2 min-w-60">
              <p className="text-sm">Room Number</p>
              <p className="text-normal font-bold">{student?.hostel_details.room_number}</p>
            </div>
            <div className="flex flex-col gap-2 min-w-60">
              <p className="text-sm">Warden Name</p>
              <p className="text-normal font-bold">{warden?.name}</p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 min-w-60 p-4">
            <p className="text-sm">Subject</p>
            <p className="text-normal font-bold">{data.subject}</p>
          </div>

          <div className="w-full flex flex-col gap-2 min-w-60 p-4">
            <p className="text-sm">Message</p>
            <p className="text-normal font-bold">{data.message}</p>
          </div>

          <div className="grid grid-cols-4 gap-6 p-4">
            <div className="flex flex-col gap-2 min-w-60">
              <p className="text-sm">Created Date</p>
              <p className="text-normal font-bold">
                {data.createdAt ? new Date(data.createdAt).toLocaleDateString() : '-'}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-w-60">
              <p className="text-sm">Created Time</p>
              <p className="text-normal font-bold">
                {data.createdAt ? new Date(data.createdAt).toLocaleTimeString() : '-'}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-w-60">
              <p className="text-sm">Updated Date</p>
              <p className="text-normal font-bold">
                {data.createdAt ? new Date(data.updatedAt).toLocaleDateString() : '-'}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-w-60">
              <p className="text-sm">Updated Time</p>
              <p className="text-normal font-bold">
                {data.createdAt ? new Date(data.updatedAt).toLocaleTimeString() : '-'}
              </p>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default LeaveRequestDetailsDrawer
