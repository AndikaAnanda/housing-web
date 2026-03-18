'use client';
import { useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '750px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.05)',
          animation: 'heroZoom 20s ease-in-out infinite alternate',
        }}
      />

      {/* Gradient Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.1) 40%, rgba(10,10,15,0.6) 70%, rgba(10,10,15,1) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 70% 50%, rgba(201,169,110,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '900px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            border: '1px solid rgba(201,169,110,0.4)',
            padding: '6px 20px',
            fontSize: '11px',
            letterSpacing: '4px',
            color: '#C9A96E',
            marginBottom: '32px',
            animation: 'fadeInUp 0.8s ease forwards',
          }}
        >
          CLUSTER EKSKLUSIF — 5 UNIT TERBATAS
        </div>

        <h1
          style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 800,
            lineHeight: 1.0,
            marginBottom: '24px',
            animation: 'fadeInUp 0.8s 0.2s ease both',
          }}
        >
          Rumah Impian
          <br />
          <span style={{ color: '#C9A96E', fontStyle: 'italic' }}>
            di Example Houses
          </span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'rgba(250,250,248,0.7)',
            maxWidth: '560px',
            margin: '0 auto 48px',
            lineHeight: 1.7,
            animation: 'fadeInUp 0.8s 0.4s ease both',
          }}
        >
          Hunian premium modern dengan konsep green living. Lokasi strategis di
          Pekanbaru, hanya 5 unit tersedia.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: '0 16px',
            animation: 'fadeInUp 0.8s 0.6s ease both',
          }}
        >
          <a
            href="#listing"
            style={{
              background: 'linear-gradient(135deg, #C9A96E, #8B6914)',
              color: '#0A0A0F',
              padding: '16px 32px',
              textDecoration: 'none',
              fontWeight: 700,
              letterSpacing: '2px',
              fontSize: '12px',
              transition: 'transform 0.2s, box-shadow 0.2s',
              width: '100%',
              maxWidth: '260px',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow =
                '0 12px 40px rgba(201,169,110,0.4)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            LIHAT PROPERTI
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            style={{
              border: '1px solid rgba(201,169,110,0.5)',
              color: '#C9A96E',
              padding: '16px 40px',
              textDecoration: 'none',
              fontWeight: 600,
              letterSpacing: '2px',
              fontSize: '12px',
              transition: 'all 0.2s',
              width: '100%',
      maxWidth: '260px',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
            }}
            className="flex justify-center items-center"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                'rgba(201,169,110,0.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
            }}
          >
            <FaWhatsapp style={{ marginRight: '8px', fontSize: '16px' }} />{' '}
            WHATSAPP
          </a>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          gap: 0,
          background: 'rgba(10,10,15,0.8)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(201,169,110,0.2)',
        }}
      >
        {[
          { num: '5', label: 'Unit Eksklusif' },
          { num: '5', label: 'Unit Tersedia' },
          { num: '100–150m²', label: 'Luas Tanah' },
          { num: '550Jt', label: 'Mulai dari' },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              padding: 'clamp(12px, 2vw, 20px) clamp(8px, 2vw, 40px)',
              textAlign: 'center',
              flex: 1,
              borderRight: i < 3 ? '1px solid rgba(201,169,110,0.15)' : 'none',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                color: '#C9A96E',
                whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
              }}
            >
              {stat.num}
            </div>
            <div
              style={{
                fontSize: '10px',
                letterSpacing: '2px',
                color: 'rgba(250,250,248,0.5)',
                marginTop: '4px',
                whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
              }}
            >
              {stat.label.toUpperCase()}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
