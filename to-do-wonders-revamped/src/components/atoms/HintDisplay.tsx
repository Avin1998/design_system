import { useState } from 'react';
import Icon from './Icon';
import '../../styles/atoms/HintDisplay.css';

interface HintDisplayProps {
  hint: string;
  className?: string;
}

export default function HintDisplay({ hint, className = '' }: HintDisplayProps) {
  const [isVisible, setIsVisible] = useState(false);

  if (!hint) return null;

  return (
    <div className={`hint-display ${className}`}>
      <button 
        className="hint-trigger"
        onClick={() => setIsVisible(!isVisible)}
        type="button"
      >
        <Icon name="hint" size={16} />
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
              <Icon name="close" size={14} />
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