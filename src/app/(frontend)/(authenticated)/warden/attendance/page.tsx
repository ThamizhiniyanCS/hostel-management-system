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

const AttendancePage = async () => {
  let date = new Date(new Date().setHours(0, 0, 0, 0))

  const students: Student[] = await getStudents()

  let unmarked: TypeAttendance[] = []
  let present: TypeAttendance[] = []
  let late: TypeAttendance[] = []
  let absent: TypeAttendance[] = []

  for (const student of students) {
    const attendance = await getAttendancesByDateAndStudent(date, student.id)

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
          <AttendanceDatePickerWithPresets defaultDate={date} />

          <TabsList>
            <TabsTrigger value="unmarked">Unmarked</TabsTrigger>
            <TabsTrigger value="present">Present</TabsTrigger>
            <TabsTrigger value="late">Late</TabsTrigger>
            <TabsTrigger value="absent">Absent</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="unmarked">
          <AttendanceTable data={unmarked} date={date} />
        </TabsContent>
        <TabsContent value="present">
          <AttendanceTable data={present} date={date} />
        </TabsContent>
        <TabsContent value="late">
          <AttendanceTable data={late} date={date} />
        </TabsContent>
        <TabsContent value="absent">
          <AttendanceTable data={absent} date={date} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AttendancePage
