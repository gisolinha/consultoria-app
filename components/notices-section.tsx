"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bell, MessageCircle, Reply, Plus, Calendar, User } from "lucide-react"

interface NoticesSectionProps {
  company: {
    name: string
    color: string
    description: string
  }
}

export function NoticesSection({ company }: NoticesSectionProps) {
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState<number | null>(null)

  const notices = [
    {
      id: 1,
      title: "Reunião de Alinhamento - Projeto Beta",
      content:
        "Prezados, informamos que a reunião de alinhamento do Projeto Beta está agendada para amanhã às 14h. Por favor, preparem os relatórios de progresso.",
      author: "Administrador",
      date: "2024-01-15",
      priority: "Alta",
      comments: [
        { id: 1, author: "João Silva", content: "Estarei presente. Já preparei o relatório.", date: "2024-01-15" },
        { id: 2, author: "Maria Santos", content: "Confirmo presença também.", date: "2024-01-15" },
      ],
    },
    {
      id: 2,
      title: "Atualização nos Processos Internos",
      content:
        "Foram implementadas melhorias nos processos internos de aprovação. O novo fluxo estará disponível a partir da próxima semana.",
      author: "Administrador",
      date: "2024-01-14",
      priority: "Média",
      comments: [
        {
          id: 3,
          author: "Carlos Lima",
          content: "Quando teremos o treinamento sobre os novos processos?",
          date: "2024-01-14",
        },
      ],
    },
    {
      id: 3,
      title: "Nova Funcionalidade no Sistema",
      content:
        "Implementamos uma nova funcionalidade de relatórios automáticos. Vocês podem acessá-la na seção de relatórios.",
      author: "Administrador",
      date: "2024-01-13",
      priority: "Baixa",
      comments: [],
    },
  ]

  const handleAddComment = (noticeId: number) => {
    if (newComment.trim()) {
      // Aqui você adicionaria a lógica para salvar o comentário
      console.log(`Adicionando comentário ao aviso ${noticeId}: ${newComment}`)
      setNewComment("")
    }
  }

  const NoticeCard = ({ notice }: { notice: any }) => (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-white text-lg">{notice.title}</CardTitle>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <User className="h-4 w-4" />
                {notice.author}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="h-4 w-4" />
                {notice.date}
              </div>
            </div>
          </div>
          <Badge
            variant="outline"
            className={`${
              notice.priority === "Alta"
                ? "border-red-400 text-red-400"
                : notice.priority === "Média"
                  ? "border-yellow-400 text-yellow-400"
                  : "border-green-400 text-green-400"
            }`}
          >
            {notice.priority}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-300">{notice.content}</p>

        {/* Comments Section */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="h-4 w-4 text-yellow-400" />
            <span className="text-sm text-gray-400">
              {notice.comments.length} comentário{notice.comments.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Existing Comments */}
          <div className="space-y-3 mb-4">
            {notice.comments.map((comment: any) => (
              <div key={comment.id} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="bg-yellow-400 text-black text-xs">
                      {comment.author
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-white">{comment.author}</span>
                  <span className="text-xs text-gray-400">{comment.date}</span>
                </div>
                <p className="text-sm text-gray-300">{comment.content}</p>
              </div>
            ))}
          </div>

          {/* Add Comment */}
          <div className="space-y-3">
            <Textarea
              placeholder="Adicione um comentário..."
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div className="flex justify-end">
              <Button
                size="sm"
                className="bg-yellow-400 text-black hover:bg-yellow-500"
                onClick={() => handleAddComment(notice.id)}
                disabled={!newComment.trim()}
              >
                <Reply className="h-4 w-4 mr-2" />
                Comentar
              </Button>
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
          <h1 className="text-2xl font-bold text-white">Avisos e Comunicações</h1>
          <p className="text-gray-400">Central de comunicação da {company.name}</p>
        </div>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
          <Plus className="h-4 w-4 mr-2" />
          Novo Aviso
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Bell className="h-8 w-8 text-yellow-400" />
              <div>
                <p className="text-2xl font-bold text-white">{notices.length}</p>
                <p className="text-sm text-gray-400">Total de Avisos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-8 w-8 text-blue-400" />
              <div>
                <p className="text-2xl font-bold text-white">
                  {notices.reduce((acc, notice) => acc + notice.comments.length, 0)}
                </p>
                <p className="text-sm text-gray-400">Comentários</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Bell className="h-8 w-8 text-red-400" />
              <div>
                <p className="text-2xl font-bold text-white">{notices.filter((n) => n.priority === "Alta").length}</p>
                <p className="text-sm text-gray-400">Alta Prioridade</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notices List */}
      <div className="space-y-4">
        {notices.map((notice) => (
          <NoticeCard key={notice.id} notice={notice} />
        ))}
      </div>
    </div>
  )
}
