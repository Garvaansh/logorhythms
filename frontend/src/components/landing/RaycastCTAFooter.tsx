'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const ease = [0.23, 1, 0.32, 1] as const

export default function RaycastCTAFooter() {
  return (
    <>
      {/* ─── CTA ─── */}
      <section className="relative py-40 sm:py-52 overflow-hidden" style={{ background: 'var(--lp-card)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full blur-[80px]" style={{ background: 'rgba(255,99,99,0.03)' }} />
          <div className="absolute bottom-[10%] right-[15%] w-[300px] h-[300px] rounded-full blur-[60px]" style={{ background: 'var(--lp-warm-glow)' }} />
        </div>
        <motion.div className="relative z-10 max-w-2xl mx-auto text-center px-6"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} transition={{ duration: 0.8, ease }}>
          <h2 className="text-[clamp(2.2rem,6vw,4.5rem)] font-semibold tracking-tight leading-[0.95] mb-6" style={{ color: 'var(--lp-text-heading)' }}>
            Start building<br />understanding
          </h2>
          <p className="text-[18px] font-normal leading-[1.15] mb-12 max-w-md mx-auto" style={{ color: 'var(--lp-text-muted)', letterSpacing: '0.2px' }}>
            Connect a repo. Get your first walkthrough in under 60 seconds. No credit card required.
          </p>
          <Link href="/auth/signin"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-[86px] text-[16px] font-semibold transition-opacity duration-200 hover:opacity-80 active:scale-[0.97]"
            style={{
              background: 'var(--lp-cta-bg)',
              color: 'var(--lp-cta-text)',
              letterSpacing: '0.3px',
              boxShadow: 'var(--lp-shadow-btn)',
            }}>
            Get Started Free
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: 'var(--lp-bg)', borderTop: '1px solid var(--lp-border)' }} className="py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-3">
                <img src="/logo.png" alt="DocuVerse" className="w-6 h-6 rounded-md object-cover" />
                <span className="text-[14px] font-semibold" style={{ color: 'var(--lp-text-body)', letterSpacing: '0.2px' }}>DocuVerse</span>
              </Link>
              <p className="text-[13px] max-w-xs font-medium" style={{ color: 'var(--lp-text-muted)', letterSpacing: '0.2px' }}>Transform complex codebases into interactive, audio & visual walkthroughs.</p>
            </div>
            <div className="flex gap-10">
              <div className="space-y-3">
                <span className="text-[12px] tracking-wider uppercase font-semibold" style={{ color: 'var(--lp-text-faint)' }}>Product</span>
                <div className="space-y-2">
                  <Link href="/demo" className="block text-[13px] font-medium transition-opacity duration-200 hover:opacity-60" style={{ color: 'var(--lp-text-label)', letterSpacing: '0.2px' }}>Demo</Link>
                  <Link href="/mcp-guide" className="block text-[13px] font-medium transition-opacity duration-200 hover:opacity-60" style={{ color: 'var(--lp-text-label)', letterSpacing: '0.2px' }}>IDE Plugin</Link>
                </div>
              </div>
              <div className="space-y-3">
                <span className="text-[12px] tracking-wider uppercase font-semibold" style={{ color: 'var(--lp-text-faint)' }}>Company</span>
                <div className="space-y-2">
                  <Link href="/auth/signin" className="block text-[13px] font-medium transition-opacity duration-200 hover:opacity-60" style={{ color: 'var(--lp-text-label)', letterSpacing: '0.2px' }}>Sign in</Link>
                  <span className="block text-[13px] font-medium" style={{ color: 'var(--lp-text-label)', letterSpacing: '0.2px' }}>Team BitMask</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 flex items-center justify-between" style={{ borderTop: '1px solid var(--lp-border)' }}>
            <span className="text-[12px] font-medium" style={{ color: 'var(--lp-text-faint)', letterSpacing: '0.2px' }}>© 2026 DocuVerse</span>
            <span className="text-[12px] font-medium" style={{ color: 'var(--lp-text-faint)', letterSpacing: '0.2px' }}>Built with love by Logorhythms AI</span>
          </div>
        </div>
      </footer>
    </>
  )
}
