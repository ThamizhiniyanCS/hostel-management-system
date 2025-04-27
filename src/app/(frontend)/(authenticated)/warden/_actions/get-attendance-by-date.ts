import { Attendance } from '@/payload-types'
import { getUser } from '../../_actions/getUser'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function getAttendancesByDate(date: Date): Promise<Attendance[]> {
  const payload = await getPayload({ config })
  const user = await getUser()

  const attendance = await payload.find({
    collection: 'attendance',
    pagination: false,
    overrideAccess: false,
    user: user,
    limit: 10000,
    where: {
      date: {
        equals: date,
      },
    },
  })

  return attendance.docs
}

export async function getAttendancesByDateAndStudent(
  date: Date,
  student: string,
): Promise<Attendance> {
  const payload = await getPayload({ config })
  const user = await getUser()

  const attendance = await payload.find({
    collection: 'attendance',
    pagination: false,
    overrideAccess: false,
    user: user,
    limit: 10000,
    where: {
      date: {
        equals: date,
      },
      'student.id': {
        equals: student,
      },
    },
  })

  return attendance.docs[0]
}
