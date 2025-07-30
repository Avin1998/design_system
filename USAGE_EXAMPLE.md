# Usage Example - Prop-Based Components

This document shows how to use the design system components with your own data as props.

## As NPM Package (Recommended)

```jsx
import React from 'react';
import { 
  App, 
  SystemDesignPage, 
  ComponentShowcase,
  ComponentPalette,
  SystemDesignRequirementsPage,
  SystemDesignCanvasPage 
} from 'design-system-react';

// Your own data
const myPatterns = [
  {
    id: 'custom-pattern',
    name: 'My Custom Pattern',
    progress: 0.8,
    status: 'active',
    image: '/path/to/image.png'
  }
];

const mySystemDesignTracks = [
  {
    id: 'my-track',
    name: 'My System Design Track',
    description: 'Custom system design track',
    category: 'beginner'
  }
];

const myComponentDemos = {
  atoms: {
    title: 'My Atoms',
    components: [
      {
        name: 'My Button',
        demo: 'button-demo'
      }
    ]
  }
};

function MyApp() {
  return (
    <div>
      {/* Use App component with your own patterns */}
      <App 
        patterns={myPatterns} 
        getExpandedCardData={(pattern) => ({ ...pattern, custom: true })} 
      />
      
      {/* Use SystemDesignPage with your own tracks */}
      <SystemDesignPage systemDesignTracks={mySystemDesignTracks} />
      
      {/* Use ComponentShowcase with your own demos */}
      <ComponentShowcase demos={myComponentDemos} />
    </div>
  );
}
```

## With Data Provider (For Internal Use)

```jsx
import React from 'react';
import { DataProvider, App, SystemDesignPage } from 'design-system-react';

// This approach uses the built-in data provider
function AppWithDataProvider() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/system-design" element={<SystemDesignPage />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}
```

## Key Benefits

1. **Flexible**: Use your own data with any component
2. **Reusable**: Components are not tied to specific data structure  
3. **Testable**: Easy to inject mock data for testing
4. **Extensible**: Add custom functionality without modifying components

## Component Props

### App Component
- `patterns`: Array of coding pattern objects
- `getExpandedCardData`: Function to transform pattern data for expanded view

### SystemDesignPage Component  
- `systemDesignTracks`: Array of system design track objects

### ComponentShowcase Component
- `demos`: Object containing demo data organized by categories

### ComponentPalette Component
- `canvasComponents`: Array of available canvas components
- `componentCategories`: Array of component categories

### SystemDesignRequirementsPage Component
- `tracks`: Array of system design tracks
- `questions`: Object containing questions organized by track ID

### SystemDesignCanvasPage Component
- `tracks`: Array of system design tracks
- `canvasComponents`: Array of available canvas components  
- `componentCategories`: Array of component categories