// components/FullBackground.js
import { useState, useEffect } from 'react';

export default function FullBackground({ children }) {
  const images = ['/slide1.png', '/slide2.png', '/slide3.png', '/slide4.png'];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white overflow-hidden">

      {/* Background IMG */}
      <img
        src={images[current]}
        alt="DSC Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 blur-[1px]"
      />

      {/* Page Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
}
