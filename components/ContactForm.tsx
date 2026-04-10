'use client'
import { useState } from 'react'

export default function ContactForm({ houseName }: { houseName?: string }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: houseName ? `Saya tertarik dengan unit ${houseName}.` : '', interest: houseName || '' })
  const [sent, setSent] = useState(false)

  const handleWA = () => {
    const msg = encodeURIComponent(`Halo, saya ${form.name}.\n\nSaya tertarik dengan ${form.interest || 'properti'} di Leonel Cluster.\n\n${form.message}\n\nNomor saya: ${form.phone}`)
    window.open(`https://wa.me/6281380085712?text=${msg}`, '_blank')
    setSent(true)
  }

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
    color: '#FAFAF8', padding: '14px 16px', fontSize: '14px', outline: 'none',
    fontFamily: 'DM Sans, sans-serif', transition: 'border-color 0.2s',
  }

  return (
    <section id="kontak" style={{ padding: '100px 40px', background: 'linear-gradient(180deg, transparent, rgba(201,169,110,0.05), transparent)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '80px', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '4px', color: '#C9A96E', marginBottom: '16px' }}>HUBUNGI KAMI</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, marginBottom: '24px' }}>
              Jadwalkan<br />
              <span style={{ color: '#C9A96E', fontStyle: 'italic' }}>Kunjungan</span>
            </h2>
            <p style={{ color: 'rgba(250,250,248,0.5)', lineHeight: 1.8, marginBottom: '40px' }}>
              Tim kami siap membantu Anda menemukan unit yang paling sesuai. Hubungi kami sekarang untuk kunjungan langsung atau konsultasi gratis.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: '📱', label: 'WhatsApp Putri', val: '+62 813-8008-5712' },
                { icon: '🕐', label: 'Jam Operasional', val: 'Senin – Minggu, 08.00–20.00 WIB' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '44px', height: '44px', background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#C9A96E', marginBottom: '2px' }}>{c.label.toUpperCase()}</div>
                    <div style={{ fontSize: '14px', color: 'rgba(250,250,248,0.8)' }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'linear-gradient(145deg, #12121A, #1C1C28)', border: '1px solid rgba(255,255,255,0.08)', padding: '40px' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <h3 style={{ fontSize: '22px', marginBottom: '8px', color: '#2ECC8A' }}>Pesan Terkirim!</h3>
                <p style={{ color: 'rgba(250,250,248,0.5)' }}>Tim kami akan menghubungi Anda segera.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: '24px', background: 'none', border: '1px solid rgba(201,169,110,0.3)', color: '#C9A96E', padding: '10px 24px', cursor: 'pointer', fontSize: '12px', letterSpacing: '1px', fontFamily: 'DM Sans, sans-serif' }}>
                  KIRIM LAGI
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(201,169,110,0.8)', display: 'block', marginBottom: '6px' }}>NAMA LENGKAP *</label>
                  <input value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} placeholder="John Doe" style={inputStyle}
                    onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(201,169,110,0.5)'}
                    onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(201,169,110,0.8)', display: 'block', marginBottom: '6px' }}>NO. WhatsApp *</label>
                    <input value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))} placeholder="0812xxxx" style={inputStyle}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(201,169,110,0.5)'}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(201,169,110,0.8)', display: 'block', marginBottom: '6px' }}>UNIT MINAT</label>
                    <select value={form.interest} onChange={e => setForm(p => ({...p, interest: e.target.value}))} style={{...inputStyle, cursor: 'pointer'}}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(201,169,110,0.5)'}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'}
                    >
                      <option value="">Semua Unit</option>
                      <option>Type 60 — Unit 1</option>
                      <option>Type 60 — Unit 2</option>
                      <option>Type 100 — Unit 1</option>
                      <option>Type 100 — Unit 2</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(201,169,110,0.8)', display: 'block', marginBottom: '6px' }}>PESAN</label>
                  <textarea value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} rows={4} style={{...inputStyle, resize: 'none'}}
                    onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(201,169,110,0.5)'}
                    onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <button onClick={handleWA} disabled={!form.name || !form.phone}
                  style={{ background: form.name && form.phone ? 'linear-gradient(135deg, #25D366, #1DA851)' : 'rgba(255,255,255,0.1)', color: form.name && form.phone ? '#fff' : 'rgba(255,255,255,0.3)', padding: '16px', border: 'none', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', cursor: form.name && form.phone ? 'pointer' : 'not-allowed', fontFamily: 'DM Sans, sans-serif', transition: 'all 0.2s' }}>
                  📱 KIRIM VIA WHATSAPP
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}