
import React, { useState } from 'react';
import Header from './components/molecules/Header';
import CardGrid from './components/organisms/CardGrid';
import MainLayout from './components/organisms/MainLayout';
import ExpandedCard from './components/molecules/ExpandedCard';
import { useCodingPatterns } from './data/DataProvider.js';

export default function App() {
  const [search, setSearch] = useState('');
  const [expandedCard, setExpandedCard] = useState(null);
  const { patterns, getExpandedCardData } = useCodingPatterns();
  
  const filtered = patterns.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  
  const handleCardClick = (pattern) => {
    setExpandedCard(getExpandedCardData(pattern));
  };
  
  return (
    <MainLayout>
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
        />
        
        {expandedCard && (
          <ExpandedCard
            {...expandedCard}
            onClose={() => setExpandedCard(null)}
            onContinue={() => {
              alert('Navigate to track details');
              setExpandedCard(null);
            }}
          />
        )}
      </div>
    </MainLayout>
  );
}
