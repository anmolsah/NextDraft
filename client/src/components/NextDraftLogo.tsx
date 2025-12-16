import React from 'react';

export const NextDraftLogo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      
      
      <div className="relative w-12 h-12 md:w-16 md:h-16 shrink-0">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="10%" stopColor="#3b82f6" /> {/* Blue */}
              <stop offset="50%" stopColor="#a855f7" /> {/* Purple */}
              <stop offset="100%" stopColor="#fb923c" /> {/* Orange */}
            </linearGradient>
          </defs>

          <path
            d="M 10 55 C 10 30, 30 15, 68 15 C 60 30, 40 50, 10 55 Z"
            fill="url(#logoGradient)"
          />

          
          <path
            d="M 72 18 C 72 18, 55 45, 25 58 C 15 63, 10 55, 15 48 C 8 68, 20 85, 45 85 C 75 85, 85 60, 85 45 C 85 30, 75 20, 72 18 Z"
            fill="url(#logoGradient)"
          />

     
          <path
            d="M 78 8 Q 80 14, 86 16 Q 80 18, 78 24 Q 76 18, 70 16 Q 76 14, 78 8 Z"
            fill="#8b5cf6" 
            style={{ fill: "url(#logoGradient)" }}
          />
        </svg>
      </div>

      
      <h1 className="text-4xl md:text-6xl font-[800] tracking-tight font-sans">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
          NextDraft
        </span>
      </h1>
    </div>
  );
};

export default NextDraftLogo;
