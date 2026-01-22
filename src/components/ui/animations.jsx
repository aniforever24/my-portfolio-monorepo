import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { twMerge } from "tailwind-merge";
import "../css/animations.css";

export const DancingArrow = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="animate-bounce">
				{/* Using Lucide-React Arrow for a clean look */}
				<ArrowDown size={`30`} className="text-[#363b44]" />
			</div>
		</div>
	);
};

export const SkillsTypeAnimation = () => {
	return (
		<div className="font-[Consolas] text-purple-300 md:text-xl sm:text-[16px] text-sm">
			<TypeAnimation
				sequence={[
					500,
					"HTML | ",
					500,
					"HTML | CSS |",
					500,
					"HTML | CSS | Javascript |",
					500,
					"HTML | CSS | Javascript | React |",
					500,
					"HTML | CSS | Javascript | React | Node.js |",
					500,
					"HTML | CSS | Javascript | React | Node.js | Express |",
					500,
					"HTML | CSS | Javascript | React | Node.js | Express | MongoDb |",
					500,
					"HTML | CSS | Javascript | React | Node.js | Express | MongoDb | Python",
				]}
			/>
		</div>
	);
};

export function GradientTitle({ title, className }) {
	return (
		<h1
			className={twMerge(
				"text-[26px] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-moving-gradient animate-combine-flow-pulse text-center [word-spacing:0.12em]",
				className,
			)}
		>
			{title}
		</h1>
	);
}

export const GlowingDivider = ({ centralGlow = true }) => {
	return (
		<div className="relative w-full flex justify-center items-center py-10 bg-[#05070a] animate-pulse">
			{/* 1. The Main Line */}
			<div className="relative w-full h-px">
				{/* 
            Gradient goes: Transparent -> Signature Purple -> Transparent 
            This makes the line feel like it's vanishing into the darkness at the edges.
        */}
				<div className="absolute inset-0 bg-linear-to-r from-transparent via-[#a855f7]/50 to-transparent" />

				{/* 2. The Animated Glow Effect */}
				<motion.div
					initial={{ opacity: 0.2, scaleX: 0.8 }}
					animate={{
						opacity: [0.2, 0.7, 0.2], // Fades in and out
						scaleX: [0.8, 1, 0.8], // Slightly "stretches" the glow
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute inset-0 bg-linear-to-r from-transparent via-[#a855f7] to-transparent blur-[2px]"
				/>

				{/* 3. The Central "Hot Spot" (Extra bright point in the middle) */}
				{centralGlow && (
					<motion.div
						animate={{ opacity: [0, 1, 0] }}
						transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-px bg-gray-200 blur-xs rounded-full"
					/>
				)}
			</div>
		</div>
	);
};

export const WaveDivider = () => {
  return (
    <div className="relative w-full flex justify-center items-center py-16 bg-[#05070a] overflow-hidden">
      {/* 1. The Static Background Line (Guide) */}
      <div className="absolute w-full h-[1px] bg-gray-800/30" />

      {/* 2. The Symmetrical Back and Forth Wave */}
      <motion.div
        /* 
           Width is 40%. 
           -20% initial means half the beam is off-screen to the left.
           80% animate means the beam starts at 80% and ends at 120%, 
           leaving exactly half off-screen to the right.
        */
        initial={{ left: "-30%" }}
        animate={{ left: "90%" }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute w-[40%] h-[2px] z-10"
      >
        {/* The Glowing Gradient Beam */}
        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#a855f7] to-transparent shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
        
        {/* Extra Bloom/Blur Layer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-12 bg-[#a855f7]/10 blur-2xl rounded-full" />
      </motion.div>

      {/* 3. Subtle Ambient Center Point */}
      <div className="absolute w-32 h-[1px] bg-[#717cf5]/20 blur-sm" />
    </div>
  );
};

export default WaveDivider;

export const LoopingDotDivider = () => {
  return (
    <div className="relative w-full flex justify-center items-center py-12 bg-[#05070a] overflow-hidden">
      
      {/* 1. The Track (Static Line) */}
      <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      {/* 2. The Looping Glowing Dot Container */}
      <motion.div
        initial={{ left: "-5%" }}
        animate={{ left: "105%" }}
        transition={{
          duration: 3,        // Speed of the dot
          repeat: Infinity,   // Loop forever
          ease: "linear",     // Constant linear speed
        }}
        className="absolute flex items-center justify-center w-20 h-4 z-10"
      >
        {/* The "Head" of the dot (The brightest point) */}
        <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#fff,0_0_20px_#a855f7]" />
        
        {/* The Glow "Bloom" (Soft purple light around the dot) */}
        <div className="absolute w-12 h-12 bg-[#a855f7]/30 blur-xl rounded-full" />
        
        {/* Optional: The "Tail" (A small trail following the dot) */}
        <div className="absolute right-1/2 w-24 h-[2px] bg-gradient-to-l from-[#a855f7] to-transparent rounded-full opacity-50" />
      </motion.div>

    </div>
  );
};

export const ECGDivider = () => {
  // A realistic ECG path: Flat -> P-wave -> QRS Complex -> T-wave -> Flat
  // Scaled to a viewBox of 0 0 1000 100
  const ecgPath = "M0,50 L350,50 L360,40 L370,50 L380,50 L390,10 L410,90 L430,50 L460,50 L480,35 L500,50 L1000,50";

  return (
    <div className="relative w-full py-20 bg-[#05070a] flex items-center justify-center overflow-hidden">
      
      {/* 1. The Background "Dead" Line (Static & Dark) */}
      <svg 
        viewBox="0 0 1000 100" 
        preserveAspectRatio="none" 
        className="absolute w-full h-24 opacity-20"
      >
        <path
          d={ecgPath}
          fill="none"
          stroke="#a855f7"
          strokeWidth="1"
        />
      </svg>

      {/* 2. The Animated Pulse */}
      <svg 
        viewBox="0 0 1000 100" 
        preserveAspectRatio="none" 
        className="absolute w-full h-24 z-10"
      >
        <defs>
          {/* This gradient creates the 'scanning' head and fading tail */}
          <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="purple/10" />
            <stop offset="80%" stopColor="#a855f7" stopOpacity="0.2" />
            <stop offset="95%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>

          <mask id="pulse-mask">
            <motion.rect
              x="-100%"
              y="0"
              width="100%"
              height="100%"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              fill="url(#pulse-gradient)"
            />
          </mask>
        </defs>

        {/* The Glowing Line Path */}
        <path
          d={ecgPath}
          fill="none"
          stroke="url(#pulse-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.8))",
          }}
          mask="url(#pulse-mask)"
        />
      </svg>

      {/* 3. Central Ambient Glow */}
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#a855f7]/10 to-transparent blur-md" />
    </div>
  );
};