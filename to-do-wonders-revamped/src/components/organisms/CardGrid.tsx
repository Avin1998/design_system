import React from 'react';
import { Card } from '../molecules';
import type { Pattern } from '../../services';

export interface CardGridProps {
  items: Pattern[];
  onCardClick?: (item: Pattern) => void;
  activeCards?: any[];
  onContinue?: (card: any) => void;
  onCloseCard?: (cardId: string) => void;
}

const CardGrid: React.FC<CardGridProps> = ({ 
  items, 
  onCardClick, 
  activeCards = [], 
  onContinue, 
  onCloseCard 
}) => {
  // Separate active and inactive cards
  const inactiveCards = items.filter(item => 
    !activeCards.find(active => active.id === item.id)
  );
  
  // Get the first active card for top row
  const primaryActiveCard = activeCards[0];
  
  // Get additional active cards for carousel
  const secondaryActiveCards = activeCards.slice(1);

  return (
    <div className="card-grid-container">
      {/* Top row: Primary active card (expanded) */}
      {primaryActiveCard && (
        <div className="active-card-row mb-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white">
                {primaryActiveCard.name}
              </h3>
              <button 
                onClick={() => onCloseCard?.(primaryActiveCard.id)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img 
                  src={primaryActiveCard.image} 
                  alt={primaryActiveCard.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Difficulty:</span>
                    <span className="text-blue-400">{primaryActiveCard.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Rating:</span>
                    <span className="text-yellow-400">
                      {'★'.repeat(primaryActiveCard.rating)}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Companies</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {primaryActiveCard.companies?.map((company: string, idx: number) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-blue-600 text-white text-sm rounded"
                    >
                      {company}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => onContinue?.(primaryActiveCard)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Second row: Carousel for additional active cards */}
      {secondaryActiveCards.length > 0 && (
        <div className="carousel-row mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Active Tracks</h3>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {secondaryActiveCards.map((card: any, i: number) => (
              <div key={i} className="flex-none w-64">
                <Card
                  title={card.name}
                  description={`Learn the ${card.name} pattern for coding interviews.`}
                  progress={card.progress ?? 0}
                  status={card.status || 'inactive'}
                  image={card.image}
                  onClick={() => onCardClick?.(card)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Regular grid for inactive cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {inactiveCards.map((item, i) => (
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