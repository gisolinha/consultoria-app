"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building2, Lock, User, AlertCircle } from "lucide-react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase"

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    if (!credentials.username || !credentials.password) {
      setError("Preencha todos os campos")
      return
    }

    setLoading(true)
    setError("")

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.username,
        credentials.password
      )

      const email = userCredential.user.email || ""

      // Defina aqui o slug da empresa baseado no email
      let companySlug = "default"

      if (email.includes("ts3")) companySlug = "ts3"
      else if (email.includes("alpha")) companySlug = "alpha"
      else if (email.includes("beta")) companySlug = "beta"
      else if (email.includes("admin")) companySlug = "admin"

      // Salvar no localStorage para controle de sessão simples
      localStorage.setItem("currentUser", JSON.stringify({ email, company: { slug: companySlug } }))

      // Redirecionar para o dashboard específico
      window.location.href = `/dashboard/${companySlug}`

    } catch (err: any) {
      console.error(err)
      setError("Email ou senha inválidos")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
            <Building2 className="h-8 w-8 text-black" />
          </div>
          <h1 className="text-4xl font-bold text-yellow-400 mb-2">Portal de Consultoria</h1>
          <p className="text-gray-400">Acesse sua área exclusiva</p>
        </div>

        <Card className="bg-gray-900 border-yellow-400/30">
          <CardHeader className="text-center">
            <CardTitle className="text-yellow-400 text-xl">Fazer Login</CardTitle>
            <CardDescription className="text-gray-400">Entre com suas credenciais</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {error && (
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-red-400" />
                <span className="text-red-400 text-sm">{error}</span>
              </div>
            )}

            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-yellow-400 font-medium">Usuário</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Digite seu usuário"
                    className="pl-10 bg-black border-yellow-400/30 text-yellow-400 placeholder:text-gray-500 focus:border-yellow-400"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-yellow-400 font-medium">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="password"
                    placeholder="Digite sua senha"
                    className="pl-10 bg-black border-yellow-400/30 text-yellow-400 placeholder:text-gray-500 focus:border-yellow-400"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                  />
                </div>
              </div>
            </div>

            <Button
              onClick={handleLogin}
              className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-bold py-3 text-lg"
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </CardContent>
        </Card>

        {/* Info para teste */}
        <Card className="bg-gray-900/50 border-yellow-400/20">
          <CardContent className="pt-6">
            <div className="text-sm text-gray-400 space-y-2">
              <p className="text-center font-medium text-yellow-400">Logins de Demonstração:</p>
              <div className="grid grid-cols-1 gap-2 text-xs">
                <div>
                  <strong>ts3:</strong> ts3@ts3holdingsocial.com.br / senha
                </div>
                <div>
                  <strong>admin:</strong> admin@empresa.com / senha
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
