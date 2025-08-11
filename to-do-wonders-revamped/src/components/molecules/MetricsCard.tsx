import React from 'react';
import { Icon } from '../atoms';

interface Trend {
  direction: 'up' | 'down';
  value: string;
}

interface MetricsCardProps {
  title: string;
  value: string | number;
  icon?: string;
  trend?: Trend;
  color?: string;
  [key: string]: any;
}

export default function MetricsCard({ 
  title, 
  value, 
  icon, 
  trend = null, 
  color = '#0066ff',
  ...props 
}: MetricsCardProps) {
  return (
    <div 
      className="p-6 bg-gray-800 border border-gray-600 rounded-xl transition-all duration-200 hover:border-gray-500"
      style={{ borderColor: color }}
      {...props}
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && (
          <Icon 
            name={icon} 
            size={20} 
            className="text-gray-400"
            style={{ color }}
          />
        )}
        <span className="text-gray-300 font-medium">{title}</span>
      </div>
      
      <div className="text-3xl font-bold text-white mb-2">
        {value}
      </div>
      
      {trend && (
        <div className={`
          flex items-center gap-1 text-sm
          ${trend.direction === 'up' ? 'text-green-400' : 'text-red-400'}
        `}>
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