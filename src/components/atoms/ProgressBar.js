
import React from 'react';

export default function ProgressBar({ 
  progress = 0, 
  percent, // backward compatibility
  showGlow = false,
  animated = true,
  color = '#4f9cf9',
  height = 6,
  className = '',
  showText = false
}) {
  // Use progress prop, fallback to percent for backward compatibility
  const progressValue = progress !== undefined ? progress : (percent || 0);
  
  const progressBarClasses = `
    relative w-full bg-gray-700/50 rounded-full overflow-hidden
    ${showGlow ? 'shadow-[0_0_8px_rgba(79,156,249,0.6)]' : ''} 
    ${className}
  `.trim();

  const barStyle = {
    height: `${height}px`
  };

  const fillStyle = {
    width: `${Math.min(100, Math.max(0, progressValue))}%`,
    backgroundColor: color
  };

  return (
    <div className={progressBarClasses} style={barStyle}>
      <div className="w-full h-full bg-gray-700/50 rounded-full relative overflow-hidden">
        <div 
          className="h-full transition-all duration-500 ease-out rounded-full relative overflow-hidden" 
          style={fillStyle}
        >
          {animated && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite] transform -skew-x-12" />
          )}
        </div>
      </div>
      {showText && (
        <div className="absolute right-0 top-0 text-xs text-gray-300 font-medium">
          {Math.round(progressValue)}%
        </div>
      )}
    </div>
  );
}
