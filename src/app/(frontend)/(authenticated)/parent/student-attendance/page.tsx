import { Attendance } from '@/payload-types'
import { getStudentAttendance } from '../_actions/get-student-attendance'
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

const StudentAttendance = async () => {
  const result: Attendance[] | undefined = await getStudentAttendance()

  return (
    <div>
      <Table>
        <TableCaption>Attendance of your ward</TableCaption>
        <TableHeader className="bg-gray-500/20">
          <TableRow>
            <TableHead className="font-bold">Date</TableHead>
            <TableHead className="font-bold">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {result.map((each) => (
            <TableRow key={each.id}>
              <TableCell>{new Date(each.date).toLocaleDateString()}</TableCell>
              <TableCell className="flex items-center gap-2">
                {each.status === 'Late' && (
                  <>
                    <CircleDotDashedIcon className="text-gray-500" /> Late
                  </>
                )}
                {each.status === 'Present' && (
                  <>
                    <CircleCheckIcon className="text-green-400" /> Present
                  </>
                )}
                {each.status === 'Absent' && (
                  <>
                    <CircleAlertIcon className="text-red-500" /> Absent
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default StudentAttendance
