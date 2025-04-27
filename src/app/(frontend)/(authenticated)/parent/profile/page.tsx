import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getUser } from '../../_actions/getUser'
import { Media, Parent, Student } from '@/payload-types'
import type { TypeUser } from '../../_actions/getUser'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ParentProfile = async () => {
  const user: TypeUser = await getUser()

  const parent = user?.collection === 'parents' ? (user as Parent) : undefined

  const parentPhoto = typeof parent?.photo === 'object' ? (parent.photo as Media) : undefined

  const student = parent?.student ? (parent?.student as Student) : undefined

  const studentPhoto = typeof student?.photo === 'object' ? (student.photo as Media) : undefined

  return (
    <div className="w-full flex flex-col items-center gap-5 pb-5">
      <Card className="w-full max-w-[60rem]">
        <CardHeader>
          <CardTitle>Parent Details</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-10">
          <Avatar className="size-60">
            <AvatarImage
              src={parentPhoto?.url ?? 'https://github.com/shadcn.png'}
              alt={parentPhoto?.alt ?? '@shadcn'}
            />
            <AvatarFallback>
              {parent?.name
                ? parent?.name
                    .split(' ')
                    .map((word) => word[0])
                    .join('')
                    .toUpperCase()
                : 'CN'}
            </AvatarFallback>
          </Avatar>

          <div className="w-full grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 min-w-60">
                <p className="text-sm">Name</p>
                <p className="text-normal font-bold">{parent?.name}</p>
              </div>
              <div className="flex flex-col gap-2 min-w-40">
                <p className="text-sm">Relationship</p>
                <p className="text-normal font-bold">{parent?.relationship}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 min-w-60">
                <p className="text-sm">Email</p>
                <p className="text-normal font-bold">{parent?.email}</p>
              </div>
              <div className="flex flex-col gap-2 min-w-40">
                <p className="text-sm">Mobile Number</p>
                <p className="text-normal font-bold">{parent?.mobile_number}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-[60rem]">
        <CardHeader>
          <CardTitle>Student Details</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-10">
          <Avatar className="size-60">
            <AvatarImage
              src={studentPhoto?.url ?? 'https://github.com/shadcn.png'}
              alt={studentPhoto?.alt ?? '@shadcn'}
            />
            <AvatarFallback>
              {student?.name
                ? student?.name
                    .split(' ')
                    .map((word) => word[0])
                    .join('')
                    .toUpperCase()
                : 'CN'}
            </AvatarFallback>
          </Avatar>

          <div className="w-full grid gap-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 min-w-60">
                <p className="text-sm">Name</p>
                <p className="text-normal font-bold">{student?.name}</p>
              </div>
              <div className="flex flex-col gap-2 min-w-40">
                <p className="text-sm">Email</p>
                <p className="text-normal font-bold">{student?.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 min-w-60">
                <p className="text-sm">Register Number</p>
                <p className="text-normal font-bold">{student?.general_details.register_number}</p>
              </div>
              <div className="flex flex-col gap-2 min-w-40">
                <p className="text-sm">Batch</p>
                <p className="text-normal font-bold">{student?.general_details.batch}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm">Semester</p>
                <p className="text-normal font-bold">{student?.general_details.semester}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm">Program</p>
              <p className="text-normal font-bold">{student?.general_details.program}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ParentProfile
