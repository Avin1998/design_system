# Design System React

A comprehensive React design system built with atomic design principles and a flexible data layer architecture. This package allows you to seamlessly swap between static data and dynamic API calls without changing your component code.

## Features

- **Atomic Design Structure**: Well-organized components following atoms, molecules, and organisms pattern
- **Data Layer Architecture**: Injectable data layer that supports both static data and API integration
- **React Context Integration**: Easy-to-use hooks for accessing data throughout your application
- **TypeScript Ready**: Full TypeScript support (types coming soon)
- **Comprehensive Component Library**: 40+ production-ready components
- **Responsive Design**: Mobile-first responsive components
- **Theme Support**: Customizable styling and theming

## Installation

```bash
npm install design-system-react
# or
yarn add design-system-react
```

## Quick Start

### 1. Basic Usage with Data Provider

```jsx
import React from 'react';
import { 
  DataProvider, 
  CardGrid, 
  Header,
  useCodingPatterns 
} from 'design-system-react';

function MyApp() {
  return (
    <DataProvider>
      <MyComponent />
    </DataProvider>
  );
}

function MyComponent() {
  const { patterns } = useCodingPatterns();
  
  return (
    <div>
      <Header title="Coding Patterns" />
      <CardGrid items={patterns} />
    </div>
  );
}
```

### 2. Using Individual Components

```jsx
import React from 'react';
import { Button, Badge, Icon, Card } from 'design-system-react';

function MyComponent() {
  return (
    <Card>
      <Icon name="FaStar" size={24} />
      <Button variant="primary">
        Click me
      </Button>
      <Badge variant="success">New</Badge>
    </Card>
  );
}
```

## Data Layer Architecture

The design system includes a powerful data injection system that allows you to switch between static data and API calls seamlessly.

### Available Hooks

- `useCodingPatterns()` - Access coding interview patterns data
- `useSystemDesignData()` - Access system design tracks and questions
- `useCanvasData()` - Access system design canvas components
- `useComponentDemos()` - Access component showcase demos

### Example: Switching to API Data

```jsx
// Custom data provider that fetches from API
function ApiDataProvider({ children }) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchDataFromAPI().then(setData);
  }, []);
  
  return (
    <DataProvider dataSource="api" data={data}>
      {children}
    </DataProvider>
  );
}
```

## Component Categories

### Atoms (Basic Building Blocks)
- `Badge` - Status and category badges
- `Button` - Various button styles and states
- `Icon` - Icon component with React Icons integration
- `Input` - Form input fields
- `Rating` - Star rating display
- `ProgressBar` - Progress indicators
- `LoadingSpinner` - Loading states
- `Modal` - Modal dialogs
- And more...

### Molecules (Composite Components)
- `Card` - Content cards with various layouts
- `Header` - Page headers with search and actions
- `MetricsCard` - Data visualization cards
- `ExpandedCard` - Detailed content cards
- `EmailComposer` - Rich email composition interface
- `ComponentPalette` - Draggable component palette
- And more...

### Organisms (Complex Components)
- `CardGrid` - Responsive grid layouts
- `MainLayout` - Application layout structure
- `TopNavBar` - Navigation header
- `LeftSideNavBar` - Sidebar navigation
- `DesignCanvas` - Interactive design canvas
- `CodeAttemptPage` - Code editor interface
- And more...

## Advanced Usage

### Custom Data Sources

```jsx
import { DataProvider, useData } from 'design-system-react';

// Create custom data provider
function CustomDataProvider({ children }) {
  const customData = {
    patterns: await fetchFromMyAPI(),
    tracks: await fetchTracksFromAPI(),
    // ... other data
  };
  
  return (
    <DataProvider data={customData} dataSource="custom">
      {children}
    </DataProvider>
  );
}

// Use in components
function MyComponent() {
  const { data, dataSource } = useData();
  
  return (
    <div>
      <p>Data source: {dataSource}</p>
      {/* Use data.patterns, data.tracks, etc. */}
    </div>
  );
}
```

### Component-Only Imports

If you only need components without the data layer:

```jsx
import { Button, Card, Icon } from 'design-system-react/src/components';
```

### Data-Only Imports

If you only need the data layer:

```jsx
import { 
  codingPatterns, 
  systemDesignTracks,
  DataProvider,
  useCodingPatterns 
} from 'design-system-react/src/data';
```

## Styling

The package includes CSS that you should import:

```jsx
import 'design-system-react/src/styles.css';
```

### Custom Styling

All components accept `className` and `style` props for customization:

```jsx
<Button 
  className="my-custom-button" 
  style={{ backgroundColor: '#custom-color' }}
>
  Custom Button
</Button>
```

## Examples

### System Design Canvas

```jsx
import { 
  DataProvider,
  DesignCanvas,
  ComponentPalette,
  useCanvasData 
} from 'design-system-react';

function SystemDesigner() {
  const { components } = useCanvasData();
  
  return (
    <div style={{ display: 'flex' }}>
      <ComponentPalette />
      <DesignCanvas components={components} />
    </div>
  );
}
```

### Email Composer

```jsx
import { EmailComposer, EmailLandingSection } from 'design-system-react';

function EmailApp() {
  return (
    <div>
      <EmailLandingSection />
      <EmailComposer />
    </div>
  );
}
```

## Migration Guide

If you're migrating from direct data imports to the new data layer:

### Before:
```jsx
import { systemDesignTracks } from './data/systemDesignTracks';

function MyComponent() {
  return <CardGrid items={systemDesignTracks} />;
}
```

### After:
```jsx
import { DataProvider, useSystemDesignData, CardGrid } from 'design-system-react';

function App() {
  return (
    <DataProvider>
      <MyComponent />
    </DataProvider>
  );
}

function MyComponent() {
  const { tracks } = useSystemDesignData();
  return <CardGrid items={tracks} />;
}
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [Avin1998](https://github.com/Avin1998)

## Support

- 📖 [Documentation](https://github.com/Avin1998/design_system#readme)
- 🐛 [Issue Tracker](https://github.com/Avin1998/design_system/issues)
- 💬 [Discussions](https://github.com/Avin1998/design_system/discussions)