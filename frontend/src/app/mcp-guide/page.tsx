'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
    Terminal,
    Code2,
    Cpu,
    Bot,
    ArrowRight,
    CheckCircle2,
    Copy,
    LayoutTemplate,
    Play,
    ServerCog
} from 'lucide-react'
import { Sidebar } from '@/components/layout/Sidebar'
import toast from 'react-hot-toast'
import { useUserStore } from '@/lib/store'
import { useRouter } from 'next/navigation'

const ease = [0.23, 1, 0.32, 1] as const

const TABS = [
    { id: 'claude', label: 'Claude Desktop', icon: Bot },
    { id: 'cursor', label: 'Cursor IDE', icon: LayoutTemplate },
    { id: 'windsurf', label: 'Windsurf', icon: Code2 },
] as const

export default function McpGuidePage() {
    const [activeTab, setActiveTab] = useState<typeof TABS[number]['id']>('claude')

    const router = useRouter()

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        toast.success('Copied to clipboard')
    }

    const handleGetToken = () => {
        const { isAuthenticated, token } = useUserStore.getState()
        if (!isAuthenticated || !token) {
            router.push('/auth/signin?redirect=/mcp-guide')
            return
        }
        navigator.clipboard.writeText(token)
        toast.success('JWT Token copied to clipboard!', { icon: '🔑' })
    }

    return (
        <div
            className="min-h-screen flex selection:bg-[var(--lp-accent)]/20"
            style={{
                background: 'var(--lp-bg)',
                color: 'var(--lp-text-heading)',
                fontFeatureSettings: '"calt" 1, "kern" 1, "liga" 1, "ss03" 1',
                letterSpacing: '0.2px',
            }}
        >
            <Sidebar />

            <main className="flex-1 overflow-y-auto relative scroll-smooth">
                {/* Ambient Effects */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[500px] rounded-full blur-[140px]" style={{ background: 'rgba(255,99,99,0.03)' }} />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[400px] rounded-full blur-[120px]" style={{ background: 'var(--lp-warm-glow)' }} />
                </div>

                {/* Header Bar */}
                <div
                    className="sticky top-0 z-20 backdrop-blur-2xl"
                    style={{
                        background: 'color-mix(in srgb, var(--lp-bg) 85%, transparent)',
                        borderBottom: '1px solid var(--lp-border)',
                    }}
                >
                    <div className="flex items-center justify-between px-8 h-12 max-w-[1000px] mx-auto">
                        <h1 className="text-[15px] font-medium flex items-center gap-2" style={{ color: 'var(--lp-text-heading)', letterSpacing: '0.2px' }}>
                            <ServerCog className="w-4 h-4" style={{ color: 'var(--lp-accent)' }} />
                            MCP Server Integration Guide
                        </h1>
                    </div>
                </div>

                <div className="relative z-[1] px-8 py-10 max-w-[1000px] mx-auto">

                    {/* Hero Section */}
                    <motion.div
                        className="mb-14"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease }}
                    >
                        <div
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-semibold tracking-wider uppercase mb-5"
                            style={{
                                background: 'rgba(255,99,99,0.08)',
                                color: 'var(--lp-accent)',
                                border: '1px solid rgba(255,99,99,0.15)',
                                letterSpacing: '0.3px',
                            }}
                        >
                            <Cpu className="w-3.5 h-3.5" />
                            Model Context Protocol
                        </div>

                        <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] mb-5" style={{ color: 'var(--lp-text-heading)', letterSpacing: '0px' }}>
                            Supercharge your IDE with
                            <br />
                            <span style={{ color: 'var(--lp-accent)' }}>
                                DocuVerse AI Tools
                            </span>
                        </h2>

                        <p className="text-[16px] font-medium leading-[1.60] max-w-2xl mb-8" style={{ color: 'var(--lp-text-muted)', letterSpacing: '0.2px' }}>
                            Connect DocuVerse's analysis engine, impact simulator, and AI-narrated walkthroughs directly into your favorite AI-powered IDEs and desktop applications using the open standard Model Context Protocol (MCP).
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="#quickstart"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-[86px] text-[14px] font-semibold transition-opacity duration-200 hover:opacity-80 active:scale-[0.97]"
                                style={{
                                    background: 'var(--lp-cta-bg)',
                                    color: 'var(--lp-cta-text)',
                                    letterSpacing: '0.3px',
                                    boxShadow: 'var(--lp-shadow-btn)',
                                }}
                            >
                                Read Guide <ArrowRight className="w-4 h-4" />
                            </a>
                            <button
                                onClick={handleGetToken}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-[86px] text-[14px] font-semibold transition-opacity duration-200 hover:opacity-60"
                                style={{
                                    color: 'var(--lp-text-muted)',
                                    border: '1px solid var(--lp-card-border)',
                                    boxShadow: 'rgba(255,255,255,0.1) 0px 1px 0px 0px inset',
                                    letterSpacing: '0.3px',
                                }}
                            >
                                Get JWT Token
                            </button>
                        </div>
                    </motion.div>

                    {/* Quickstart Concepts */}
                    <div id="quickstart" className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 pt-4">
                        {[
                            { icon: <Terminal className="w-6 h-6" />, title: "1. Build Server", desc: "Clone the server locally and run `npm install && npm run build`." },
                            { icon: <Code2 className="w-6 h-6" />, title: "2. Connect IDE", desc: "Add the absolute path of `dist/index.js` to your IDE configuration." },
                            { icon: <Play className="w-6 h-6" />, title: "3. Start Asking", desc: "Ask the AI internally to 'analyze impact', 'git clone my repo', or 'explain file'." },
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                                className="rounded-2xl p-6 relative overflow-hidden group transition-all duration-300"
                                style={{
                                    background: 'var(--lp-card)',
                                    border: '1px solid var(--lp-card-border)',
                                    boxShadow: 'var(--lp-shadow-ring), var(--lp-shadow-ring-inset)',
                                }}
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom, rgba(255,99,99,0.03), transparent)' }} />
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(255,99,99,0.08)', color: 'var(--lp-accent)', border: '1px solid rgba(255,99,99,0.12)' }}>
                                    {step.icon}
                                </div>
                                <h3 className="text-[16px] font-semibold mb-2" style={{ color: 'var(--lp-text-heading)', letterSpacing: '0.2px' }}>{step.title}</h3>
                                <p className="text-[14px] font-medium leading-relaxed" style={{ color: 'var(--lp-text-muted)', letterSpacing: '0.2px' }}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Setup Instructions */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
                        <h3 className="text-[24px] font-medium mb-6" style={{ color: 'var(--lp-text-heading)', letterSpacing: '0.2px' }}>Step-by-Step Setup</h3>

                        <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--lp-card)', border: '1px solid var(--lp-card-border)', boxShadow: 'var(--lp-shadow-ring), var(--lp-shadow-ring-inset)' }}>
                            <div className="flex overflow-x-auto" style={{ borderBottom: '1px solid var(--lp-border)' }}>
                                {TABS.map((tab) => {
                                    const Icon = tab.icon
                                    const isActive = activeTab === tab.id
                                    return (
                                        <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                            className="flex items-center gap-2.5 px-6 py-4 text-[14px] font-medium tracking-wide capitalize transition-opacity duration-200 whitespace-nowrap hover:opacity-60"
                                            style={{
                                                color: isActive ? 'var(--lp-text-heading)' : 'var(--lp-text-faint)',
                                                borderBottom: isActive ? '2px solid var(--lp-accent)' : '2px solid transparent',
                                                background: isActive ? 'var(--lp-surface-hover)' : 'transparent',
                                                letterSpacing: '0.3px',
                                            }}>
                                            <Icon className="w-4 h-4" style={{ color: isActive ? 'var(--lp-accent)' : undefined }} />
                                            {tab.label}
                                        </button>
                                    )
                                })}
                            </div>

                            <div className="p-8">
                                <AnimatePresence mode="wait">
                                    <motion.div key={activeTab} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.2 }}>
                                        {activeTab === 'claude' && (
                                            <TabContent
                                                copyToClipboard={copyToClipboard}
                                                description="Claude Desktop provides built-in support for MCP servers. To connect the DocuVerse server, modify your global Claude config file."
                                                configPaths={{ primary: { os: 'Mac', path: '~/Library/Application Support/Claude/claude_desktop_config.json' }, secondary: { os: 'Windows', path: '%APPDATA%\\Claude\\claude_desktop_config.json' } }}
                                                configJson={`{
  "mcpServers": {
    "docuverse": {
      "command": "node",
      "args": ["/absolute/path/to/logorhythms/mcp-server/dist/index.js"],
      "env": {
        "DOCUVERSE_JWT_TOKEN": "<YOUR_JWT_TOKEN_HERE>",
        "DOCUVERSE_API_URL": "https://logorhythms.in/api"
      }
    }
  }
}`}
                                                note="Replace /absolute/path... with the real path to the MCP build folder on your machine, and paste your JWT Session Token from the DocuVerse dashboard. Restart Claude to apply changes."
                                            />
                                        )}
                                        {activeTab === 'cursor' && (
                                            <TabContent
                                                copyToClipboard={copyToClipboard}
                                                description="Cursor IDE supports MCP servers through a JSON configuration file, similar to Claude Desktop and Windsurf."
                                                configPaths={{ primary: { os: 'Mac/Linux', path: '~/.cursor/mcp.json' }, secondary: { os: 'Windows', path: '%USERPROFILE%\\.cursor\\mcp.json' } }}
                                                extraNote="If this file does not exist, create it manually at the path above."
                                                configJson={`{
  "mcpServers": {
    "docuverse": {
      "command": "node",
      "args": ["/absolute/path/to/docuverse/mcp-server/dist/index.js"],
      "env": {
        "DOCUVERSE_JWT_TOKEN": "<YOUR_JWT_TOKEN_HERE>",
        "DOCUVERSE_API_URL": "https://xpbgkuukxp.ap-south-1.awsapprunner.com/api"
      }
    }
  }
}`}
                                                note="Replace /absolute/path... with the real path to the MCP build folder on your machine, and paste your JWT Session Token from the DocuVerse dashboard. Restart Cursor (or reload the window) to apply changes."
                                            />
                                        )}
                                        {activeTab === 'windsurf' && (
                                            <TabContent
                                                copyToClipboard={copyToClipboard}
                                                description="Windsurf IDE natively integrates standard MCP implementations through configuration files via Cascade."
                                                configPaths={{ primary: { os: 'Mac/Linux', path: '~/.codeium/windsurf/mcp_config.json' }, secondary: { os: 'Windows', path: '%USERPROFILE%\\.codeium\\windsurf\\mcp_config.json' } }}
                                                configJson={`{
  "mcpServers": {
    "DocuVerse": {
      "command": "node",
      "args": ["/absolute/path/to/logorhythms/mcp-server/dist/index.js"],
      "env": {
        "DOCUVERSE_JWT_TOKEN": "<YOUR_TOKEN>",
        "DOCUVERSE_API_URL": "https://logorhythms.in/api"
      }
    }
  }
}`}
                                            />
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>

                    {/* AI Workflow Examples */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
                        <h3 className="text-[24px] font-medium mb-6" style={{ color: 'var(--lp-text-heading)', letterSpacing: '0.2px' }}>How an AI uses this locally</h3>

                        <div className="space-y-3">
                            {[
                                { prompt: "What repositories do I have connected to DocuVerse?", tool: "list_repositories", desc: "The AI looks up your DocuVerse account and sees your active codebase index." },
                                { prompt: "Clone the GitForge repo into this empty folder.", tool: "get_repository_clone_url", desc: "Fetches the clone URL. The AI (like Cursor Composer) then runs `git clone` natively for you." },
                                { prompt: "Analyze the impact of modifying auth.py.", tool: "analyze_file_impact", desc: "Instead of guessing, the AI queries the DocuVerse fast graph API to see the actual dependency blast radius." },
                                { prompt: "Generate an audio walkthrough for backend/api.ts", tool: "generate_walkthrough", desc: "The AI triggers the Bedrock TTS generator. It then hands you a Logorhythms playback URL directly in the chat to listen to!" },
                            ].map((example, i) => (
                                <div key={i} className="rounded-2xl p-5 flex flex-col md:flex-row gap-4 items-start md:items-center group transition-all duration-300"
                                    style={{ background: 'var(--lp-card)', border: '1px solid var(--lp-card-border)', boxShadow: 'var(--lp-shadow-ring), var(--lp-shadow-ring-inset)' }}>
                                    <div className="rounded-xl p-3 text-[14px] flex-1 w-full relative" style={{ background: 'var(--lp-bg)', border: '1px solid var(--lp-border-subtle)' }}>
                                        <span className="font-bold absolute top-3 left-3" style={{ color: 'var(--lp-accent)' }}>&gt;</span>
                                        <span className="pl-6 block leading-snug" style={{ color: 'var(--lp-text-heading)' }}>"{example.prompt}"</span>
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider py-1 px-2.5 rounded-md"
                                                style={{ color: 'var(--lp-accent)', background: 'rgba(255,99,99,0.08)', letterSpacing: '0.3px' }}>
                                                {example.tool}
                                            </span>
                                        </div>
                                        <p className="text-[13px] font-medium leading-relaxed" style={{ color: 'var(--lp-text-faint)', letterSpacing: '0.2px' }}>{example.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </main>
        </div>
    )
}

/* ── Reusable Tab Content ── */
function TabContent({
    copyToClipboard,
    description,
    configPaths,
    extraNote,
    configJson,
    note,
}: {
    copyToClipboard: (text: string) => void
    description: string
    configPaths: { primary: { os: string; path: string }; secondary: { os: string; path: string } }
    extraNote?: string
    configJson: string
    note?: string
}) {
    return (
        <div className="space-y-6">
            <p className="text-[15px] font-medium leading-[1.60]" style={{ color: 'var(--lp-text-muted)', letterSpacing: '0.2px' }}>{description}</p>

            <div className="space-y-3">
                <h4 className="text-[14px] font-semibold" style={{ color: 'var(--lp-text-body)' }}>1. Locate Config File</h4>
                <p className="text-[13px] font-medium" style={{ color: 'var(--lp-text-muted)' }}>
                    <strong>{configPaths.primary.os}:</strong>{' '}
                    <code className="px-1.5 py-0.5 rounded text-[12px]" style={{ background: 'var(--lp-bg)', color: 'var(--lp-accent)', border: '1px solid var(--lp-card-border)' }}>{configPaths.primary.path}</code>
                    <br />
                    <strong>{configPaths.secondary.os}:</strong>{' '}
                    <code className="px-1.5 py-0.5 rounded text-[12px]" style={{ background: 'var(--lp-bg)', color: 'var(--lp-accent)', border: '1px solid var(--lp-card-border)' }}>{configPaths.secondary.path}</code>
                </p>
                {extraNote && <p className="text-[13px] font-medium" style={{ color: 'var(--lp-text-faint)' }}>{extraNote}</p>}
            </div>

            <div className="space-y-3">
                <h4 className="text-[14px] font-semibold" style={{ color: 'var(--lp-text-body)' }}>2. Add Server Configuration</h4>
                <div className="relative">
                    <button onClick={() => copyToClipboard(configJson)}
                        className="absolute top-3 right-3 p-1.5 rounded-lg transition-opacity duration-200 hover:opacity-60"
                        style={{ background: 'var(--lp-surface-hover)', color: 'var(--lp-text-faint)' }}>
                        <Copy className="w-4 h-4" />
                    </button>
                    <pre className="p-5 rounded-xl text-[13px] overflow-x-auto font-mono leading-relaxed"
                        style={{ background: 'var(--lp-bg)', border: '1px solid var(--lp-card-border)', color: 'var(--lp-text-body)' }}>
                        {configJson}
                    </pre>
                </div>
            </div>

            {note && (
                <div className="p-4 rounded-xl flex gap-3 text-[13px] font-medium" style={{ background: 'rgba(255,99,99,0.06)', border: '1px solid rgba(255,99,99,0.12)', color: 'var(--lp-accent)' }}>
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <p>{note}</p>
                </div>
            )}
        </div>
    )
}
