import { Attendance, Student, Parent } from '@/payload-types'
import { getUser, TypeUser } from '../../_actions/getUser'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function getStudentAttendance(): Promise<Attendance[]> {
  const payload = await getPayload({ config })
  const user: TypeUser = await getUser()
  const parent = user?.collection === 'parents' ? (user as Parent) : undefined
  const student = parent?.student ? (parent?.student as Student) : undefined

  const attendance = await payload.find({
    collection: 'attendance',
    pagination: false,
    overrideAccess: false,
    user: user,
    limit: 10000,
    where: {
      'student.id': {
        equals: student?.id,
      },
    },
  })

  return attendance.docs
}
