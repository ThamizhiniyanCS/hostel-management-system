import { Student } from '@/payload-types'
import getStudents from '../_actions/get-students'
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

const StudentsList = async () => {
  const students: Student[] = await getStudents()

  return (
    <div className="w-full">
      <Table>
        <TableCaption>
          {students.length > 0 ? 'A list of students in your hostel.' : 'No students'}
        </TableCaption>
        <TableHeader className="bg-gray-500/20">
          <TableRow>
            <TableHead className="font-bold">Register Number</TableHead>
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold">Program</TableHead>
            <TableHead className="font-bold">Email</TableHead>
            <TableHead className="font-bold">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.length > 0 &&
            students.map((student) => (
              <TableRow key={student.id} className="">
                <TableCell>{student.general_details.register_number}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.general_details.program}</TableCell>
                <TableCell>{student.email}</TableCell>
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
    </div>
  )
}

export default StudentsList
