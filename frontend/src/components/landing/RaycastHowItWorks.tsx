'use client'

import { motion } from 'framer-motion'
import { GitBranch, Sparkles, Play } from 'lucide-react'

const ease = [0.23, 1, 0.32, 1] as const

const steps = [
  { num: '01', icon: <GitBranch className="w-5 h-5" />, title: 'Drop in any GitHub repo', desc: 'Just connect your repository. DocuVerse clones the repo, analyses every file, and maps out every function, class, and dependency in seconds.' },
  { num: '02', icon: <Sparkles className="w-5 h-5" />, title: 'AI builds your walkthrough', desc: 'Our AI reads your code like a senior engineer and writes a clear, file-by-file narration. Text-to-speech generates perfectly synced audio.' },
  { num: '03', icon: <Play className="w-5 h-5" />, title: 'Explore, listen, and experiment', desc: 'Hit play and watch the code scroll in sync with AI narration. Tap into interactive architecture diagrams and spin up a live sandbox.' },
]

export default function RaycastHowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 sm:py-36" style={{ background: 'var(--lp-bg)' }}>
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="mb-20">
          <motion.p className="text-[14px] font-medium mb-4" style={{ color: 'var(--lp-accent)', letterSpacing: '0.2px' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
            How It Works
          </motion.p>
          <motion.h2 className="text-[56px] font-normal leading-[1.17]"
            style={{ color: 'var(--lp-text-heading)', letterSpacing: '0.2px', fontFeatureSettings: '"calt" 1, "kern" 1, "liga" 1, "ss03" 1' }}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, ease }}>
            Three steps to clarity
          </motion.h2>
        </div>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div key={step.num} className="flex gap-8 sm:gap-10 items-start"
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-80px' }} transition={{ duration: 0.7, ease, delay: i * 0.1 }}>
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'var(--lp-card)',
                    border: '1px solid var(--lp-card-border)',
                    color: 'var(--lp-accent)',
                    boxShadow: 'var(--lp-shadow-ring), var(--lp-shadow-ring-inset)',
                  }}>
                  {step.icon}
                </div>
              </div>
              <div className="pt-0.5">
                <span className="text-[12px] font-semibold tracking-wider mb-2 block" style={{ color: 'var(--lp-text-faint)' }}>STEP {step.num}</span>
                <h3 className="text-[24px] font-medium leading-normal mb-3" style={{ color: 'var(--lp-text-heading)', letterSpacing: '0.2px' }}>{step.title}</h3>
                <p className="text-[16px] font-medium leading-[1.60] max-w-lg" style={{ color: 'var(--lp-text-muted)', letterSpacing: '0.2px' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
