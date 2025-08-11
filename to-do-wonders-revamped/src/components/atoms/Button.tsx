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
  const baseClasses = "relative overflow-hidden border rounded-lg cursor-pointer font-semibold text-sm tracking-wide uppercase transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  
  const variantClasses = {
    [BUTTON_VARIANTS.PRIMARY]: "bg-gradient-to-br from-blue-600 to-blue-800 text-white border-blue-500/30 shadow-lg shadow-blue-500/30 hover:from-blue-500 hover:to-blue-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40 active:translate-y-0 active:shadow-lg",
    [BUTTON_VARIANTS.SECONDARY]: "bg-transparent text-blue-300 border-blue-300/30 hover:bg-blue-300/10 hover:border-blue-300/50 hover:text-blue-200",
    [BUTTON_VARIANTS.BACK]: "bg-transparent text-blue-300 border-blue-300/20 rounded-xl px-5 py-3 text-sm font-medium normal-case tracking-normal flex items-center gap-2 hover:bg-blue-300/8 hover:border-blue-300/40 hover:text-blue-200 hover:-translate-x-0.5 active:translate-x-0",
    [BUTTON_VARIANTS.INTEGRATION]: "bg-gradient-to-br from-gray-800 to-gray-900 text-white border-blue-300/20 rounded-xl px-6 py-4 text-sm font-semibold normal-case tracking-wide flex items-center gap-3 shadow-lg hover:from-gray-700 hover:to-gray-800 hover:border-blue-300/40 hover:-translate-y-px hover:shadow-xl hover:shadow-blue-500/15 active:translate-y-0"
  };

  const stateClasses = {
    connected: "from-green-800 to-green-900 border-green-500/30 text-green-100 hover:from-green-700 hover:to-green-800 hover:border-green-500/50",
    error: "from-red-800 to-red-900 border-red-500/30 text-red-100 hover:from-red-700 hover:to-red-800 hover:border-red-500/50",
    default: ""
  };

  const glowClasses = glow ? "before:absolute before:-inset-0.5 before:bg-gradient-to-r before:from-blue-600 before:via-blue-300 before:to-blue-600 before:rounded-lg before:-z-10 before:blur-lg before:opacity-0 hover:before:opacity-70 before:transition-opacity before:duration-300" : "";

  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    state && stateClasses[state],
    glowClasses,
    className
  ].filter(Boolean).join(' ');

  // Special rendering for back buttons
  if (variant === BUTTON_VARIANTS.BACK) {
    return (
      <button className={combinedClasses} {...props}>
        <span className="text-base transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
        {children}
      </button>
    );
  }

  // Special rendering for integration buttons
  if (variant === BUTTON_VARIANTS.INTEGRATION) {
    return (
      <button className={combinedClasses} {...props}>
        {icon && <span className="text-lg opacity-90">{icon}</span>}
        <div className="flex flex-col items-start gap-0.5">
          <span className="font-semibold text-sm">{children}</span>
          {subtitle && <span className="font-normal text-xs text-gray-300 opacity-80">{subtitle}</span>}
        </div>
      </button>
    );
  }

  return (
    <button 
      className={`${combinedClasses} px-6 py-3`} 
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 hover:translate-x-full" />
    </button>
  );
};

export default Button;