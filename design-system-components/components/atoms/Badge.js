import React from 'react';
import Icon from './Icon';
import './Badge.css';

export default function Badge({ 
  children, 
  variant = 'default', 
  glow = false, 
  icon,
  status,
  className = '',
  ...props 
}) {
  const badgeClasses = `badge badge-${variant} ${status ? `badge-status-${status}` : ''} ${glow ? 'glow' : ''} ${className}`;
  
  return (
    <span className={badgeClasses} {...props}>
      {icon && (
        <Icon 
          name={icon} 
          size={12} 
          className="badge-icon"
          variant={status === 'completed' ? 'status' : 'default'}
        />
      )}
      {children}
    </span>
  );
}