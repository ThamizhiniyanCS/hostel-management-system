import { Skeleton } from '@/components/ui/skeleton'
import { LoaderCircle } from 'lucide-react'

const LoadingComponent = () => {
  return (
    <Skeleton className="w-full min-h-screen flex justify-center items-center">
      <LoaderCircle className="animate-spin size-[10rem]" />
    </Skeleton>
  )
}

export default LoadingComponent
