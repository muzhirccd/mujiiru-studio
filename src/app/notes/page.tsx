import { studioNotes } from '@/lib/data'

export default function NotesPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', color: 'var(--dust-gray)' }}>✦</span>
            <span className="section-label">Journal</span>
          </div>
          <h1 className="display-heading" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--charcoal)', marginBottom: '20px' }}>
            Studio Notes
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--dust-gray)', maxWidth: '520px', lineHeight: 1.75 }}>
            Thoughts, sketches, and small updates from the studio. A place where I think out loud about art, process, and everything in between.
          </p>
        </div>
      </div>

      <section style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px',
          }}>
            {studioNotes.map((note, i) => (
              <div
                key={note.id}
                id={note.id}
                className="studio-note-card"
                style={{
                  transform: i % 3 === 1 ? 'translateY(16px)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <span className="note-date">{note.date}</span>
                  <span style={{ fontSize: '24px', opacity: 0.5 }}>☆</span>
                </div>

                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{note.emoji}</div>

                <span className={`pill-tag ${note.tagColor}`} style={{ marginBottom: '14px', display: 'inline-block' }}>
                  {note.tag}
                </span>

                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '24px',
                  fontWeight: 400,
                  color: 'var(--charcoal)',
                  marginBottom: '14px',
                }}>
                  {note.title}
                </h2>

                <p style={{
                  fontSize: '13px',
                  color: 'var(--dust-gray)',
                  lineHeight: 1.8,
                }}>
                  {note.snippet}
                </p>

                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--soft-border)' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '11px',
                    color: 'var(--dust-gray)',
                    fontFamily: 'var(--font-accent)',
                  }}>
                    <span style={{ color: 'var(--sakura-pink)' }}>✦</span>
                    akuma studio
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
