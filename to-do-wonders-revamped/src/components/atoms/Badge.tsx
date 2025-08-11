import React from 'react';
import Icon from './Icon';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'danger';
  glow?: boolean;
  icon?: React.ReactNode;
  status?: 'completed' | 'in-progress' | 'pending' | 'error' | 'active' | 'inactive' | 'done';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  glow = false, 
  icon,
  status,
  className = '',
  ...props 
}) => {
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
};

export default Badge;