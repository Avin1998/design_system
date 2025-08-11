import React from 'react';
import Icon from './Icon';
import type { DifficultyLevel } from '../../constants';

export interface RatingProps {
  value?: number;
  difficulty?: DifficultyLevel;
  achieved?: boolean;
}

const Rating: React.FC<RatingProps> = ({ 
  value = 0, 
  difficulty = 'medium', 
  achieved = false, 
  ...props 
}) => {
  const stars = [];
  const maxStars = 5;
  
  const difficultyColors = {
    easy: achieved ? 'text-green-400' : 'text-green-600',
    medium: achieved ? 'text-yellow-400' : 'text-yellow-600',
    hard: achieved ? 'text-red-400' : 'text-red-600'
  };
  
  for (let i = 1; i <= maxStars; i++) {
    const isFilled = i <= value;
    const starClasses = [
      'transition-colors duration-200',
      isFilled ? difficultyColors[difficulty] : 'text-gray-500',
      achieved ? 'filter brightness-125' : ''
    ].filter(Boolean).join(' ');
    
    stars.push(
      <Icon
        key={i}
        name="FaStar"
        className={starClasses}
        size={16}
      />
    );
  }

  return (
    <div className="flex items-center gap-0.5" {...props}>
      {stars}
    </div>
  );
};

export default Rating;