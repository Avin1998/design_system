import React, { type HTMLAttributes } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  maxWidth?: 'default' | 'narrow' | 'wide' | 'full';
  padding?: 'default' | 'compact' | 'spacious' | 'none';
  centerContent?: boolean;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  title, 
  subtitle,
  className = '',
  maxWidth = 'default',
  padding = 'default',
  centerContent = false,
  ...props 
}) => {
  const maxWidthClasses = {
    default: 'max-w-6xl',
    narrow: 'max-w-4xl',
    wide: 'max-w-7xl',
    full: 'max-w-none'
  };

  const paddingClasses = {
    default: 'px-6 py-8',
    compact: 'px-5 py-4',
    spacious: 'px-8 py-12',
    none: 'p-0'
  };

  const baseClasses = "w-full mx-auto box-border";
  const contentClasses = centerContent ? "flex flex-col items-center text-center" : "";

  const containerClasses = [
    baseClasses,
    maxWidthClasses[maxWidth],
    paddingClasses[padding],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} {...props}>
      {(title || subtitle) && (
        <div className="mb-8">
          {title && (
            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight tracking-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-lg text-gray-300 leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className={`space-y-6 ${contentClasses}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;