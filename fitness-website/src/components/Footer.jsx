export default function Footer() {
  return (
    <footer style={{
      background: '#0a0a0a',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '28px 0'
    }}>
      <div style={{
        maxWidth: 1152, margin: '0 auto', padding: '0 32px',
        display: 'flex', flexWrap: 'wrap', alignItems: 'center',
        justifyContent: 'space-between', gap: 16
      }}>
        <div>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 900, letterSpacing: 1 }}>
            <span style={{ color: '#e8c420' }}>Fitness</span>
            <span style={{ color: '#fff' }}>Sport Centre</span>
          </p>
          <p style={{ color: '#444', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 3 }}>
            ELITE TRAINING FACILITY © 2023
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {['PRIVACY POLICY','TERMS OF SERVICE','MEMBER PORTAL','CAREERS'].map(l => (
            <a key={l} href="#" style={{
              color: '#444', fontSize: 10, letterSpacing: '0.15em',
              textTransform: 'uppercase', textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.target.style.color='#e8c420'}
            onMouseLeave={e => e.target.style.color='#444'}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}