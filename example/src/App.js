import React, { useState } from 'react';
import { 
  Header, 
  CardGrid, 
  ExpandedCard,
  Button,
  Card,
  Badge,
  ProgressBar
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
    <div style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Header 
        title="Design System Example" 
        search={search} 
        onSearchChange={e => setSearch(e.target.value)} 
        onAddTrack={() => alert('Add track functionality')} 
      />
      
      <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginTop: 0, color: '#333' }}>@avin1998/design-system-react Demo</h2>
        <p style={{ color: '#666', lineHeight: '1.6' }}>
          This example demonstrates the npm package usage. All components (Header, Cards, Buttons, etc.) 
          are imported from the package and data is passed as props instead of being hardcoded.
        </p>
        
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '15px', color: '#333' }}>Component Examples:</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="back" onClick={() => alert('Back button clicked')}>
              Back
            </Button>
          </div>
          
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <div style={{ minWidth: '200px' }}>
              <ProgressBar percent={75} />
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: '#333' }}>Coding Patterns (Using CardGrid Component)</h3>
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
    </div>
  );
}