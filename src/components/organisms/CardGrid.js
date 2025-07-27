
import React from 'react';
import Card from '../molecules/Card';
import ExpandedCardInline from '../molecules/ExpandedCardInline';
import CardCarousel from '../molecules/CardCarousel';
import './CardGrid.css';

export default function CardGrid({ items, onCardClick, activeCards = [], onContinue, onCloseCard }) {
  // Separate active and inactive cards
  const inactiveCards = items.filter(item => !activeCards.find(active => active.id === item.id));
  
  // Get the first active card for top row
  const primaryActiveCard = activeCards[0];
  
  // Get additional active cards for carousel
  const secondaryActiveCards = activeCards.slice(1);
  
  return (
    <div className="card-grid-container">
      {/* Top row: Primary active card (expanded) */}
      {primaryActiveCard && (
        <div className="active-card-row">
          <ExpandedCardInline
            {...primaryActiveCard}
            onContinue={() => onContinue(primaryActiveCard)}
            onClose={() => onCloseCard(primaryActiveCard.id)}
          />
        </div>
      )}
      
      {/* Second row: Carousel for additional active cards */}
      {secondaryActiveCards.length > 0 && (
        <div className="carousel-row">
          <CardCarousel
            items={secondaryActiveCards}
            onCardClick={onCardClick}
            onContinue={onContinue}
            onCloseCard={onCloseCard}
          />
        </div>
      )}
      
      {/* Regular grid for inactive cards */}
      <div className="grid">
        {inactiveCards.map((item, i) => (
          <Card
            key={i}
            title={item.name}
            description={item.description || `Learn the ${item.name} pattern for coding interviews.`}
            progress={item.progress ?? 0}
            status={item.status || 'inactive'}
            image={item.image}
            onClick={() => onCardClick(item)}
          />
        ))}
      </div>
    </div>
  );
}
