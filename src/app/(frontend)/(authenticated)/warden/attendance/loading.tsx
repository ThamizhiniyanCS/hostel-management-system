import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'

const LoadingComponent = async () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex items-center gap-2">
        <Skeleton className="w-[16.25rem] h-9 rounded-md" />
        <Skeleton className="w-[16.25rem] h-9 rounded-md" />
      </div>

      <Table>
        <TableCaption>
          <Skeleton className="w-[30rem] h-4 rounded-full" />
        </TableCaption>
        <TableHeader className="bg-gray-500/20">
          <TableRow>
            <TableHead className="font-bold">Register Number</TableHead>
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold">Program</TableHead>
            <TableHead className="font-bold">Status</TableHead>
            <TableHead className="font-bold">Student Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(5)].map((_, index) => (
            <TableRow key={index} className="min-h-[3.3125rem]">
              <TableCell>
                <Skeleton className="w-[90%] h-4 rounded-full" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-[90%] h-4 rounded-full" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-[90%] h-4 rounded-full" />
              </TableCell>
              <TableCell>
                <Skeleton className="w-32 h-8 rounded-full" />
              </TableCell>
              <TableCell className="">
                <Skeleton className="size-9 rounded-md" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default LoadingComponent
