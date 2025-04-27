import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AttendanceDatePickerWithPresets from '../_components/attendance-calendar'
import { Student } from '@/payload-types'
import { getAttendancesByDateAndStudent } from '../_actions/get-attendance-by-date'
import getStudents from '../_actions/get-students'
import AttendanceTable from '../_components/attendance-table'

export type AttendanceStatusType = 'Present' | 'Late' | 'Absent'

export interface TypeAttendance {
  student: { id: string; name: string; register_number: string; program: string }
  attendance: { id: string; status: AttendanceStatusType | undefined }
}

const AttendancePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const { date } = await searchParams

  const DATE = new Date(typeof date === 'string' ? date : Date.now())
  DATE.setHours(0, 0, 0, 0)

  const students: Student[] = await getStudents()

  const unmarked: TypeAttendance[] = []
  const present: TypeAttendance[] = []
  const late: TypeAttendance[] = []
  const absent: TypeAttendance[] = []

  for (const student of students) {
    const attendance = await getAttendancesByDateAndStudent(DATE, student.id)

    if (attendance) {
      switch (attendance.status) {
        case 'Present':
          present.push({
            student: {
              id: student.id,
              name: student.name,
              register_number: student.general_details.register_number,
              program: student.general_details.program,
            },
            attendance: {
              id: attendance.id,
              status: attendance.status,
            },
          })
          break
        case 'Absent':
          absent.push({
            student: {
              id: student.id,
              name: student.name,
              register_number: student.general_details.register_number,
              program: student.general_details.program,
            },
            attendance: {
              id: attendance.id,
              status: attendance.status,
            },
          })
          break
        case 'Late':
          late.push({
            student: {
              id: student.id,
              name: student.name,
              register_number: student.general_details.register_number,
              program: student.general_details.program,
            },
            attendance: {
              id: attendance.id,
              status: attendance.status,
            },
          })
          break
      }
    } else {
      unmarked.push({
        student: {
          id: student.id,
          name: student.name,
          register_number: student.general_details.register_number,
          program: student.general_details.program,
        },
        attendance: {
          id: '',
          status: undefined,
        },
      })
    }
  }

  return (
    <div className="w-full">
      <Tabs defaultValue="unmarked" className="w-full">
        <div className="w-full items-center flex gap-5">
          <AttendanceDatePickerWithPresets defaultDate={DATE} />

          <TabsList>
            <TabsTrigger value="unmarked">Unmarked</TabsTrigger>
            <TabsTrigger value="present">Present</TabsTrigger>
            <TabsTrigger value="late">Late</TabsTrigger>
            <TabsTrigger value="absent">Absent</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="unmarked">
          <AttendanceTable data={unmarked} date={DATE} />
        </TabsContent>
        <TabsContent value="present">
          <AttendanceTable data={present} date={DATE} />
        </TabsContent>
        <TabsContent value="late">
          <AttendanceTable data={late} date={DATE} />
        </TabsContent>
        <TabsContent value="absent">
          <AttendanceTable data={absent} date={DATE} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AttendancePage
