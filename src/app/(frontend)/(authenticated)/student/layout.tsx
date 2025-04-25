import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/app/(frontend)/(authenticated)/student/_components/app-sidebar'
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <main className="w-full h-screen px-5">
        <div className="flex gap-3 items-center py-3">
          <SidebarTrigger className="cursor-pointer" />
          <HeaderBreadcrumbs />
        </div>
        {children}
      </main>
    </SidebarProvider>
  )
}
