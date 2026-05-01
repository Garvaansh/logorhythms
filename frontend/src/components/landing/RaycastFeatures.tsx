'use client'

import { motion } from 'framer-motion'
import { Mic, Layers, Terminal, Braces, Shield, BarChart3 } from 'lucide-react'

const ease = [0.23, 1, 0.32, 1] as const

const features = [
  { icon: <Mic className="w-5 h-5" />, title: 'AI Voice Narration', desc: 'An AI senior engineer narrates your code with perfectly synced audio. Line-by-line highlighting follows along.' },
  { icon: <Layers className="w-5 h-5" />, title: 'Architecture Diagrams', desc: 'Auto-generated flow charts and architecture diagrams for every file and module relationship.' },
  { icon: <Terminal className="w-5 h-5" />, title: 'Live Sandbox', desc: 'Run and test code snippets instantly, right inside the walkthrough. No setup needed.' },
  { icon: <Braces className="w-5 h-5" />, title: 'Tree-sitter AST', desc: 'Accurate function, class, and scope extraction across Python, JS, TS, Java, Go, and Rust.' },
  { icon: <Shield className="w-5 h-5" />, title: 'Private Repos', desc: 'Securely connect private GitHub repositories. Your code never leaves your session.' },
  { icon: <BarChart3 className="w-5 h-5" />, title: 'Impact Analysis', desc: 'See the blast radius of any change before you make it. Understand every dependency.' },
]

export default function RaycastFeatures() {
  return (
    <section id="features" className="relative py-28 sm:py-36" style={{ background: 'var(--lp-bg)' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <motion.p
            className="text-[14px] font-medium mb-4"
            style={{ color: 'var(--lp-accent)', letterSpacing: '0.2px' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}
          >
            What&apos;s Inside
          </motion.p>
          <motion.h2
            className="text-[56px] font-normal leading-[1.17] max-w-2xl"
            style={{ color: 'var(--lp-text-heading)', letterSpacing: '0.2px', fontFeatureSettings: '"calt" 1, "kern" 1, "liga" 1, "ss03" 1' }}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, ease }}
          >
            Powerful features, built for deep understanding
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              className="group relative p-7 rounded-2xl transition-all duration-300"
              style={{
                background: 'var(--lp-card)',
                border: '1px solid var(--lp-card-border)',
                boxShadow: 'var(--lp-shadow-ring), var(--lp-shadow-ring-inset)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.07 }}
              whileHover={{ borderColor: 'rgba(255,255,255,0.12)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(255,99,99,0.08)', color: 'var(--lp-accent)' }}
              >
                {feat.icon}
              </div>
              <h3 className="text-[22px] font-normal leading-[1.15] mb-3" style={{ color: 'var(--lp-text-heading)', letterSpacing: '0px' }}>
                {feat.title}
              </h3>
              <p className="text-[16px] font-medium leading-[1.60]" style={{ color: 'var(--lp-text-muted)', letterSpacing: '0.2px' }}>
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
