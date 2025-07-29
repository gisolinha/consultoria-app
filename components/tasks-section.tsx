"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { CheckSquare, Clock, User, Calendar, Plus, Filter } from "lucide-react"

interface TasksSectionProps {
  company: {
    name: string
    color: string
    description: string
  }
}

export function TasksSection({ company }: TasksSectionProps) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Revisar contrato Alpha",
      description: "Análise completa do contrato de prestação de serviços",
      assignee: "João Silva",
      dueDate: "2024-01-20",
      priority: "Alta",
      status: "Em Progresso",
      completed: false,
    },
    {
      id: 2,
      title: "Preparar relatório mensal",
      description: "Compilar dados financeiros do mês anterior",
      assignee: "Maria Santos",
      dueDate: "2024-01-18",
      priority: "Média",
      status: "Pendente",
      completed: false,
    },
    {
      id: 3,
      title: "Atualizar documentação",
      description: "Revisar e atualizar manuais internos",
      assignee: "Carlos Lima",
      dueDate: "2024-01-25",
      priority: "Baixa",
      status: "Concluída",
      completed: true,
    },
    {
      id: 4,
      title: "Reunião com cliente Beta",
      description: "Apresentação da proposta comercial",
      assignee: "Ana Costa",
      dueDate: "2024-01-16",
      priority: "Alta",
      status: "Em Progresso",
      completed: false,
    },
  ])

  const toggleTask = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed, status: !task.completed ? "Concluída" : "Pendente" }
          : task,
      ),
    )
  }

  const completedTasks = tasks.filter((task) => task.completed).length
  const totalTasks = tasks.length
  const progressPercentage = (completedTasks / totalTasks) * 100

  const TaskCard = ({ task }: { task: any }) => (
    <Card className={`bg-gray-800 border-gray-700 ${task.completed ? "opacity-75" : ""}`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Checkbox checked={task.completed} onCheckedChange={() => toggleTask(task.id)} className="mt-1" />
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h4 className={`font-medium ${task.completed ? "line-through text-gray-400" : "text-white"}`}>
                {task.title}
              </h4>
              <Badge
                variant="outline"
                className={`text-xs ${
                  task.priority === "Alta"
                    ? "border-red-400 text-red-400"
                    : task.priority === "Média"
                      ? "border-yellow-400 text-yellow-400"
                      : "border-green-400 text-green-400"
                }`}
              >
                {task.priority}
              </Badge>
            </div>

            <p className={`text-sm mb-3 ${task.completed ? "text-gray-500" : "text-gray-300"}`}>{task.description}</p>

            <div className="flex items-center gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {task.assignee}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {task.dueDate}
              </div>
              <Badge
                variant="secondary"
                className={`${
                  task.status === "Concluída"
                    ? "bg-green-600"
                    : task.status === "Em Progresso"
                      ? "bg-blue-600"
                      : "bg-gray-600"
                }`}
              >
                {task.status}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Tarefas e Atividades</h1>
          <p className="text-gray-400">Gerencie as tarefas da {company.name}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
            <Plus className="h-4 w-4 mr-2" />
            Nova Tarefa
          </Button>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <CheckSquare className="h-8 w-8 text-green-400" />
              <div>
                <p className="text-2xl font-bold text-white">{completedTasks}</p>
                <p className="text-sm text-gray-400">Concluídas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-yellow-400" />
              <div>
                <p className="text-2xl font-bold text-white">{totalTasks - completedTasks}</p>
                <p className="text-sm text-gray-400">Pendentes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center">
                <span className="text-black font-bold text-sm">{Math.round(progressPercentage)}%</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{Math.round(progressPercentage)}%</p>
                <p className="text-sm text-gray-400">Progresso</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Bar */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Progresso Geral</CardTitle>
          <CardDescription className="text-gray-400">
            {completedTasks} de {totalTasks} tarefas concluídas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="h-3" />
        </CardContent>
      </Card>

      {/* Tasks List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Lista de Tarefas</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700 text-white">
              Todas
            </Button>
            <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700 text-white">
              Pendentes
            </Button>
            <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700 text-white">
              Concluídas
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}
