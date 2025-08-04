# Styling Test Guide

This guide helps troubleshoot styling issues when using the npm package.

## Problem: Components render without styles

If your components are importing successfully but appear as unstyled HTML elements, you're missing the CSS import.

### ❌ Incorrect Usage (No Styles)

```javascript
// This will render components without any styling
import { Button, Card, Header } from '@avin1998/design-system-react';

function App() {
  return <Button variant="primary">My Button</Button>;
}
```

**Result**: Button renders as plain HTML with no styling.

### ✅ Correct Usage (With Styles)

```javascript
// STEP 1: Import CSS first (REQUIRED)
import '@avin1998/design-system-react/lib/index.css';

// STEP 2: Import components
import { Button, Card, Header } from '@avin1998/design-system-react';

function App() {
  return <Button variant="primary">My Button</Button>;
}
```

**Result**: Button renders with proper blue gradient, hover effects, etc.

## Quick Test

Create a simple test component to verify styling is working:

```javascript
import React from 'react';

// Import CSS (REQUIRED)
import '@avin1998/design-system-react/lib/index.css';

// Import components
import { Button, Badge, ProgressBar } from '@avin1998/design-system-react';

function StyleTest() {
  return (
    <div style={{ padding: '20px', background: '#0d0d17', minHeight: '100vh' }}>
      <h1 style={{ color: 'white' }}>Design System Style Test</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <Button variant="primary">Primary Button</Button>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <Badge variant="success">Success Badge</Badge>
      </div>
      
      <div style={{ width: '200px' }}>
        <ProgressBar progress={75} />
      </div>
    </div>
  );
}

export default StyleTest;
```

If the buttons appear with blue gradients, badges have colored backgrounds, and the progress bar is styled, then CSS is working correctly.

## Troubleshooting

1. **Verify CSS import**: Ensure you have `import '@avin1998/design-system-react/lib/index.css';` at the top of your main app file.

2. **Check import path**: The CSS path should be exactly `@avin1998/design-system-react/lib/index.css`

3. **Import in main file**: Add the CSS import to your main App.js or index.js file, not individual component files.

4. **Build system**: Ensure your bundler (Webpack, Vite, etc.) can handle CSS imports.

5. **Check browser dev tools**: Open browser dev tools and verify CSS styles are loaded in the Elements tab.