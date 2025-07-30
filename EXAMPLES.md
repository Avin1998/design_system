# Package Usage Examples

This file contains examples of how to use the design system package.

## Installation

```bash
npm install design-system-react
```

## Basic Usage

### 1. Using the Data Provider Pattern

```jsx
import React from 'react';
import { 
  DataProvider, 
  useCodingPatterns,
  CardGrid,
  Header 
} from 'design-system-react';

function App() {
  return (
    <DataProvider>
      <CodingPatternsPage />
    </DataProvider>
  );
}

function CodingPatternsPage() {
  const { patterns } = useCodingPatterns();
  
  return (
    <div>
      <Header title="Coding Patterns" />
      <CardGrid items={patterns} />
    </div>
  );
}
```

### 2. System Design Components

```jsx
import React from 'react';
import {
  DataProvider,
  useSystemDesignData,
  DesignCanvas,
  ComponentPalette
} from 'design-system-react';

function SystemDesignApp() {
  return (
    <DataProvider>
      <SystemDesignCanvas />
    </DataProvider>
  );
}

function SystemDesignCanvas() {
  const { tracks } = useSystemDesignData();
  
  return (
    <div style={{ display: 'flex' }}>
      <ComponentPalette />
      <DesignCanvas />
    </div>
  );
}
```

### 3. Individual Components

```jsx
import React from 'react';
import { Button, Badge, Icon, Card } from 'design-system-react';

function MyComponent() {
  return (
    <Card>
      <Icon name="FaStar" size={24} />
      <h3>Welcome</h3>
      <Button variant="primary">Get Started</Button>
      <Badge variant="success">New</Badge>
    </Card>
  );
}
```

## Advanced Examples

### Custom Data Provider

```jsx
import React, { useState, useEffect } from 'react';
import { DataProvider } from 'design-system-react';

function ApiDataProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const [patterns, tracks] = await Promise.all([
          fetch('/api/coding-patterns').then(r => r.json()),
          fetch('/api/system-design-tracks').then(r => r.json())
        ]);
        
        setData({
          codingPatterns: patterns,
          systemDesignTracks: tracks
        });
      } catch (error) {
        console.error('Failed to fetch data:', error);
        // Fallback to static data
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <DataProvider dataSource={data ? 'api' : 'static'} data={data}>
      {children}
    </DataProvider>
  );
}
```

### Component-Only Usage

```jsx
// If you only need components without the data layer
import { Button, Card, Header } from 'design-system-react/components';

function SimpleApp() {
  return (
    <div>
      <Header title="My App" />
      <Card>
        <Button>Click me</Button>
      </Card>
    </div>
  );
}
```

### Data-Only Usage

```jsx
// If you only need the data and hooks
import { 
  DataProvider, 
  useCodingPatterns, 
  codingPatterns 
} from 'design-system-react/data';

function DataOnlyExample() {
  return (
    <DataProvider>
      <MyCustomComponent />
    </DataProvider>
  );
}

function MyCustomComponent() {
  const { patterns } = useCodingPatterns();
  
  return (
    <div>
      {patterns.map(pattern => (
        <div key={pattern.name}>{pattern.name}</div>
      ))}
    </div>
  );
}
```

## Styling

```jsx
// Import the base styles
import 'design-system-react/styles';

// Or import from specific path
import 'design-system-react/src/styles.css';
```

## Migration from Direct Imports

### Before
```jsx
import { systemDesignTracks } from './data/systemDesignTracks';
import CardGrid from './components/CardGrid';

function MyPage() {
  return <CardGrid items={systemDesignTracks} />;
}
```

### After
```jsx
import { DataProvider, useSystemDesignData, CardGrid } from 'design-system-react';

function App() {
  return (
    <DataProvider>
      <MyPage />
    </DataProvider>
  );
}

function MyPage() {
  const { tracks } = useSystemDesignData();
  return <CardGrid items={tracks} />;
}
```