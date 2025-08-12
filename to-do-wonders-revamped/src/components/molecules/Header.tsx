import React from 'react';
import { Input, Button } from '../atoms';
import './Header.css';

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
    <div className="header">
      <h1>{title}</h1>
      <div className="search-add">
        <Input 
          type="text" 
          placeholder="Search patterns..." 
          value={search} 
          onChange={onSearchChange}
        />
        <Button variant="primary" onClick={onAddTrack}>
          ADD TRACK
        </Button>
      </div>
    </div>
  );
};

export default Header;