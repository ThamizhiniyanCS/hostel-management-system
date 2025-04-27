import { Student } from '@/payload-types'
import { getUser } from '../../_actions/getUser'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function getStudents(): Promise<Student[]> {
  const payload = await getPayload({ config })
  const user = await getUser()

  const students = await payload.find({
    collection: 'students',
    pagination: false,
    overrideAccess: false,
    user: user,
    limit: 10000,
    where: {
      'hostel_details.warden.id': {
        equals: user?.id,
      },
    },
  })

  return students.docs
}
