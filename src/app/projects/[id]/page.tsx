import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/lib/data'

export function generateStaticParams() {
  const allIds = [
    'azure-empress',
    'eclipse-of-eternity',
    'forgotten-paths',
    'sweet-escape',
    'studio-corner',
    'midnight-bloom',
    'lantern-festival',
    'stellar-wanderer',
  ]
  return allIds.map((id) => ({ id }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px', paddingTop: '68px' }}>
        <div style={{ fontSize: '48px' }}>🌿</div>
        <h1 className="display-heading" style={{ fontSize: '32px', color: 'var(--charcoal)' }}>Project not found</h1>
        <p style={{ color: 'var(--dust-gray)', fontSize: '14px' }}>This project doesn&apos;t have a detailed page yet.</p>
        <Link href="/projects" className="btn-primary">← Back to Projects</Link>
      </div>
    )
  }

  return (
    <>
      <div style={{
        paddingTop: '68px',
        minHeight: '60vh',
        background: project.gradient,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '120px',
          opacity: 0.15,
        }}>
          {project.emoji}
        </div>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(44,40,37,0.6) 0%, transparent 60%)',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px 60px', position: 'relative', zIndex: 1 }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(247,243,238,0.6)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '32px' }}>
            ← Projects
          </Link>

          <span className={`pill-tag ${project.tagColor}`} style={{ marginBottom: '16px', display: 'inline-block' }}>
            {project.category}
          </span>

          <h1 className="display-heading" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--cream)' }}>
            {project.title}
          </h1>

          <div style={{ fontFamily: 'var(--font-accent)', fontSize: '13px', color: 'rgba(247,243,238,0.5)', marginTop: '16px' }}>
            {project.year}
          </div>
        </div>
      </div>

      <section style={{ padding: '80px 0 120px', background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '80px' }} className="project-detail-grid">
            <div>
              <div className="section-label" style={{ marginBottom: '16px' }}>Overview</div>
              <p style={{ fontSize: '16px', color: 'var(--charcoal)', lineHeight: 1.8, marginBottom: '32px' }}>
                {project.description}
              </p>

              <div style={{
                background: 'var(--cream)',
                border: '1px solid var(--soft-border)',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '40px',
              }}>
                <div className="section-label" style={{ marginBottom: '12px' }}>The Brief</div>
                <p style={{ fontFamily: 'var(--font-accent)', fontSize: '14px', color: 'var(--charcoal)', lineHeight: 1.75, fontStyle: 'italic' }}>
                  &ldquo;{project.brief}&rdquo;
                </p>
              </div>

              <div>
                <div className="section-label" style={{ marginBottom: '20px' }}>Process</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {project.process.map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: 'rgba(232,164,176,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--coral)',
                        flexShrink: 0,
                        fontFamily: 'var(--font-body)',
                      }}>
                        {i + 1}
                      </div>
                      <p style={{ fontSize: '14px', color: 'var(--charcoal)', lineHeight: 1.65, paddingTop: '4px' }}>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div style={{
                position: 'sticky',
                top: '100px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}>
                <div style={{
                  aspectRatio: '3/4',
                  borderRadius: '16px',
                  background: project.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '64px',
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  {project.emoji}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,40,37,0.2) 0%, transparent 60%)' }} />
                </div>

                <div style={{
                  background: 'var(--cream)',
                  border: '1px solid var(--soft-border)',
                  borderRadius: '12px',
                  padding: '24px',
                }}>
                  <div className="section-label" style={{ marginBottom: '16px' }}>Tools Used</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.tools.map((tool) => (
                      <span key={tool} className="pill-tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                  Inquire About Similar Work →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 80px', background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div className="divider-line" style={{ marginBottom: '48px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '8px' }}>More Projects</div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--charcoal)' }}>
                Explore other work →
              </p>
            </div>
            <Link href="/projects" className="btn-secondary">
              All Projects
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .project-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
