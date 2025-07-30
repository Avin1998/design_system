import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/molecules/Header';
import CardGrid from '../components/organisms/CardGrid';

export default function HomePage({ patterns, getExpandedCardData }) {
  const [search, setSearch] = useState('');
  const [activeCards, setActiveCards] = useState([]);
  const navigate = useNavigate();
  
  const filtered = patterns.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  
  const handleCardClick = (pattern) => {
    // Use the provided getExpandedCardData function
    const expandedCardData = getExpandedCardData ? getExpandedCardData(pattern) : {
      ...pattern,
      companies: ['Google', 'Microsoft', 'Amazon', 'Facebook', 'Apple'],
      rating: 4,
      difficulty: pattern.name.includes('Tree') ? 'hard' : 'medium',
      achieved: pattern.status === 'done',
      nextTrack: {
        name: 'Advanced Problem Solving'
      }
    };
    
    // Check if card is already active
    const existingIndex = activeCards.findIndex(card => card.id === pattern.id);
    
    if (existingIndex >= 0) {
      // Move to first position if already active
      const updatedCards = [...activeCards];
      const [existingCard] = updatedCards.splice(existingIndex, 1);
      updatedCards.unshift(existingCard);
      setActiveCards(updatedCards);
    } else {
      // Add to beginning of active cards
      setActiveCards([expandedCardData, ...activeCards]);
    }
  };
  
  const handleContinue = (card) => {
    navigate(`/track/${card.id}`);
  };
  
  const handleCloseCard = (cardId) => {
    setActiveCards(activeCards.filter(card => card.id !== cardId));
  };

  return (
    <div className="container">
      <Header 
        title="Coding Patterns" 
        search={search} 
        onSearchChange={e => setSearch(e.target.value)} 
        onAddTrack={() => alert('Add track')} 
      />
      <CardGrid 
        items={filtered} 
        onCardClick={handleCardClick}
        activeCards={activeCards}
        onContinue={handleContinue}
        onCloseCard={handleCloseCard}
      />
    </div>
  );
}