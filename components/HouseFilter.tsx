'use client'
import { useState } from 'react'

type FilterProps = {
  onFilterChange: (filter: { status: string; sort: string }) => void
}

export default function HouseFilter({ onFilterChange }: FilterProps) {
  const [status, setStatus] = useState('all')
  const [sort, setSort] = useState('default')

  const handleChange = (newStatus: string, newSort: string) => {
    setStatus(newStatus)
    setSort(newSort)
    onFilterChange({ status: newStatus, sort: newSort })
  }

  const btnStyle = (active: boolean) => ({
    padding: '8px 20px', background: active ? 'linear-gradient(135deg, #C9A96E, #8B6914)' : 'rgba(255,255,255,0.05)',
    border: active ? 'none' : '1px solid rgba(255,255,255,0.1)',
    color: active ? '#0A0A0F' : 'rgba(250,250,248,0.6)',
    fontSize: '11px', letterSpacing: '1px', fontWeight: active ? 700 : 500,
    cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'DM Sans, sans-serif',
  })

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {[
          { val: 'all', label: 'Semua' },
          { val: 'available', label: '✓ Tersedia' },
          { val: 'indent', label: '⏳ Indent' },
          { val: 'sold', label: '✗ Terjual' },
        ].map(item => (
          <button key={item.val} style={btnStyle(status === item.val)} onClick={() => handleChange(item.val, sort)}>
            {item.label.toUpperCase()}
          </button>
        ))}
      </div>
      <select
        value={sort}
        onChange={e => handleChange(status, e.target.value)}
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(250,250,248,0.8)', padding: '8px 16px', fontSize: '12px', fontFamily: 'DM Sans, sans-serif', cursor: 'pointer', outline: 'none' }}
      >
        <option value="default">Urutan Default</option>
        <option value="price-asc">Harga: Terendah</option>
        <option value="price-desc">Harga: Tertinggi</option>
        <option value="lt-desc">Luas Tanah: Terbesar</option>
      </select>
    </div>
  )
}