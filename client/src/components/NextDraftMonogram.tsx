import React from 'react';

export const NextDraftMonogram = ({ className = "", size = "w-12 h-12" }) => {

  const fontStack = `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;

  return (
    <div 
      
      className={`relative shrink-0 select-none flex items-center justify-center ${size} ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
     
          <linearGradient id="monogramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="10%" stopColor="#3b82f6" /> 
            <stop offset="50%" stopColor="#a855f7" /> 
            <stop offset="100%" stopColor="#fb923c" /> 
          </linearGradient>
        </defs>

        <rect 
            x="2" y="2" width="96" height="96" rx="24" 
            className="fill-white dark:fill-gray-900" 
            stroke="url(#monogramGradient)" strokeWidth="4"
        /> 
       

        <text
          x="50%"
          y="54%" 
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily={fontStack}
          fontWeight="900" 
          fontSize="70"    
          letterSpacing="-4" 
          fill="url(#monogramGradient)"
        >
          ND
        </text>
      </svg>
    </div>
  );
};

export default NextDraftMonogram;