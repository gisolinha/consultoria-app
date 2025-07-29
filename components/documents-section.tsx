"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { FileText, Download, Eye, Edit, Upload, Search, Filter } from "lucide-react"

interface DocumentsSectionProps {
  company: {
    name: string
    color: string
    description: string
  }
}

export function DocumentsSection({ company }: DocumentsSectionProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const pendingDocuments = [
    {
      id: 1,
      name: "Contrato de Prestação de Serviços - Alpha",
      type: "Contrato",
      date: "2024-01-15",
      size: "2.4 MB",
      status: "Aguardando Assinatura",
    },
    {
      id: 2,
      name: "Proposta Comercial - Projeto Beta",
      type: "Proposta",
      date: "2024-01-14",
      size: "1.8 MB",
      status: "Em Análise",
    },
    {
      id: 3,
      name: "Termo de Confidencialidade",
      type: "Legal",
      date: "2024-01-13",
      size: "856 KB",
      status: "Aguardando Assinatura",
    },
  ]

  const signedDocuments = [
    {
      id: 4,
      name: "Contrato Anual 2024",
      type: "Contrato",
      date: "2024-01-10",
      size: "3.2 MB",
      status: "Assinado",
      signedBy: "João Silva",
    },
    {
      id: 5,
      name: "Relatório Financeiro Q4 2023",
      type: "Relatório",
      date: "2024-01-08",
      size: "4.1 MB",
      status: "Assinado",
      signedBy: "Maria Santos",
    },
    {
      id: 6,
      name: "Acordo de Parceria",
      type: "Legal",
      date: "2024-01-05",
      size: "2.7 MB",
      status: "Assinado",
      signedBy: "Carlos Lima",
    },
  ]

  const importantDocuments = [
    { id: 7, name: "Manual de Procedimentos", type: "Manual", date: "2024-01-01", size: "5.6 MB", status: "Ativo" },
    { id: 8, name: "Política de Qualidade", type: "Política", date: "2023-12-15", size: "1.2 MB", status: "Ativo" },
    {
      id: 9,
      name: "Certificações ISO",
      type: "Certificado",
      date: "2023-12-01",
      size: "3.8 MB",
      status: "Válido até 2025",
    },
  ]

  const DocumentCard = ({ doc, showSignedBy = false }: { doc: any; showSignedBy?: boolean }) => (
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-4 w-4 text-yellow-400" />
              <h4 className="text-white font-medium text-sm">{doc.name}</h4>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
              <span>{doc.type}</span>
              <span>{doc.date}</span>
              <span>{doc.size}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className={`text-xs ${
                  doc.status === "Assinado"
                    ? "border-green-400 text-green-400"
                    : doc.status === "Aguardando Assinatura"
                      ? "border-yellow-400 text-yellow-400"
                      : doc.status === "Em Análise"
                        ? "border-blue-400 text-blue-400"
                        : "border-gray-400 text-gray-400"
                }`}
              >
                {doc.status}
              </Badge>
              {showSignedBy && doc.signedBy && <span className="text-xs text-gray-400">por {doc.signedBy}</span>}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
              <Eye className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
              <Download className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
              <Edit className="h-4 w-4" />
            </Button>
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
          <h1 className="text-2xl font-bold text-white">Documentos</h1>
          <p className="text-gray-400">Gerencie todos os documentos da {company.name}</p>
        </div>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
          <Upload className="h-4 w-4 mr-2" />
          Novo Documento
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar documentos..."
                className="pl-10 bg-gray-800 border-gray-700 text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Documents Tabs */}
      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="pending" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
            Para Assinar ({pendingDocuments.length})
          </TabsTrigger>
          <TabsTrigger value="signed" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
            Assinados ({signedDocuments.length})
          </TabsTrigger>
          <TabsTrigger value="important" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
            Importantes ({importantDocuments.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Documentos Pendentes</CardTitle>
              <CardDescription className="text-gray-400">
                Documentos aguardando sua assinatura ou análise
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingDocuments.map((doc) => (
                <DocumentCard key={doc.id} doc={doc} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="signed" className="space-y-4">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Documentos Assinados</CardTitle>
              <CardDescription className="text-gray-400">Documentos já assinados e finalizados</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {signedDocuments.map((doc) => (
                <DocumentCard key={doc.id} doc={doc} showSignedBy />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="important" className="space-y-4">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Documentos Importantes</CardTitle>
              <CardDescription className="text-gray-400">
                Documentos de referência e políticas da empresa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {importantDocuments.map((doc) => (
                <DocumentCard key={doc.id} doc={doc} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
