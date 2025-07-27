import React from 'react';
import * as Icons from 'react-icons/fa';
import './Icon.css';

export default function Icon({ name, size = 20, className = '', ...props }) {
  const IconComponent = Icons[name] || Icons.FaQuestionCircle;
  return (
    <IconComponent 
      className={`icon ${className}`} 
      size={size} 
      {...props} 
    />
  );
}