
import { Card } from '../molecules';
import type { PatternStatus } from '../../constants';

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
              title={card.title}
              progress={card.progress || 0}
              status={(card.status as PatternStatus) || 'inactive'}
              image={card.image}
              onClick={() => onCardClick?.(card)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}