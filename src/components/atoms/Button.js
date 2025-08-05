
import React from 'react';

export default function Button({ 
  children, 
  variant='primary', 
  glow=false, 
  icon,
  subtitle,
  state, // for integration buttons: 'default', 'connected', 'error'
  ...props 
}) {
  const baseClasses = "border-none rounded-lg px-6 py-3 cursor-pointer font-semibold text-sm tracking-wider uppercase transition-all duration-300 relative overflow-hidden";
  
  const variantClasses = {
    primary: `bg-blue-gradient hover:bg-blue-gradient-hover text-white shadow-blue hover:shadow-blue-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-blue`,
    minimal: `bg-transparent text-blue-light border-none border-b-2 border-transparent rounded-none px-4 py-3 normal-case tracking-normal shadow-none relative
             after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-blue-primary after:to-transparent 
             after:transform after:-translate-x-1/2 after:transition-all after:duration-400 after:shadow-blue after:rounded-sm
             hover:text-blue-light hover:after:w-full hover:after:shadow-blue-lg hover:transform-none hover:shadow-none hover:bg-transparent`,
    secondary: `bg-transparent text-blue-light border border-blue-light/30 shadow-none
                hover:bg-blue-light/10 hover:border-blue-light/50 hover:text-blue-hover hover:transform-none hover:shadow-none`,
    danger: `bg-gradient-to-br from-red-500 to-red-700 border border-red-500/30 text-white
             hover:from-red-400 hover:to-red-600 hover:border-red-400/50`,
    outline: `bg-transparent text-blue-primary border-2 border-blue-primary shadow-blue/20
              hover:bg-blue-primary/10 hover:shadow-blue/40 hover:text-blue-light hover:border-blue-light`,
    back: `bg-transparent text-blue-light border border-blue-light/20 rounded-[10px] px-5 py-3 text-sm font-medium normal-case tracking-normal shadow-none
           flex items-center gap-2 transition-all duration-300 
           hover:bg-blue-light/8 hover:border-blue-light/40 hover:text-blue-hover hover:-translate-x-0.5 hover:shadow-blue-lg active:translate-x-0 active:shadow-blue/20`,
    integration: `bg-gradient-to-br from-nav-bg to-card-gradient text-white border border-blue-light/20 rounded-xl px-6 py-4 text-sm font-semibold normal-case tracking-wide shadow-sm
                  flex items-center gap-3 transition-all duration-300 relative overflow-hidden
                  hover:from-card-gradient hover:to-[#404066] hover:border-blue-light/40 hover:-translate-y-px hover:shadow-blue-lg`
  };
  
  const stateClasses = {
    connected: 'from-green-900 to-green-800 border-green-500/30 text-green-100 hover:from-green-800 hover:to-green-700 hover:border-green-500/50',
    error: 'from-red-900 to-red-800 border-red-500/30 text-red-100 hover:from-red-800 hover:to-red-700 hover:border-red-500/50'
  };
  
  let className = `${baseClasses} ${variantClasses[variant] || variantClasses.primary}`;
  
  if (glow) {
    className += ' before:content-[""] before:absolute before:top-[-2px] before:left-[-2px] before:right-[-2px] before:bottom-[-2px] before:bg-gradient-to-45 before:from-blue-primary before:via-blue-light before:to-blue-primary before:rounded-lg before:z-[-1] before:blur-lg before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-70';
  }
  
  if (state && stateClasses[state]) {
    className += ` ${stateClasses[state]}`;
  }
  
  if (props.className) {
    className += ` ${props.className}`;
  }
  
  // Special rendering for back buttons
  if (variant === 'back') {
    return (
      <button className={className} {...props}>
        <span className="text-base transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
        {children}
      </button>
    );
  }
  
  // Special rendering for integration buttons
  if (variant === 'integration') {
    return (
      <button className={className} {...props}>
        {icon && <span className="text-lg opacity-90">{icon}</span>}
        <div className="flex flex-col items-start gap-0.5">
          <span className="font-semibold text-sm">{children}</span>
          {subtitle && <span className="font-normal text-xs text-text-light opacity-80">{subtitle}</span>}
        </div>
      </button>
    );
  }
  
  return <button className={className} {...props}>{children}</button>;
}
