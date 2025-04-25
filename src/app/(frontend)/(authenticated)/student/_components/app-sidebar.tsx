import { LayoutDashboardIcon, ListTodoIcon, FileUserIcon } from 'lucide-react'
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import LogoutButton from '../../_components/LogoutButton'

// Menu items.
const items = [
  {
    title: 'Dashboard',
    url: '/student/dashboard',
    icon: LayoutDashboardIcon,
  },
  {
    title: 'Leave Requests',
    url: '/student/leave-requests',
    icon: ListTodoIcon,
  },
  {
    title: 'Student Profile',
    url: '/student/profile',
    icon: FileUserIcon,
  },
]

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar">
      <SidebarHeader className="py-4">Hostel Management System</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-2 gap-4">
        <div className="flex items-center w-full gap-2">
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="">Student Name</p>
            <p className="">student@email.com</p>
          </div>
        </div>
        <LogoutButton />
      </SidebarFooter>
    </Sidebar>
  )
}
