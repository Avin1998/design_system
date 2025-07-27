import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavItem from '../molecules/NavItem';
import './LeftSideNavBar.css';

const navigationItems = [
  { id: 'home', icon: 'FaHome', label: 'Home', path: '/' },
  { id: 'dashboard', icon: 'FaTachometerAlt', label: 'Dashboard', path: '/showcase' },
  { id: 'code', icon: 'FaCode', label: 'Code' },
  { id: 'design', icon: 'FaSitemap', label: 'System Design' },
  { id: 'email', icon: 'FaEnvelope', label: 'Email' },
  { id: 'assessments', icon: 'FaClipboardList', label: 'Assessments' },
  { id: 'report', icon: 'FaChartBar', label: 'Report' },
];

export default function LeftSideNavBar({ ...props }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const getActiveItem = () => {
    if (location.pathname === '/') return 'home';
    if (location.pathname === '/showcase') return 'dashboard';
    return 'home';
  };

  const [active, setActive] = useState(getActiveItem());

  const handleItemClick = (item) => {
    setActive(item.id);
    if (item.path) {
      navigate(item.path);
    } else {
      // For items without paths, show coming soon
      alert(`${item.label} coming soon!`);
    }
  };

  return (
    <nav className="left-sidebar" {...props}>
      <div className="nav-items">
        {navigationItems.map(item => (
          <div key={item.id} className="nav-item-wrapper" data-tooltip={item.label}>
            <NavItem
              icon={item.icon}
              active={active === item.id}
              onClick={() => handleItemClick(item)}
            />
          </div>
        ))}
      </div>
    </nav>
  );
}