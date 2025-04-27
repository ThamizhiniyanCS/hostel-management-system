import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getUser } from '../../_actions/getUser'
import { Hostel, Media, Warden } from '@/payload-types'
import type { TypeUser } from '../../_actions/getUser'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const WardenProfile = async () => {
  const user: TypeUser = await getUser()

  const warden = user?.collection === 'wardens' ? (user as Warden) : undefined

  const wardenPhoto = typeof warden?.photo === 'object' ? (warden.photo as Media) : undefined

  const hostel = warden?.hostel ? (warden?.hostel as Hostel) : undefined

  return (
    <div className="w-full flex flex-col items-center gap-5 pb-5">
      <Card className="w-full max-w-[60rem]">
        <CardHeader>
          <CardTitle>Warden Details</CardTitle>
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
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 min-w-60">
                <p className="text-sm">Name</p>
                <p className="text-normal font-bold">{warden?.name}</p>
              </div>
              <div className="flex flex-col gap-2 min-w-40">
                <p className="text-sm">Email</p>
                <p className="text-normal font-bold">{warden?.email}</p>
              </div>
              <div className="flex flex-col gap-2 min-w-40">
                <p className="text-sm">Mobile Number</p>
                <p className="text-normal font-bold">{warden?.mobile_number}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm">Hostel Name</p>
              <p className="text-normal font-bold">{hostel?.name}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default WardenProfile
