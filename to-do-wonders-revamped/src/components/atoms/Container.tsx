import React from 'react';
import { CONTAINER_MAX_WIDTHS, CONTAINER_PADDINGS } from '../../const/components/atoms';
import '../../styles/components/atoms/Container.css';

export type ContainerMaxWidth = typeof CONTAINER_MAX_WIDTHS[number];
export type ContainerPadding = typeof CONTAINER_PADDINGS[number];

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  maxWidth?: ContainerMaxWidth;
  padding?: ContainerPadding;
  centerContent?: boolean;
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
};

export default Container;