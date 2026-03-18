const SERVICES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#e8c420" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    title: 'WEIGHT TRAINING',
    desc: 'High-performance free weights and resistance machines designed for maximum muscle growth and strength gains.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#e8c420" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'CARDIO TRAINING',
    desc: 'State-of-the-art endurance equipment including curved treadmills, air bikes, and advanced rowers.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#e8c420" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'PERSONAL COACHING',
    desc: 'One-on-one sessions with elite trainers to develop custom workout plans tailored to your specific goals.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#e8c420" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    title: 'NUTRITION GUIDANCE',
    desc: 'Science-backed dietary planning and supplement advice to fuel your body and optimize your performance.',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ background: '#0d0d0d', padding: '96px 0' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 32px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, textTransform: 'uppercase',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#fff', lineHeight: 1
          }}>
            OUR <span style={{ color: '#e8c420' }}>SERVICES</span>
          </h2>
          <div style={{ width: 48, height: 2, background: '#e8c420', margin: '16px auto 0' }} />
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 12
        }}>
          {SERVICES.map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: '#161616',
              border: '1px solid rgba(255,255,255,0.05)',
              padding: '28px 24px',
              transition: 'border-color 0.3s, transform 0.3s',
              cursor: 'default'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(232,196,32,0.35)'; e.currentTarget.style.transform='translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.05)'; e.currentTarget.style.transform='translateY(0)' }}
            >
              <div style={{ marginBottom: 18 }}>{icon}</div>
              <h3 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700, fontSize: 16, letterSpacing: '0.05em',
                color: '#fff', marginBottom: 10
              }}>{title}</h3>
              <p style={{ color: '#666', fontSize: 13, lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}