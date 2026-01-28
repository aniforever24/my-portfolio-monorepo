import React from 'react';

export const YogaIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Head */}
    <circle cx="12" cy="5" r="2.5" fill="currentColor" fillOpacity="0.2" />
    
    {/* Ponytail (The distinct feature from your image) */}
    <path d="M14 4.5c.5 0 2.5 1 2.5 3 0 1.5-1.5 2-2 2" />
    
    {/* Torso & Shoulders */}
    <path d="M12 7.5v6" />
    <path d="M8 10h8" />

    {/* Arms to Knees */}
    <path d="M8 10l-3 4.5" />
    <path d="M16 10l3 4.5" />

    {/* Mudra / Hands (Small circles at the knees) */}
    <circle cx="5" cy="14.5" r="1" fill="currentColor" />
    <circle cx="19" cy="14.5" r="1" fill="currentColor" />

    {/* Crossed Legs (The base silhouette) */}
    <path d="M12 13.5l-5 2.5-3-1.5" />
    <path d="M12 13.5l5 2.5 3-1.5" />
    <path d="M9 18h6" />
  </svg>
);

export const MeditationIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Lotus Flower */}
    {/* Center Petal */}
    <path d="M12 12c2-3 2-7 0-9-2 2-2 6 0 9Z" />
    {/* Left Petal */}
    <path d="M8 10c-2-1.5-3-3.5-3-6" />
    {/* Right Petal */}
    <path d="M16 10c2-1.5 3-3.5 3-6" />

    {/* Hand Silhouette */}
    {/* Top Finger/Palm Edge */}
    <path d="M4 15c1.5 0 2.5 1 5 1h8" />
    {/* Bottom Palm & Wrist Wrap */}
    <path d="M3 18c1 0 2 1 4 1h9c1.1 0 2 .9 2 2s-.9 2-2 2H5c-1.1 0-2-.9-2-2" />
  </svg>
);