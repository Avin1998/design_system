import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  glow?: boolean;
  icon?: React.ReactNode;
  status?: 'completed' | 'in-progress' | 'pending' | 'error';
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
  const variantClasses = {
    default: 'bg-gray-700 text-gray-200 border-gray-600',
    primary: 'bg-blue-600 text-blue-100 border-blue-500',
    success: 'bg-green-600 text-green-100 border-green-500',
    warning: 'bg-yellow-600 text-yellow-100 border-yellow-500',
    error: 'bg-red-600 text-red-100 border-red-500',
    info: 'bg-cyan-600 text-cyan-100 border-cyan-500'
  };

  const statusClasses = {
    completed: 'bg-green-600 text-green-100 border-green-500',
    'in-progress': 'bg-blue-600 text-blue-100 border-blue-500',
    pending: 'bg-gray-600 text-gray-100 border-gray-500',
    error: 'bg-red-600 text-red-100 border-red-500'
  };

  const baseClasses = "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium border rounded-full";
  const glowClasses = glow ? "shadow-lg shadow-current/25" : "";

  const classes = [
    baseClasses,
    status ? statusClasses[status] : variantClasses[variant],
    glowClasses,
    className
  ].filter(Boolean).join(' ');
  
  return (
    <span className={classes} {...props}>
      {icon && <span className="w-3 h-3">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;