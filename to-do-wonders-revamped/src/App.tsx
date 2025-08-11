import React, { useState, useMemo } from 'react';
import { MainLayout, CardGrid, Header, ExpandedCard } from './components';
import { PATTERNS_DATA } from './data';
import type { Pattern } from './services';
import { COMPANIES, DIFFICULTY_LEVELS } from './constants';

function App() {
  const [search, setSearch] = useState<string>('');
  const [expandedCard, setExpandedCard] = useState<Pattern | null>(null);
  
  const filteredPatterns = useMemo(() => 
    PATTERNS_DATA.filter(pattern => 
      pattern.name.toLowerCase().includes(search.toLowerCase())
    ), [search]
  );
  
  const handleCardClick = (pattern: Pattern) => {
    setExpandedCard({
      ...pattern,
      companies: [...COMPANIES],
      rating: 4,
      difficulty: pattern.name.includes('Tree') ? DIFFICULTY_LEVELS.HARD : DIFFICULTY_LEVELS.MEDIUM,
      achieved: pattern.status === 'done',
      nextTrack: {
        name: 'Advanced Problem Solving'
      }
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleAddTrack = () => {
    alert('Add track functionality would be implemented here');
  };

  const handleContinue = () => {
    alert('Navigate to track details would be implemented here');
    setExpandedCard(null);
  };

  const handleClose = () => {
    setExpandedCard(null);
  };
  
  return (
    <MainLayout>
      <div className="space-y-8">
        <Header 
          title="Coding Patterns" 
          search={search} 
          onSearchChange={handleSearchChange} 
          onAddTrack={handleAddTrack} 
        />
        
        <CardGrid 
          items={filteredPatterns} 
          onCardClick={handleCardClick}
        />
        
        {expandedCard && (
          <ExpandedCard
            title={expandedCard.name}
            {...expandedCard}
            onClose={handleClose}
            onContinue={handleContinue}
          />
        )}
      </div>
    </MainLayout>
  );
}

export default App;
