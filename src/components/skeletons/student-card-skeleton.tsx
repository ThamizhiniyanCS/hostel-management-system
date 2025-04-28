import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const StudentCardSkeleton = ({ title }: { title?: string }) => {
  return (
    <Card className="w-full max-w-[60rem]">
      <CardHeader>
        <CardTitle>{title ? title : 'Student Details'}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-10">
        <Skeleton className="size-60 rounded-full flex-none" />

        <div className="w-full grid gap-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-2 min-w-60">
              <p className="text-sm">Name</p>
              <Skeleton className="w-32 h-4 rounded-full" />
            </div>
            <div className="flex flex-col gap-2 min-w-40">
              <p className="text-sm">Email</p>
              <Skeleton className="w-32 h-4 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-2 min-w-60">
              <p className="text-sm">Register Number</p>
              <Skeleton className="w-32 h-4 rounded-full" />
            </div>
            <div className="flex flex-col gap-2 min-w-40">
              <p className="text-sm">Batch</p>
              <Skeleton className="w-12 h-4 rounded-full" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Semester</p>
              <Skeleton className="w-12 h-4 rounded-full" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm">Program</p>
            <Skeleton className="w-32 h-4 rounded-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default StudentCardSkeleton
