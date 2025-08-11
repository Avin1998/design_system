import React, { type ButtonHTMLAttributes } from 'react';
import { BUTTON_VARIANTS, type ButtonVariant } from '../../constants';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  glow?: boolean;
  icon?: React.ReactNode;
  subtitle?: string;
  state?: 'default' | 'connected' | 'error';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = BUTTON_VARIANTS.PRIMARY, 
  glow = false, 
  icon,
  subtitle,
  state,
  className = '',
  ...props 
}) => {
  const btnClasses = `btn btn-${variant}${glow ? ' btn-glow' : ''}${state ? ` ${state}` : ''}${className ? ' ' + className : ''}`;
  
  // Special rendering for back buttons
  if (variant === BUTTON_VARIANTS.BACK) {
    return (
      <button className={btnClasses} {...props}>
        <span className="back-arrow">←</span>
        {children}
      </button>
    );
  }
  
  // Special rendering for integration buttons
  if (variant === BUTTON_VARIANTS.INTEGRATION) {
    return (
      <button className={btnClasses} {...props}>
        {icon && <span className="integration-icon">{icon}</span>}
        <div className="integration-text">
          <span className="integration-title">{children}</span>
          {subtitle && <span className="integration-subtitle">{subtitle}</span>}
        </div>
      </button>
    );
  }
  
  return <button className={btnClasses} {...props}>{children}</button>;
};

export default Button;