import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';
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
            <Button
              key={button.id}
              variant="secondary"
              className="nav-button"
              onClick={() => handleNavClick(button.id)}
            >
              <Icon name={button.icon} size={16} />
              {button.label}
            </Button>
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