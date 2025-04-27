import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CircleCheckIcon, CircleDotDashedIcon, CircleAlertIcon } from 'lucide-react'
import { LeaveRequest } from '@/payload-types'
import LeaveRequestDrawer from './leave-request-drawer'

const LeaveRequestsTable = ({ data }: { data: LeaveRequest[] }) => {
  return (
    <Table>
      <TableCaption>
        {data.length > 0 ? 'A list of your recent leave requests.' : 'No approved leave requests'}
      </TableCaption>
      <TableHeader className="bg-gray-500/20">
        <TableRow>
          <TableHead className="font-bold w-[7rem]">Created On</TableHead>
          <TableHead className="font-bold w-[7rem]">Number of Days</TableHead>
          <TableHead className="font-bold w-[6rem]">Date of Leave</TableHead>
          <TableHead className="font-bold w-[6rem]">From Date</TableHead>
          <TableHead className="font-bold w-[6rem]">To Date</TableHead>
          <TableHead className="font-bold text-ellipsis">Subject</TableHead>
          <TableHead className="font-bold w-[10rem]">Status</TableHead>
          <TableHead className="font-bold">Details</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length > 0 &&
          data.map((request) => (
            <TableRow key={request.id}>
              <TableCell>
                {request.createdAt ? new Date(request.createdAt).toLocaleDateString() : '-'}
              </TableCell>
              <TableCell className="">{request.number_of_days}</TableCell>
              <TableCell>
                {request.date ? new Date(request.date).toLocaleDateString() : '-'}
              </TableCell>
              <TableCell>
                {request.from_date ? new Date(request.from_date).toLocaleDateString() : '-'}
              </TableCell>
              <TableCell>
                {request.to_date ? new Date(request.to_date).toLocaleDateString() : '-'}
              </TableCell>
              <TableCell>{request.subject}</TableCell>
              <TableCell className="flex items-center gap-2">
                {request.status === 'Pending' && (
                  <>
                    <CircleDotDashedIcon className="text-gray-500" /> Pending
                  </>
                )}
                {request.status === 'Approved' && (
                  <>
                    <CircleCheckIcon className="text-green-400" /> Approved
                  </>
                )}
                {request.status === 'Rejected' && (
                  <>
                    <CircleAlertIcon className="text-red-500" /> Rejected
                  </>
                )}
              </TableCell>
              <TableCell className="">
                <LeaveRequestDrawer data={request} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}

export default LeaveRequestsTable
