import { useEffect, useState } from 'react';
import { useInterval } from 'react-use';

const backgrounds = [
  'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1920',
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920',
  'https://images.unsplash.com/photo-1599447421378-31226b94e28d?w=1920'
];

export default function BackgroundSlider() {
  const [index, setIndex] = useState(0);

  useInterval(() => {
    setIndex((current) => (current + 1) % backgrounds.length);
  }, 5000);

  return (
    <div className="fixed inset-0 -z-10">
      {backgrounds.map((bg, i) => (
        <div
          key={bg}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: i === index ? 1 : 0,
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}
    </div>
  );
}