'use client'
import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import HouseCard from '@/components/HouseCard'
import HouseFilter from '@/components/HouseFilter'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import housesData from '@/data/houses.json'
import type { House } from '@/types'

export default function HomePage() {
  const [filter, setFilter] = useState({ status: 'all', sort: 'default' })

  const filteredHouses = useMemo(() => {
    let list = [...housesData.houses] as House[]
    if (filter.status !== 'all') {
      list = list.filter(h => h.status === filter.status)
    }
    if (filter.sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    else if (filter.sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    else if (filter.sort === 'lt-desc') list.sort((a, b) => b.specs.lt - a.specs.lt)
    return list
  }, [filter])

  return (
    <>
      <Navbar />
      <HeroSection />

      {/* Listing Section */}
      <section id="listing" style={{ padding: '100px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '4px', color: '#C9A96E', marginBottom: '16px' }}>PILIHAN PROPERTI</div>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.1 }}>
            4 Unit Ready<br />
            <span style={{ color: '#C9A96E', fontStyle: 'italic' }}>Leonel Cluster</span>
          </h2>
          <p style={{ color: 'rgba(250,250,248,0.5)', marginTop: '16px', maxWidth: '540px', lineHeight: 1.7 }}>
            Dijual &amp; Dikontrakkan. Sidomulyo Barat, Pekanbaru. Full Furnish tersedia (+5 jt).
            Hubungi owner langsung: <strong style={{ color: '#C9A96E' }}>Putri Sinulingga • 0813-8008-5712</strong>
          </p>
        </div>

        <HouseFilter onFilterChange={setFilter} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(380px, 100%), 1fr))', gap: '32px' }}>
          {filteredHouses.map((house, i) => (
            <HouseCard key={house.id} house={house} index={i} />
          ))}
        </div>

        {filteredHouses.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px', color: 'rgba(250,250,248,0.3)' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏠</div>
            <p>Tidak ada unit dengan filter ini.</p>
          </div>
        )}
      </section>

      {/* Fasilitas Section */}
      <section id="fasilitas" style={{ padding: '100px 40px', background: 'linear-gradient(180deg, transparent, rgba(201,169,110,0.05), transparent)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '4px', color: '#C9A96E', marginBottom: '16px' }}>KEUNGGULAN CLUSTER</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800 }}>Fasilitas &amp; Keunggulan</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🏠', title: 'Full Furnish Tersedia', desc: 'Opsi full furniture dengan tambahan Rp 5 juta/tahun. Siap huni tanpa perlu beli perabot.' },
              { icon: '📜', title: 'Sertifikat Pribadi', desc: 'Sertifikat atas nama pribadi, gratis balik nama untuk Tipe 100. Investasi aman & legal.' },
              { icon: '🏡', title: 'Dijual & Dikontrakkan', desc: 'Fleksibel sesuai kebutuhan Anda — beli putus atau kontrak tahunan.' },
              { icon: '📱', title: 'Hubungi Langsung Owner', desc: 'Tidak melalui perantara. Langsung Owner Putri Sinulingga untuk harga terbaik.' },
              { icon: '📍', title: 'Lokasi Strategis', desc: 'Sidomulyo Barat, Pekanbaru — dekat pusat kota, sekolah, dan fasilitas umum.' },
              { icon: '🔑', title: '2 Tipe Unit', desc: 'Tipe 60/120m² (2KT, 1KM) dan Tipe 100/150m² (3KT, 2KM). Sesuaikan kebutuhan keluarga.' },
            ].map((f, i) => (
              <div key={i} style={{
                background: 'linear-gradient(145deg, #12121A, #1C1C28)',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: '32px 28px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,169,110,0.3)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)' }}
              >
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: '#FAFAF8' }}>{f.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(250,250,248,0.5)', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokasi Section */}
<section id="lokasi" style={{ padding: '100px 40px' }}>
  <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
      gap: '60px',
      alignItems: 'center',
    }}>
      <div>
        <div style={{ fontSize: '11px', letterSpacing: '4px', color: '#C9A96E', marginBottom: '16px' }}>LOKASI STRATEGIS</div>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, marginBottom: '24px' }}>
          Sidomulyo Barat<br />
          <span style={{ color: '#C9A96E', fontStyle: 'italic' }}>Kota Pekanbaru</span>
        </h2>
        <p style={{ color: 'rgba(250,250,248,0.5)', lineHeight: 1.8, marginBottom: '32px' }}>
          Sidomulyo Barat, Pekanbaru, Riau.<br />
          Lokasi nyaman dengan akses mudah ke berbagai fasilitas publik.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { icon: '🏫', text: 'Dekat sekolah negeri & swasta terbaik' },
            { icon: '🏥', text: 'Dekat rumah sakit & klinik kesehatan' },
            { icon: '🛒', text: 'Dekat pusat perbelanjaan & pasar' },
            { icon: '🚧', text: 'Akses mudah ke jalan Sudirman & Panam' },
            { icon: '👨‍👩‍👧', text: 'Lingkungan aman dan nyaman untuk keluarga' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '20px' }}>{item.icon}</span>
              <span style={{ fontSize: '13px', color: 'rgba(250,250,248,0.7)' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ overflow: 'hidden', border: '1px solid rgba(201,169,110,0.2)', height: '480px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3!2d101.3890!3d0.4607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a8bae1e4db5f%3A0x2b4e1eb8d7c9e1a!2sSidomulyo%20Barat%2C%20Pekanbaru!5e0!3m2!1sid!2sid!4v1234567890"
          width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
</section>

      <ContactForm />
      <Footer />
    </>
  )
}