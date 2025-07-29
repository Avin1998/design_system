
import React from 'react';
import './Button.css';

export default function Button({ 
  children, 
  variant='primary', 
  glow=false, 
  icon,
  subtitle,
  state, // for integration buttons: 'default', 'connected', 'error'
  ...props 
}) {
  const className = `btn btn-${variant}${glow ? ' btn-glow' : ''}${state ? ` ${state}` : ''}${props.className ? ' ' + props.className : ''}`;
  
  // Special rendering for back buttons
  if (variant === 'back') {
    return (
      <button className={className} {...props}>
        <span className="back-arrow">←</span>
        {children}
      </button>
    );
  }
  
  // Special rendering for integration buttons
  if (variant === 'integration') {
    return (
      <button className={className} {...props}>
        {icon && <span className="integration-icon">{icon}</span>}
        <div className="integration-text">
          <span className="integration-title">{children}</span>
          {subtitle && <span className="integration-subtitle">{subtitle}</span>}
        </div>
      </button>
    );
  }
  
  return <button className={className} {...props}>{children}</button>;
}
