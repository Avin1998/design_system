# @avin1998/design-system-react

A React design system with atomic design principles featuring atoms, molecules, and organisms for building consistent user interfaces.

## Installation

```bash
npm install @avin1998/design-system-react
```

## Peer Dependencies

This package has the following peer dependencies that you need to install in your project:

```bash
npm install react react-dom
```

## Usage

### Basic Import

```javascript
import { 
  Button, 
  Card, 
  Header, 
  MainLayout 
} from '@avin1998/design-system-react';
```

### Complete Example

```javascript
import React, { useState } from 'react';
import { 
  MainLayout, 
  Header, 
  CardGrid, 
  ExpandedCard,
  Button
} from '@avin1998/design-system-react';

export default function App() {
  const [search, setSearch] = useState('');
  const [expandedCard, setExpandedCard] = useState(null);
  
  const patterns = [
    {
      name: 'Two Pointers',
      description: 'Solve problems using two pointers technique',
      progress: 1,
      status: 'done',
    },
    // ... more data
  ];
  
  return (
    <MainLayout>
      <Header 
        title="My App" 
        search={search} 
        onSearchChange={e => setSearch(e.target.value)} 
      />
      <CardGrid 
        items={patterns} 
        onCardClick={setExpandedCard}
      />
      {expandedCard && (
        <ExpandedCard
          {...expandedCard}
          onClose={() => setExpandedCard(null)}
        />
      )}
    </MainLayout>
  );
}
```

## Component Categories

### Atoms (Basic building blocks)
- `Badge` - Status indicators and labels
- `Button` - Various button styles (primary, secondary, integration, back)
- `Icon` - Icon display component
- `Input` - Form input fields
- `InputField` - Enhanced input with labels
- `LoadingSpinner` - Loading indicators
- `Modal` - Modal dialogs
- `ProgressBar` - Progress indicators
- `Rating` - Star ratings
- `TextArea` - Multi-line text inputs
- `Tooltip` - Hover tooltips
- And more...

### Molecules (Component combinations)
- `Card` - Content cards with progress
- `Header` - Page headers with search
- `QuestionCard` - Interactive question cards
- `ComponentPalette` - Component selection interface
- `BrainSegment` - Interactive brain map segments
- `ExpandedCard` - Detailed card overlays
- And more...

### Organisms (Complex component compositions)
- `MainLayout` - Main page layout
- `CardGrid` - Grid of cards with filtering
- `InteractiveBrainMap` - Brain visualization interface
- `QuestionCardStack` - Stack of question cards
- `DesignCanvas` - Design canvas interface
- `TopNavBar` - Top navigation
- `LeftSideNavBar` - Side navigation
- And more...

## Key Features

### Modular Design
All components accept data as props instead of using hardcoded values:

```javascript
// ✅ Good - Data passed as props
<ComponentPalette 
  components={myComponents} 
  categories={myCategories} 
/>

// ❌ Avoid - Don't rely on hardcoded internal data
```

### Flexible Styling
Components come with default CSS that can be customized:

```javascript
import '@avin1998/design-system-react/lib/index.css';
```

### Brain States Constants
For components that work with brain interaction states:

```javascript
import { BRAIN_STATES } from '@avin1998/design-system-react';

// Available states: INACTIVE, HOVER, ACTIVE, COMPLETED
<BrainSegment state={BRAIN_STATES.ACTIVE} />
```

## Component Props Examples

### Button Component
```javascript
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="integration" icon="🔗" subtitle="Connect tools">
  Integration Button
</Button>
<Button variant="back" onClick={handleBack}>Back</Button>
```

### Card Component
```javascript
<Card 
  title="Pattern Name"
  description="Pattern description"
  progress={0.75}
  status="active" // 'inactive', 'active', or 'done'
  onClick={handleCardClick}
/>
```

### InteractiveBrainMap Component
```javascript
<InteractiveBrainMap
  brainSegments={segmentData}
  brainDimensions={{ viewBox: '0 0 1024 731', width: 400, height: 300 }}
  activeSegmentId="segment-1"
  completedSegments={['segment-2']}
  onSegmentClick={handleSegmentClick}
/>
```

### ComponentPalette Component
```javascript
<ComponentPalette
  components={[
    { id: 1, name: 'Button', category: 'Atoms', description: '...' },
    // ... more components
  ]}
  categories={['All', 'Atoms', 'Molecules', 'Organisms']}
/>
```

## Development

To work on this design system:

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the library: `npm run build:lib`
4. Test with the example: `cd example && npm install && npm start`

## Example Application

See the `example/` folder for a complete demonstration of how to use this design system in a React application. The example recreates a coding patterns interface using components from this library.

To run the example:

```bash
cd example
npm install
npm start
```

## Building for Production

The library is built using Rollup and outputs both CommonJS and ES modules:

- CommonJS: `lib/index.js`
- ES Modules: `lib/index.esm.js`
- CSS: `lib/index.css`

## License

MIT

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes (ensure components accept data as props)
4. Test with the example application
5. Submit a pull request

## Migration Guide

If migrating from the original codebase:

1. Install the npm package
2. Replace direct file imports with package imports
3. Pass data as props instead of importing data files
4. Import the CSS file for styling
5. Update any hardcoded constants (e.g., use `BRAIN_STATES` from the package)

For more detailed examples, refer to the `example/` folder in this repository.