import Icon from '../atoms/Icon';
import '../../styles/molecules/NavItem.css';

interface NavItemProps {
  icon: string;
  label?: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function NavItem({ 
  icon, 
  label, 
  active = false, 
  onClick, 
  className = '',
  ...props 
}: NavItemProps) {
  return (
    <div 
      className={`nav-item ${active ? 'active' : ''} ${className}`} 
      onClick={onClick}
      {...props}
    >
      <Icon name={icon} size={20} className={active ? 'active' : ''} />
      {label && <span className="nav-label">{label}</span>}
    </div>
  );
}