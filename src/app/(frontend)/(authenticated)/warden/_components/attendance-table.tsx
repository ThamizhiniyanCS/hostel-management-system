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
import { LinkIcon } from 'lucide-react'
import Link from 'next/link'
import { TypeAttendance } from '../attendance/page'
import AttendanceStatusSelect from './attendance-status-select'

const AttendanceTable = ({ data, date }: { data: TypeAttendance[]; date: Date }) => {
  return (
    <Table>
      <TableCaption>{data.length > 0 ? 'A list of attendance entries.' : 'No entry'}</TableCaption>
      <TableHeader className="bg-gray-500/20">
        <TableRow>
          <TableHead className="font-bold">Register Number</TableHead>
          <TableHead className="font-bold">Name</TableHead>
          <TableHead className="font-bold">Program</TableHead>
          <TableHead className="font-bold">Status</TableHead>
          <TableHead className="font-bold">Student Details</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length > 0 &&
          data.map(({ student, attendance }) => (
            <TableRow key={student.id}>
              <TableCell>{student.register_number}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.program}</TableCell>
              <TableCell>
                <AttendanceStatusSelect
                  date={date}
                  student_id={student.id}
                  status={attendance.status}
                  action={attendance.status ? 'update' : 'create'}
                  id={attendance.id}
                />
              </TableCell>
              <TableCell>
                <Link href={`/warden/students/details/${student.id}`}>
                  <Button size="icon" variant="outline" className="cursor-pointer">
                    <LinkIcon />
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}

export default AttendanceTable
