import '../../styles/atoms/ProBadge.css';

interface ProBadgeProps {
  size?: 'small' | 'medium' | 'large';
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  className?: string;
}

export default function ProBadge({ 
  size = 'small',
  position = 'top-right',
  className = '' 
}: ProBadgeProps) {
  return (
    <div className={`pro-badge ${size} ${position} ${className}`}>
      <div className="pro-flame">
        <span className="flame-icon">🔥</span>
        <span className="pro-text">PRO</span>
      </div>
    </div>
  );
}