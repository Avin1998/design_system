import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../atoms';
import { ProfileMenu } from '../molecules';

interface NavigationButton {
  id: string;
  label: string;
  icon: string;
}

const navigationButtons: NavigationButton[] = [
  { id: 'code', label: 'Code', icon: 'FaCode' },
  { id: 'design', label: 'System Design', icon: 'FaSitemap' },
  { id: 'email', label: 'Email', icon: 'FaEnvelope' },
  { id: 'reports', label: 'Reports', icon: 'FaChartBar' },
];

interface TopNavBarProps {
  companyName?: string;
  streak?: number;
  notifications?: number;
  [key: string]: any;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ 
  companyName = 'CodeMaster',
  streak = 15,
  notifications = 3,
  ...props 
}) => {
  const navigate = useNavigate();

  const handleNavClick = (buttonId: string) => {
    if (buttonId === 'code') {
      navigate('/');
    } else if (buttonId === 'design') {
      navigate('/system-design');
    } else if (buttonId === 'email') {
      navigate('/email');
    } else {
      alert(`${buttonId} section coming soon!`);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-20 right-0 h-[70px] bg-[#1a1a2f] border-b border-white/10 flex items-center justify-between px-6 z-[900] shadow-[0_2px_12px_rgba(0,0,0,0.3)]" {...props}>
      <div className="flex items-center gap-8">
        <div 
          className="flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105" 
          onClick={handleLogoClick}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-[0_4px_12px_rgba(0,102,255,0.3)]">
            <Icon 
              name="FaCode" 
              size={24} 
              className="text-white filter drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]" 
            />
          </div>
          <h1 className="text-xl font-bold text-white">{companyName}</h1>
        </div>
        
        <nav className="flex items-center gap-6">
          {navigationButtons.map(button => (
            <a
              key={button.id}
              href="#"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/10"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(button.id);
              }}
            >
              <Icon name={button.icon} size={16} />
              {button.label}
            </a>
          ))}
        </nav>
      </div>
      
      <div className="navbar-right">
        <ProfileMenu 
          streak={streak} 
          notifications={notifications}
        />
      </div>
    </header>
  );
};

export default TopNavBar;