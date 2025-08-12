import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/molecules';
import { CardGrid } from '../components/organisms';
import type { PatternStatus } from '../constants';

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
    status: 'done' as PatternStatus,
  },
  {
    id: 'island',
    name: 'Island (Matrix Traversal)',
    image: islandImg,
    progress: 1,
    status: 'active' as PatternStatus,
  },
  {
    id: 'fast-slow',
    name: 'Fast & Slow Pointers',
    image: fastSlowImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    image: slidingWindowImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'merge-intervals',
    name: 'Merge Intervals',
    image: mergeIntervalsImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'cyclic-sort',
    name: 'Cyclic Sort',
    image: cyclicSortImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'linked-list-reversal',
    name: 'In-place Reversal of a Linked List',
    image: linkedListReversalImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'tree-bfs',
    name: 'Tree Breadth First Search',
    image: treeBfsImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'tree-dfs',
    name: 'Tree Depth First Search',
    image: treeDfsImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'two-heaps',
    name: 'Two Heaps',
    image: twoHeapsImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'subsets',
    name: 'Subsets',
    image: subsetsImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'binary-search',
    name: 'Modified Binary Search',
    image: binarySearchImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'top-k',
    name: 'Top K Elements',
    image: topKImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'bitwise-xor',
    name: 'Bitwise XOR',
    image: bitwiseXorImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'backtracking',
    name: 'Backtracking',
    image: backtrackingImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'knapsack',
    name: '0/1 Knapsack (Dynamic Programming)',
    image: knapsackImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'topo-sort',
    name: 'Topological Sort (Graph)',
    image: topoSortImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'k-way-merge',
    name: 'K-way Merge',
    image: kWayMergeImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'monotonic-stack',
    name: 'Monotonic Stack',
    image: monotonicStackImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'multi-threaded',
    name: 'Multi-threaded',
    image: multiThreadedImg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
  {
    id: 'union-find',
    name: 'Union Find',
    image: defaultBg,
    progress: 1,
    status: 'inactive' as PatternStatus,
  },
];

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [activeCards, setActiveCards] = useState<any[]>([]);
  const navigate = useNavigate();
  
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
  
  const handleContinue = (card: any) => {
    navigate(`/track/${card.id}`);
  };
  
  const handleCloseCard = (cardId: string) => {
    setActiveCards(activeCards.filter(card => card.id !== cardId));
  };

  return (
    <div className="container">
      <Header 
        title="Coding Patterns" 
        search={search} 
        onSearchChange={(e) => setSearch(e.target.value)} 
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