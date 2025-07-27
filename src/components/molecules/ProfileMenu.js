import React, { useState } from 'react';
import Icon from '../atoms/Icon';
import Badge from '../atoms/Badge';
import './ProfileMenu.css';

export default function ProfileMenu({ streak = 0, notifications = 0, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="profile-menu" {...props}>
      <div className="profile-stats">
        <div className="streak">
          <Icon name="FaFire" size={16} className="fire-icon" />
          <span>{streak}</span>
        </div>
        {notifications > 0 && (
          <div className="notifications">
            <Icon name="FaBell" size={16} />
            <Badge variant="danger" glow>{notifications}</Badge>
          </div>
        )}
      </div>
      
      <div className="profile-avatar" onClick={() => setIsOpen(!isOpen)}>
        <Icon name="FaUser" size={18} />
        {isOpen && (
          <div className="profile-dropdown">
            <div className="profile-option">
              <Icon name="FaCog" size={14} />
              Settings
            </div>
            <div className="profile-option">
              <Icon name="FaUserCircle" size={14} />
              Profile
            </div>
            <div className="profile-option sign-out">
              <Icon name="FaSignOutAlt" size={14} />
              Sign Out
            </div>
          </div>
        )}
      </div>
    </div>
  );
}