import React, { type InputHTMLAttributes } from 'react';
import { INPUT_TYPES, type InputType } from '../../constants';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
}

const Input: React.FC<InputProps> = ({ 
  type = INPUT_TYPES.TEXT,
  className = '',
  ...props 
}) => {
  const baseClasses = "bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-500";

  const combinedClasses = [baseClasses, className].filter(Boolean).join(' ');

  return (
    <input 
      type={type}
      className={combinedClasses} 
      {...props} 
    />
  );
};

export default Input;