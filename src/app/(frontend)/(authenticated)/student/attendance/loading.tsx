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
    <Table>
      <TableCaption>
        <Skeleton className="w-[30rem] h-4 rounded-full" />
      </TableCaption>
      <TableHeader className="bg-gray-500/20">
        <TableRow>
          <TableHead className="font-bold">Date</TableHead>
          <TableHead className="font-bold">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[...Array(5)].map((_, index) => (
          <TableRow key={index} className="min-h-[3.3125rem]">
            <TableCell>
              <Skeleton className="w-20 h-4 rounded-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-32 h-8 rounded-full" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default LoadingComponent
