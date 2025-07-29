"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, Download, Calendar, FileText, DollarSign, Users, Clock } from "lucide-react"

interface ReportsSectionProps {
  company: {
    name: string
    color: string
    description: string
  }
}

export function ReportsSection({ company }: ReportsSectionProps) {
  const reports = [
    {
      id: 1,
      name: "Relatório Financeiro Mensal",
      type: "Financeiro",
      date: "2024-01-15",
      status: "Disponível",
      size: "2.4 MB",
    },
    {
      id: 2,
      name: "Análise de Performance Q4",
      type: "Performance",
      date: "2024-01-10",
      status: "Disponível",
      size: "3.1 MB",
    },
    {
      id: 3,
      name: "Relatório de Atividades",
      type: "Operacional",
      date: "2024-01-08",
      status: "Em Processamento",
      size: "1.8 MB",
    },
    { id: 4, name: "Dashboard Executivo", type: "Executivo", date: "2024-01-05", status: "Disponível", size: "4.2 MB" },
  ]

  const metrics = [
    { title: "Receita Total", value: "R$ 125.400", change: "+12%", icon: DollarSign, color: "text-green-400" },
    { title: "Projetos Ativos", value: "8", change: "+2", icon: FileText, color: "text-blue-400" },
    { title: "Clientes Ativos", value: "24", change: "+5", icon: Users, color: "text-purple-400" },
    { title: "Tempo Médio", value: "4.2h", change: "-0.3h", icon: Clock, color: "text-yellow-400" },
  ]

  const projectProgress = [
    { name: "Projeto Alpha", progress: 85, status: "Em Andamento" },
    { name: "Projeto Beta", progress: 60, status: "Em Andamento" },
    { name: "Projeto Gamma", progress: 100, status: "Concluído" },
    { name: "Projeto Delta", progress: 30, status: "Iniciado" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Relatórios e Analytics</h1>
          <p className="text-gray-400">Acompanhe o desempenho da {company.name}</p>
        </div>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
          <Download className="h-4 w-4 mr-2" />
          Exportar Dados
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{metric.title}</p>
                  <p className="text-2xl font-bold text-white">{metric.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-green-400" />
                    <span className="text-xs text-green-400">{metric.change}</span>
                  </div>
                </div>
                <metric.icon className={`h-8 w-8 ${metric.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Progress */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-yellow-400" />
              Progresso dos Projetos
            </CardTitle>
            <CardDescription className="text-gray-400">Status atual dos projetos em andamento</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {projectProgress.map((project, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{project.name}</span>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        project.status === "Concluído"
                          ? "border-green-400 text-green-400"
                          : project.status === "Em Andamento"
                            ? "border-blue-400 text-blue-400"
                            : "border-yellow-400 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </Badge>
                    <span className="text-sm text-gray-400">{project.progress}%</span>
                  </div>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Available Reports */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <FileText className="h-5 w-5 text-yellow-400" />
              Relatórios Disponíveis
            </CardTitle>
            <CardDescription className="text-gray-400">Baixe os relatórios mais recentes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="flex-1">
                  <h4 className="text-white font-medium text-sm">{report.name}</h4>
                  <div className="flex items-center gap-4 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {report.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="h-3 w-3" />
                      {report.date}
                    </div>
                    <span className="text-xs text-gray-400">{report.size}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={report.status === "Disponível" ? "default" : "secondary"}
                    className={report.status === "Disponível" ? "bg-green-600" : ""}
                  >
                    {report.status}
                  </Badge>
                  {report.status === "Disponível" && (
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <Download className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart Placeholder */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Performance Mensal</CardTitle>
          <CardDescription className="text-gray-400">
            Evolução dos principais indicadores nos últimos 6 meses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <p className="text-gray-400">Gráfico de Performance</p>
              <p className="text-sm text-gray-500">Dados em tempo real serão exibidos aqui</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
