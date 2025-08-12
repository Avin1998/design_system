import React from 'react';
import Icon from './Icon';
import { BADGE_VARIANTS, BADGE_STATUSES } from '../../const/components/atoms';
import '../../styles/components/atoms/Badge.css';

export type BadgeVariant = typeof BADGE_VARIANTS[number];
export type BadgeStatus = typeof BADGE_STATUSES[number];

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: BadgeVariant;
  status?: BadgeStatus;
  glow?: boolean;
  icon?: string;
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