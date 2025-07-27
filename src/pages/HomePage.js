import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/molecules/Header';
import CardGrid from '../components/organisms/CardGrid';
import ExpandedCard from '../components/molecules/ExpandedCard';

// Import images for specific patterns
import defaultBg from '../assets/background.png';
import twoPointersImg from '../assets/two_pointers.png';
import islandImg from '../assets/island.png';
import fastSlowImg from '../assets/patterns/fast_slow_pointers.png';
import slidingWindowImg from '../assets/patterns/sliding_window.png';
import mergeIntervalsImg from '../assets/patterns/merge_intervals.png';
import cyclicSortImg from '../assets/patterns/cyclic_sort.png';
import linkedListReversalImg from '../assets/patterns/linked_list_reversal.png';
import treeBfsImg from '../assets/patterns/tree_bfs.png';
import treeDfsImg from '../assets/patterns/tree_dfs.png';
import twoHeapsImg from '../assets/patterns/two_heaps.png';
import subsetsImg from '../assets/patterns/subsets.png';
import binarySearchImg from '../assets/patterns/modified_binary_search.png';
import topKImg from '../assets/patterns/top_k_elements.png';
import bitwiseXorImg from '../assets/patterns/bitwise_xor.png';
import backtrackingImg from '../assets/patterns/backtracking.png';
import knapsackImg from '../assets/patterns/knapsack.png';
import topoSortImg from '../assets/patterns/topological_sort.png';
import kWayMergeImg from '../assets/patterns/k_way_merge.png';
import monotonicStackImg from '../assets/patterns/monotonic_stack.png';
import multiThreadedImg from '../assets/patterns/multi_threaded.png';

const patterns = [
  {
    id: 'two-pointers',
    name: 'Two Pointers',
    image: twoPointersImg,
    progress: 1,
    status: 'done',
  },
  {
    id: 'island',
    name: 'Island (Matrix Traversal)',
    image: islandImg,
    progress: 1,
    status: 'active',
  },
  {
    id: 'fast-slow',
    name: 'Fast & Slow Pointers',
    image: fastSlowImg,
    progress: 1,
    status: 'inactive',
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    image: slidingWindowImg,
    progress: 1,
    status: 'inactive',
  },
  {
    id: 'merge-intervals',
    name: 'Merge Intervals',
    image: mergeIntervalsImg,
    progress: 1,
    status: 'inactive',
  },
  {
    id: 'cyclic-sort',
    name: 'Cyclic Sort',
    image: cyclicSortImg,
    progress: 1,
    status: 'inactive',
  },
  // Add more patterns as needed...
];

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [expandedCard, setExpandedCard] = useState(null);
  const navigate = useNavigate();
  
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
  
  const handleContinue = () => {
    if (expandedCard) {
      navigate(`/track/${expandedCard.id}`);
    }
    setExpandedCard(null);
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
      />
      
      {expandedCard && (
        <ExpandedCard
          {...expandedCard}
          onClose={() => setExpandedCard(null)}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
}