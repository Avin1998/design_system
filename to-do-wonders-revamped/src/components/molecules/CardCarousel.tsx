import React from 'react';
import { Card } from '../molecules';

interface CardCarouselProps {
  cards: Array<{
    id: string;
    title: string;
    image?: string;
    progress?: number;
    status?: string;
    [key: string]: any;
  }>;
  onCardClick?: (card: any) => void;
  className?: string;
}

export default function CardCarousel({ 
  cards, 
  onCardClick, 
  className = '' 
}: CardCarouselProps) {
  return (
    <div className={`overflow-x-auto pb-4 ${className}`}>
      <div className="flex gap-4 min-w-max">
        {cards.map((card) => (
          <div key={card.id} className="flex-shrink-0 w-80">
            <Card
              {...card}
              onClick={() => onCardClick?.(card)}
              className="h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}