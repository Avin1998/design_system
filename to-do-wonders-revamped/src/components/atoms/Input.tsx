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
  const combinedClasses = `input-field ${className}`;

  return (
    <input 
      type={type}
      className={combinedClasses} 
      {...props} 
    />
  );
};

export default Input;