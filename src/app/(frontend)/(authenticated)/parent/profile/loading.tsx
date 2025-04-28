import ParentCardSkeleton from '@/components/skeletons/parent-card-skeleton'
import StudentCardSkeleton from '@/components/skeletons/student-card-skeleton'

const LoadingComponent = async () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 pb-5">
      <ParentCardSkeleton />
      <StudentCardSkeleton />
    </div>
  )
}

export default LoadingComponent
