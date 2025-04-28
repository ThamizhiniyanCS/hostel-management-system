import ParentCardSkeleton from '@/components/skeletons/parent-card-skeleton'
import StudentCardSkeleton from '@/components/skeletons/student-card-skeleton'
import WardenCardSkeleton from '@/components/skeletons/warden-card-skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const LoadingComponent = async () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 pb-5">
      <StudentCardSkeleton />
      <Card className="w-full max-w-[60rem]">
        <CardHeader>
          <CardTitle>Personal Details</CardTitle>
        </CardHeader>
        <CardContent className="w-full flex flex-col gap-6">
          <div className="flex gap-60">
            <div className="flex flex-col gap-2">
              <p className="text-sm">Date of Birth</p>
              <p className="text-normal font-bold tracking-widest">
                <Skeleton className="w-32 h-4 rounded-full" />
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Gender</p>
              <p className="text-normal font-bold">
                <Skeleton className="w-32 h-4 rounded-full" />
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Blood Group</p>
              <p className="text-normal font-bold">
                <Skeleton className="w-32 h-4 rounded-full" />
              </p>
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
            <p className="text-normal font-bold">
              <Skeleton className="w-32 h-4 rounded-full" />
            </p>
          </div>

          <div className="flex gap-60">
            <div className="flex flex-col gap-2">
              <p className="text-sm">Pincode</p>
              <p className="text-normal font-bold">
                <Skeleton className="w-32 h-4 rounded-full" />
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Mobile Number</p>
              <p className="text-normal font-bold">
                <Skeleton className="w-32 h-4 rounded-full" />
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <WardenCardSkeleton />
      <ParentCardSkeleton />
    </div>
  )
}

export default LoadingComponent
