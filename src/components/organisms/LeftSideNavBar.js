import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavItem from '../molecules/NavItem';

const navigationItems = [
  { id: 'home', icon: 'FaHome', label: 'Home', path: '/' },
  { id: 'dashboard', icon: 'FaTachometerAlt', label: 'Dashboard', path: '/showcase' },
  { id: 'code', icon: 'FaCode', label: 'Code' },
  { id: 'design', icon: 'FaSitemap', label: 'System Design', path: '/system-design' },
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
    if (location.pathname.startsWith('/system-design')) return 'design';
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
    <nav 
      className="fixed left-0 top-0 w-20 h-full bg-nav-bg border-r border-white/10 flex flex-col items-center py-4 z-[1000]" 
      {...props}
    >
      <div className="flex flex-col gap-2 w-full">
        {navigationItems.map(item => (
          <div 
            key={item.id} 
            className="relative group w-full flex justify-center"
            title={item.label}
          >
            <NavItem
              icon={item.icon}
              active={active === item.id}
              onClick={() => handleItemClick(item)}
            />
            {/* Tooltip */}
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none
                           whitespace-nowrap z-50">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}