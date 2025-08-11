import React from 'react';
import { Card } from '../molecules';
import type { Pattern } from '../../services';

export interface CardGridProps {
  items: Pattern[];
  onCardClick?: (item: Pattern) => void;
}

const CardGrid: React.FC<CardGridProps> = ({ items, onCardClick }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <Card
            key={item.id || i}
            title={item.name}
            description={`Learn the ${item.name} pattern for coding interviews.`}
            progress={item.progress ?? 0}
            status={item.status || 'inactive'}
            image={item.image}
            onClick={() => onCardClick?.(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;