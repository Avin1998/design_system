# Data Access Patterns

This document describes the new data access patterns implemented in the design system.

## Overview

The design system now uses a data injection pattern that allows components to access data without direct imports. This enables easy swapping between static data and API calls.

## Architecture

### Data Provider Context

The `DataProvider` component creates a React Context that provides data to all child components:

```jsx
import { DataProvider } from 'design-system-react';

function App() {
  return (
    <DataProvider dataSource="static">
      <YourComponents />
    </DataProvider>
  );
}
```

### Custom Hooks

Specialized hooks provide access to different types of data:

#### `useCodingPatterns()`
Access coding interview patterns data:
```jsx
const { patterns, getExpandedCardData } = useCodingPatterns();
```

#### `useSystemDesignData()`
Access system design tracks and questions:
```jsx
const { tracks, categories, questions } = useSystemDesignData();
```

#### `useCanvasData()`
Access system design canvas components:
```jsx
const { components, categories } = useCanvasData();
```

#### `useComponentDemos()`
Access component showcase demos:
```jsx
const demos = useComponentDemos();
```

## Migration Examples

### Before (Direct Import)
```jsx
import { systemDesignTracks } from '../data/systemDesignTracks';

function SystemDesignPage() {
  return <CardGrid items={systemDesignTracks} />;
}
```

### After (Data Injection)
```jsx
import { useSystemDesignData } from '../data';

function SystemDesignPage() {
  const { tracks } = useSystemDesignData();
  return <CardGrid items={tracks} />;
}
```

## Future API Integration

The data provider can be extended to support API calls:

```jsx
function ApiDataProvider({ children }) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      const patterns = await fetch('/api/patterns').then(r => r.json());
      const tracks = await fetch('/api/tracks').then(r => r.json());
      setData({ patterns, tracks });
    }
    fetchData();
  }, []);
  
  return (
    <DataProvider dataSource="api" data={data}>
      {children}
    </DataProvider>
  );
}
```

## Benefits

1. **Flexibility**: Easy to switch between static and dynamic data
2. **Testability**: Mock data can be injected for testing
3. **Separation of Concerns**: Components focus on presentation, not data fetching
4. **Consistency**: Centralized data access patterns
5. **Future-Proof**: Can evolve to support different data sources

## Implementation Details

### Data Files Structure
```
src/data/
├── index.js              # Main exports
├── DataProvider.js       # Context and hooks
├── codingPatterns.js     # Coding patterns data
├── systemDesignTracks.js # System design data  
├── systemDesignQuestions.js # Questions data
├── canvasComponents.js   # Canvas components data
└── componentDemos.js     # Demo configurations
```

### Backward Compatibility

Direct data exports are still available for gradual migration:
```jsx
import { codingPatterns, systemDesignTracks } from 'design-system-react/data';
```

## Best Practices

1. Always wrap your app with `DataProvider`
2. Use specific hooks (`useCodingPatterns`) rather than generic `useData`
3. Handle loading states when using async data
4. Provide fallback data for offline scenarios
5. Test components with mock data providers