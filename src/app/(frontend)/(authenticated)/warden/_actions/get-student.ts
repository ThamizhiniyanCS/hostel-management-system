import { Student } from '@/payload-types'
import { getUser } from '../../_actions/getUser'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function getStudent(id: string): Promise<Student> {
  const payload = await getPayload({ config })
  const user = await getUser()

  const student = await payload.findByID({
    collection: 'students',
    overrideAccess: false,
    user: user,
    id,
  })

  return student
}
