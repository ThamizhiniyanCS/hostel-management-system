import { getUser, TypeUser } from '../../_actions/getUser'
import { Student } from '@/payload-types'

const StudentDashboard = async () => {
  const user: TypeUser = await getUser()

  const student = user?.collection === 'students' ? (user as Student) : undefined

  // const photo = typeof student?.photo === 'object' ? (student.photo as Media) : undefined

  return (
    <div>
      <h1 className="text-3xl">Welcome {student?.name}</h1>
    </div>
  )
}

export default StudentDashboard
