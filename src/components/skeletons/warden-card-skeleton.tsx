import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const WardenCardSkeleton = ({ title }: { title?: string }) => {
  return (
    <Card className="w-full max-w-[60rem]">
      <CardHeader>
        <CardTitle>{title ? title : 'Warden Details'}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-10">
        <Skeleton className="size-60 rounded-full flex-none" />

        <div className="w-full grid gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 min-w-60">
              <p className="text-sm">Name</p>
              <Skeleton className="w-32 h-4 rounded-full" />
            </div>
            <div className="flex flex-col gap-2 min-w-40">
              <p className="text-sm">Relationship</p>
              <Skeleton className="w-32 h-4 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 min-w-60">
              <p className="text-sm">Email</p>
              <Skeleton className="w-32 h-4 rounded-full" />
            </div>
            <div className="flex flex-col gap-2 min-w-40">
              <p className="text-sm">Mobile Number</p>
              <Skeleton className="w-32 h-4 rounded-full" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default WardenCardSkeleton
