import { Suspense } from "react";
import { NavMain } from "@/components/dashboard/menus/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarRail,
} from "@/components/ui/sidebar-modificada";
import NavUserPai from "./menus/nav-user-pai";
import BotaoHeader from "./menus/botao-header";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <BotaoHeader />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <Suspense fallback={NavegadorSkeleton(4)}>
          <NavMain />
        </Suspense>
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <Suspense fallback={NavegadorSkeleton(1)}>
          <NavUserPai />
        </Suspense>
      </SidebarFooter>
    </Sidebar>
  );
}

function NavegadorSkeleton(length: number) {
  return (
    <SidebarMenu>
      {Array.from({ length }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton showIcon />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
