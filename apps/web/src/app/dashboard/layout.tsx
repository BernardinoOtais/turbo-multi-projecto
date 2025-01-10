import { AppSidebar } from "@/components/dashboard/app-sidebar";
import Header from "@/components/dashboard/menus/header";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar-modificada";
import { cookies } from "next/headers";

export default async function Page({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = cookies();
  const defaultOpen =
    (await cookieStore).get("sidebar:state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen} title="sidebar-provider">
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="flex grow flex-col gap-2 p-2 pt-0">
          <div className="flex grow flex-col rounded-xl bg-muted/50">
            {children}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

//BREADCRUMBS https://www.youtube.com/watch?v=bvHi0jr9oGk&ab_channel=CodeWithOsvaldas

/*
//Original

        <main className="flex flex-1 flex-col gap-2 p-2 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            {children}
          </div>
        </main>
*/
