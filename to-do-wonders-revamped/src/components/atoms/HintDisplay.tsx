import React, { useState } from 'react';
import { FiHelpCircle, FiX } from 'react-icons/fi';

interface HintDisplayProps {
  hint?: string | React.ReactNode;
  className?: string;
}

export default function HintDisplay({ hint, className = '' }: HintDisplayProps) {
  const [isVisible, setIsVisible] = useState(false);

  if (!hint) return null;

  return (
    <div className={className}>
      <button 
        className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg 
                   transition-colors duration-200 text-sm"
        onClick={() => setIsVisible(!isVisible)}
        type="button"
      >
        <FiHelpCircle size={16} />
        <span>Show Hint</span>
      </button>
      
      {isVisible && (
        <div className="mt-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-blue-800 font-medium flex items-center gap-2">
              💡 Hint
            </span>
            <button 
              className="text-blue-600 hover:text-blue-800 transition-colors"
              onClick={() => setIsVisible(false)}
              type="button"
            >
              <FiX size={16} />
            </button>
          </div>
          <div className="text-blue-700 text-sm">
            {hint}
          </div>
        </div>
      )}
    </div>
  );
}