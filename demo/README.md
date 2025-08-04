# Component Showcase Demo

This folder contains a comprehensive demonstration of all exported components from the `@avinash_tyagi/design-system-react` npm package.

## Files

- **ComponentShowcase.js** - Complete showcase of all 43+ exported components with styling and dummy data

## What This Demonstrates

### ✅ Complete Component Coverage
- **21 Atoms**: Button, Badge, Input, ProgressBar, Rating, LoadingSpinner, and more
- **17 Molecules**: Header, Card, BrainSegment, QuestionCard, MetricsCard, and more  
- **11 Organisms**: CardGrid, InteractiveBrainMap, QuestionCardStack, TopNavBar, and more
- **1 Constant**: BRAIN_STATES for brain segment states

### ✅ Proper Styling Implementation
The showcase demonstrates the critical CSS import that solves the styling issue:

```javascript
// This import MUST come first for components to have proper styling
import '@avinash_tyagi/design-system-react/lib/index.css';

// Then import components
import { Button, Card, Header } from '@avinash_tyagi/design-system-react';
```

### ✅ Real-World Usage Examples
Each component is shown with:
- Realistic dummy data
- Interactive functionality where applicable
- Proper prop usage as documented
- Various states and variants

## How to Use This Demo

### Option 1: Use in a React Application

1. Create a new React app:
```bash
npx create-react-app showcase-demo
cd showcase-demo
```

2. Install the design system package:
```bash
npm install @avinash_tyagi/design-system-react
```

3. Copy `ComponentShowcase.js` to your `src` folder

4. Update your `App.js`:
```javascript
import ComponentShowcase from './ComponentShowcase';

function App() {
  return <ComponentShowcase />;
}

export default App;
```

5. Start the development server:
```bash
npm start
```

### Option 2: Use as Import Reference

Use this file as a reference for:
- Understanding how to import components correctly
- Seeing proper prop usage with realistic data
- Learning the required CSS import pattern
- Testing that your package installation works correctly

## Component Categories

### 🔹 Atoms (Basic UI Elements)
- **Button**: Various variants (primary, secondary, back, integration)
- **Badge**: Status indicators with different states
- **Input**: Form inputs with validation
- **ProgressBar**: Visual progress indicators
- **Rating**: Interactive star ratings
- **LoadingSpinner**: Loading states
- **Icon**: Scalable icon components
- **Modal**: Dialog overlays
- **Tooltip**: Contextual help text

### 🔸 Molecules (Component Combinations)
- **Header**: Page headers with navigation
- **Card**: Content cards with metadata
- **BrainSegment**: Interactive brain map segments
- **QuestionCard**: Quiz/question interfaces
- **MetricsCard**: Data visualization cards
- **EmailOptionCard**: Settings toggles
- **MentorBubble**: Guidance messages
- **ComponentPalette**: Component selection tools

### 🔷 Organisms (Complex Layouts)
- **CardGrid**: Responsive card layouts
- **InteractiveBrainMap**: Complete brain mapping interface
- **QuestionCardStack**: Multi-question flows
- **TopNavBar**: Application navigation
- **SystemBriefBar**: System overview displays
- **TrackDetailView**: Detailed track information

## Key Features Demonstrated

1. **CSS Bundling**: All component styles work when CSS is imported
2. **Prop Flexibility**: Components accept various data structures
3. **Event Handling**: Interactive components with callback functions
4. **State Management**: Components with internal state (modals, inputs)
5. **Accessibility**: Proper semantic HTML and ARIA attributes
6. **Responsive Design**: Components adapt to different screen sizes

## Troubleshooting

### Components appear unstyled?
Make sure you import the CSS file first:
```javascript
import '@avinash_tyagi/design-system-react/lib/index.css';
```

### Import errors?
Verify the package is installed:
```bash
npm list @avinash_tyagi/design-system-react
```

### Missing components?
Check that you're importing from the correct package name and the component exists in the exports.

## Visual Verification

When working correctly, you should see:
- ✅ Styled buttons with proper colors and hover effects
- ✅ Cards with borders, shadows, and proper spacing
- ✅ Icons and badges with appropriate styling
- ✅ Interactive elements that respond to user actions
- ✅ Consistent typography and spacing throughout

If components appear as plain HTML without styling, the CSS import is missing or incorrect.