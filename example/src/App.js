import React, { useState } from 'react';
import { 
  MainLayout, 
  Header, 
  CardGrid, 
  ExpandedCard,
  Button
} from '@avin1998/design-system-react';

// Sample data for demonstration - in real usage this would come from props
const samplePatterns = [
  {
    name: 'Two Pointers',
    description: 'Solve problems using two pointers technique',
    progress: 1,
    status: 'done',
  },
  {
    name: 'Sliding Window',
    description: 'Efficiently solve array/string problems with sliding window',
    progress: 0.6,
    status: 'active',
  },
  {
    name: 'Fast & Slow Pointers',
    description: 'Detect cycles and find middle elements using two-speed pointers',
    progress: 0.3,
    status: 'active',
  },
  {
    name: 'Merge Intervals',
    description: 'Learn to merge overlapping intervals efficiently',
    progress: 0,
    status: 'inactive',
  },
  {
    name: 'Cyclic Sort',
    description: 'Sort arrays with numbers in a given range in-place',
    progress: 0,
    status: 'inactive',
  },
  {
    name: 'Tree Depth First Search',
    description: 'Master tree traversal with DFS techniques',
    progress: 0.8,
    status: 'active',
  },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [expandedCard, setExpandedCard] = useState(null);
  
  const filteredPatterns = samplePatterns.filter(pattern => 
    pattern.name.toLowerCase().includes(search.toLowerCase())
  );
  
  const handleCardClick = (pattern) => {
    setExpandedCard({
      ...pattern,
      companies: ['Google', 'Microsoft', 'Amazon', 'Facebook', 'Apple'],
      rating: 4.5,
      difficulty: pattern.name.includes('Tree') ? 'hard' : 'medium',
      achieved: pattern.status === 'done',
      nextTrack: {
        name: 'Advanced Problem Solving'
      }
    });
  };
  
  return (
    <MainLayout>
      <div style={{ padding: '20px' }}>
        <Header 
          title="Coding Patterns" 
          search={search} 
          onSearchChange={e => setSearch(e.target.value)} 
          onAddTrack={() => alert('Add track functionality')} 
        />
        
        <div style={{ marginBottom: '20px' }}>
          <h2>Design System Example</h2>
          <p>
            This example demonstrates how to use the @avin1998/design-system-react npm package.
            All components (Header, CardGrid, ExpandedCard, etc.) are imported from the package
            and data is passed as props instead of being hardcoded.
          </p>
        </div>
        
        <CardGrid 
          items={filteredPatterns} 
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
        
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <h3>Component Usage Examples:</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="integration" icon="🔗" subtitle="Connect your tools">
              Integration Button
            </Button>
            <Button variant="back" onClick={() => alert('Back button clicked')}>
              Back
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}