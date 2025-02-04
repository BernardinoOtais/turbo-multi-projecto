import { ChevronRight } from "lucide-react";
import { redirect } from "next/navigation";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar-modificada";
import { getSession } from "@/lib/actions/auth/sessions";

import { Menu, MenusExistentes, MenusTodos } from "./menus-e-seus-tipos";

export async function NavMain() {
  const utilizadorActual = await getSession();

  if (!utilizadorActual) return redirect("/");

  const menusMapeados = utilizadorActual.papeis
    .map(papel => MenusExistentes[papel as keyof MenusTodos])
    .filter((menu): menu is Menu => !!menu);

  if (menusMapeados.length === 0) redirect("/");

  //await espera(3);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menus</SidebarGroupLabel>
      <SidebarMenu>
        {menusMapeados.map(item => (
          <Collapsible
            key={item.nome}
            asChild
            defaultOpen={item.isActive || item.isActive}
          >
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={item.nome}>
                <a href={item.path}>
                  {item.icon && <item.icon />}
                  <span>{item.nome}</span>
                </a>
              </SidebarMenuButton>
              {item.subMenuItems?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden">
                    <SidebarMenuSub>
                      {item.subMenuItems?.map(subItem => (
                        <SidebarMenuSubItem key={subItem.nome}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.path}>
                              <span>{subItem.nome}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
