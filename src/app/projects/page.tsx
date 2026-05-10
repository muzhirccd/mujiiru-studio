'use client'
import Link from 'next/link'
import { projects } from '@/lib/data'

export default function ProjectsPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', color: 'var(--dust-gray)' }}>✦</span>
            <span className="section-label">Case Studies</span>
          </div>
          <h1 className="display-heading" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--charcoal)', marginBottom: '20px' }}>
            Projects
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--dust-gray)', maxWidth: '520px', lineHeight: 1.75 }}>
            Deeper looks into selected works — the brief, the process, and what I learned along the way.
          </p>
        </div>
      </div>

      <section style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {projects.map((project, i) => (
              <Link key={project.id} href={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr 200px',
                    gap: '40px',
                    alignItems: 'center',
                    padding: '36px 0',
                    borderBottom: i < projects.length - 1 ? '1px solid var(--soft-border)' : 'none',
                    transition: 'background 0.25s ease',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.background = 'var(--warm-white)'
                    el.style.padding = '36px 20px'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.background = 'transparent'
                    el.style.padding = '36px 0'
                  }}
                >
                  <div style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '12px',
                    background: project.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    flexShrink: 0,
                  }}>
                    {project.emoji}
                  </div>

                  <div>
                    <span className={`pill-tag ${project.tagColor}`} style={{ marginBottom: '10px', display: 'inline-block' }}>
                      {project.category}
                    </span>
                    <h2 className="display-heading" style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: 'var(--charcoal)', marginBottom: '10px' }}>
                      {project.title}
                    </h2>
                    <p style={{ fontSize: '13px', color: 'var(--dust-gray)', lineHeight: 1.7, maxWidth: '500px' }}>
                      {project.description.slice(0, 120)}...
                    </p>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-accent)', fontSize: '12px', color: 'var(--dust-gray)', marginBottom: '16px' }}>
                      {project.year}
                    </div>
                    <div className="link-arrow" style={{ justifyContent: 'flex-end' }}>
                      View Project →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
