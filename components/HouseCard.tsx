'use client'
import Link from 'next/link'
import { useState } from 'react'
import type { House } from '@/types'

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  available: { label: 'Tersedia', color: '#0A0A0F', bg: '#2ECC8A' },
  indent:    { label: 'Indent',   color: '#0A0A0F', bg: '#F59E0B' },
  sold:      { label: 'Terjual',  color: '#FAFAF8', bg: '#E55353' },
}

export default function HouseCard({ house, index }: { house: House; index: number }) {
  const [hovered, setHovered] = useState(false)
  const [imgIdx, setImgIdx] = useState(0)
  const status = statusConfig[house.status]

  return (
    <Link href={`/rumah/${house.id}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setImgIdx(0) }}
        style={{
          background: 'linear-gradient(145deg, #12121A, #1C1C28)',
          border: `1px solid ${hovered ? 'rgba(201,169,110,0.4)' : 'rgba(255,255,255,0.06)'}`,
          overflow: 'hidden', cursor: 'pointer',
          transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: hovered ? '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,169,110,0.2)' : '0 4px 20px rgba(0,0,0,0.3)',
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
          animation: `fadeInUp 0.6s ${index * 0.1}s ease both`,
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
          <img
            src={house.images[imgIdx]}
            alt={house.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,15,0.8) 0%, transparent 50%)' }} />

          {/* Status Badge */}
          <div style={{ position: 'absolute', top: '16px', left: '16px', background: status.bg, color: status.color, padding: '4px 12px', fontSize: '10px', fontWeight: 700, letterSpacing: '2px' }}>
            {status.label.toUpperCase()}
          </div>

          {/* Type Badge */}
          <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(10,10,15,0.8)', backdropFilter: 'blur(10px)', color: '#C9A96E', padding: '4px 12px', fontSize: '10px', fontWeight: 600, letterSpacing: '1px', border: '1px solid rgba(201,169,110,0.3)' }}>
            {house.type.toUpperCase()}
          </div>

          {/* Image Dots */}
          <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px' }}>
            {house.images.slice(0, 4).map((_, i) => (
              <button key={i} onClick={e => { e.preventDefault(); setImgIdx(i) }}
                style={{ width: i === imgIdx ? '20px' : '6px', height: '6px', borderRadius: '3px', background: i === imgIdx ? '#C9A96E' : 'rgba(255,255,255,0.4)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s' }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#FAFAF8', marginBottom: '2px' }}>{house.name}</h3>
              <p style={{ fontSize: '12px', color: 'rgba(250,250,248,0.4)', letterSpacing: '1px' }}>{house.address}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#C9A96E', fontFamily: 'Playfair Display, serif' }}>{house.priceDisplay}</div>
              <div style={{ fontSize: '10px', color: 'rgba(250,250,248,0.4)', letterSpacing: '1px' }}>HARGA TOTAL</div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'linear-gradient(to right, rgba(201,169,110,0.3), transparent)', margin: '16px 0' }} />

          {/* Specs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '20px' }}>
            {[
              { icon: '📐', val: `${house.specs.lt}m²`, label: 'LT' },
              { icon: '🏠', val: `${house.specs.lb}m²`, label: 'LB' },
              { icon: '🛏', val: `${house.specs.kt} KT`, label: 'Kamar Tidur' },
              { icon: '🚿', val: `${house.specs.km} KM`, label: 'Kamar Mandi' },
            ].map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 8px', textAlign: 'center', borderRadius: '4px' }}>
                <div style={{ fontSize: '14px', marginBottom: '2px' }}>{s.icon}</div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#FAFAF8' }}>{s.val}</div>
                <div style={{ fontSize: '9px', color: 'rgba(250,250,248,0.4)', letterSpacing: '0.5px' }}>{s.label.toUpperCase()}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
            {house.features.slice(0, 3).map(f => (
              <span key={f} style={{ fontSize: '10px', padding: '3px 8px', border: '1px solid rgba(201,169,110,0.25)', color: 'rgba(201,169,110,0.8)', letterSpacing: '0.5px' }}>
                {f}
              </span>
            ))}
            {house.features.length > 3 && (
              <span style={{ fontSize: '10px', padding: '3px 8px', color: 'rgba(250,250,248,0.4)' }}>+{house.features.length - 3} lainnya</span>
            )}
          </div>

          {/* CTA */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '12px 16px',
            background: hovered ? 'rgba(201,169,110,0.12)' : 'rgba(201,169,110,0.06)',
            border: '1px solid rgba(201,169,110,0.2)',
            transition: 'background 0.3s',
          }}>
            <span style={{ fontSize: '12px', color: '#C9A96E', fontWeight: 600, letterSpacing: '1px' }}>LIHAT DETAIL</span>
            <span style={{ color: '#C9A96E', transform: hovered ? 'translateX(6px)' : 'translateX(0)', transition: 'transform 0.3s', fontSize: '18px' }}>→</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Link>
  )
}