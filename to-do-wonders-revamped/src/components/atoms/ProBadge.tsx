

type ProBadgeSize = 'small' | 'medium' | 'large';
type ProBadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface ProBadgeProps {
  size?: ProBadgeSize;
  position?: ProBadgePosition;
  className?: string;
}

export default function ProBadge({ 
  size = 'small',
  position = 'top-right',
  className = '' 
}: ProBadgeProps) {
  const sizeClasses = {
    small: 'text-xs px-2 py-1',
    medium: 'text-sm px-3 py-1.5',
    large: 'text-base px-4 py-2'
  };

  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0'
  };

  return (
    <div className={`absolute ${positionClasses[position]} ${className}`}>
      <div className={`
        flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 
        text-white font-bold rounded-full shadow-lg ${sizeClasses[size]}
      `}>
        <span className="text-yellow-300">🔥</span>
        <span>PRO</span>
      </div>
    </div>
  );
}