import React, { useState } from 'react';
import { Icon, Badge } from '../atoms';

interface ProfileMenuProps {
  streak?: number;
  notifications?: number;
  [key: string]: any;
}

export default function ProfileMenu({ 
  streak = 0, 
  notifications = 0, 
  ...props 
}: ProfileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-4" {...props}>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Icon name="FaFire" size={16} className="text-orange-500" />
          <span className="text-white font-bold">{streak}</span>
        </div>
        {notifications > 0 && (
          <div className="relative">
            <Icon name="FaBell" size={16} className="text-gray-400" />
            <Badge 
              variant="danger" 
              className="absolute -top-2 -right-2 min-w-[20px] h-5 flex items-center justify-center text-xs"
            >
              {notifications}
            </Badge>
          </div>
        )}
      </div>
      
      <div className="relative">
        <div 
          className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer 
                     hover:bg-gray-600 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name="FaUser" size={18} className="text-gray-300" />
        </div>
        
        {isOpen && (
          <div className="absolute right-0 top-12 w-48 bg-gray-800 border border-gray-600 rounded-lg 
                         shadow-xl py-2 z-50">
            <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2 text-gray-300 hover:text-white">
              <Icon name="FaCog" size={14} />
              Settings
            </div>
            <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2 text-gray-300 hover:text-white">
              <Icon name="FaUserCircle" size={14} />
              Profile
            </div>
            <div className="border-t border-gray-600 mt-2 pt-2">
              <div className="px-4 py-2 hover:bg-red-600 cursor-pointer flex items-center gap-2 text-gray-300 hover:text-white">
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