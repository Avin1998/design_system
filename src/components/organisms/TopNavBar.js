import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../atoms/Icon';
import ProfileMenu from '../molecules/ProfileMenu';

const navigationButtons = [
  { id: 'code', label: 'Code', icon: 'FaCode' },
  { id: 'design', label: 'System Design', icon: 'FaSitemap' },
  { id: 'email', label: 'Email', icon: 'FaEnvelope' },
  { id: 'reports', label: 'Reports', icon: 'FaChartBar' },
];

export default function TopNavBar({ 
  companyName = 'CodeMaster',
  streak = 15,
  notifications = 3,
  ...props 
}) {
  const navigate = useNavigate();

  const handleNavClick = (buttonId) => {
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
    <header 
      className="fixed top-0 left-20 right-0 h-[70px] bg-nav-bg border-b border-white/10 flex items-center justify-between px-6 z-[900] shadow-[0_2px_12px_rgba(0,0,0,0.3)]" 
      {...props}
    >
      <div className="flex items-center gap-8">
        <div 
          className="flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105"
          onClick={handleLogoClick}
        >
          <div className="w-10 h-10 bg-blue-gradient rounded-lg flex items-center justify-center shadow-blue">
            <Icon name="FaCode" size={24} className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]" />
          </div>
          <h1 className="text-xl font-bold text-text-primary m-0 tracking-tight">{companyName}</h1>
        </div>
        
        <nav className="flex items-center gap-2">
          {navigationButtons.map(button => (
            <a
              key={button.id}
              href="#"
              className="flex items-center gap-2 px-4 py-3 text-sm text-text-secondary no-underline transition-all duration-300 relative border-b-2 border-transparent
                        hover:text-blue-light
                        after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-0.5 
                        after:bg-gradient-to-r after:from-transparent after:via-blue-primary after:to-transparent 
                        after:transform after:-translate-x-1/2 after:transition-all after:duration-400 
                        after:shadow-blue after:rounded-sm
                        hover:after:w-full hover:after:shadow-blue-lg"
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
      
      <div className="flex items-center">
        <ProfileMenu 
          streak={streak} 
          notifications={notifications}
        />
      </div>
    </header>
  );
}