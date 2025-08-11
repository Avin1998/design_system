import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavItem } from '../molecules';

interface NavigationItem {
  id: string;
  icon: string;
  label: string;
  path?: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'home', icon: 'FaHome', label: 'Home', path: '/' },
  { id: 'dashboard', icon: 'FaTachometerAlt', label: 'Dashboard', path: '/showcase' },
  { id: 'code', icon: 'FaCode', label: 'Code' },
  { id: 'design', icon: 'FaSitemap', label: 'System Design', path: '/system-design' },
  { id: 'email', icon: 'FaEnvelope', label: 'Email' },
  { id: 'assessments', icon: 'FaClipboardList', label: 'Assessments' },
  { id: 'report', icon: 'FaChartBar', label: 'Report' },
];

interface LeftSideNavBarProps {
  [key: string]: any;
}

const LeftSideNavBar: React.FC<LeftSideNavBarProps> = ({ ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const getActiveItem = () => {
    if (location.pathname === '/') return 'home';
    if (location.pathname === '/showcase') return 'dashboard';
    if (location.pathname.startsWith('/system-design')) return 'design';
    return 'home';
  };

  const [active, setActive] = useState(getActiveItem());

  const handleItemClick = (item: NavigationItem) => {
    setActive(item.id);
    if (item.path) {
      navigate(item.path);
    } else {
      // For items without paths, show coming soon
      alert(`${item.label} coming soon!`);
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-20 bg-[#1a1a2f] border-r border-white/10 flex flex-col items-center py-5 z-[900] shadow-[4px_0_12px_rgba(0,0,0,0.3)]" {...props}>
      <div className="flex flex-col gap-2 w-full px-3">
        {navigationItems.map(item => (
          <div key={item.id} className="relative group" data-tooltip={item.label}>
            <NavItem
              icon={item.icon}
              active={active === item.id}
              onClick={() => handleItemClick(item)}
              className={`
                justify-center w-14 h-14 rounded-xl relative
                ${active === item.id 
                  ? 'bg-blue-600/20 shadow-[0_0_16px_rgba(0,102,255,0.4)]' 
                  : 'hover:bg-white/10'
                }
              `}
            />
            {/* Tooltip */}
            <div className="absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 bg-[#1a1a2f] text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1000] border border-white/20">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default LeftSideNavBar;