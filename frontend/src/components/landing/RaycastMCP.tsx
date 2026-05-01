'use client'

import { motion } from 'framer-motion'
import { Terminal, Cpu, ArrowRight, ServerCog } from 'lucide-react'
import Link from 'next/link'

const ease = [0.23, 1, 0.32, 1] as const

export default function RaycastMCP() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden" style={{ background: 'var(--lp-bg-alt)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-50" style={{ background: 'rgba(255,99,99,0.03)' }} />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div>
            <motion.div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-semibold tracking-wider uppercase mb-5"
              style={{
                background: 'rgba(255,99,99,0.08)',
                color: 'var(--lp-accent)',
                border: '1px solid rgba(255,99,99,0.15)',
                letterSpacing: '0.3px',
              }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
              <ServerCog className="w-3.5 h-3.5" />
              Open Standard
            </motion.div>
            
            <motion.h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.05] mb-6 tracking-tight"
              style={{ color: 'var(--lp-text-heading)', letterSpacing: '0px' }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, ease }}>
              DocuVerse lives inside your AI IDE
            </motion.h2>
            
            <motion.p className="text-[16px] font-medium leading-[1.60] max-w-md mb-8"
              style={{ color: 'var(--lp-text-muted)', letterSpacing: '0.2px' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, ease, delay: 0.15 }}>
              We didn't just build a web app. We built an open Model Context Protocol (MCP) server so your favorite AI tools — like Cursor, Windsurf, and Claude Desktop — can query DocuVerse's analysis graph natively.
            </motion.p>

            <motion.ul className="space-y-4 mb-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, ease, delay: 0.25 }}>
              {[
                { title: 'analyze_file_impact', desc: 'AI maps dependency blast radius before refactoring.' },
                { title: 'generate_walkthrough', desc: 'AI triggers backend audio narration seamlessly.' },
                { title: 'Zero Context Loss', desc: 'AI looks up architecture without needing you to copy-paste.' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(255,99,99,0.1)', color: 'var(--lp-accent)' }}>
                    <Cpu className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="block text-[14px] font-bold font-mono tracking-tight" style={{ color: 'var(--lp-text-heading)' }}>{item.title}</span>
                    <span className="block text-[13px] font-medium mt-0.5" style={{ color: 'var(--lp-text-faint)' }}>{item.desc}</span>
                  </div>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, ease, delay: 0.35 }}>
              <Link href="/mcp-guide" className="inline-flex items-center gap-2 text-[14px] font-semibold transition-opacity hover:opacity-70"
                style={{ color: 'var(--lp-accent)', letterSpacing: '0.2px' }}>
                Read the Integration Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            className="relative rounded-2xl overflow-hidden p-6 sm:p-8"
            style={{
              background: 'var(--lp-card)',
              border: '1px solid var(--lp-card-border)',
              boxShadow: 'var(--lp-shadow-ring), var(--lp-shadow-ring-inset)',
            }}
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.9, ease }}
          >
            <div className="flex items-center gap-3 mb-6 pb-6" style={{ borderBottom: '1px solid var(--lp-border)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--lp-surface)', border: '1px solid var(--lp-border-subtle)' }}>
                <Terminal className="w-5 h-5" style={{ color: 'var(--lp-text-muted)' }} />
              </div>
              <div>
                <h3 className="text-[14px] font-semibold" style={{ color: 'var(--lp-text-heading)' }}>Cursor Composer</h3>
                <p className="text-[12px] font-medium" style={{ color: 'var(--lp-text-faint)' }}>Connected via DocuVerse MCP</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[var(--lp-bg)] rounded-xl p-4 border border-[var(--lp-border-subtle)]">
                <p className="text-[13px] font-medium mb-3" style={{ color: 'var(--lp-text-body)' }}>"Can you explain how the payment flow works in this repo?"</p>
                <div className="flex items-center gap-2 mt-4 pt-3" style={{ borderTop: '1px dashed var(--lp-border)' }}>
                  <div className="flex items-center justify-center w-5 h-5 rounded animate-pulse" style={{ background: 'rgba(255,99,99,0.1)' }}>
                    <ServerCog className="w-3 h-3" style={{ color: 'var(--lp-accent)' }} />
                  </div>
                  <span className="text-[11px] font-mono font-medium tracking-wide" style={{ color: 'var(--lp-text-muted)' }}>Using Tool: generate_walkthrough</span>
                </div>
              </div>

              <div className="flex gap-3 items-end">
                <div className="w-8 h-8 rounded-full shrink-0" style={{ background: 'var(--lp-surface)' }} />
                <div className="bg-[var(--lp-surface)] rounded-xl rounded-bl-sm p-4 border border-[var(--lp-border-subtle)]">
                  <p className="text-[13px] font-medium leading-relaxed" style={{ color: 'var(--lp-text-muted)' }}>
                    I've requested DocuVerse to generate a narrated walkthrough for the payment flow. You can listen to it here:
                  </p>
                  <a href="#" className="inline-flex items-center gap-1.5 mt-3 text-[12px] font-medium px-3 py-1.5 rounded-lg"
                    style={{ background: 'rgba(255,99,99,0.08)', color: 'var(--lp-accent)' }}>
                    Listen to Walkthrough
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
