
import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default function Header({ title, search, onSearchChange, onAddTrack }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
      <h1 className="text-3xl font-bold text-white m-0">{title}</h1>
      <div className="flex gap-4 items-center">
        <Input type="text" placeholder="Search patterns..." value={search} onChange={onSearchChange} />
        <Button variant="primary" onClick={onAddTrack}>Add Track</Button>
      </div>
    </div>
  );
}
