'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useCallback } from 'react'
import { useUserStore } from '@/lib/store'
import { useRouter } from 'next/navigation'
import WireframeSphere from './WireframeSphere'

const ease = [0.23, 1, 0.32, 1] as const

export default function RaycastHero() {
  const { isAuthenticated } = useUserStore()
  const router = useRouter()
  const handleAuthClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    router.push(token ? '/dashboard' : '/auth/signin')
  }, [router])
  const authTarget = isAuthenticated ? '/dashboard' : '/auth/signin'

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Diagonal stripe — Raycast Red signature */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[-30%] right-[15%] w-[200px] h-[200vh]"
          style={{
            background: 'linear-gradient(to bottom, transparent 20%, rgba(255,99,99,0.04) 40%, rgba(255,99,99,0.06) 50%, rgba(255,99,99,0.04) 60%, transparent 80%)',
            transform: 'rotate(-35deg)',
            transformOrigin: 'top center',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute top-[-20%] left-[5%] w-[1px] h-[140vh]"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.03), transparent)',
            transform: 'rotate(25deg)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          {/* Left — Title */}
          <div className="max-w-xl">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md mb-8"
              style={{
                background: 'var(--lp-surface)',
                border: '1px solid var(--lp-card-border)',
                boxShadow: 'var(--lp-shadow-ring)',
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#5fc992]" />
              <span className="text-[12px] font-semibold" style={{ color: 'var(--lp-text-muted)', letterSpacing: '0.2px' }}>Now with MCP & IDE support</span>
            </motion.div>

            <motion.h1
              className="text-[64px] font-semibold leading-[1.10] mb-6"
              style={{
                color: 'var(--lp-text-heading)',
                letterSpacing: '0px',
                fontFeatureSettings: '"liga" 0, "ss02" 1, "ss08" 1',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
            >
              Your code,{' '}
              <span style={{ color: 'var(--lp-accent)' }}>narrated</span>
              <br />by AI
            </motion.h1>

            <motion.p
              className="text-[16px] font-medium leading-[1.60] max-w-md mb-10"
              style={{ color: 'var(--lp-text-body)', letterSpacing: '0.2px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.4 }}
            >
              AI reads your code like a senior engineer, narrates every file with audio, and generates interactive architecture maps. Understand any codebase in minutes.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.6 }}
            >
              <Link
                href={authTarget}
                onClick={handleAuthClick}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-[86px] text-[16px] font-semibold transition-opacity duration-200 hover:opacity-80 active:scale-[0.97]"
                style={{
                  background: 'var(--lp-cta-bg)',
                  color: 'var(--lp-cta-text)',
                  letterSpacing: '0.3px',
                  boxShadow: 'var(--lp-shadow-btn)',
                }}
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center px-5 py-3 rounded-[86px] text-[16px] font-semibold transition-opacity duration-200 hover:opacity-60"
                style={{
                  color: 'var(--lp-text-muted)',
                  border: '1px solid var(--lp-card-border)',
                  boxShadow: 'rgba(255,255,255,0.1) 0px 1px 0px 0px inset',
                  letterSpacing: '0.3px',
                }}
              >
                See how it works
              </Link>
            </motion.div>
          </div>

          {/* Right — Orb */}
          <motion.div
            className="relative lg:justify-self-center w-full max-w-[480px] aspect-square flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease, delay: 0.3 }}
          >
            <WireframeSphere />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}>
        <motion.div className="w-5 h-8 rounded-full border flex items-start justify-center p-1" style={{ borderColor: 'var(--lp-scroll-border)' }}>
          <motion.div className="w-1 h-1.5 rounded-full" style={{ background: 'var(--lp-scroll-dot)' }}
            animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
