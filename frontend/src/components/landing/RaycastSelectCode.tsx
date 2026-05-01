'use client'

import { motion } from 'framer-motion'
import { MousePointerClick, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

const ease = [0.23, 1, 0.32, 1] as const

const codeLines = [
  { n: 1, tokens: [{ t: 'async', c: '#c084fc' }, { t: ' ', c: '' }, { t: 'def', c: '#c084fc' }, { t: ' ', c: '' }, { t: 'process_payment', c: '#818cf8' }, { t: '(self, order):', c: '#94a3b8' }] },
  { n: 2, tokens: [{ t: '    amount = order.', c: '#94a3b8' }, { t: 'calculate_total', c: '#818cf8' }, { t: '()', c: '#94a3b8' }] },
  { n: 3, tokens: [{ t: '    ', c: '' }, { t: 'if', c: '#c084fc' }, { t: ' amount <= 0:', c: '#94a3b8' }] },
  { n: 4, tokens: [{ t: '        ', c: '' }, { t: 'raise', c: '#c084fc' }, { t: ' ', c: '' }, { t: 'ValueError', c: '#67e8f9' }, { t: '(', c: '#94a3b8' }, { t: '"Invalid amount"', c: '#5fc992' }, { t: ')', c: '#94a3b8' }] },
  { n: 5, tokens: [{ t: '    intent = ', c: '#94a3b8' }, { t: 'await', c: '#c084fc' }, { t: ' stripe.', c: '#94a3b8' }, { t: 'create_intent', c: '#818cf8' }, { t: '(amount)', c: '#94a3b8' }] },
  { n: 6, tokens: [{ t: '    ', c: '' }, { t: 'return', c: '#c084fc' }, { t: ' intent.client_secret', c: '#94a3b8' }] },
]

const explainContent = {
  title: 'stripe.create_intent(amount)',
  explanation: 'This calls the Stripe API to create a PaymentIntent — a server-side object that represents a single payment attempt. The `amount` parameter is passed in the smallest currency unit (e.g. cents). The returned `client_secret` is used on the frontend to confirm the payment securely.',
  references: ['stripe.py:L42', 'config.py:L18'],
}

export default function RaycastSelectCode() {
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => setSelected(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [selected])

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden" style={{ background: 'var(--lp-bg)' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            <motion.p className="text-[14px] font-medium mb-4" style={{ color: 'var(--lp-accent)', letterSpacing: '0.2px' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
              Inline Explain
            </motion.p>
            <motion.h2 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.10] mb-6"
              style={{ color: 'var(--lp-text-heading)', letterSpacing: '0px' }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, ease }}>
              Select any code.{' '}
              <span style={{ color: 'var(--lp-accent)' }}>Get instant AI explanations.</span>
            </motion.h2>
            <motion.p className="text-[16px] font-medium leading-[1.60] max-w-md mb-8"
              style={{ color: 'var(--lp-text-muted)', letterSpacing: '0.2px' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, ease, delay: 0.15 }}>
              Highlight any function, class, or block of code in the walkthrough player. An AI-powered panel slides in with a clear, contextual explanation — like having a senior engineer on speed dial.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, ease, delay: 0.3 }}>
              {['Function deep-dives', 'Cross-file references', 'Security insights', 'Performance notes'].map((tag) => (
                <span key={tag} className="inline-flex items-center px-3 py-1.5 rounded-md text-[12px] font-semibold"
                  style={{
                    background: 'var(--lp-surface)',
                    color: 'var(--lp-text-label)',
                    border: '1px solid var(--lp-card-border)',
                    letterSpacing: '0.2px',
                  }}>
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Interactive Demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="flex rounded-2xl overflow-hidden"
              style={{
                background: 'var(--lp-card)',
                border: '1px solid var(--lp-card-border)',
                boxShadow: 'var(--lp-shadow-ring), var(--lp-shadow-ring-inset), 0 30px 80px rgba(0,0,0,0.2)',
              }}>
              {/* Code panel */}
              <div className="flex-1 min-w-0 overflow-x-auto">
                {/* File tab */}
                <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: '1px solid var(--lp-border)' }}>
                  <span className="text-[11px] font-mono font-medium" style={{ color: 'var(--lp-text-faint)' }}>payment_service.py</span>
                </div>

                {/* Code lines */}
                <div className="font-mono text-[12px] leading-[2.1] p-4">
                  {codeLines.map((l, i) => (
                    <motion.div
                      key={l.n}
                      className="flex items-center rounded-md px-2 -mx-2 cursor-pointer transition-all duration-200"
                      style={{
                        background: (selected && l.n === 5) ? 'rgba(255,99,99,0.06)' : 'transparent',
                        borderLeft: (selected && l.n === 5) ? '2px solid var(--lp-accent)' : '2px solid transparent',
                      }}
                      onClick={() => setSelected(true)}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: i * 0.04, duration: 0.4, ease }}
                    >
                      <span className="w-6 text-right text-[10px] select-none pr-3 shrink-0" style={{ color: 'var(--lp-text-faint)' }}>{l.n}</span>
                      <span className="flex-1 whitespace-pre">
                        {l.tokens.map((tok, ti) => (<span key={ti} style={{ color: tok.c || '#94a3b8' }}>{tok.t}</span>))}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Click hint */}
                {!selected && (
                  <motion.div className="flex items-center gap-2 px-5 pb-4"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                    <MousePointerClick className="w-3.5 h-3.5" style={{ color: 'var(--lp-text-faint)' }} />
                    <span className="text-[11px] font-medium" style={{ color: 'var(--lp-text-faint)' }}>Click any line to try</span>
                  </motion.div>
                )}
              </div>

              {/* Explain panel — slides in on select */}
              <motion.div
                className="overflow-hidden shrink-0 z-10"
                initial={{ width: 0, opacity: 0 }}
                animate={selected ? { width: 260, opacity: 1 } : { width: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease }}
                style={{ borderLeft: selected ? '1px solid var(--lp-border)' : 'none', background: 'var(--lp-card)' }}
              >
                <div className="w-[260px] p-5">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,99,99,0.1)' }}>
                      <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--lp-accent)' }} />
                    </div>
                    <span className="text-[12px] font-semibold" style={{ color: 'var(--lp-accent)', letterSpacing: '0.3px' }}>AI EXPLAIN</span>
                  </div>

                  {/* Selected code */}
                  <div className="rounded-lg p-3 mb-4 font-mono text-[11px]"
                    style={{ background: 'var(--lp-bg)', border: '1px solid var(--lp-border-subtle)', color: 'var(--lp-text-body)' }}>
                    {explainContent.title}
                  </div>

                  {/* Explanation */}
                  <p className="text-[13px] font-medium leading-[1.65] mb-4" style={{ color: 'var(--lp-text-muted)', letterSpacing: '0.2px' }}>
                    {explainContent.explanation}
                  </p>

                  {/* References */}
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider mb-2 block" style={{ color: 'var(--lp-text-faint)' }}>References</span>
                    <div className="flex flex-wrap gap-1.5">
                      {explainContent.references.map((ref) => (
                        <span key={ref} className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium"
                          style={{ background: 'rgba(255,99,99,0.06)', color: 'var(--lp-accent)', border: '1px solid rgba(255,99,99,0.1)' }}>
                          {ref}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Warm glow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-[50px] rounded-full blur-[40px]" style={{ background: 'var(--lp-warm-glow)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
