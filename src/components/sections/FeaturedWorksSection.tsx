'use client'

import Link from 'next/link'
import { featuredWorks } from '@/lib/data'

export function FeaturedWorksSection() {
  return (
    <section style={{ padding: '120px 0', background: 'var(--warm-white)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '72px', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="chibi-figure" style={{ fontSize: '26px' }}>🎨</div>
            <div>
              <div className="section-label" style={{ marginBottom: '6px' }}>Selected Work</div>
              <h2 className="display-heading" style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--charcoal)' }}>
                Featured Work
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--dust-gray)', marginTop: '6px' }}>
                A selection of recent projects.
              </p>
            </div>
          </div>
          <Link href="/portfolio" className="link-arrow">
            VIEW ALL WORKS →
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {featuredWorks.map((work, i) => {
            const isEven = i % 2 === 0
            return (
              <div
                key={work.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: isEven ? '1.4fr 1fr' : '1fr 1.4fr',
                  gap: '0',
                  alignItems: 'stretch',
                  borderBottom: i < featuredWorks.length - 1 ? '1px solid var(--soft-border)' : 'none',
                  minHeight: '240px',
                }}
                className="featured-row"
              >
                {isEven ? (
                  <>
                    <FeaturedImage work={work} />
                    <FeaturedText work={work} isEven={isEven} />
                  </>
                ) : (
                  <>
                    <FeaturedText work={work} isEven={isEven} />
                    <FeaturedImage work={work} />
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .featured-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function FeaturedImage({ work }: { work: typeof featuredWorks[0] }) {
  return (
    <Link href={`/projects/${work.id}`} style={{ display: 'block', textDecoration: 'none' }}>
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        minHeight: '220px',
        cursor: 'pointer',
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          background: work.gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '60px',
          transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          minHeight: '220px',
        }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.04)' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)' }}
        >
          {work.emoji}
        </div>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(44,40,37,0.25) 0%, transparent 50%)',
        }} />
      </div>
    </Link>
  )
}

function FeaturedText({ work, isEven }: { work: typeof featuredWorks[0]; isEven: boolean }) {
  return (
    <div style={{
      padding: '48px 40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '16px',
      textAlign: isEven ? 'left' : 'left',
    }}>
      <span className={`pill-tag ${work.tagColor}`}>{work.category}</span>

      <div>
        <Link href={`/projects/${work.id}`} style={{ textDecoration: 'none' }}>
          <h3
            className="display-heading"
            style={{
              fontSize: 'clamp(22px, 2.8vw, 32px)',
              color: 'var(--charcoal)',
              marginBottom: '12px',
              transition: 'color 0.25s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLHeadingElement).style.color = 'var(--coral)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLHeadingElement).style.color = 'var(--charcoal)' }}
          >
            {work.title} ↗
          </h3>
        </Link>
        <p style={{ fontSize: '13px', color: 'var(--dust-gray)', lineHeight: 1.75, maxWidth: '320px' }}>
          {work.description}
        </p>
      </div>

      {work.note && (
        <div style={{
          borderLeft: `2px solid ${work.accentColor}`,
          paddingLeft: '12px',
          fontFamily: 'var(--font-accent)',
          fontSize: '12px',
          color: 'var(--dust-gray)',
          fontStyle: 'italic',
        }}>
          {work.note}
        </div>
      )}
    </div>
  )
}
