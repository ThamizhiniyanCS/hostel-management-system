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
import { getUser, TypeUser } from '../../_actions/getUser'
import { Media, Parent, Student } from '@/payload-types'

// Menu items.
const items = [
  {
    title: 'Dashboard',
    url: '/parent/dashboard',
    icon: LayoutDashboardIcon,
  },
  {
    title: 'Leave Requests',
    url: '/parent/leave-requests',
    icon: ListTodoIcon,
  },
  {
    title: 'Parent Profile',
    url: '/parent/profile',
    icon: FileUserIcon,
  },
]

export async function AppSidebar() {
  const user: TypeUser = await getUser()

  const parent = user?.collection === 'parents' ? (user as Parent) : undefined

  const photo = typeof parent?.photo === 'object' ? (parent.photo as Media) : undefined

  return (
    <Sidebar variant="sidebar">
      <SidebarHeader className="p-4">
        <p className="font-normal">Hostel Management System</p>
        <p className="font-bold text-lg">Parents Portal</p>
      </SidebarHeader>
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
            <AvatarImage
              src={photo?.url ?? 'https://github.com/shadcn.png'}
              alt={photo?.alt ?? '@shadcn'}
            />
            <AvatarFallback>
              {parent?.name
                ? parent?.name
                    .split(' ')
                    .map((word) => word[0])
                    .join('')
                    .toUpperCase()
                : 'CN'}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="">{parent?.name}</p>
            <p className="">{parent?.email}</p>
          </div>
        </div>
        <LogoutButton />
      </SidebarFooter>
    </Sidebar>
  )
}
