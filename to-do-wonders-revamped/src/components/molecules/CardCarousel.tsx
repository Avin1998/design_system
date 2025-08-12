
import React, { useState } from 'react';
import Card from './Card';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './CardCarousel.css';

export interface CarouselItem {
  id: string;
  name: string;
  description?: string;
  progress?: number;
  image?: string;
}

export interface CardCarouselProps {
  items: CarouselItem[];
  onCardClick?: (item: CarouselItem) => void;
  onContinue?: (item: CarouselItem) => void;
  onCloseCard?: (itemId: string) => void;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ 
  items, 
  onCardClick, 
  onContinue, 
  onCloseCard 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3; // Show 3 cards at a time
  
  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= items.length ? 0 : prev + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, items.length - itemsPerView) : prev - 1
    );
  };
  
  if (items.length === 0) return null;
  
  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerView);
  const totalPages = Math.ceil(items.length / itemsPerView);
  const currentPage = Math.floor(currentIndex / itemsPerView) + 1;
  
  return (
    <div className="card-carousel">
      <div className="carousel-header">
        <h3>Active Tracks</h3>
        <div className="carousel-controls">
          <button 
            className="carousel-btn carousel-btn-prev" 
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
          </button>
          <span className="carousel-indicator">
            {currentPage} / {totalPages}
          </span>
          <button 
            className="carousel-btn carousel-btn-next" 
            onClick={nextSlide}
            disabled={currentIndex + itemsPerView >= items.length}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      
      <div className="carousel-content">
        <div className="carousel-track" style={{
          transform: `translateX(0px)` // We're using slice instead of transform
        }}>
          {visibleItems.map((item) => (
            <div key={item.id} className="carousel-card">
              <Card
                title={item.name}
                description={item.description || `Learn the ${item.name} pattern for coding interviews.`}
                progress={item.progress ?? 0}
                status="active"
                image={item.image}
                onClick={() => onCardClick?.(item)}
              />
              <div className="carousel-card-actions">
                <button 
                  className="btn-carousel-continue"
                  onClick={() => onContinue?.(item)}
                >
                  Continue
                </button>
                <button 
                  className="btn-carousel-close"
                  onClick={() => onCloseCard?.(item.id)}
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;