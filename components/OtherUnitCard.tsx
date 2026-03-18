'use client'
import Link from 'next/link'
import type { House } from '@/types'

export default function OtherUnitCard({ house }: { house: House }) {
  return (
    <Link href={`/rumah/${house.id}`} style={{ textDecoration: 'none' }}>
      <div
        style={{
          background: 'linear-gradient(145deg, #12121A, #1C1C28)',
          border: '1px solid rgba(255,255,255,0.06)',
          overflow: 'hidden',
          transition: 'all 0.3s',
        }}
        onMouseEnter={e => {
          ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,169,110,0.3)'
          ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
        }}
        onMouseLeave={e => {
          ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'
          ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
        }}
      >
        <img src={house.images[0]} alt={house.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
        <div style={{ padding: '16px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{house.name}</h3>
          <p style={{ color: '#C9A96E', fontSize: '16px', fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
            {house.priceDisplay}
          </p>
          <p style={{ color: 'rgba(250,250,248,0.4)', fontSize: '12px', marginTop: '4px' }}>
            {house.specs.lt}m² · {house.specs.kt}KT · {house.specs.km}KM
          </p>
        </div>
      </div>
    </Link>
  )
}