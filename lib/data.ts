// Dados específicos por empresa
export interface CompanyData {
  documents: any[]
  notices: any[]
  tasks: any[]
  stats: any
}

// DADOS DA EMPRESA ALPHA
const alphaData: CompanyData = {
  stats: {
    pendingDocs: 8,
    unreadNotices: 3,
    activeTasks: 12,
    progress: 85,
  },
  documents: [
    { id: 1, name: "Contrato Alpha - Revisão", type: "Contrato", status: "Pendente", date: "2024-01-15" },
    { id: 2, name: "Relatório Financeiro Alpha", type: "Relatório", status: "Assinado", date: "2024-01-14" },
    { id: 3, name: "Proposta Comercial Alpha", type: "Proposta", status: "Em Análise", date: "2024-01-13" },
  ],
  notices: [
    {
      id: 1,
      title: "Reunião Alpha - Projeto X",
      content: "Reunião marcada para discutir o projeto X da Alpha",
      priority: "Alta",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Atualização Sistema Alpha",
      content: "Sistema da Alpha será atualizado",
      priority: "Média",
      date: "2024-01-14",
    },
  ],
  tasks: [
    { id: 1, title: "Revisar contrato Alpha", assignee: "João Silva", status: "Em Progresso", priority: "Alta" },
    { id: 2, title: "Preparar relatório Alpha", assignee: "Maria Santos", status: "Pendente", priority: "Média" },
  ],
}

// DADOS DA EMPRESA BETA
const betaData: CompanyData = {
  stats: {
    pendingDocs: 5,
    unreadNotices: 2,
    activeTasks: 8,
    progress: 92,
  },
  documents: [
    { id: 1, name: "Contrato Beta - Tecnologia", type: "Contrato", status: "Assinado", date: "2024-01-15" },
    { id: 2, name: "Especificação Técnica Beta", type: "Técnico", status: "Pendente", date: "2024-01-14" },
    { id: 3, name: "Manual Beta Solutions", type: "Manual", status: "Aprovado", date: "2024-01-13" },
  ],
  notices: [
    {
      id: 1,
      title: "Deploy Sistema Beta",
      content: "Novo deploy do sistema Beta será realizado",
      priority: "Alta",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Treinamento Equipe Beta",
      content: "Treinamento da equipe Beta agendado",
      priority: "Baixa",
      date: "2024-01-14",
    },
  ],
  tasks: [
    { id: 1, title: "Implementar funcionalidade Beta", assignee: "Carlos Lima", status: "Concluída", priority: "Alta" },
    { id: 2, title: "Testar sistema Beta", assignee: "Ana Costa", status: "Em Progresso", priority: "Média" },
  ],
}

// DADOS DA EMPRESA GAMMA
const gammaData: CompanyData = {
  stats: {
    pendingDocs: 3,
    unreadNotices: 1,
    activeTasks: 6,
    progress: 78,
  },
  documents: [
    { id: 1, name: "Análise Financeira Gamma", type: "Financeiro", status: "Pendente", date: "2024-01-15" },
    { id: 2, name: "Auditoria Gamma Corp", type: "Auditoria", status: "Em Análise", date: "2024-01-14" },
    { id: 3, name: "Balanço Patrimonial Gamma", type: "Balanço", status: "Assinado", date: "2024-01-13" },
  ],
  notices: [
    {
      id: 1,
      title: "Fechamento Mensal Gamma",
      content: "Fechamento contábil mensal da Gamma",
      priority: "Alta",
      date: "2024-01-15",
    },
  ],
  tasks: [
    { id: 1, title: "Análise de custos Gamma", assignee: "Roberto Silva", status: "Pendente", priority: "Alta" },
    { id: 2, title: "Relatório fiscal Gamma", assignee: "Lucia Santos", status: "Em Progresso", priority: "Média" },
  ],
}

// Função para obter dados da empresa
export function getCompanyData(companySlug: string): CompanyData {
  switch (companySlug) {
    case "alpha":
      return alphaData
    case "beta":
      return betaData
    case "gamma":
      return gammaData
    default:
      return alphaData // fallback
  }
}
