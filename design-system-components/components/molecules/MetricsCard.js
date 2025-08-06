import React from 'react';
import Icon from '../atoms/Icon';
import './MetricsCard.css';

export default function MetricsCard({ 
  title, 
  value, 
  icon, 
  trend = null, 
  color = '#0066ff',
  ...props 
}) {
  return (
    <div className="metrics-card" style={{ '--accent-color': color }} {...props}>
      <div className="metrics-header">
        <Icon name={icon} size={20} className="metrics-icon" />
        <span className="metrics-title">{title}</span>
      </div>
      
      <div className="metrics-value">{value}</div>
      
      {trend && (
        <div className={`metrics-trend ${trend.direction}`}>
          <Icon 
            name={trend.direction === 'up' ? 'FaArrowUp' : 'FaArrowDown'} 
            size={12} 
          />
          <span>{trend.value}</span>
        </div>
      )}
    </div>
  );
}