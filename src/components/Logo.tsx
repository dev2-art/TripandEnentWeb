interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      width="180"
      height="40"
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Camera Lens Icon */}
      <g>
        {/* Outer lens ring */}
        <circle cx="20" cy="20" r="15" stroke="#ea580c" strokeWidth="2.5" fill="none" />
        
        {/* Inner lens elements */}
        <circle cx="20" cy="20" r="10" stroke="#ea580c" strokeWidth="1.5" fill="none" opacity="0.6" />
        <circle cx="20" cy="20" r="6" fill="#ea580c" opacity="0.3" />
        
        {/* Lens highlight */}
        <path
          d="M 15 15 Q 18 12 22 14"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        
        {/* Aperture blades */}
        <g opacity="0.4">
          <line x1="20" y1="14" x2="20" y2="16" stroke="#ea580c" strokeWidth="1" />
          <line x1="20" y1="24" x2="20" y2="26" stroke="#ea580c" strokeWidth="1" />
          <line x1="14" y1="20" x2="16" y2="20" stroke="#ea580c" strokeWidth="1" />
          <line x1="24" y1="20" x2="26" y2="20" stroke="#ea580c" strokeWidth="1" />
        </g>
        
        {/* Corner accent */}
        <rect x="28" y="8" width="4" height="4" fill="#ea580c" rx="1" />
      </g>

      {/* Text: TRIP */}
      <g>
        <text
          x="45"
          y="26"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="20"
          fontWeight="600"
          fill="white"
          letterSpacing="1"
        >
          TRIP
        </text>
      </g>

      {/* Text: MEDIA */}
      <g>
        <text
          x="95"
          y="26"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="20"
          fontWeight="600"
          fill="#ea580c"
          letterSpacing="1"
        >
          MEDIA
        </text>
      </g>

      {/* Tagline */}
      <g opacity="0.5">
        <text
          x="45"
          y="34"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="7"
          fontWeight="400"
          fill="white"
          letterSpacing="2"
        >
          CREATIVE STUDIO
        </text>
      </g>
    </svg>
  );
}

// Compact version for mobile
export function LogoCompact({ className = "" }: LogoProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Camera Lens Icon */}
      <circle cx="20" cy="20" r="15" stroke="#ea580c" strokeWidth="2.5" fill="none" />
      <circle cx="20" cy="20" r="10" stroke="#ea580c" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="20" cy="20" r="6" fill="#ea580c" opacity="0.3" />
      
      {/* Lens highlight */}
      <path
        d="M 15 15 Q 18 12 22 14"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      
      {/* Aperture blades */}
      <g opacity="0.4">
        <line x1="20" y1="14" x2="20" y2="16" stroke="#ea580c" strokeWidth="1" />
        <line x1="20" y1="24" x2="20" y2="26" stroke="#ea580c" strokeWidth="1" />
        <line x1="14" y1="20" x2="16" y2="20" stroke="#ea580c" strokeWidth="1" />
        <line x1="24" y1="20" x2="26" y2="20" stroke="#ea580c" strokeWidth="1" />
      </g>
      
      {/* Corner accent */}
      <rect x="28" y="8" width="4" height="4" fill="#ea580c" rx="1" />
    </svg>
  );
}
