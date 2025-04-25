import { getUser } from '../../_actions/getUser'

const StudentDashboard = async () => {
  const user = await getUser()

  return (
    <div>
      <h1 className="text-3xl">Welcome StudentDashboard</h1>
    </div>
  )
}

export default StudentDashboard
