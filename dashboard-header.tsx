import { StatusBadge } from "@/components/ui/status-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Wifi, WifiOff, Play, Square, RotateCcw } from "lucide-react"

interface DashboardHeaderProps {
  botStatus: "online" | "offline" | "connecting"
  deviceInfo?: {
    name: string
    model: string
    uptime: string
  }
}

export function DashboardHeader({ botStatus, deviceInfo }: DashboardHeaderProps) {
  const getStatusIcon = () => {
    switch (botStatus) {
      case "online":
        return <Wifi className="h-4 w-4" />
      case "offline":
        return <WifiOff className="h-4 w-4" />
      case "connecting":
        return <Wifi className="h-4 w-4 animate-pulse" />
    }
  }

  const getStatusText = () => {
    switch (botStatus) {
      case "online":
        return "Connected"
      case "offline":
        return "Disconnected"
      case "connecting":
        return "Connecting..."
    }
  }

  return (
    <div className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center space-x-4 flex-1">
          <div className="flex items-center space-x-2">
            <Smartphone className="h-5 w-5 text-muted-foreground" />
            <div>
              <h1 className="text-xl font-semibold text-foreground">
                WhatsApp Bot Panel
              </h1>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                {getStatusIcon()}
                <span>{getStatusText()}</span>
                <StatusBadge status={botStatus} className="ml-2">
                  {botStatus.toUpperCase()}
                </StatusBadge>
              </div>
            </div>
          </div>
        </div>
        
        {deviceInfo && (
          <Card className="mr-4">
            <CardContent className="p-3">
              <div className="text-xs text-muted-foreground space-y-1">
                <div><strong>Device:</strong> {deviceInfo.name}</div>
                <div><strong>Model:</strong> {deviceInfo.model}</div>
                <div><strong>Uptime:</strong> {deviceInfo.uptime}</div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex items-center space-x-2">
          <Button size="sm" variant="outline">
            <Play className="h-4 w-4 mr-1" />
            Start
          </Button>
          <Button size="sm" variant="outline">
            <Square className="h-4 w-4 mr-1" />
            Stop
          </Button>
          <Button size="sm" variant="outline">
            <RotateCcw className="h-4 w-4 mr-1" />
            Restart
          </Button>
        </div>
      </div>
    </div>
  )
}