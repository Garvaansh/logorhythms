'use client'

import { motion } from 'framer-motion'
import { Play, Mic, Layers, FileCode, Headphones } from 'lucide-react'

const ease = [0.23, 1, 0.32, 1] as const

export default function RaycastProductPreview() {
  return (
    <section className="relative py-24 sm:py-32" style={{ background: 'var(--lp-bg)' }}>
      <div className="max-w-[1000px] mx-auto px-6">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} transition={{ duration: 0.8, ease }}>
          <p className="text-[14px] font-medium mb-4" style={{ color: 'var(--lp-accent)', letterSpacing: '0.2px' }}>See it in action</p>
          <h2 className="text-[40px] font-normal leading-[1.17]" style={{ color: 'var(--lp-text-heading)', letterSpacing: '0.2px' }}>
            Your code, narrated by AI
          </h2>
        </motion.div>

        <motion.div className="relative"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} transition={{ duration: 1, ease }}>
          {/* Browser mockup */}
          <div className="relative rounded-2xl overflow-hidden"
            style={{
              background: 'var(--lp-card)',
              border: '1px solid var(--lp-card-border)',
              boxShadow: 'var(--lp-shadow-ring), var(--lp-shadow-ring-inset), 0 30px 80px rgba(0,0,0,0.25)',
            }}>
            {/* Chrome bar */}
            <div className="flex items-center gap-2.5 px-5 py-3.5" style={{ background: 'var(--lp-surface)', borderBottom: '1px solid var(--lp-border)' }}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]/60" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]/60" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <span className="text-[11px] font-mono flex items-center gap-1.5" style={{ color: 'var(--lp-text-faint)' }}>
                  <FileCode className="w-3 h-3" /> auth_service.py
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#5fc992] bg-[#5fc992]/10 px-2 py-0.5 rounded">
                <Headphones className="w-3 h-3" /> NARRATING
              </div>
            </div>

            {/* Code */}
            <div className="font-mono text-[12.5px] leading-[2] p-5 sm:p-6">
              {[
                { n: 1, hl: false, tokens: [{ t: 'class', c: '#c084fc' }, { t: ' AuthService', c: '#67e8f9' }, { t: ':', c: '#a5b4fc' }] },
                { n: 2, hl: false, tokens: [{ t: '    ', c: '' }, { t: '"""Handle JWT authentication."""', c: '#5fc992' }] },
                { n: 3, hl: false, tokens: [] },
                { n: 4, hl: true, tokens: [{ t: '    ', c: '' }, { t: 'async', c: '#c084fc' }, { t: ' ', c: '' }, { t: 'def', c: '#c084fc' }, { t: ' ', c: '' }, { t: 'verify_token', c: '#818cf8' }, { t: '(self, token):', c: '#94a3b8' }] },
                { n: 5, hl: true, tokens: [{ t: '        payload = jwt.', c: '#94a3b8' }, { t: 'decode', c: '#818cf8' }, { t: '(token)', c: '#94a3b8' }] },
                { n: 6, hl: true, tokens: [{ t: '        user_id = payload.', c: '#94a3b8' }, { t: 'get', c: '#818cf8' }, { t: '(', c: '#94a3b8' }, { t: '"sub"', c: '#5fc992' }, { t: ')', c: '#94a3b8' }] },
                { n: 7, hl: false, tokens: [{ t: '        ', c: '' }, { t: 'if', c: '#c084fc' }, { t: ' ', c: '' }, { t: 'not', c: '#c084fc' }, { t: ' user_id:', c: '#94a3b8' }] },
                { n: 8, hl: false, tokens: [{ t: '            ', c: '' }, { t: 'raise', c: '#c084fc' }, { t: ' ', c: '' }, { t: 'InvalidCredentials', c: '#67e8f9' }, { t: '()', c: '#94a3b8' }] },
                { n: 9, hl: false, tokens: [{ t: '        ', c: '' }, { t: 'return', c: '#c084fc' }, { t: ' ', c: '' }, { t: 'await', c: '#c084fc' }, { t: ' self.repo.', c: '#94a3b8' }, { t: 'get', c: '#818cf8' }, { t: '(id)', c: '#94a3b8' }] },
              ].map((l, i) => (
                <motion.div key={l.n}
                  className={`flex items-center rounded-md px-2 -mx-2 ${l.hl ? 'border-l-2' : 'border-l-2 border-transparent'}`}
                  style={l.hl ? { background: 'rgba(255,99,99,0.04)', borderColor: 'var(--lp-accent)' } : {}}
                  initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }} transition={{ delay: i * 0.05, duration: 0.4, ease }}>
                  <span className="w-7 text-right text-[11px] select-none pr-3 shrink-0 font-mono" style={{ color: 'var(--lp-text-faint)' }}>{l.n}</span>
                  <span className="flex-1 whitespace-pre">
                    {l.tokens.map((tok, ti) => (<span key={ti} style={{ color: tok.c || '#94a3b8' }}>{tok.t}</span>))}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Audio bar */}
            <div className="flex items-center gap-3 px-5 py-3" style={{ background: 'var(--lp-surface)', borderTop: '1px solid var(--lp-border)' }}>
              <button className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--lp-accent)' }}>
                <Play className="w-3 h-3 text-white ml-[1px]" fill="white" />
              </button>
              <div className="flex-1 flex items-center gap-[2px] h-5">
                {Array.from({ length: 50 }).map((_, i) => (
                  <motion.div key={i} className="flex-1 rounded-full"
                    style={{ minWidth: 2, background: 'rgba(255,99,99,0.4)' }}
                    initial={{ height: '30%' }}
                    animate={{ height: `${20 + Math.random() * 80}%` }}
                    transition={{ duration: 0.5 + Math.random() * 0.5, repeat: Infinity, repeatType: 'reverse', delay: i * 0.02 }} />
                ))}
              </div>
              <span className="text-[10px] font-mono tabular-nums shrink-0" style={{ color: 'var(--lp-text-faint)' }}>1:24</span>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div className="absolute -top-4 -right-4 sm:-right-8 rounded-xl px-4 py-3"
            style={{ background: 'var(--lp-card)', border: '1px solid var(--lp-card-border)', boxShadow: 'var(--lp-shadow-ring), 0 8px 30px rgba(0,0,0,0.15)' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} transition={{ delay: 0.6, duration: 0.6, ease }}
            animate={{ y: [0, -6, 0] }}>
            <div className="flex items-center gap-2">
              <Mic className="w-4 h-4" style={{ color: 'var(--lp-accent)' }} />
              <span className="text-[12px] font-semibold" style={{ color: 'var(--lp-text-body)' }}>AI Narration Active</span>
            </div>
          </motion.div>

          <motion.div className="absolute -bottom-4 -left-4 sm:-left-8 rounded-xl px-4 py-3"
            style={{ background: 'var(--lp-card)', border: '1px solid var(--lp-card-border)', boxShadow: 'var(--lp-shadow-ring), 0 8px 30px rgba(0,0,0,0.15)' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} transition={{ delay: 0.8, duration: 0.6, ease }}
            animate={{ y: [0, -4, 0] }}>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4" style={{ color: 'var(--lp-accent)' }} />
              <span className="text-[12px] font-semibold" style={{ color: 'var(--lp-text-body)' }}>Architecture Mapped</span>
            </div>
          </motion.div>

          {/* Warm glow under mockup — Raycast signature */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-[60px] rounded-full blur-[40px]" style={{ background: 'var(--lp-warm-glow)' }} />
        </motion.div>
      </div>
    </section>
  )
}
