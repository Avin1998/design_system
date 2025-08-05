import React from 'react';
import Icon from './Icon';

export default function Rating({ value = 0, difficulty = 'medium', achieved = false, ...props }) {
  const stars = [];
  const maxStars = 5;
  
  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <Icon
        key={i}
        name="FaStar"
        className={`rating-star ${i <= value ? 'filled' : ''} ${difficulty} ${achieved ? 'achieved' : ''}`}
        size={16}
      />
    );
  }

  return (
    <div className="rating" {...props}>
      {stars}
    </div>
  );
}