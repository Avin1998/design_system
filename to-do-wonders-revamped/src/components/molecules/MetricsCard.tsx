import Icon from '../atoms/Icon';
import '../../styles/molecules/MetricsCard.css';

interface MetricsCardProps {
  title: string;
  value: string | number;
  icon: string;
  trend?: {
    direction: 'up' | 'down';
    value: string;
  } | null;
  color?: string;
  className?: string;
}

export default function MetricsCard({ 
  title, 
  value, 
  icon, 
  trend = null, 
  color = '#0066ff',
  className = '',
  ...props 
}: MetricsCardProps) {
  return (
    <div 
      className={`metrics-card ${className}`} 
      style={{ '--accent-color': color } as React.CSSProperties} 
      {...props}
    >
      <div className="metrics-header">
        <Icon name={icon} size={20} className="metrics-icon" />
        <span className="metrics-title">{title}</span>
      </div>
      
      <div className="metrics-value">{value}</div>
      
      {trend && (
        <div className={`metrics-trend ${trend.direction}`}>
          <Icon 
            name={trend.direction === 'up' ? 'arrow-up' : 'arrow-down'} 
            size={12} 
          />
          <span>{trend.value}</span>
        </div>
      )}
    </div>
  );
}