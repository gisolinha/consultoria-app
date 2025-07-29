"use client"

import { Building2, FileText, Bell, CheckSquare, BarChart3, Home, LogOut } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const menuItems = [
  { id: "overview", title: "Visão Geral", icon: Home },
  { id: "documents", title: "Documentos", icon: FileText },
  { id: "notices", title: "Avisos", icon: Bell },
  { id: "tasks", title: "Tarefas", icon: CheckSquare },
  { id: "reports", title: "Relatórios", icon: BarChart3 },
]

interface AppSidebarProps {
  company: {
    name: string
    color: string
    description: string
  }
  activeSection: string
  setActiveSection: (section: string) => void
}

export function AppSidebar({ company, activeSection, setActiveSection }: AppSidebarProps) {
  return (
    <Sidebar className="border-r border-yellow-400/20 bg-black">
      <SidebarHeader className="p-6 border-b border-yellow-400/20">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 bg-yellow-400 rounded-xl flex items-center justify-center">
            <Building2 className="h-6 w-6 text-black" />
          </div>
          <div>
            <h2 className="font-bold text-yellow-400 text-lg">{company.name}</h2>
            <p className="text-sm text-gray-400">{company.description}</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-black">
        <SidebarGroup className="px-4 py-6">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveSection(item.id)}
                    isActive={activeSection === item.id}
                    className={`w-full justify-start px-4 py-3 rounded-lg transition-all ${
                      activeSection === item.id
                        ? "bg-yellow-400 text-black font-bold hover:bg-yellow-500"
                        : "text-yellow-400 hover:text-black hover:bg-yellow-400/90 font-medium"
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-yellow-400/20 bg-black">
        <Button
          variant="outline"
          className="w-full bg-transparent border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all font-medium"
          onClick={() => (window.location.href = "/")}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sair
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
