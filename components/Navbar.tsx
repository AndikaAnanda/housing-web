'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '12px 40px' : '24px 40px',
      background: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,169,110,0.15)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#C9A96E', letterSpacing: '2px' }}>
            LEONEL
          </div>
          <div style={{ fontSize: '9px', letterSpacing: '5px', color: 'rgba(201,169,110,0.6)', marginTop: '-2px' }}>
            CLUSTER
          </div>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
        {[
          { label: 'Properti', href: '#listing' },
          { label: 'Fasilitas', href: '#fasilitas' },
          { label: 'Lokasi', href: '#lokasi' },
          { label: 'Kontak', href: '#kontak' },
        ].map(item => (
          <a key={item.label} href={item.href} style={{
            color: 'rgba(250,250,248,0.7)', textDecoration: 'none',
            fontSize: '13px', letterSpacing: '1px', fontWeight: 500,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = '#C9A96E'}
          onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(250,250,248,0.7)'}
          >
            {item.label}
          </a>
        ))}
        <a href="https://wa.me/6281380085712" target="_blank" style={{
          background: 'linear-gradient(135deg, #C9A96E, #8B6914)',
          color: '#0A0A0F', padding: '10px 24px', borderRadius: '2px',
          textDecoration: 'none', fontSize: '12px', fontWeight: 600,
          letterSpacing: '1.5px', transition: 'opacity 0.2s',
        }}>
          HUBUNGI KAMI
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px' }}
        className="mobile-menu-btn"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{ display: 'block', width: '24px', height: '1.5px', background: '#C9A96E', transition: 'all 0.3s' }} />
        ))}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(10,10,15,0.98)', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '32px', zIndex: 999,
        }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: '24px', right: '40px', background: 'none', border: 'none', color: '#C9A96E', fontSize: '28px', cursor: 'pointer' }}>✕</button>
          {[
            { label: 'Properti', href: '#listing' },
            { label: 'Fasilitas', href: '#fasilitas' },
            { label: 'Lokasi', href: '#lokasi' },
            { label: 'Kontak', href: '#kontak' },
          ].map(item => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{
              color: '#FAFAF8', textDecoration: 'none', fontSize: '28px',
              fontFamily: 'Playfair Display, serif', fontWeight: 600,
            }}>
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}