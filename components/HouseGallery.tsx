'use client'
import { useState } from 'react'

export default function HouseGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  return (
    <>
      <div>
        {/* Main Image */}
        <div
          onClick={() => setLightbox(true)}
          style={{ position: 'relative', height: '520px', overflow: 'hidden', cursor: 'zoom-in', marginBottom: '12px' }}
        >
          <img src={images[active]} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.4s' }} />
          <div style={{ position: 'absolute', bottom: '20px', right: '20px', background: 'rgba(10,10,15,0.8)', backdropFilter: 'blur(10px)', color: '#C9A96E', padding: '8px 16px', fontSize: '11px', letterSpacing: '2px', border: '1px solid rgba(201,169,110,0.3)' }}>
            🔍 PERBESAR
          </div>
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(10,10,15,0.8)', backdropFilter: 'blur(10px)', color: 'rgba(250,250,248,0.6)', padding: '8px 16px', fontSize: '11px', letterSpacing: '1px' }}>
            {active + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${images.length}, 1fr)`, gap: '8px' }}>
          {images.map((img, i) => (
            <div key={i} onClick={() => setActive(i)}
              style={{ height: '80px', overflow: 'hidden', cursor: 'pointer', border: `2px solid ${i === active ? '#C9A96E' : 'transparent'}`, transition: 'border-color 0.2s' }}
            >
              <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: i === active ? 'none' : 'brightness(0.6)', transition: 'filter 0.2s' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}
        >
          <button onClick={e => { e.stopPropagation(); setActive(p => (p - 1 + images.length) % images.length) }}
            style={{ position: 'absolute', left: '20px', background: 'rgba(201,169,110,0.2)', border: '1px solid rgba(201,169,110,0.4)', color: '#C9A96E', width: '48px', height: '48px', fontSize: '24px', cursor: 'pointer' }}>←</button>
          <img src={images[active]} alt={name} style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain' }} onClick={e => e.stopPropagation()} />
          <button onClick={e => { e.stopPropagation(); setActive(p => (p + 1) % images.length) }}
            style={{ position: 'absolute', right: '20px', background: 'rgba(201,169,110,0.2)', border: '1px solid rgba(201,169,110,0.4)', color: '#C9A96E', width: '48px', height: '48px', fontSize: '24px', cursor: 'pointer' }}>→</button>
          <button onClick={() => setLightbox(false)}
            style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#C9A96E', fontSize: '32px', cursor: 'pointer' }}>✕</button>
        </div>
      )}
    </>
  )
}