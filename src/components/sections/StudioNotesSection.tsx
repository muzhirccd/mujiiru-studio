import Link from 'next/link'
import { studioNotes } from '@/lib/data'

export function StudioNotesSection() {
  const preview = studioNotes.slice(0, 4)

  return (
    <section style={{ padding: '120px 0', background: 'var(--cream)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="chibi-figure" style={{ fontSize: '26px' }}>📔</div>
            <div>
              <div className="section-label" style={{ marginBottom: '6px' }}>Journal</div>
              <h2 className="display-heading" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: 'var(--charcoal)' }}>
                Studio Notes
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--dust-gray)', marginTop: '6px' }}>
                Thoughts, sketches, and small updates.
              </p>
            </div>
          </div>
          <Link href="/notes" className="link-arrow">
            VIEW ALL NOTES →
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '20px',
        }}>
          {preview.map((note, i) => (
            <Link key={note.id} href={`/notes#${note.id}`} style={{ textDecoration: 'none' }}>
              <div
                className="studio-note-card"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <span className="note-date">{note.date}</span>
                  <span style={{ fontSize: '20px', opacity: 0.6 }}>☆</span>
                </div>

                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{note.emoji}</div>

                <span className={`pill-tag ${note.tagColor}`} style={{ marginBottom: '12px', display: 'inline-block' }}>
                  {note.tag}
                </span>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '19px',
                  fontWeight: 400,
                  color: 'var(--charcoal)',
                  marginBottom: '10px',
                }}>
                  {note.title}
                </h3>

                <p style={{
                  fontSize: '12px',
                  color: 'var(--dust-gray)',
                  lineHeight: 1.7,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {note.snippet}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
