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
      <div className="w-full flex items-center justify-between">
        <Skeleton className="w-[16.25rem] h-9 rounded-md" />
        <Skeleton className="w-[11.26rem] h-9 rounded-md" />
      </div>

      <Table>
        <TableCaption>
          <Skeleton className="w-[30rem] h-4 rounded-full" />
        </TableCaption>
        <TableHeader className="bg-gray-500/20">
          <TableRow>
            <TableHead className="font-bold w-[7rem]">Created On</TableHead>
            <TableHead className="font-bold w-[7rem]">Number of Days</TableHead>
            <TableHead className="font-bold w-[6rem]">Date of Leave</TableHead>
            <TableHead className="font-bold w-[6rem]">From Date</TableHead>
            <TableHead className="font-bold w-[6rem]">To Date</TableHead>
            <TableHead className="font-bold w-[50rem]">Subject</TableHead>
            <TableHead className="font-bold w-[10rem]">Status</TableHead>
            <TableHead className="font-bold">Details</TableHead>
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
