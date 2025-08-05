import React from 'react';

export default function InputField({ 
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
  error,
  helperText,
  disabled = false,
  className = '',
  ...props 
}) {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`input-field ${className} ${error ? 'has-error' : ''} ${disabled ? 'disabled' : ''}`}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required-indicator">*</span>}
        </label>
      )}
      
      <div className="input-wrapper">
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className="input-element"
          {...props}
        />
      </div>
      
      {error && <div className="input-error">{error}</div>}
      {helperText && !error && <div className="input-helper">{helperText}</div>}
    </div>
  );
}