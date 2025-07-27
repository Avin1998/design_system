import React, { useState } from 'react';
import NavItem from '../molecules/NavItem';
import './LeftSideNavBar.css';

const navigationItems = [
  { id: 'home', icon: 'FaHome', label: 'Home' },
  { id: 'dashboard', icon: 'FaTachometerAlt', label: 'Dashboard' },
  { id: 'code', icon: 'FaCode', label: 'Code' },
  { id: 'design', icon: 'FaSitemap', label: 'System Design' },
  { id: 'email', icon: 'FaEnvelope', label: 'Email' },
  { id: 'assessments', icon: 'FaClipboardList', label: 'Assessments' },
  { id: 'report', icon: 'FaChartBar', label: 'Report' },
];

export default function LeftSideNavBar({ activeItem = 'home', onItemClick, ...props }) {
  const [active, setActive] = useState(activeItem);

  const handleItemClick = (itemId) => {
    setActive(itemId);
    if (onItemClick) onItemClick(itemId);
  };

  return (
    <nav className="left-sidebar" {...props}>
      <div className="nav-items">
        {navigationItems.map(item => (
          <NavItem
            key={item.id}
            icon={item.icon}
            active={active === item.id}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </div>
    </nav>
  );
}