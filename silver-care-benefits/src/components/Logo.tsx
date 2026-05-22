import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Icon representing SCB, leaves, and hand/heart/cross */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 md:w-12 md:h-12 text-primary filter drop-shadow-sm transition-transform duration-300 hover:scale-105"
        aria-hidden="true"
      >
        {/* Main outer thin circle */}
        <circle cx="50" cy="45" r="38" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
        <circle cx="50" cy="45" r="35" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        
        {/* Leaf/Branch motif on the left */}
        <path
          d="M28 65C23 58 20 48 24 35C26 30 30 25 36 21C34 27 32 35 34 42C35 46 38 50 41 53"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Little leaves */}
        <path d="M26 38C22 36 20 32 20 30C23 31 25 34 26 38Z" fill="currentColor" />
        <path d="M24 48C19 47 17 44 17 42C20 42 22 45 24 48Z" fill="currentColor" />
        <path d="M29 31C26 27 25 22 26 20C28 22 29 27 29 31Z" fill="currentColor" />
        <path d="M35 24C33 19 33 15 35 13C37 15 37 19 35 24Z" fill="currentColor" />
        <path d="M31 43C28 40 28 35 30 33C31 35 32 40 31 43Z" fill="currentColor" />

        {/* Initials "SCB" inside the badge */}
        <text
          x="44"
          y="48"
          fontFamily="Georgia, serif"
          fontSize="24"
          fontWeight="bold"
          fill="currentColor"
          textAnchor="middle"
          className="select-none"
        >
          S
        </text>
        <text
          x="58"
          y="56"
          fontFamily="Georgia, serif"
          fontSize="24"
          fontWeight="bold"
          fill="currentColor"
          opacity="0.95"
          textAnchor="middle"
          className="select-none"
        >
          B
        </text>
        <text
          x="53"
          y="50"
          fontFamily="Georgia, serif"
          fontSize="14"
          fontWeight="normal"
          fill="var(--silver)"
          textAnchor="middle"
          className="select-none font-light"
        >
          C
        </text>

        {/* Hand holding heart/cross on the right bottom */}
        {/* Hand outline */}
        <path
          d="M50 72C56 72 63 68 69 64C72 62 76 60 77 62C78 64 72 69 66 73C59 77 52 77 46 73C44 71 42 68 44 66C45 64 48 68 50 72Z"
          fill="currentColor"
          opacity="0.85"
        />
        {/* Heart */}
        <path
          d="M68 54C65 52 63 54 63 54C63 54 61 52 58 54C55 57 56 61 63 65C70 61 71 57 68 54Z"
          fill="currentColor"
        />
        {/* Cross inside heart (represented as small white cross) */}
        <path d="M62 57H64V61H62V57Z" fill="var(--background)" />
        <path d="M60 59H66V60H60V59Z" fill="var(--background)" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-foreground leading-none">
            Silver Care
          </span>
          <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.2em] text-primary uppercase leading-tight mt-0.5">
            Benefits
          </span>
        </div>
      )}
    </div>
  );
}
