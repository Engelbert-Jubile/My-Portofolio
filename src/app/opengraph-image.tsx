import { ImageResponse } from 'next/og';

import { siteConfig } from '@/lib/seo';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background:
          'linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(14, 116, 144) 45%, rgb(236, 72, 153) 100%)',
        color: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '56px',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ fontSize: 34, opacity: 0.85 }}>
        Next.js + Vercel Engineer
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -1.5 }}>
          Engelbert Jubile
        </div>
        <div style={{ fontSize: 28, opacity: 0.9 }}>
          {siteConfig.description}
        </div>
      </div>
      <div style={{ fontSize: 24, opacity: 0.8 }}>Software Engineer</div>
    </div>,
    size
  );
}
