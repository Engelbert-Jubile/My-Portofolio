import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        background:
          'linear-gradient(140deg, rgb(2, 6, 23) 0%, rgb(30, 41, 59) 45%, rgb(14, 116, 144) 100%)',
        color: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        fontSize: 72,
        fontWeight: 700,
        letterSpacing: -1.8,
      }}
    >
      Engelbert Jubile
    </div>,
    size
  );
}
