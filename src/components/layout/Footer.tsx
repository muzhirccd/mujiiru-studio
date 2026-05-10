'use client'
import Link from 'next/link'

export function Footer() {
  return (
    <footer style={{
      background: 'var(--warm-white)',
      borderTop: '1px solid var(--soft-border)',
      padding: '56px 0 36px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px', marginBottom: '48px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 300, color: 'var(--charcoal)', marginBottom: '10px' }}>
              MujiiRu studio
            </div>
            <p style={{ fontSize: '13px', color: 'var(--dust-gray)', maxWidth: '260px', lineHeight: 1.7 }}>
              Bringing stories to life through thoughtful, character-driven illustration.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="availability-dot" />
              <span style={{ fontSize: '11px', color: 'var(--dust-gray)', letterSpacing: '0.05em' }}>Open for commissions</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '16px' }}>Navigate</div>
              {[
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Projects', href: '/projects' },
                { label: 'Notes', href: '/notes' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <div key={link.href} style={{ marginBottom: '10px' }}>
                  <Link href={link.href} style={{ fontSize: '13px', color: 'var(--dust-gray)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--charcoal)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--dust-gray)')}>
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>

            <div>
              <div className="section-label" style={{ marginBottom: '16px' }}>Connect</div>
              {[
                { label: 'X (Twitter)', href: '#' },
                { label: 'Instagram', href: '#' },
                { label: 'Email', href: '/contact' },
              ].map((link) => (
                <div key={link.label} style={{ marginBottom: '10px' }}>
                  <Link href={link.href} style={{ fontSize: '13px', color: 'var(--dust-gray)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--charcoal)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--dust-gray)')}>
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-line" style={{ marginBottom: '28px' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontSize: '11px', color: 'var(--dust-gray)', letterSpacing: '0.05em' }}>
            © 2025 MujiiRu Studio. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--dust-gray)' }}>
            <span>Made with</span>
            <span style={{ color: 'var(--sakura)' }}>✦</span>
            <span>and lots of tea</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
