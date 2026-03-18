export default function Hero() {
  return (
  <section
  id="home"
  style={{
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `
      linear-gradient(to right, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.80) 45%, rgba(10,10,10,0.25) 100%),
      url('/homeimg.jpg')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  }}
>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 32px', width: '100%', paddingTop: 100, paddingBottom: 80 }}>
        <div style={{ maxWidth: 500 }}>

          <p style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            color: '#e8c420', fontWeight: 700, fontSize: 11,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            marginBottom: 18
          }}>
            ELITE TRAINING FACILITY
          </p>

          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, lineHeight: 0.92, textTransform: 'uppercase',
            fontSize: 'clamp(3.8rem, 9vw, 7rem)',
            marginBottom: 20, color: '#fff', margin: '0 0 20px 0'
          }}>
            ELEVATE YOUR<br />
            <span style={{ color: '#e8c420' }}>STRENGTH</span>
          </h1>

          <p style={{ color: '#aaa', fontSize: 14, lineHeight: 1.75, marginBottom: 32, maxWidth: 400 }}>
            Premium equipment, expert coaching, and a community that pushes you to be your best.
            Transform your life in the city's most exclusive training facility.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              background: '#e8c420', color: '#000',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700, fontSize: 13, letterSpacing: '0.15em',
              textTransform: 'uppercase', padding: '13px 28px',
              textDecoration: 'none', display: 'inline-block',
              transition: 'background 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background='#f5d32a'}
            onMouseLeave={e => e.currentTarget.style.background='#e8c420'}
            >JOIN NOW</a>

            <a href="#services" style={{
              border: '1.5px solid rgba(255,255,255,0.5)', color: '#fff',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700, fontSize: 13, letterSpacing: '0.15em',
              textTransform: 'uppercase', padding: '13px 28px',
              textDecoration: 'none', display: 'inline-block',
              transition: 'border-color 0.2s, background 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='#fff'; e.currentTarget.style.background='rgba(255,255,255,0.06)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.5)'; e.currentTarget.style.background='transparent' }}
            >EXPLORE SERVICES</a>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        background: 'linear-gradient(to top, #0d0d0d, transparent)',
        pointerEvents: 'none'
      }} />
    </section>
  )
}