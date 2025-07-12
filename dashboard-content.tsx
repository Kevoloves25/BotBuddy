import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  QrCode, 
  RefreshCw, 
  Bot, 
  Download, 
  Users, 
  Zap,
  Upload,
  Monitor,
  MessageSquare,
  Activity,
  HardDrive,
  Cpu,
  MemoryStick
} from "lucide-react"
import { StatusBadge } from "@/components/ui/status-badge"

interface DashboardContentProps {
  activeSection: string
}

const commandCategories = [
  {
    id: "ai",
    title: "AI Tools",
    icon: Bot,
    description: "ChatGPT, AI image generation, voice commands",
    commands: ["!gpt", "!dalle", "!voice", "!translate"]
  },
  {
    id: "downloads",
    title: "Downloaders",
    icon: Download,
    description: "Download from TikTok, YouTube, Instagram, etc.",
    commands: ["!tiktok", "!youtube", "!instagram", "!spotify"]
  },
  {
    id: "groups",
    title: "Group Management",
    icon: Users,
    description: "Manage group members, permissions, and settings",
    commands: ["!kick", "!promote", "!demote", "!groupinfo"]
  },
  {
    id: "automation",
    title: "Automation",
    icon: Zap,
    description: "Auto-replies, welcome messages, scheduled tasks",
    commands: ["!autoReply", "!welcome", "!schedule", "!filter"]
  },
  {
    id: "media",
    title: "Media Tools",
    icon: Upload,
    description: "Stickers, image editing, audio processing",
    commands: ["!sticker", "!removebg", "!compress", "!convert"]
  },
  {
    id: "system",
    title: "System Tools",
    icon: Monitor,
    description: "Bot configuration, logs, and system information",
    commands: ["!ping", "!uptime", "!restart", "!logs"]
  }
]

const mockLogs = [
  { time: "14:32:15", level: "INFO", message: "Bot connected successfully" },
  { time: "14:32:18", level: "INFO", message: "WhatsApp session authenticated" },
  { time: "14:32:20", level: "INFO", message: "All plugins loaded (24 active)" },
  { time: "14:33:45", level: "WARN", message: "Rate limit approaching for API calls" },
  { time: "14:34:12", level: "INFO", message: "New message received from group" },
  { time: "14:34:13", level: "INFO", message: "Command processed: !ping" },
]

export function DashboardContent({ activeSection }: DashboardContentProps) {
  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bot Status</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">Online</div>
            <p className="text-xs text-muted-foreground">
              Connected for 2h 34m
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages Today</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              +12% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23%</div>
            <p className="text-xs text-muted-foreground">
              Normal operation
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Memory</CardTitle>
            <MemoryStick className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">456MB</div>
            <p className="text-xs text-muted-foreground">
              512MB available
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common bot management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 md:grid-cols-3">
            <Button variant="outline" className="h-12">
              <QrCode className="mr-2 h-4 w-4" />
              Generate QR Code
            </Button>
            <Button variant="outline" className="h-12">
              <RefreshCw className="mr-2 h-4 w-4" />
              Restart Session
            </Button>
            <Button variant="outline" className="h-12">
              <HardDrive className="mr-2 h-4 w-4" />
              Clear Cache
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderPairing = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>WhatsApp QR Code Pairing</CardTitle>
          <CardDescription>
            Scan this QR code with your WhatsApp app to connect the bot
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <QrCode className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">QR Code will appear here</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button>
              <RefreshCw className="mr-2 h-4 w-4" />
              Generate New QR
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download QR
            </Button>
          </div>
          <StatusBadge status="offline">
            Waiting for scan...
          </StatusBadge>
        </CardContent>
      </Card>
    </div>
  )

  const renderCommands = () => (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {commandCategories.map((category) => {
          const Icon = category.icon
          return (
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.commands.map((command) => (
                    <Badge key={command} variant="secondary" className="mr-1 mb-1">
                      {command}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full mt-4" size="sm">
                  Configure
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )

  const renderLogs = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>System Logs</CardTitle>
          <CardDescription>Real-time bot activity and system messages</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96 w-full rounded border bg-muted/20 p-4">
            <div className="space-y-2 font-mono text-sm">
              {mockLogs.map((log, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-muted-foreground">[{log.time}]</span>
                  <Badge 
                    variant={log.level === "ERROR" ? "destructive" : "secondary"}
                    className="text-xs"
                  >
                    {log.level}
                  </Badge>
                  <span className="flex-1">{log.message}</span>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="flex space-x-2 mt-4">
            <Button size="sm" variant="outline">
              <RefreshCw className="mr-2 h-3 w-3" />
              Refresh
            </Button>
            <Button size="sm" variant="outline">
              <Download className="mr-2 h-3 w-3" />
              Export Logs
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderFiles = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Configuration Files</CardTitle>
          <CardDescription>Manage bot settings and configuration files</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-medium">config.json</h4>
                <p className="text-sm text-muted-foreground">Main bot configuration</p>
              </div>
              <Button size="sm" variant="outline">Edit</Button>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-medium">settings.js</h4>
                <p className="text-sm text-muted-foreground">Bot behavior settings</p>
              </div>
              <Button size="sm" variant="outline">Edit</Button>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-medium">plugins/</h4>
                <p className="text-sm text-muted-foreground">Plugin directory (24 files)</p>
              </div>
              <Button size="sm" variant="outline">Browse</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Quick Edit</CardTitle>
          <CardDescription>Edit configuration directly</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea 
            placeholder="Edit your configuration here..."
            className="min-h-[200px] font-mono text-sm"
          />
          <div className="flex space-x-2 mt-4">
            <Button size="sm">Save Changes</Button>
            <Button size="sm" variant="outline">Cancel</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Bot Settings</CardTitle>
          <CardDescription>Configure your WhatsApp bot preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Bot Name</label>
              <input 
                className="w-full p-2 border rounded-md bg-background" 
                placeholder="WhatsApp Bot v2.0"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Command Prefix</label>
              <input 
                className="w-full p-2 border rounded-md bg-background" 
                placeholder="!"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Auto-Reply Message</label>
              <Textarea 
                placeholder="Thanks for your message! I'm a bot and will respond shortly."
                className="min-h-[100px]"
              />
            </div>
          </div>
          <Button>Save Settings</Button>
        </CardContent>
      </Card>
    </div>
  )

  switch (activeSection) {
    case "dashboard":
      return renderDashboard()
    case "pairing":
      return renderPairing()
    case "commands":
      return renderCommands()
    case "logs":
      return renderLogs()
    case "files":
      return renderFiles()
    case "settings":
      return renderSettings()
    default:
      return renderDashboard()
  }
}