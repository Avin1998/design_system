import React from 'react';
import './TextArea.css';

export default function TextArea({ 
  placeholder, 
  value, 
  onChange, 
  rows = 4, 
  maxLength,
  className = '',
  ...props 
}) {
  return (
    <div className={`textarea-container ${className}`}>
      <textarea
        className="textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        maxLength={maxLength}
        {...props}
      />
      {maxLength && (
        <div className="textarea-counter">
          {value?.length || 0}/{maxLength}
        </div>
      )}
    </div>
  );
}