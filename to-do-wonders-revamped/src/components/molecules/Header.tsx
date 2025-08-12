import Input from '../atoms/Input';
import Button from '../atoms/Button';
import '../../styles/molecules/Header.css';

interface HeaderProps {
  title: string;
  search?: string;
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTrack?: () => void;
}

export default function Header({ title, search, onSearchChange, onAddTrack }: HeaderProps) {
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
        <Button variant="primary" onClick={onAddTrack}>Add Track</Button>
      </div>
    </div>
  );
}