'use client'

import { useState } from 'react'

const inquiryTypes = [
  { id: 'illustration', label: '🎨 Illustration', desc: 'Character art, splash art, personal pieces' },
  { id: 'vtuber', label: '✨ VTuber Assets', desc: 'Key visuals, emotes, overlays, sheets' },
  { id: 'background', label: '🏯 Background Art', desc: 'Environmental and scene illustration' },
  { id: 'design', label: '🖋️ Graphic Design', desc: 'Stream branding, layouts, identity' },
  { id: 'collab', label: '🌸 Collaboration', desc: 'Creative partnerships & indie projects' },
  { id: 'other', label: '💌 Other', desc: 'Something else entirely' },
]

export default function ContactPage() {
  const [selected, setSelected] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <div className="page-hero" style={{ background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', color: 'var(--dust-gray)' }}>✦</span>
            <span className="section-label">Reach Out</span>
          </div>
          <h1 className="display-heading" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--charcoal)', marginBottom: '20px' }}>
            Contact
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--dust-gray)', maxWidth: '520px', lineHeight: 1.75 }}>
            Whether you have a project in mind or just want to say hello — I&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <section style={{ padding: '0 0 120px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px' }} className="contact-grid">
            <div>
              <div style={{
                background: 'var(--warm-white)',
                border: '1px solid var(--soft-border)',
                borderRadius: '16px',
                padding: '32px',
                marginBottom: '24px',
                position: 'sticky',
                top: '100px',
              }}>
                <div style={{ fontSize: '36px', marginBottom: '20px' }}>🐰</div>

                <div className="section-label" style={{ marginBottom: '12px' }}>Studio Status</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                  <span className="availability-dot" />
                  <span style={{ fontSize: '13px', color: 'var(--charcoal)', fontWeight: 500 }}>Open for commissions</span>
                </div>

                <div className="divider-line" style={{ marginBottom: '24px' }} />

                <div className="section-label" style={{ marginBottom: '16px' }}>Response Time</div>
                <p style={{ fontSize: '13px', color: 'var(--dust-gray)', lineHeight: 1.7, marginBottom: '24px' }}>
                  I typically respond within 2–3 business days. Complex project inquiries may take a little longer.
                </p>

                <div className="divider-line" style={{ marginBottom: '24px' }} />

                <div className="section-label" style={{ marginBottom: '16px' }}>Find Me</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { label: 'X (Twitter)', icon: '𝕏', href: '#' },
                    { label: 'Instagram', icon: '◎', href: '#' },
                    { label: 'Email directly', icon: '✉', href: 'mailto:hello@mujiirustudio.art' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '13px',
                        color: 'var(--charcoal)',
                        textDecoration: 'none',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        transition: 'background 0.2s ease',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--cream)' }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
                    >
                      <span style={{ fontSize: '16px', opacity: 0.6 }}>{social.icon}</span>
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div style={{
                  background: 'var(--warm-white)',
                  border: '1px solid var(--soft-border)',
                  borderRadius: '20px',
                  padding: '60px 48px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '56px', marginBottom: '24px', animation: 'float 4s ease-in-out infinite' }}>🌸</div>
                  <h2 className="display-heading" style={{ fontSize: '36px', color: 'var(--charcoal)', marginBottom: '16px' }}>
                    Message received!
                  </h2>
                  <p style={{ fontSize: '15px', color: 'var(--dust-gray)', lineHeight: 1.75, maxWidth: '360px', margin: '0 auto 32px' }}>
                    Thank you for reaching out. I&apos;ll read your message carefully and get back to you within 2–3 days. ✦
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div style={{
                  background: 'var(--warm-white)',
                  border: '1px solid var(--soft-border)',
                  borderRadius: '20px',
                  padding: '48px',
                }}>
                  <h2 className="display-heading" style={{ fontSize: '28px', color: 'var(--charcoal)', marginBottom: '8px' }}>
                    Start a conversation
                  </h2>
                  <p style={{ fontSize: '13px', color: 'var(--dust-gray)', marginBottom: '36px' }}>
                    Tell me a little about what you&apos;re working on.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                      <div className="section-label" style={{ marginBottom: '12px' }}>What are you looking for?</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setSelected(type.id)}
                            style={{
                              background: selected === type.id ? 'rgba(232,164,176,0.12)' : 'transparent',
                              border: `1px solid ${selected === type.id ? 'var(--sakura-pink)' : 'var(--soft-border)'}`,
                              borderRadius: '10px',
                              padding: '14px 16px',
                              cursor: 'pointer',
                              textAlign: 'left',
                              transition: 'all 0.2s ease',
                              fontFamily: 'var(--font-body)',
                            }}
                          >
                            <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '4px' }}>
                              {type.label}
                            </div>
                            <div style={{ fontSize: '11px', color: 'var(--dust-gray)' }}>
                              {type.desc}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div>
                        <div className="section-label" style={{ marginBottom: '8px' }}>Name</div>
                        <input
                          type="text"
                          className="contact-input"
                          placeholder="Your name or handle"
                          required
                        />
                      </div>
                      <div>
                        <div className="section-label" style={{ marginBottom: '8px' }}>Email</div>
                        <input
                          type="email"
                          className="contact-input"
                          placeholder="hello@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <div className="section-label" style={{ marginBottom: '8px' }}>Project / Idea</div>
                      <textarea
                        className="contact-input"
                        placeholder="Tell me about your project, character, or vision. The more detail, the better — I love reading about the stories behind the art."
                        required
                      />
                    </div>

                    <div style={{ marginBottom: '28px' }}>
                      <div className="section-label" style={{ marginBottom: '8px' }}>Budget Range (optional)</div>
                      <input
                        type="text"
                        className="contact-input"
                        placeholder="e.g. $200–400, or 'flexible'"
                      />
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                      Send Message ✦
                    </button>

                    <p style={{ fontSize: '11px', color: 'var(--dust-gray)', textAlign: 'center', marginTop: '16px', lineHeight: 1.6 }}>
                      No spam, no pressure. I read every message personally.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
