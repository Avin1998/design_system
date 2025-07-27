
import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import './Header.css';
export default function Header({ title, search, onSearchChange, onAddTrack }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <div className="search-add">
        <Input type="text" placeholder="Search patterns..." value={search} onChange={onSearchChange} />
        <Button onClick={onAddTrack}>Add Track</Button>
      </div>
    </div>
  );
}
