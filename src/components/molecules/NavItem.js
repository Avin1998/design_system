import React from 'react';
import Icon from '../atoms/Icon';

export default function NavItem({ icon, label, active = false, onClick, ...props }) {
  return (
    <div 
      className={`w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 relative
                 ${active 
                   ? 'bg-blue-primary shadow-blue text-white' 
                   : 'bg-transparent text-gray-400 hover:bg-blue-primary/20 hover:text-blue-light'
                 }`} 
      onClick={onClick}
      {...props}
    >
      <Icon name={icon} size={20} className={active ? 'text-white' : ''} />
      {label && <span className="absolute left-full ml-2 text-xs whitespace-nowrap">{label}</span>}
    </div>
  );
}