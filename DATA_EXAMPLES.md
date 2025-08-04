# Data Structure Examples

This file shows example data structures for using the design system components.

## Brain Segments Data Structure

```javascript
export const brainSegments = {
  functionalRequirements: {
    id: 'functional-requirements',
    name: 'Functional Requirements',
    position: { x: 350, y: 200, width: 180, height: 120 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff',
    completedColor: '#00c853',
    description: 'Core features and capabilities',
    svgPath: "M570.814 51.1146L555.834 89.0626C491.921...", // SVG path data
    anatomicalRegion: 'Frontal Lobe'
  },
  // ... more segments
};

export const brainDimensions = {
  viewBox: '0 0 1024 731',
  width: 400,
  height: 300
};
```

## Canvas Components Data Structure

```javascript
export const canvasComponents = [
  {
    id: 'load-balancer',
    name: 'Load Balancer',
    category: 'Infrastructure',
    description: 'Distributes incoming requests across multiple servers',
    icon: '⚖️',
    color: '#4CAF50',
    width: 120,
    height: 80
  },
  {
    id: 'database',
    name: 'Database',
    category: 'Storage',
    description: 'Stores and manages data',
    icon: '🗄️',
    color: '#2196F3',
    width: 100,
    height: 100
  }
  // ... more components
];

export const componentCategories = [
  'All',
  'Infrastructure', 
  'Storage',
  'Processing',
  'Messaging'
];
```

## System Design Tracks Data Structure

```javascript
export const systemDesignTracks = [
  {
    id: 'whatsapp',
    name: 'Build WhatsApp',
    description: 'Design a scalable messaging system like WhatsApp',
    image: '/path/to/image.png',
    progress: 0.3,
    status: 'active', // 'inactive', 'active', 'done'
    difficulty: 'hard',
    companies: ['Meta', 'Google', 'Microsoft', 'Amazon', 'Apple'],
    rating: 4.8,
    estimatedTime: '2-3 hours',
    category: 'Messaging System'
  }
  // ... more tracks
];
```

## Questions Data Structure

```javascript
export const systemDesignQuestions = [
  {
    id: 'functional-requirements',
    question: 'What are the core functional requirements?',
    hint: 'Think about what users need to do with the system',
    category: 'functional-requirements',
    order: 1,
    required: true
  },
  {
    id: 'non-functional-requirements',
    question: 'What are the non-functional requirements?',
    hint: 'Consider scalability, availability, consistency, performance',
    category: 'non-functional-requirements', 
    order: 2,
    required: true
  }
  // ... more questions
];
```

## Usage with Components

```javascript
import React from 'react';
import { InteractiveBrainMap, ComponentPalette, CardGrid } from '@avin1998/design-system-react';

function MyApp() {
  return (
    <div>
      <InteractiveBrainMap
        brainSegments={brainSegments}
        brainDimensions={brainDimensions}
        onSegmentClick={handleSegmentClick}
      />
      
      <ComponentPalette
        components={canvasComponents}
        categories={componentCategories}
      />
      
      <CardGrid
        items={systemDesignTracks}
        onCardClick={handleCardClick}
      />
    </div>
  );
}
```