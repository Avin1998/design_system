import { useState } from 'react';
import { Header } from '../components/molecules';
import { CardGrid } from '../components/organisms';
import type { PatternStatus } from '../constants';

// Sample pattern data - in real app this would come from API
const patterns = [
  {
    id: 'two-pointers',
    name: 'Two Pointers',
    image: '/images/two_pointers.png',
    progress: 1,
    status: 'done' as PatternStatus,
  },
  {
    id: 'island',
    name: 'Island (Matrix Traversal)',
    image: '/images/island.png',
    progress: 1,
    status: 'active' as PatternStatus,
  },
  {
    id: 'fast-slow',
    name: 'Fast & Slow Pointers',
    image: '/images/fast_slow_pointers.png',
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    image: '/images/sliding_window.png',
    progress: 0.7,
    status: 'active' as PatternStatus,
  },
  {
    id: 'merge-intervals',
    name: 'Merge Intervals',
    image: '/images/merge_intervals.png',
    progress: 0.3,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'cyclic-sort',
    name: 'Cyclic Sort',
    image: '/images/cyclic_sort.png',
    progress: 0,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'linked-list-reversal',
    name: 'In-place Reversal of LinkedList',
    image: '/images/linked_list_reversal.png',
    progress: 0,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'tree-bfs',
    name: 'Tree BFS',
    image: '/images/tree_bfs.png',
    progress: 0,
    status: 'inactive' as PatternStatus,
  },
];

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [activeCards, setActiveCards] = useState<any[]>([]);
  
  const filtered = patterns.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  
  const handleCardClick = (pattern: any) => {
    // Create expanded card data
    const expandedCardData = {
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <Header 
          title="Coding Patterns" 
          search={search} 
          onSearchChange={(e) => setSearch(e.target.value)} 
          onAddTrack={() => alert('Add track')} 
        />
        <CardGrid 
          items={filtered} 
          onCardClick={handleCardClick}
        />
      </div>
    </div>
  );
}