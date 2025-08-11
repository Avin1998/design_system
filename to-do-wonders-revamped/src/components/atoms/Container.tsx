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
  const containerClasses = `container container-${maxWidth} container-${padding} ${centerContent ? 'container-centered' : ''} ${className}`;

  return (
    <div className={containerClasses} {...props}>
      {(title || subtitle) && (
        <div className="container-header">
          {title && (
            <h1 className="container-title">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="container-subtitle">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="container-content">
        {children}
      </div>
    </div>
  );
};

export default Container;