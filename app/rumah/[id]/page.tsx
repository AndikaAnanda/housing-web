import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import HouseGallery from '@/components/HouseGallery';
import VirtualTour from '@/components/VirtualTour';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import housesData from '@/data/houses.json';
import Link from 'next/link';
import OtherUnitCard from '@/components/OtherUnitCard';
import type { House } from '@/types';
import HouseDetailCTA from '@/components/HouseDetailCTA';

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  available: { label: 'Tersedia', color: '#0A0A0F', bg: '#2ECC8A' },
  indent:    { label: 'Indent',   color: '#0A0A0F', bg: '#F59E0B' },
  sold:      { label: 'Terjual',  color: '#FAFAF8', bg: '#E55353' },
};

export default async function HouseDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const house = housesData.houses.find((h) => h.id === id);
  if (!house) notFound();
  const status = statusConfig[house.status];

  const waMsg = encodeURIComponent(
    `Halo, saya tertarik dengan unit *${house.name}* (${house.priceDisplay}) di Cluster Verdana Hills.\n\nBisa bantu informasi lebih lanjut?`,
  );

  return (
    <>
      <Navbar />
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '100px 40px 60px',
      }}>

        {/* Breadcrumb */}
        <div style={{
          display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap',
          marginBottom: '40px', fontSize: '12px', color: 'rgba(250,250,248,0.4)',
        }}>
          <Link href="/" style={{ color: '#C9A96E', textDecoration: 'none' }}>Beranda</Link>
          <span>›</span>
          <Link href="/#listing" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Properti</Link>
          <span>›</span>
          <span>{house.name}</span>
        </div>

        {/* Main Grid: Gallery + Sidebar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: 'clamp(32px, 5vw, 60px)',
          alignItems: 'start',
        }}>
          {/* Left: Gallery + Tour */}
          <div style={{ minWidth: 0 }}>
            <HouseGallery images={house.images} name={house.name} />
            <VirtualTour
              tourUrl={house.virtualTourUrl}
              mapCoords={housesData.cluster.coordinates}
            />
          </div>

          {/* Right: Info */}
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{
                background: status.bg, color: status.color,
                padding: '4px 12px', fontSize: '10px', fontWeight: 700, letterSpacing: '2px',
              }}>
                {status.label.toUpperCase()}
              </span>
              <span style={{
                background: 'rgba(201,169,110,0.1)', color: '#C9A96E',
                padding: '4px 12px', fontSize: '10px', fontWeight: 600,
                border: '1px solid rgba(201,169,110,0.3)', letterSpacing: '1px',
              }}>
                {house.type.toUpperCase()}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, marginBottom: '4px' }}>
              {house.name}
            </h1>
            <p style={{ color: 'rgba(250,250,248,0.4)', fontSize: '13px', marginBottom: '24px', letterSpacing: '1px' }}>
              📍 {house.address}, {housesData.cluster.name}
            </p>

            {/* Harga */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(201,169,110,0.1), rgba(201,169,110,0.05))',
              border: '1px solid rgba(201,169,110,0.2)',
              padding: '20px 24px', marginBottom: '24px',
            }}>
              <div style={{ fontSize: '11px', letterSpacing: '3px', color: 'rgba(201,169,110,0.6)', marginBottom: '4px' }}>HARGA</div>
              <div style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: '#C9A96E' }}>
                {house.priceDisplay}
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(250,250,248,0.4)', marginTop: '4px' }}>
                atau cicilan mulai ≈ Rp 14 juta/bulan (KPR 20 thn)
              </div>
            </div>

            {/* Specs Grid — 3 kolom tetap, ukuran kecil jadi 2 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 80px), 1fr))',
              gap: '8px', marginBottom: '24px',
            }}>
              {[
                { icon: '📐', val: `${house.specs.lt} m²`, label: 'Luas Tanah' },
                { icon: '🏠', val: `${house.specs.lb} m²`, label: 'Luas Bangunan' },
                { icon: '🛏',  val: `${house.specs.kt}`,    label: 'Kamar Tidur' },
                { icon: '🚿', val: `${house.specs.km}`,    label: 'Kamar Mandi' },
                { icon: '🚗', val: `${house.specs.garasi}`, label: 'Garasi' },
                { icon: '🏗',  val: `${house.specs.lantai}`, label: 'Lantai' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  padding: '12px 8px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '18px', marginBottom: '4px' }}>{s.icon}</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#FAFAF8', fontFamily: 'Playfair Display, serif' }}>
                    {s.val}
                  </div>
                  <div style={{ fontSize: '9px', color: 'rgba(250,250,248,0.4)', letterSpacing: '0.5px', marginTop: '2px' }}>
                    {s.label.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <HouseDetailCTA
              status={house.status}
              waLink={`https://wa.me/${house.whatsapp}?text=${waMsg}`}
            />

            {/* Features */}
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(201,169,110,0.7)', marginBottom: '12px' }}>
                FITUR & FASILITAS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {house.features.map((f) => (
                  <span key={f} style={{
                    padding: '6px 12px',
                    border: '1px solid rgba(201,169,110,0.2)',
                    color: 'rgba(250,250,248,0.7)',
                    fontSize: '11px', letterSpacing: '0.5px',
                  }}>
                    ✓ {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div style={{ marginTop: 'clamp(40px, 8vw, 60px)', maxWidth: '700px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '4px', color: '#C9A96E', marginBottom: '16px' }}>
            DESKRIPSI UNIT
          </div>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, marginBottom: '16px' }}>
            Tentang {house.name}
          </h2>
          <p style={{ color: 'rgba(250,250,248,0.6)', lineHeight: 1.9, fontSize: '15px' }}>
            {house.description}
          </p>
        </div>

        {/* Other Units */}
        <div style={{ marginTop: 'clamp(40px, 8vw, 80px)', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ fontSize: '11px', letterSpacing: '4px', color: '#C9A96E', marginBottom: '12px' }}>UNIT LAINNYA</div>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, marginBottom: '28px' }}>Jelajahi Pilihan Lain</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
          }}>
            {(housesData.houses as House[])
              .filter((h) => h.id !== id)
              .slice(0, 3)
              .map((h) => (
                <OtherUnitCard key={h.id} house={h} />
              ))}
          </div>
        </div>

      </div>

      <ContactForm houseName={house.name} />
      <Footer />
    </>
  );
}