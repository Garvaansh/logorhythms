'use client'

import { motion, useInView } from 'framer-motion'
import { Code2, Github, Globe, Zap } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

const ease = [0.23, 1, 0.32, 1] as const

function useCounter(target: number, duration = 2000) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref as any, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isInView) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else { setCount(Math.floor(start)) }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target, duration])
  return { ref, count }
}

const stats = [
  { num: 5000, suffix: '+', label: 'Files analyzed', icon: <Code2 className="w-5 h-5" /> },
  { num: 120, suffix: '+', label: 'Repos connected', icon: <Github className="w-5 h-5" /> },
  { num: 12, suffix: '', label: 'Languages', icon: <Globe className="w-5 h-5" /> },
  { num: 60, suffix: 's', label: 'Avg. walkthrough', icon: <Zap className="w-5 h-5" /> },
]

export default function RaycastStats() {
  return (
    <section className="relative py-24 sm:py-32" style={{ background: 'var(--lp-bg-alt)', borderTop: '1px solid var(--lp-border)', borderBottom: '1px solid var(--lp-border)' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => {
            const { ref, count } = useCounter(stat.num)
            return (
              <motion.div key={stat.label} className="text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-60px' }} transition={{ duration: 0.7, ease }}>
                <div className="flex items-center justify-center gap-2 mb-3" style={{ color: 'var(--lp-text-faint)' }}>{stat.icon}</div>
                <span ref={ref} className="text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight" style={{ color: 'var(--lp-text-heading)' }}>
                  {count.toLocaleString()}{stat.suffix}
                </span>
                <p className="text-[13px] mt-1 tracking-wide uppercase font-medium" style={{ color: 'var(--lp-text-muted)', letterSpacing: '0.3px' }}>{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
