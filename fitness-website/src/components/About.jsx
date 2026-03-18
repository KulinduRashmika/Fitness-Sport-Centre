export default function About() {
  return (
    <section id="about" style={{ background: '#111111', padding: '96px 0' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

          {/* Image block with yellow corner accents */}
          <div style={{ position: 'relative' }}>
            {/* Top-left yellow corner */}
            <div style={{
              position: 'absolute', top: -16, left: -16, width: 56, height: 56,
              borderTop: '2px solid #e8c420', borderLeft: '2px solid #e8c420', zIndex: 10
            }} />
            
            <div style={{
              overflow: 'hidden', background: '#1a1a1a',
              aspectRatio: '3/4', maxHeight: 500, position: 'relative'
            }}>
              <img
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80"
                alt="Athlete"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.6s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.filter='grayscale(0%)'}
                onMouseLeave={e => e.currentTarget.style.filter='grayscale(100%)'}
              />
            </div>

            {/* Bottom-right yellow corner */}
            <div style={{
              position: 'absolute', bottom: -16, right: -16, width: 56, height: 56,
              borderBottom: '2px solid #e8c420', borderRight: '2px solid #e8c420'
            }} />
          </div>

          {/* Text block */}
          <div>
            <p style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: '#e8c420', fontWeight: 700, fontSize: 11,
              letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 16
            }}>
              OUR MISSION
            </p>

            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, textTransform: 'uppercase',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              lineHeight: 1.05, color: '#fff', marginBottom: 24
            }}>
              REDESIGNING YOUR<br />TRAINING EXPERIENCE
            </h2>

            <p style={{ color: '#888', fontSize: 13.5, lineHeight: 1.8, marginBottom: 16 }}>
              At Fitness Sport Centre, we believe that fitness is a lifestyle, not a destination. Our mission is to provide
              an elite environment where professional athletes and fitness enthusiasts alike can push their boundaries.
            </p>
            <p style={{ color: '#888', fontSize: 13.5, lineHeight: 1.8, marginBottom: 40 }}>
              Equipped with world-class machines and guided by industry-leading coaches, we focus on functional
              strength, longevity, and high-performance results. We foster a culture of discipline, respect, and
              constant improvement.
            </p>

            {/* Stats */}
            <div style={{
              display: 'flex', gap: 40, paddingTop: 28,
              borderTop: '1px solid rgba(255,255,255,0.08)'
            }}>
              {[['10+', 'YEARS EXPERIENCE'], ['500+', 'MEMBERS']].map(([val, label]) => (
                <div key={label}>
                  <p style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900, fontSize: 40, color: '#fff',
                    lineHeight: 1, marginBottom: 4
                  }}>{val}</p>
                  <p style={{ color: '#555', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}