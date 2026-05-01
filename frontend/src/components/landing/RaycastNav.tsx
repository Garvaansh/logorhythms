'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Terminal, Sun, Moon } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { useUserStore, useUIStore } from '@/lib/store'
import { useRouter } from 'next/navigation'

export default function RaycastNav() {
  const { isAuthenticated } = useUserStore()
  const router = useRouter()
  const theme = useUIStore((s) => s.theme)
  const setTheme = useUIStore((s) => s.setTheme)
  const isDark = theme !== 'light'
  const toggleTheme = useCallback(() => setTheme(isDark ? 'light' : 'dark'), [isDark, setTheme])
  const [scrolled, setScrolled] = useState(false)

  const handleAuthClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    router.push(token ? '/dashboard' : '/auth/signin')
  }, [router])

  const authTarget = isAuthenticated ? '/dashboard' : '/auth/signin'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(7,8,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--lp-border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <img src="/logo.png" alt="DocuVerse" className="w-7 h-7 rounded-lg object-cover" />
          <span className="text-[15px] font-semibold tracking-tight" style={{ color: 'var(--lp-text-heading)', letterSpacing: '0.2px' }}>DocuVerse</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {['Features', 'How It Works', 'Pricing'].map((item) => (
            <button
              key={item}
              className="text-[15px] font-medium transition-opacity duration-200 hover:opacity-60"
              style={{ color: 'var(--lp-text-muted)', letterSpacing: '0.3px' }}
              onClick={() => {
                if (item === 'Pricing') { router.push('/pricing'); return }
                document.getElementById(item.toLowerCase().replace(/\s+/g, '-'))?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {item}
            </button>
          ))}
          <Link href="/mcp-guide" className="text-[15px] font-medium transition-opacity duration-200 hover:opacity-60 flex items-center gap-1.5" style={{ color: 'var(--lp-text-muted)', letterSpacing: '0.3px' }}>
            <Terminal className="w-3.5 h-3.5" /> IDE
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity duration-200 hover:opacity-60" style={{ border: '1px solid var(--lp-card-border)' }} aria-label="Toggle theme">
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Sun className="w-3.5 h-3.5" style={{ color: 'var(--lp-text-muted)' }} />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Moon className="w-3.5 h-3.5" style={{ color: 'var(--lp-text-muted)' }} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <Link
            href={authTarget}
            onClick={handleAuthClick}
            className="hidden sm:inline-flex items-center px-5 py-2 rounded-[86px] text-[14px] font-semibold transition-opacity duration-200 hover:opacity-80"
            style={{
              background: 'var(--lp-cta-bg)',
              color: 'var(--lp-cta-text)',
              letterSpacing: '0.3px',
              boxShadow: 'var(--lp-shadow-btn)',
            }}
          >
            {isAuthenticated ? 'Dashboard' : 'Get Started'}
          </Link>
        </div>
      </div>
    </header>
  )
}
