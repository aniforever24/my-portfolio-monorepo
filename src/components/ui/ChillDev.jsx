import React from 'react';
import { motion } from 'framer-motion';
import devAvatar from '../../assets/developer-icon.png'

const ChillDev = () => {
  // Floating icons for ambient effect
  const icons = ['⚛️', '🚀', '💻', '☕', '⚡', '✨'];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-125 bg-[#05070a] overflow-hidden rounded-3xl border border-gray-800/50 w-125">
      
      {/* 1. Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full" />

      {/* 2. Floating Ambient Icons */}
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [-20, -100],
            x: Math.sin(i) * 50 
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear"
          }}
          className="absolute text-2xl pointer-events-none"
          style={{ 
            left: `${15 + i * 15}%`, 
            bottom: '20%' 
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* 3. The Chilling Dev Avatar */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, -1, 1, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* You would replace this <img> with your character image file */}
        <div className="relative group cursor-pointer">
          <img 
            src={devAvatar} 
            alt="Chill Dev"
            className="w-48 md:w-54 h-auto drop-shadow-[0_20px_50px_rgba(79,70,229,0.3)] transition-transform duration-500 group-hover:scale-105 rounded-full outline-2 outline-gray-600"
          />
          
          {/* 4. Screen Glow Interaction */}
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-blue-400/30 blur-xl rounded-full"
          />
        </div>

        {/* 5. Status Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 px-4 py-2 bg-gray-900/80 border border-gray-700 rounded-full flex items-center gap-2"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-300">Current Status: Out of Office</span>
        </motion.div>
      </motion.div>

      {/* 6. Subtle Floor Shadow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="w-40 h-4 bg-black/40 blur-xl rounded-[100%] mt-4"
      />
      
      {/* Background Text */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <h2 className="text-[15rem] font-black text-white select-none">CHILL</h2>
      </div> */}
    </div>
  );
};

export default ChillDev;