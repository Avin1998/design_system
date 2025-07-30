import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';
import './Icon.css';

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
  'progress': FiIcons.FiBarChart3,
  'hint': FiIcons.FiLightbulb,
  'continue': FiIcons.FiArrowRight,
  'back': FiIcons.FiArrowLeft
};

export default function Icon({ 
  name, 
  size = 20, 
  className = '', 
  color,
  variant = 'default',
  ...props 
}) {
  // Get icon component
  let IconComponent;
  
  if (iconMap[name]) {
    IconComponent = iconMap[name];
  } else {
    // Fallback to react-icons library search
    IconComponent = FaIcons[name] || FiIcons[name] || HiIcons[name] || MdIcons[name] || FiIcons.FiHelpCircle;
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
}