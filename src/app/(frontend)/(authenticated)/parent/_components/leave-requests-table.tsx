import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import {
  ReceiptTextIcon,
  CircleCheckIcon,
  CircleDotDashedIcon,
  CircleAlertIcon,
} from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { LeaveRequest } from '@/payload-types'
import LeaveRequestDetailsDrawer from './leave-request-details-drawer'

const LeaveRequestsTable = ({ data }: { data: LeaveRequest[] }) => {
  return (
    <Table>
      <TableCaption>
        {data.length > 0 ? 'A list of your recent leave requests.' : 'No approved leave requests'}
      </TableCaption>
      <TableHeader className="bg-gray-500/20">
        <TableRow>
          <TableHead className="font-bold">Number of Days</TableHead>
          <TableHead className="font-bold text-ellipsis">Subject</TableHead>
          <TableHead className="font-bold">Status</TableHead>
          <TableHead className="font-bold">Details</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length > 0 &&
          data.map((request) => (
            <TableRow key={request.id}>
              <TableCell className="">{request.number_of_days}</TableCell>
              <TableCell>{request.subject}</TableCell>
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
