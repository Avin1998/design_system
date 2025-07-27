import React from 'react';
import './LoadingSpinner.css';

export default function LoadingSpinner({ 
  size = 'medium',
  text = 'Loading...',
  className = '' 
}) {
  return (
    <div className={`loading-spinner ${size} ${className}`}>
      <div className="spinner-circle"></div>
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
}