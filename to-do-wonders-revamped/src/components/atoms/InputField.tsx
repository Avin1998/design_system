import React from 'react';

interface InputFieldProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  className?: string;
  [key: string]: any;
}

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
}: InputFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`
            w-full px-3 py-2 bg-gray-800 border rounded-lg text-white placeholder-gray-400
            transition-colors duration-200 focus:outline-none focus:ring-2
            ${error 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
              : 'border-gray-600 focus:border-blue-500 focus:ring-blue-500/20'
            }
            ${disabled 
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'hover:border-gray-500'
            }
          `}
          {...props}
        />
      </div>
      
      {error && (
        <div className="text-red-400 text-sm mt-1">{error}</div>
      )}
      {helperText && !error && (
        <div className="text-gray-400 text-sm mt-1">{helperText}</div>
      )}
    </div>
  );
}