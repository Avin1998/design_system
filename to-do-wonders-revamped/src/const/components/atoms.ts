import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import React from 'react';

// Icon mapping for brain regions and system design concepts
export const ICON_MAP: Record<string, React.ComponentType<any>> = {
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
  'hint': FiIcons.FiZap, // Using Zap as lightbulb alternative
  'continue': FiIcons.FiArrowRight,
  'back': FiIcons.FiArrowLeft,
  'pause': FiIcons.FiPause,
  'stop': FiIcons.FiStopCircle
};

// Badge and Icon variant types
export const BADGE_VARIANTS = ['default', 'success', 'warning', 'danger'] as const;
export const BADGE_STATUSES = ['completed', 'active', 'inactive', 'locked'] as const;
export const ICON_VARIANTS = ['default', 'brain', 'status', 'mentor', 'hint', 'interactive'] as const;