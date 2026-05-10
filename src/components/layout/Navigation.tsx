'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Projects', href: '/projects' },
  { label: 'Notes', href: '/notes' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(247, 243, 238, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(44, 40, 37, 0.06)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%',
              background: 'rgba(232, 164, 176, 0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '16px',
            }}>
              🐰
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 400, color: 'var(--charcoal)', letterSpacing: '0.02em', lineHeight: 1 }}>
                MujiiRu
              </div>
              <div style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--dust-gray)', lineHeight: 1, marginTop: '2px' }}>
                studio
              </div>
            </div>
          </Link>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden-mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              background: 'rgba(255,255,255,0.8)',
              border: '1px solid rgba(44,40,37,0.08)',
              borderRadius: '99px',
              padding: '7px 16px',
              fontSize: '11px',
              color: 'var(--dust-gray)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-accent)',
              whiteSpace: 'nowrap',
            }}>
              Let&apos;s create something fun! ✦
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--charcoal)',
                fontSize: '20px',
              }}
              className="menu-toggle"
              aria-label="Toggle menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div style={{
          background: 'rgba(247, 243, 238, 0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(44,40,37,0.06)',
          padding: '24px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                fontWeight: 300,
                color: pathname === item.href ? 'var(--coral)' : 'var(--charcoal)',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .menu-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
