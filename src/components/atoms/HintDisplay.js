import React, { useState } from 'react';
import { FiHelpCircle, FiX } from 'react-icons/fi';

export default function HintDisplay({ hint, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);

  if (!hint) return null;

  return (
    <div className={`hint-display ${className}`}>
      <button 
        className="hint-trigger"
        onClick={() => setIsVisible(!isVisible)}
        type="button"
      >
        <FiHelpCircle />
        <span>Show Hint</span>
      </button>
      
      {isVisible && (
        <div className="hint-content">
          <div className="hint-header">
            <span>💡 Hint</span>
            <button 
              className="hint-close"
              onClick={() => setIsVisible(false)}
              type="button"
            >
              <FiX />
            </button>
          </div>
          <div className="hint-text">
            {hint}
          </div>
        </div>
      )}
    </div>
  );
}