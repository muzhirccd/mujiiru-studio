'use client'
import Link from 'next/link'

export function CtaSection() {
  return (
    <section style={{
      padding: '100px 0',
      background: 'var(--charcoal)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,164,176,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        top: '20px',
        left: '10%',
        fontSize: '12px',
        color: 'rgba(232,164,176,0.3)',
        animation: 'float 8s ease-in-out infinite',
      }}>✦</div>
      <div style={{
        position: 'absolute',
        bottom: '30px',
        right: '15%',
        fontSize: '8px',
        color: 'rgba(196,184,212,0.3)',
        animation: 'float 10s ease-in-out 2s infinite',
      }}>✦ ✦</div>

      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 40px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: '32px', marginBottom: '24px', animation: 'float 6s ease-in-out infinite' }}>
          🌸
        </div>

        <h2 className="display-heading" style={{
          fontSize: 'clamp(36px, 5vw, 60px)',
          color: 'var(--cream)',
          marginBottom: '20px',
        }}>
          Have a story to tell?
        </h2>

        <p style={{
          fontSize: '15px',
          color: 'rgba(247, 243, 238, 0.55)',
          lineHeight: 1.75,
          marginBottom: '44px',
          maxWidth: '440px',
          margin: '0 auto 44px',
        }}>
          I love working with creators, developers, and storytellers who care deeply about their vision. Let&apos;s build something beautiful together.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--cream)',
              color: 'var(--charcoal)',
              padding: '14px 28px',
              borderRadius: '99px',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 0.3s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'var(--light-gray)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'var(--cream)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            }}
          >
            Start a Conversation →
          </Link>
          <Link
            href="/portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              color: 'var(--cream)',
              padding: '13px 26px',
              borderRadius: '99px',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid rgba(247,243,238,0.2)',
              transition: 'border-color 0.3s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(232,164,176,0.5)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(247,243,238,0.2)' }}
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
