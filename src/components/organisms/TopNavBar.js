import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../atoms/Icon';
import ProfileMenu from '../molecules/ProfileMenu';
import './TopNavBar.css';

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
    <header className="top-navbar" {...props}>
      <div className="navbar-left">
        <div className="logo-section" onClick={handleLogoClick}>
          <div className="logo">
            <Icon name="FaCode" size={24} className="logo-icon" />
          </div>
          <h1 className="company-name">{companyName}</h1>
        </div>
        
        <nav className="nav-buttons">
          {navigationButtons.map(button => (
            <a
              key={button.id}
              href="#"
              className="nav-link"
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
}