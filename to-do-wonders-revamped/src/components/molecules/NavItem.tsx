
import { Icon } from '../atoms';

interface NavItemProps {
  icon?: string;
  label?: string;
  active?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

export default function NavItem({ 
  icon, 
  label, 
  active = false, 
  onClick, 
  ...props 
}: NavItemProps) {
  return (
    <div 
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200
        ${active 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        }
      `}
      onClick={onClick}
      {...props}
    >
      {icon && (
        <Icon 
          name={icon} 
          size={20} 
          className={active ? 'text-white' : 'text-gray-400'} 
        />
      )}
      {label && (
        <span className="font-medium">
          {label}
        </span>
      )}
    </div>
  );
}