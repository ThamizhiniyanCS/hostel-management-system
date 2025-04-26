import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import LeaveRequestForm from '../_components/leave-request-form'

const LeaveRequests = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="cursor-pointer">
            Create Leave Request <PlusIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="w-full flex flex-col items-center">
          <div className="w-full max-w-[60rem]">
            <DrawerHeader>
              <DrawerTitle>Create Leave Request</DrawerTitle>
              <DrawerDescription>
                Fill the following details to create a leave request for your ward.
              </DrawerDescription>
            </DrawerHeader>
            <LeaveRequestForm />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default LeaveRequests
