export function DashedLine({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M10 100 Q 60 50, 100 100 T 190 100" 
        stroke="#FFD33D" 
        strokeWidth="8" 
        strokeDasharray="15,15"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function YellowArrows({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i}
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none"
          className="text-[#FFD33D]"
        >
          <path 
            d="M9 5L16 12L9 19" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

export function WavePattern({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(8)].map((_, i) => (
        <path 
          key={i}
          d={`M10 ${40 + i * 10} Q 60 ${30 + i * 10}, 100 ${40 + i * 10} T 190 ${40 + i * 10}`}
          stroke="#FFD33D" 
          strokeWidth="2" 
          fill="none"
          opacity={0.6 - i * 0.05}
        />
      ))}
    </svg>
  );
}

export function YellowDots({ count = 5, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {[...Array(count)].map((_, i) => (
        <div 
          key={i}
          className="w-3 h-3 rounded-full bg-[#FFD33D]"
          style={{ opacity: 0.4 + (i * 0.15) }}
        />
      ))}
    </div>
  );
}
