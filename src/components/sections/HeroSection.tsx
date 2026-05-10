'use client'

import Link from 'next/link'
import { currentlyItems } from '@/lib/data'

const dotColors: Record<string, string> = {
  pink: '#E8A4B0',
  peach: '#F0C4AA',
  lavender: '#C4B8D4',
  cyan: '#A8D4D8',
}

export function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '68px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,164,176,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,212,216,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: '80px',
          alignItems: 'center',
        }} className="hero-grid">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '14px' }}>✦</span>
              <span style={{ fontFamily: 'var(--font-accent)', fontSize: '13px', color: 'var(--dust-gray)' }}>
                Kon&apos;nichiwa! 👋
              </span>
            </div>

            <h1 className="display-heading" style={{ fontSize: 'clamp(44px, 6vw, 72px)', color: 'var(--charcoal)', marginBottom: '24px' }}>
              Bringing<br />
              stories{' '}
              <span className="gradient-text">to life</span>
              <br />
              through<br />
              illustration.
            </h1>

            <p style={{ fontSize: '15px', color: 'var(--dust-gray)', lineHeight: 1.75, marginBottom: '40px', maxWidth: '380px' }}>
              I create colorful anime-style illustrations and visual assets for VTubers, games, and creative projects.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '56px' }}>
              <Link href="/portfolio" className="btn-primary">
                View Portfolio →
              </Link>
              <Link href="/about" className="btn-secondary">
                About Me →
              </Link>
            </div>

            <div className="scroll-indicator">
              <div className="scroll-indicator-line" />
              <span>Scroll Down</span>
              <span style={{ fontSize: '14px', opacity: 0.5 }}>🐰</span>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              fontSize: '13px',
              color: 'var(--dust-gray)',
              fontFamily: 'var(--font-accent)',
              zIndex: 10,
            }}>
              <span style={{ color: 'var(--sakura-pink)' }} className="sparkle">✦</span>
              {'  '}
              <span style={{ color: 'var(--sakura-pink)' }} className="sparkle" >✦</span>
            </div>

            <div style={{
              position: 'absolute',
              top: '20px',
              left: '-20px',
              fontSize: '11px',
              color: 'var(--dust-gray)',
            }} className="sparkle">
              ✦
            </div>

            <div style={{
              position: 'absolute',
              bottom: '60px',
              right: '-30px',
              fontSize: '9px',
              color: 'var(--dust-gray)',
            }} className="sparkle">
              ✦ ✦
            </div>

            <div className="hero-artwork" style={{ aspectRatio: '3/4', maxHeight: '580px', position: 'relative' }}>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #4a1a2a 0%, #8a3a4a 35%, #c8708a 60%, #e8a4b0 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '80px',
                borderRadius: '16px',
              }}>
                🌸
              </div>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(44,40,37,0.3) 0%, transparent 40%)',
                borderRadius: '16px',
              }} />
            </div>

            <div
              className="currently-card"
              style={{
                position: 'absolute',
                bottom: '32px',
                left: '-32px',
                width: '220px',
                animation: 'float 7s ease-in-out infinite',
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--charcoal)', marginBottom: '14px', textTransform: 'uppercase' }}>
                Currently
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {currentlyItems.map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: dotColors[item.dot] }} />
                      <span style={{ fontSize: '12px', color: 'var(--charcoal)', fontFamily: 'var(--font-accent)' }}>
                        {item.label}
                      </span>
                    </div>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: dotColors[item.dot], opacity: 0.3 }} />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '14px', textAlign: 'right', fontSize: '16px', opacity: 0.4 }}>🐰</div>
            </div>

            <div style={{
              position: 'absolute',
              top: '-16px',
              right: '24px',
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(44,40,37,0.08)',
              borderRadius: '99px',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '11px',
              color: 'var(--charcoal)',
              fontFamily: 'var(--font-accent)',
              animation: 'float 8s ease-in-out 1s infinite',
            }}>
              <span className="availability-dot" />
              Open for commissions
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
