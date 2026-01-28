import React from 'react';
import "./css/backgroundGlow.css"

const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 -z-50 bg-[#05070a] h-full w-full overflow-hidden pointer-events-none">
      {/* Blob 1: Violet/Purple */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#a855f7] opacity-[0.15] blur-[120px] animate-blob-float-1" />
      
      {/* Blob 2: Pink/Magenta */}
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#f25c89] opacity-[0.12] blur-[150px] animate-blob-float-2" />
      
      {/* Blob 3: Blue/Indigo */}
      <div className="absolute top-[30%] right-[20%] w-[450px] h-[450px] rounded-full bg-[#717cf5] opacity-[0.1] blur-[130px] animate-blob-float-3" />

      {/* Optional: Subtle Noise Grain (Adds a "textured" premium feel) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </div>
  );
};

export default BackgroundGlow;