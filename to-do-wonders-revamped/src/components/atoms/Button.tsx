import React from 'react';
import { BUTTON_VARIANTS, BUTTON_STATES } from '../../const/components/atoms';
import '../../styles/components/atoms/Button.css';

export type ButtonVariant = typeof BUTTON_VARIANTS[number];
export type ButtonState = typeof BUTTON_STATES[number];

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  glow?: boolean;
  icon?: React.ReactNode;
  subtitle?: string;
  state?: ButtonState; // for integration buttons: 'default', 'connected', 'error'
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  glow = false, 
  icon,
  subtitle,
  state, 
  className = '',
  ...props 
}) => {
  const buttonClassName = `btn btn-${variant}${glow ? ' btn-glow' : ''}${state ? ` ${state}` : ''}${className ? ' ' + className : ''}`;
  
  // Special rendering for back buttons
  if (variant === 'back') {
    return (
      <button className={buttonClassName} {...props}>
        <span className="back-arrow">←</span>
        {children}
      </button>
    );
  }
  
  // Special rendering for integration buttons
  if (variant === 'integration') {
    return (
      <button className={buttonClassName} {...props}>
        {icon && <span className="integration-icon">{icon}</span>}
        <div className="integration-text">
          <span className="integration-title">{children}</span>
          {subtitle && <span className="integration-subtitle">{subtitle}</span>}
        </div>
      </button>
    );
  }
  
  return <button className={buttonClassName} {...props}>{children}</button>;
};

export default Button;