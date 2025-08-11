import React from 'react';
import { Input, Button } from '../atoms';

export interface HeaderProps {
  title: string;
  search?: string;
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTrack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  search = '', 
  onSearchChange, 
  onAddTrack 
}) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold text-white m-0">{title}</h1>
      <div className="flex items-center gap-3">
        <Input 
          type="text" 
          placeholder="Search patterns..." 
          value={search} 
          onChange={onSearchChange}
          className="w-64"
        />
        <Button variant="primary" onClick={onAddTrack}>
          Add Track
        </Button>
      </div>
    </div>
  );
};

export default Header;