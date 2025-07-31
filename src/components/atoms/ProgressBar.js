
import React from 'react';
import './ProgressBar.css';

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
    progress-bar 
    ${showGlow ? 'progress-glow' : ''} 
    ${animated ? 'progress-animated' : ''} 
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
      <div className="progress-bar-track">
        <div 
          className="progress-bar-fill" 
          style={fillStyle}
        >
          {animated && (
            <div className="progress-bar-shine" />
          )}
        </div>
      </div>
      {showText && (
        <div className="progress-text">
          {Math.round(progressValue)}%
        </div>
      )}
    </div>
  );
}
