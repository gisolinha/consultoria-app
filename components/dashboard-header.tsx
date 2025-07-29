"use client"

import { Bell, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"

interface DashboardHeaderProps {
  company: {
    name: string
    color: string
    description: string
  }
}

export function DashboardHeader({ company }: DashboardHeaderProps) {
  return (
    <header className="border-b border-yellow-400/20 bg-black/95 backdrop-blur-sm">
      <div className="flex h-16 items-center px-6 gap-4">
        <SidebarTrigger className="text-yellow-400 hover:bg-yellow-400/10" />

        <div className="flex-1 flex items-center gap-4">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar..."
              className="pl-10 bg-gray-900 border-yellow-400/20 text-yellow-400 placeholder:text-gray-500 focus:border-yellow-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-yellow-400 hover:bg-yellow-400/10">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-yellow-400 hover:bg-yellow-400/10">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
