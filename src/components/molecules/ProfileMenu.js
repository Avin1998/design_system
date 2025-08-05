import React, { useState } from 'react';
import Icon from '../atoms/Icon';
import Badge from '../atoms/Badge';

export default function ProfileMenu({ streak = 0, notifications = 0, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-4" {...props}>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1.5 rounded-full">
          <Icon name="FaFire" size={16} className="text-white drop-shadow-sm" />
          <span className="text-white font-semibold text-sm">{streak}</span>
        </div>
        {notifications > 0 && (
          <div className="relative">
            <Icon name="FaBell" size={16} className="text-gray-300" />
            <Badge variant="danger" glow>{notifications}</Badge>
          </div>
        )}
      </div>
      
      <div className="relative">
        <div 
          className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer 
                     hover:shadow-lg transition-all duration-300 hover:scale-105"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name="FaUser" size={18} className="text-white" />
        </div>
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-50">
            <div className="py-1">
              <div className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 cursor-pointer transition-colors">
                <Icon name="FaCog" size={14} />
                Settings
              </div>
              <div className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 cursor-pointer transition-colors">
                <Icon name="FaUserCircle" size={14} />
                Profile
              </div>
              <div className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-gray-700 cursor-pointer transition-colors">
                <Icon name="FaSignOutAlt" size={14} />
                Sign Out
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}