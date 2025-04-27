import { Attendance } from '@/payload-types'
import { getUser, TypeUser } from '../../_actions/getUser'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function getStudentAttendance(): Promise<Attendance[]> {
  const payload = await getPayload({ config })
  const user: TypeUser = await getUser()

  const attendance = await payload.find({
    collection: 'attendance',
    pagination: false,
    overrideAccess: false,
    user: user,
    limit: 10000,
    where: {
      'student.id': {
        equals: user?.id,
      },
    },
  })

  return attendance.docs
}
