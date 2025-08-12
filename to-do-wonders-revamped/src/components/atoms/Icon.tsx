import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';
import { ICON_MAP, ICON_VARIANTS } from '../../const/components/atoms';
import '../../styles/components/atoms/Icon.css';

export type IconVariant = typeof ICON_VARIANTS[number];

export interface IconProps {
  name: string;
  size?: number;
  className?: string;
  color?: string;
  variant?: IconVariant;
}

const Icon: React.FC<IconProps & React.HTMLAttributes<HTMLElement>> = ({ 
  name, 
  size = 20, 
  className = '', 
  color,
  variant = 'default',
  ...props 
}) => {
  // Get icon component
  let IconComponent: React.ComponentType<any>;
  
  if (ICON_MAP[name]) {
    IconComponent = ICON_MAP[name];
  } else {
    // Fallback to react-icons library search
    IconComponent = (FaIcons as any)[name] || 
                   (FiIcons as any)[name] || 
                   (HiIcons as any)[name] || 
                   (MdIcons as any)[name] || 
                   FiIcons.FiHelpCircle;
  }
  
  const iconClasses = `icon icon-${variant} ${className}`;
  const iconStyle = color ? { color } : {};
  
  return (
    <IconComponent 
      className={iconClasses}
      size={size} 
      style={iconStyle}
      {...props} 
    />
  );
};

export default Icon;