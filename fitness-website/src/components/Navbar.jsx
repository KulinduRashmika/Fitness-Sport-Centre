import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
      transition: 'background 0.3s, padding 0.3s',
      background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      padding: scrolled ? '12px 0' : '20px 0',
    }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <a href="#home" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 900, letterSpacing: 1, textDecoration: 'none' }}>
          <span style={{ color: '#e8c420' }}>Fitness</span>
          <span style={{ color: '#fff' }}>Sport Centre</span>
        </a>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">
          {['Home','About','Services','Contact'].map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} style={{
                color: '#ccc', textDecoration: 'none', fontSize: 12,
                fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
                transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.target.style.color='#fff'}
              onMouseLeave={e => e.target.style.color='#ccc'}
              >{link}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" style={{
          background: '#e8c420', color: '#000', fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700, fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase',
          padding: '10px 22px', textDecoration: 'none', transition: 'background 0.2s',
          display: 'inline-block'
        }}
        onMouseEnter={e => e.target.style.background='#f5d32a'}
        onMouseLeave={e => e.target.style.background='#e8c420'}
        >JOIN NOW</a>
      </div>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  )
}