'use client'

import Link from 'next/link'
import { useState } from 'react'
import { portfolioItems } from '@/lib/data'

const categories = ['All', 'Illustration', 'VTuber', 'Background', 'Personal']

const heightMap: Record<string, string> = {
  large: '340px',
  medium: '260px',
  small: '200px',
}

export default function PortfolioPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === active)

  return (
    <>
      <div className="page-hero" style={{ background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', color: 'var(--dust-gray)' }}>✦</span>
            <span className="section-label">Work</span>
          </div>
          <h1 className="display-heading" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--charcoal)', marginBottom: '20px' }}>
            Portfolio
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--dust-gray)', maxWidth: '520px', lineHeight: 1.75 }}>
            A curated archive of illustrations, character designs, background work, and creative explorations.
          </p>
        </div>
      </div>

      <section style={{ padding: '0 0 120px', background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid var(--soft-border)' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '99px',
                  border: '1px solid',
                  borderColor: active === cat ? 'var(--charcoal)' : 'var(--soft-border)',
                  background: active === cat ? 'var(--charcoal)' : 'transparent',
                  color: active === cat ? 'var(--cream)' : 'var(--dust-gray)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
          }}>
            {filtered.map((item) => (
              <Link key={item.id} href={`/projects/${item.id}`} style={{ textDecoration: 'none' }}>
                <div
                  className="portfolio-grid-item"
                  style={{ height: heightMap[item.size] || '260px' }}
                >
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: item.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '50px',
                  }}>
                    {item.emoji}
                  </div>
                  <div className="overlay">
                    <div>
                      <span className={`pill-tag ${item.tagColor}`} style={{ marginBottom: '8px', display: 'block' }}>
                        {item.category}
                      </span>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '20px',
                        fontWeight: 400,
                        color: 'var(--cream)',
                      }}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--dust-gray)' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🌿</div>
              <p style={{ fontFamily: 'var(--font-accent)' }}>No work in this category yet — check back soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
