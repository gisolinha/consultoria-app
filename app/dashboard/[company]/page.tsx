"use client"

import { useState, useEffect } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardOverview } from "@/components/dashboard-overview"
import { DocumentsSection } from "@/components/documents-section"
import { NoticesSection } from "@/components/notices-section"
import { TasksSection } from "@/components/tasks-section"
import { ReportsSection } from "@/components/reports-section"
import { getCompanyData } from "@/lib/data"

export default function DashboardPage({ params }: { params: { company: string } }) {
  const [activeSection, setActiveSection] = useState("overview")
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [companyData, setCompanyData] = useState<any>(null)

  useEffect(() => {
    // Verificar se usuário está logado
    const userData = localStorage.getItem("currentUser")
    if (!userData) {
      window.location.href = "/"
      return
    }

    const user = JSON.parse(userData)

    // Verificar se usuário tem acesso a esta empresa
    if (user.company.slug !== params.company) {
      alert("Acesso negado! Você não tem permissão para acessar esta empresa.")
      window.location.href = "/"
      return
    }

    setCurrentUser(user)

    // Carregar dados específicos da empresa
    const data = getCompanyData(params.company)
    setCompanyData(data)
  }, [params.company])

  if (!currentUser || !companyData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-yellow-400">Carregando...</div>
      </div>
    )
  }

  const company = currentUser.company

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <DashboardOverview company={company} data={companyData} />
      case "documents":
        return <DocumentsSection company={company} data={companyData} />
      case "notices":
        return <NoticesSection company={company} data={companyData} />
      case "tasks":
        return <TasksSection company={company} data={companyData} />
      case "reports":
        return <ReportsSection company={company} data={companyData} />
      default:
        return <DashboardOverview company={company} data={companyData} />
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <SidebarProvider>
        <AppSidebar
          company={company}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          currentUser={currentUser}
        />
        <main className="flex-1 bg-black">
          <DashboardHeader company={company} currentUser={currentUser} />
          <div className="p-8 bg-black min-h-screen">{renderSection()}</div>
        </main>
      </SidebarProvider>
    </div>
  )
}
