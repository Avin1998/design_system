import Icon from './Icon';
import '../../styles/atoms/Rating.css';

interface RatingProps {
  value?: number;
  difficulty?: 'medium' | 'hard';
  achieved?: boolean;
  className?: string;
}

export default function Rating({ 
  value = 0, 
  difficulty = 'medium', 
  achieved = false, 
  className = '',
  ...props 
}: RatingProps) {
  const stars = [];
  const maxStars = 5;
  
  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <Icon
        key={i}
        name="star"
        className={`rating-star ${i <= value ? 'filled' : ''} ${difficulty} ${achieved ? 'achieved' : ''}`}
        size={16}
      />
    );
  }

  return (
    <div className={`rating ${className}`} {...props}>
      {stars}
    </div>
  );
}