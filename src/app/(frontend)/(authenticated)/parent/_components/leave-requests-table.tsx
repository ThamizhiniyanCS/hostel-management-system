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
import LeaveRequestDetailsDrawer from './leave-request-details-drawer'

const LeaveRequestsTable = ({ data }: { data: LeaveRequest[] }) => {
  return (
    <Table>
      <TableCaption>
        {data.length > 0 ? 'A list of your recent leave requests.' : 'No leave requests'}
      </TableCaption>
      <TableHeader className="bg-gray-500/20">
        <TableRow>
          <TableHead className="font-bold w-[7rem]">Created On</TableHead>
          <TableHead className="font-bold w-[7rem]">Number of Days</TableHead>
          <TableHead className="font-bold w-[6rem]">Date of Leave</TableHead>
          <TableHead className="font-bold w-[6rem]">From Date</TableHead>
          <TableHead className="font-bold w-[6rem]">To Date</TableHead>
          <TableHead className="font-bold">Subject</TableHead>
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
              <TableCell className="text-ellipsis">{request.subject}</TableCell>
              <TableCell>
                <p className="flex gap-2 items-center">
                  {request.status === 'Pending' && (
                    <CircleDotDashedIcon className="text-gray-500" />
                  )}
                  {request.status === 'Approved' && <CircleCheckIcon className="text-green-400" />}
                  {request.status === 'Rejected' && <CircleAlertIcon className="text-red-500" />}
                  {request.status}
                </p>
              </TableCell>
              <TableCell className="">
                <LeaveRequestDetailsDrawer data={request} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}

export default LeaveRequestsTable
