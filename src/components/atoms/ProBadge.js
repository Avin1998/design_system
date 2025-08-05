import React from 'react';

export default function ProBadge({ 
  size = 'small',
  position = 'top-right',
  className = '' 
}) {
  return (
    <div className={`pro-badge ${size} ${position} ${className}`}>
      <div className="pro-flame">
        <span className="flame-icon">🔥</span>
        <span className="pro-text">PRO</span>
      </div>
    </div>
  );
}