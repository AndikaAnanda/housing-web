'use client'
import { useState } from 'react'

export default function VirtualTour({ tourUrl, mapCoords }: { tourUrl: string; mapCoords: { lat: number; lng: number } }) {
  const [tab, setTab] = useState<'tour' | 'map'>('tour')

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${mapCoords.lng}!3d${mapCoords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1234567890`

  return (
    <div style={{ marginTop: '40px' }}>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: 0, marginBottom: '0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        {([
          { key: 'tour', label: '🎥 Virtual Tour 360°' },
          { key: 'map', label: '📍 Peta Lokasi' },
        ] as const).map(t => (
          <button key={t.key} onClick={() => setTab(t.key)}
            style={{ padding: '14px 28px', background: 'none', border: 'none', borderBottom: tab === t.key ? '2px solid #C9A96E' : '2px solid transparent', color: tab === t.key ? '#C9A96E' : 'rgba(250,250,248,0.4)', cursor: 'pointer', fontSize: '13px', fontWeight: 600, letterSpacing: '0.5px', fontFamily: 'DM Sans, sans-serif', transition: 'all 0.2s', marginBottom: '-1px' }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ height: '420px', position: 'relative', border: '1px solid rgba(201,169,110,0.2)', borderTop: 'none' }}>
        {tab === 'tour' ? (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <iframe src={tourUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen />
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(10,10,15,0.9)', backdropFilter: 'blur(10px)', padding: '8px 16px', fontSize: '11px', color: 'rgba(250,250,248,0.5)', letterSpacing: '1px', border: '1px solid rgba(255,255,255,0.1)' }}>
              🖱️ DRAG UNTUK MENJELAJAH 360°
            </div>
          </div>
        ) : (
          <iframe src={mapUrl} width="100%" height="100%" style={{ border: 0 }} loading="lazy" />
        )}
      </div>
    </div>
  )
}