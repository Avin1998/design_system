import React, { useState } from 'react';
import './Tooltip.css';

export default function Tooltip({ 
  children, 
  content, 
  position = 'top',
  delay = 500,
  className = ''
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const showTooltip = () => {
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  if (!content) return children;

  return (
    <div 
      className={`tooltip-wrapper ${className}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div className={`tooltip tooltip-${position}`}>
          <div className="tooltip-content">
            {content}
          </div>
          <div className="tooltip-arrow" />
        </div>
      )}
    </div>
  );
}