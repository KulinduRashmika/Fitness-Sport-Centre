import { useState } from 'react'

const inputStyle = {
  width: '100%', padding: '12px 14px', fontSize: 13,
  background: 'transparent', border: '1px solid #2a2a2a',
  color: '#fff', outline: 'none', fontFamily: "'Barlow', sans-serif",
  transition: 'border-color 0.2s', boxSizing: 'border-box'
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" style={{ background: '#111111', padding: '96px 0' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, textTransform: 'uppercase',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#fff', lineHeight: 1
          }}>
            GET IN <span style={{ color: '#e8c420' }}>TOUCH</span>
          </h2>
          <p style={{ color: '#777', fontSize: 13.5, marginTop: 14 }}>
            Ready to start your journey? Drop us a message or visit our facility for a free consultation.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { label: 'NAME', key: 'name', type: 'text', placeholder: 'John Doe' },
              { label: 'EMAIL ADDRESS', key: 'email', type: 'email', placeholder: 'john@example.com' },
            ].map(({ label, key, type, placeholder }) => (
              <div key={key}>
                <label style={{ color: '#666', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>{label}</label>
                <input
                  type={type} placeholder={placeholder}
                  value={form[key]}
                  onChange={e => setForm({ ...form, [key]: e.target.value })}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor='#e8c420'}
                  onBlur={e => e.target.style.borderColor='#2a2a2a'}
                  required
                />
              </div>
            ))}
            <div>
              <label style={{ color: '#666', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>MESSAGE</label>
              <textarea
                rows={5} placeholder="Tell us about your fitness goals..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => e.target.style.borderColor='#e8c420'}
                onBlur={e => e.target.style.borderColor='#2a2a2a'}
                required
              />
            </div>
            <button type="submit" style={{
              background: '#e8c420', color: '#000',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700, fontSize: 13, letterSpacing: '0.2em',
              textTransform: 'uppercase', padding: '15px', border: 'none',
              cursor: 'pointer', transition: 'background 0.2s', marginTop: 4
            }}
            onMouseEnter={e => e.currentTarget.style.background='#f5d32a'}
            onMouseLeave={e => e.currentTarget.style.background='#e8c420'}
            >{sent ? 'MESSAGE SENT ✓' : 'SEND MESSAGE'}</button>
          </form>

          {/* Info */}
          <div>
            <h3 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800, fontSize: 18, textTransform: 'uppercase',
              letterSpacing: '0.06em', color: '#fff', marginBottom: 24
            }}>LOCATION & CONTACT</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginBottom: 40 }}>
              {[
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#e8c420" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>,
                  label: 'ADDRESS', lines: ['123 Fitness Plaza, Muscle District', 'New York, NY 10001']
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#e8c420" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>,
                  label: 'PHONE', lines: ['+1 (555) 123-4567']
                }
              ].map(({ icon, label, lines }) => (
                <div key={label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ marginTop: 2 }}>{icon}</div>
                  <div>
                    <p style={{ color: '#555', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 6 }}>{label}</p>
                    {lines.map(l => <p key={l} style={{ color: '#ddd', fontSize: 13.5 }}>{l}</p>)}
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800, fontSize: 15, textTransform: 'uppercase',
              letterSpacing: '0.1em', color: '#fff', marginBottom: 16
            }}>FOLLOW OUR JOURNEY</h3>

            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { label: 'IG', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { label: 'FB', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { label: 'TW', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
              ].map(({ label, path }) => (
                <a key={label} href="#" style={{
                  width: 38, height: 38, border: '1px solid rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'border-color 0.2s', color: '#aaa'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='#e8c420'; e.currentTarget.querySelector('svg').style.color='#e8c420' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.15)'; e.currentTarget.querySelector('svg').style.color='#aaa' }}
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style={{ transition: 'color 0.2s' }}>
                    <path d={path}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}