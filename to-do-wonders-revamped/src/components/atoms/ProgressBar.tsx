

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
  height = 8,
  className = '',
  showText = false
}) => {
  // Use progress prop, fallback to percent for backward compatibility
  const progressValue = progress !== undefined ? progress : (percent || 0);
  const widthPercentage = Math.min(100, Math.max(0, progressValue));

  return (
    <div className="flex items-center gap-2">
      <div className={`progress-bar ${showGlow ? 'glow' : ''} ${animated ? 'animated' : ''} ${className}`} style={{ height: `${height}px` }}>
        <div 
          className="progress-fill"
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