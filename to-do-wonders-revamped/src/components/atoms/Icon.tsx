import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';

// Icon mapping for brain regions and system design concepts
const iconMap = {
  // Brain region icons
  'brain': FaIcons.FaBrain,
  'functional': FiIcons.FiSettings,
  'performance': FiIcons.FiZap,
  'capacity': FiIcons.FiDatabase,
  'architecture': FiIcons.FiLayers,
  
  // Status icons
  'completed': FiIcons.FiCheckCircle,
  'active': FiIcons.FiPlay,
  'inactive': FiIcons.FiCircle,
  
  // Mentor icons
  'mentor': FaIcons.FaRobot,
  'help': FiIcons.FiHelpCircle,
  'chat': FiIcons.FiMessageCircle,
  
  // General icons
  'progress': FiIcons.FiBarChart2,
  'hint': FiIcons.FiZap,
  'continue': FiIcons.FiArrowRight,
  'back': FiIcons.FiArrowLeft,
  'pause': FiIcons.FiPause,
  'stop': FiIcons.FiStopCircle
} as const;

export interface IconProps {
  name: keyof typeof iconMap | string;
  size?: number;
  className?: string;
  color?: string;
  variant?: 'default' | 'status';
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 20, 
  className = '', 
  color,
  variant = 'default',
  ...props 
}) => {
  // Get icon component
  let IconComponent;
  
  if (iconMap[name as keyof typeof iconMap]) {
    IconComponent = iconMap[name as keyof typeof iconMap];
  } else {
    // Fallback to react-icons library search
    IconComponent = (FaIcons as any)[name] || 
                   (FiIcons as any)[name] || 
                   (HiIcons as any)[name] || 
                   (MdIcons as any)[name] || 
                   FiIcons.FiHelpCircle;
  }
  
  const variantClasses = {
    default: 'text-current',
    status: 'transition-colors duration-200'
  };
  
  const iconClasses = [
    'inline-block',
    variantClasses[variant],
    className
  ].filter(Boolean).join(' ');
  
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