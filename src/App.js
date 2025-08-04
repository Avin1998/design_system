
import React, { useState } from 'react';
import Header from './components/molecules/Header';
import CardGrid from './components/organisms/CardGrid';
import MainLayout from './components/organisms/MainLayout';
import ExpandedCard from './components/molecules/ExpandedCard';

const patterns = [
  {
    name: 'Two Pointers',
    progress: 1,
    status: 'done',
  },
  {
    name: 'Island (Matrix Traversal)',
    progress: 1,
    status: 'active',
  },
  {
    name: 'Fast & Slow Pointers',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Sliding Window',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Merge Intervals',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Cyclic Sort',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'In-place Reversal of a Linked List',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Tree Breadth First Search',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Tree Depth First Search',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Two Heaps',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Subsets',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Modified Binary Search',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Top K Elements',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Bitwise XOR',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Backtracking',
    progress: 1,
    status: 'inactive',
  },
  {
    name: '0/1 Knapsack (Dynamic Programming)',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Topological Sort (Graph)',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'K-way Merge',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Monotonic Stack',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Multi-threaded',
    progress: 1,
    status: 'inactive',
  },
  {
    name: 'Union Find',
    progress: 1,
    status: 'inactive',
  },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [expandedCard, setExpandedCard] = useState(null);
  
  const filtered = patterns.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  
  const handleCardClick = (pattern) => {
    setExpandedCard({
      ...pattern,
      companies: ['Google', 'Microsoft', 'Amazon', 'Facebook', 'Apple'],
      rating: 4,
      difficulty: pattern.name.includes('Tree') ? 'hard' : 'medium',
      achieved: pattern.status === 'done',
      nextTrack: {
        name: 'Advanced Problem Solving'
      }
    });
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
