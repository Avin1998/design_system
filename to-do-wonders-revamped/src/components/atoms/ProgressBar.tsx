import React from 'react';

export interface ProgressBarProps {
  progress?: number;
  percent?: number; // backward compatibility
  showGlow?: boolean;
  animated?: boolean;
  color?: string;
  height?: number;
  className?: string;
  showText?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress = 0, 
  percent, // backward compatibility
  showGlow = false,
  animated = true,
  color = '#4f9cf9',
  height = 6,
  className = '',
  showText = false
}) => {
  // Use progress prop, fallback to percent for backward compatibility
  const progressValue = progress !== undefined ? progress : (percent || 0);
  
  const progressBarClasses = [
    "relative bg-gray-700 rounded-full overflow-hidden",
    showGlow ? "shadow-lg shadow-blue-500/25" : "",
    className
  ].filter(Boolean).join(' ');

  const fillClasses = [
    "h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-500 ease-out relative overflow-hidden",
    animated ? "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:translate-x-[-100%] after:animate-[shine_2s_ease-in-out_infinite]" : ""
  ].filter(Boolean).join(' ');

  const widthPercentage = Math.min(100, Math.max(0, progressValue));

  return (
    <div className="flex items-center gap-2">
      <div 
        className={progressBarClasses} 
        style={{ height: `${height}px` }}
      >
        <div 
          className={fillClasses}
          style={{ 
            width: `${widthPercentage}%`,
            backgroundColor: color
          }}
        />
      </div>
      {showText && (
        <span className="text-xs text-gray-300 min-w-[3rem] text-right">
          {Math.round(progressValue)}%
        </span>
      )}
    </div>
  );
};

export default ProgressBar;