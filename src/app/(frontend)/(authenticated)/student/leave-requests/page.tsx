import getLeaveRequests, { getLeaveRequestsResponse } from '../_actions/get-leave-requests'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LeaveRequestsTable from '../_components/leave-requests-table'

const LeaveRequests = async () => {
  const result: getLeaveRequestsResponse = await getLeaveRequests()

  return (
    <div className="w-full">
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <LeaveRequestsTable data={result.all} />
        </TabsContent>
        <TabsContent value="approved">
          <LeaveRequestsTable data={result.approved} />
        </TabsContent>
        <TabsContent value="pending">
          <LeaveRequestsTable data={result.pending} />
        </TabsContent>
        <TabsContent value="rejected">
          <LeaveRequestsTable data={result.rejected} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default LeaveRequests
