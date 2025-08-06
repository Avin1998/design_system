import React from 'react';
import Icon from '../atoms/Icon';
import './NavItem.css';

export default function NavItem({ icon, label, active = false, onClick, ...props }) {
  return (
    <div 
      className={`nav-item ${active ? 'active' : ''}`} 
      onClick={onClick}
      {...props}
    >
      <Icon name={icon} size={20} className={active ? 'active' : ''} />
      {label && <span className="nav-label">{label}</span>}
    </div>
  );
}