import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/molecules/Header';
import CardGrid from '../components/organisms/CardGrid';
import { systemDesignTracks } from '../data/systemDesignTracks';

export default function SystemDesignPage() {
  const [search, setSearch] = useState('');
  const [activeCards, setActiveCards] = useState([]);
  const navigate = useNavigate();
  
  const filtered = systemDesignTracks.filter(track => 
    track.name.toLowerCase().includes(search.toLowerCase()) ||
    track.description.toLowerCase().includes(search.toLowerCase()) ||
    track.category.toLowerCase().includes(search.toLowerCase())
  );
  
  const handleCardClick = (track) => {
    // Create expanded card data
    const expandedCardData = {
      ...track,
      achieved: track.status === 'done',
      nextTrack: {
        name: 'Advanced System Design'
      }
    };
    
    // Check if card is already active
    const existingIndex = activeCards.findIndex(card => card.id === track.id);
    
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
    navigate(`/system-design/track/${card.id}`);
  };
  
  const handleCloseCard = (cardId) => {
    setActiveCards(activeCards.filter(card => card.id !== cardId));
  };

  return (
    <div className="container">
      <Header 
        title="System Design Tracks" 
        search={search} 
        onSearchChange={e => setSearch(e.target.value)} 
        onAddTrack={() => alert('Add system design track')} 
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