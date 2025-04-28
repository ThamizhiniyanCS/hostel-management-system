import WardenCardSkeleton from '@/components/skeletons/warden-card-skeleton'

const LoadingComponent = async () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 pb-5">
      <WardenCardSkeleton />
    </div>
  )
}

export default LoadingComponent
