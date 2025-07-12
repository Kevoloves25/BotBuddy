import { useState } from "react"
import { LoginForm } from "@/components/dashboard/login-form"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { DashboardContent } from "@/components/dashboard/dashboard-content"

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeSection, setActiveSection] = useState("dashboard")

  const handleLogin = (username: string, password: string) => {
    // Simple demo authentication
    if (username === "admin" && password === "admin123") {
      setIsAuthenticated(true)
    }
  }

  const mockDeviceInfo = {
    name: "WhatsApp Bot v2.0",
    model: "Multi-Device Session",
    uptime: "2h 34m 12s"
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />
  }

  return (
    <div className="h-screen bg-background overflow-hidden">
      <DashboardHeader 
        botStatus="online" 
        deviceInfo={mockDeviceInfo}
      />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <main className="flex-1 overflow-auto p-6">
          <DashboardContent activeSection={activeSection} />
        </main>
      </div>
    </div>
  );
};

export default Index;
