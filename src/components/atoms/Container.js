import React from 'react';

export default function Container({ 
  children, 
  title, 
  subtitle,
  className = '',
  maxWidth = 'default',
  padding = 'default',
  centerContent = false,
  ...props 
}) {
  const containerClass = `
    container 
    ${className}
    container-${maxWidth}
    container-${padding}
    ${centerContent ? 'container-centered' : ''}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={containerClass} {...props}>
      {(title || subtitle) && (
        <div className="container-header">
          {title && <h1 className="container-title">{title}</h1>}
          {subtitle && <p className="container-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="container-content">
        {children}
      </div>
    </div>
  );
}