"use client"
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#05050A', borderTop: '1px solid rgba(201,169,110,0.15)', padding: '60px 40px 30px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '60px', marginBottom: '60px' }}>
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#C9A96E', letterSpacing: '2px', marginBottom: '4px' }}>EXAMPLE</div>
            <div style={{ fontSize: '10px', letterSpacing: '5px', color: 'rgba(201,169,110,0.5)', marginBottom: '20px' }}>HOUSE RESIDENCE</div>
            <p style={{ color: 'rgba(250,250,248,0.4)', lineHeight: 1.8, fontSize: '13px', maxWidth: '320px' }}>
              Hunian premium modern di jantung kota Pekanbaru. Hanya 5 unit eksklusif tersedia untuk Anda dan keluarga.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A96E', marginBottom: '20px' }}>NAVIGASI</div>
            {[['Beranda', '/'], ['Daftar Properti', '/#listing'], ['Fasilitas', '/#fasilitas'], ['Lokasi', '/#lokasi'], ['Kontak', '/#kontak']].map(([label, href]) => (
              <div key={label} style={{ marginBottom: '10px' }}>
                <Link href={href} style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#C9A96E'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(250,250,248,0.4)'}
                >
                  {label}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#C9A96E', marginBottom: '20px' }}>KONTAK</div>
            {[
              ['📱 WhatsApp', 'https://wa.me/6281234567890'],
              ['📧 Email', 'mailto:sales@verdanahills.id'],
              ['📍 Lokasi', 'https://maps.google.com'],
            ].map(([label, href]) => (
              <div key={label} style={{ marginBottom: '10px' }}>
                <a href={href} target="_blank" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#C9A96E'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(250,250,248,0.4)'}
                >
                  {label}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.3), transparent)', marginBottom: '30px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: 'rgba(250,250,248,0.25)', fontSize: '12px' }}>© 2026 Example Houses. Hak Cipta Dilindungi.</p>
          <p style={{ color: 'rgba(250,250,248,0.25)', fontSize: '12px' }}>Marketed by: Andika Ananda</p>
        </div>
      </div>
    </footer>
  )
}