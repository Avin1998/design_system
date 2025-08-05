import React from 'react';
import Icon from './Icon';

export default function Badge({ 
  children, 
  variant = 'default', 
  glow = false, 
  icon,
  status,
  className = '',
  ...props 
}) {
  const variantClasses = {
    default: 'bg-gray-600 text-white',
    primary: 'bg-blue-primary text-white',
    secondary: 'bg-gray-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-black',
    danger: 'bg-red-500 text-white',
  };

  const statusClasses = {
    completed: 'bg-green-500 text-white',
    pending: 'bg-yellow-500 text-black',
    error: 'bg-red-500 text-white',
  };

  let badgeClass = `inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full absolute -top-1 -right-1 min-w-[18px] h-[18px] justify-center ${className}`;
  
  if (status && statusClasses[status]) {
    badgeClass += ` ${statusClasses[status]}`;
  } else {
    badgeClass += ` ${variantClasses[variant] || variantClasses.default}`;
  }
  
  if (glow) {
    badgeClass += ' shadow-lg animate-pulse';
  }
  
  return (
    <span className={badgeClass} {...props}>
      {icon && (
        <Icon 
          name={icon} 
          size={12} 
          className="shrink-0"
        />
      )}
      {children}
    </span>
  );
}