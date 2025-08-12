import React from 'react';
import '../../styles/atoms/Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className = '', ...props }: InputProps) {
  return <input className={`input ${className}`} {...props} />;
}