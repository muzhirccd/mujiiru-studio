'use client'
import Link from 'next/link'

const tools = ['Clip Studio Paint', 'Adobe Photoshop', 'Procreate', 'PureRef', 'Blender (ref)', 'Figma']
const inspirations = ['Eastern fantasy art', 'Studio Ghibli', 'Moonlit atmospheres', 'Traditional textiles', 'Indie games', 'Slice-of-life anime']
const interests = ['Reading light novels', 'Matcha lattes', 'Vintage Japanese stationery', 'Lo-fi music', 'Rainy days', 'Studio Ghibli marathons']

export default function AboutPage() {
  return (
    <>
      <div className="page-hero" style={{ background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', color: 'var(--dust-gray)' }}>✦</span>
            <span className="section-label">Who I am</span>
          </div>
          <h1 className="display-heading" style={{ fontSize: 'clamp(40px, 6vw, 72px)', color: 'var(--charcoal)', marginBottom: '20px' }}>
            About
          </h1>
        </div>
      </div>

      <section style={{ padding: '0 0 80px', background: 'var(--warm-white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '80px', alignItems: 'start' }} className="about-grid">
            <div>
              <div style={{
                aspectRatio: '4/5',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #3a1a2a 0%, #5a2a3a 40%, #8a4a5a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '80px',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '24px',
              }}>
                🌸
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,40,37,0.3) 0%, transparent 50%)' }} />
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '10px',
                  padding: '14px 18px',
                  fontSize: '12px',
                  color: 'var(--charcoal)',
                  fontFamily: 'var(--font-accent)',
                }}>
                  akuma / independent illustrator ✦
                </div>
              </div>

              <div style={{
                background: 'var(--cream)',
                border: '1px solid var(--soft-border)',
                borderRadius: '14px',
                padding: '24px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span className="availability-dot" />
                  <span style={{ fontSize: '12px', color: 'var(--charcoal)', fontWeight: 500 }}>Open for commissions</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--dust-gray)', lineHeight: 1.7 }}>
                  Accepting new projects for illustration, VTuber assets, and collaborative creative work. Response time: 2–3 days.
                </p>
                <div style={{ marginTop: '16px' }}>
                  <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Get in Touch →
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div style={{ marginBottom: '48px' }}>
                <h2 className="display-heading" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--charcoal)', marginBottom: '24px' }}>
                  Hello, I&apos;m Akuma.
                </h2>
                <p style={{ fontSize: '15px', color: 'var(--charcoal)', lineHeight: 1.85, marginBottom: '20px' }}>
                  I&apos;m an independent illustrator with a love for anime-inspired fantasy art and character-driven storytelling. My work lives somewhere between the quiet calm of an artbook and the vivid energy of a key visual — intimate, atmospheric, and character-first.
                </p>
                <p style={{ fontSize: '15px', color: 'var(--dust-gray)', lineHeight: 1.85, marginBottom: '20px' }}>
                  I started drawing seriously during a rainy summer with nothing but too much green tea and too many fantasy novels. Years later, those same things still fuel my work. I believe good illustration doesn&apos;t just show you a character — it makes you feel like you already know them.
                </p>
                <p style={{ fontSize: '15px', color: 'var(--dust-gray)', lineHeight: 1.85 }}>
                  I collaborate with VTubers, indie game developers, visual novel creators, and anyone building a world worth exploring. If you have a story, I want to help you tell it.
                </p>
              </div>

              <div className="divider-line" style={{ marginBottom: '40px' }} />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
                <div>
                  <div className="section-label" style={{ marginBottom: '16px' }}>Tools & Software</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {tools.map((tool) => (
                      <div key={tool} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--sakura-pink)', flexShrink: 0 }} />
                        <span style={{ fontSize: '13px', color: 'var(--charcoal)' }}>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="section-label" style={{ marginBottom: '16px' }}>Inspirations</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {inspirations.map((item) => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--lavender)', flexShrink: 0 }} />
                        <span style={{ fontSize: '13px', color: 'var(--charcoal)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="divider-line" style={{ marginBottom: '40px' }} />

              <div>
                <div className="section-label" style={{ marginBottom: '16px' }}>When I&apos;m Not Drawing</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {interests.map((item) => (
                    <span key={item} className="tape-sticker">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0 120px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <div style={{ fontSize: '32px', marginBottom: '24px' }}>✦</div>
          <h2 className="display-heading" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--charcoal)', marginBottom: '20px' }}>
            Creative philosophy
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--dust-gray)', lineHeight: 1.85, fontFamily: 'var(--font-accent)', fontStyle: 'italic' }}>
            &ldquo;I believe the best creative work comes from genuine curiosity about the story being told. I don&apos;t want to be a service — I want to be a collaborator. The kind of creative partner who asks the right questions, cares about the details, and stays up too late getting the lighting just right.&rdquo;
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
