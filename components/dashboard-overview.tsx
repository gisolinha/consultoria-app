"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Bell, CheckSquare, TrendingUp, Eye, Plus } from "lucide-react"

interface DashboardOverviewProps {
  company: {
    name: string
    color: string
    description: string
  }
}

export function DashboardOverview({ company }: DashboardOverviewProps) {
  const stats = [
    { title: "Documentos Pendentes", value: "5", icon: FileText },
    { title: "Avisos Não Lidos", value: "2", icon: Bell },
    { title: "Tarefas Ativas", value: "8", icon: CheckSquare },
    { title: "Progresso Geral", value: "87%", icon: TrendingUp },
  ]

  const recentItems = [
    { name: "Contrato Alpha - Revisão Final", type: "Documento", status: "Pendente" },
    { name: "Reunião Projeto Beta", type: "Aviso", status: "Novo" },
    { name: "Relatório Mensal", type: "Tarefa", status: "Em Progresso" },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-8 text-black">
        <h1 className="text-3xl font-bold mb-2">Bem-vindo, {company.name}</h1>
        <p className="text-black/80 text-lg">Aqui está o resumo das suas atividades</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gray-900 border-yellow-400/20 hover:border-yellow-400/40 transition-all">
            <CardContent className="p-6 text-center">
              <stat.icon className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <p className="text-2xl font-bold text-yellow-400 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="bg-gray-900 border-yellow-400/20">
        <CardHeader className="border-b border-yellow-400/20">
          <CardTitle className="text-yellow-400 text-xl">Atividades Recentes</CardTitle>
          <CardDescription className="text-gray-400">Últimas atualizações importantes</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {recentItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-black/50 rounded-lg border border-yellow-400/10"
              >
                <div>
                  <h4 className="text-yellow-400 font-medium">{item.name}</h4>
                  <p className="text-gray-400 text-sm">{item.type}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-yellow-400 text-black font-medium">{item.status}</Badge>
                  <Button size="sm" variant="ghost" className="text-yellow-400 hover:bg-yellow-400/10">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-gray-900 border-yellow-400/20">
        <CardHeader className="border-b border-yellow-400/20">
          <CardTitle className="text-yellow-400 text-xl">Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 h-16 flex-col gap-2 font-bold">
              <Plus className="h-5 w-5" />
              Novo Documento
            </Button>
            <Button className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black h-16 flex-col gap-2 font-medium">
              <Bell className="h-5 w-5" />
              Criar Aviso
            </Button>
            <Button className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black h-16 flex-col gap-2 font-medium">
              <FileText className="h-5 w-5" />
              Ver Relatórios
            </Button>
            <Button className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black h-16 flex-col gap-2 font-medium">
              <CheckSquare className="h-5 w-5" />
              Nova Tarefa
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
