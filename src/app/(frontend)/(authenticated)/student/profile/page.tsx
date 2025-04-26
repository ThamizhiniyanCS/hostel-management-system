import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getUser } from '../../_actions/getUser'
import { Hostel, Media, Parent, Student, Warden } from '@/payload-types'
import type { TypeUser } from '../../_actions/getUser'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const StudentProfile = async () => {
  const user: TypeUser = await getUser()

  const student = user?.collection === 'students' ? (user as Student) : undefined

  const studentPhoto = typeof student?.photo === 'object' ? (student.photo as Media) : undefined

  const parent = student?.parent_details ? (student.parent_details as Parent) : undefined

  const parentPhoto = typeof parent?.photo === 'object' ? (parent.photo as Media) : undefined

  const hostel = student?.hostel_details.hostel
    ? (student.hostel_details.hostel as Hostel)
    : undefined

  const warden = student?.hostel_details.warden
    ? (student.hostel_details.warden as Warden)
    : undefined

  const wardenPhoto = typeof warden?.photo === 'object' ? (warden.photo as Media) : undefined

  return (
    <div className="w-full flex flex-col items-center gap-5 pb-5">
      <Card className="w-full max-w-[60rem]">
        <CardHeader>
          <CardTitle>General Details</CardTitle>
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

      <Card className="w-full max-w-[60rem]">
        <CardHeader>
          <CardTitle>Personal Details</CardTitle>
        </CardHeader>
        <CardContent className="w-full flex flex-col gap-6">
          <div className="flex gap-60">
            <div className="flex flex-col gap-2">
              <p className="text-sm">Date of Birth</p>
              <p className="text-normal font-bold tracking-widest">
                {student?.personal_details.dob &&
                  new Date(student?.personal_details.dob).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Gender</p>
              <p className="text-normal font-bold">{student?.personal_details.gender}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Blood Group</p>
              <p className="text-normal font-bold">{student?.personal_details.blood_group}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-[60rem]">
        <CardHeader>
          <CardTitle>Contact Details</CardTitle>
        </CardHeader>
        <CardContent className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm">Address</p>
            <p className="text-normal font-bold">{student?.contact_details.address}</p>
          </div>

          <div className="flex gap-60">
            <div className="flex flex-col gap-2">
              <p className="text-sm">Pincode</p>
              <p className="text-normal font-bold">{student?.contact_details.pincode}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Mobile Number</p>
              <p className="text-normal font-bold">{student?.contact_details.mobile_number}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-[60rem]">
        <CardHeader>
          <CardTitle>Hostel & Warden Details</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-10">
          <Avatar className="size-60">
            <AvatarImage
              src={wardenPhoto?.url ?? 'https://github.com/shadcn.png'}
              alt={wardenPhoto?.alt ?? '@shadcn'}
            />
            <AvatarFallback>
              {warden?.name
                ? warden?.name
                    .split(' ')
                    .map((word) => word[0])
                    .join('')
                    .toUpperCase()
                : 'CN'}
            </AvatarFallback>
          </Avatar>

          <div className="w-full grid gap-6">
            <div className="w-full grid gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 min-w-60">
                  <p className="text-sm">Hostel Name</p>
                  <p className="text-normal font-bold">{hostel?.name}</p>
                </div>
                <div className="flex flex-col gap-2 min-w-40">
                  <p className="text-sm">Warden Name</p>
                  <p className="text-normal font-bold">{warden?.name}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 min-w-60">
                  <p className="text-sm">Warden Email</p>
                  <p className="text-normal font-bold">{warden?.email}</p>
                </div>
                <div className="flex flex-col gap-2 min-w-40">
                  <p className="text-sm">Warden Mobile Number</p>
                  <p className="text-normal font-bold">{warden?.mobile_number}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardContent className="w-full grid gap-6"></CardContent>
      </Card>

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
                <p className="text-normal font-bold">{parent?.email}</p>
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
    </div>
  )
}

export default StudentProfile
