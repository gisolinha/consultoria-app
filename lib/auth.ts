// Sistema de autenticação simples
export interface Company {
  id: string
  name: string
  slug: string
  description: string
}

export interface User {
  username: string
  password: string
  company: Company
  role: "admin" | "user"
}

// Base de dados simulada - AQUI VOCÊ CONFIGURA AS EMPRESAS E LOGINS
export const companies: Company[] = [
  {
    id: "1",
    name: "Alpha Consultoria",
    slug: "alpha",
    description: "Consultoria em Gestão Empresarial",
  },
  {
    id: "2",
    name: "Beta Solutions",
    slug: "beta",
    description: "Soluções Tecnológicas",
  },
  {
    id: "3",
    name: "Gamma Corp",
    slug: "gamma",
    description: "Consultoria Financeira",
  },
]

// AQUI VOCÊ ADICIONA OS LOGINS DE CADA EMPRESA
export const users: User[] = [
  // Empresa Alpha
  { username: "alpha", password: "123456", company: companies[0], role: "admin" },
  { username: "joao.alpha", password: "senha123", company: companies[0], role: "user" },

  // Empresa Beta
  { username: "beta", password: "123456", company: companies[1], role: "admin" },
  { username: "maria.beta", password: "senha123", company: companies[1], role: "user" },

  // Empresa Gamma
  { username: "gamma", password: "123456", company: companies[2], role: "admin" },
  { username: "carlos.gamma", password: "senha123", company: companies[2], role: "user" },
]

// Função para autenticar usuário
export function authenticateUser(username: string, password: string): User | null {
  const user = users.find((u) => u.username === username && u.password === password)
  return user || null
}

// Função para obter empresa por slug
export function getCompanyBySlug(slug: string): Company | null {
  return companies.find((c) => c.slug === slug) || null
}
