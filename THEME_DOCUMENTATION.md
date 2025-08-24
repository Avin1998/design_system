# Theme System Documentation

## Overview

The design system now includes a comprehensive theme system that supports both **Dark** and **Light** themes with smooth transitions and persistent user preferences.

## Features

- ✅ **Dual Theme Support**: Dark theme (default) and Light theme
- ✅ **Persistent Preferences**: Theme choice is saved in localStorage
- ✅ **Smooth Transitions**: All color changes transition smoothly (0.3s)
- ✅ **Accessible Toggle**: Clearly labeled theme toggle with proper ARIA attributes
- ✅ **Component Coverage**: All UI components support both themes
- ✅ **CSS Variables**: Centralized theme management using CSS custom properties

## Theme Color Specifications

### Light Theme
Based on the calm and neutral design specifications:

#### Base / Backgrounds
- **Primary Background**: `#F8FAFC` (Soft very light blue-gray)
- **Secondary Background**: `#ECF4F3` (Hint of greenish-tint white)
- **Card Background**: `#ffffff` (Pure white)

#### Brand / Interactive Colors
- **Primary Blue**: `#3A7CA5` (Medium muted blue)
- **Hover Blue**: `#4F9EC4` (Slightly brighter for interaction)

#### Text Colors
- **Primary Text**: `#1E293B` (Dark slate gray)
- **Secondary Text**: `#475569` (Soft muted gray-blue)

#### Status / Alerts
- **Success Green**: `#6BBF59` (Natural green)
- **Error Red**: `#E76F51` (Muted coral red)

#### Accent Colors
- **Motivational Yellow**: `#FFD166` (Warm optimistic yellow)
- **Energetic Orange**: `#F4976C` (Friendly and engaging)

### Dark Theme
Maintains the existing dark aesthetic:

#### Base / Backgrounds
- **Primary Background**: `#0d0d17` (Very dark blue)
- **Secondary Background**: `#1a1a2f` (Dark navy)
- **Card Background**: `#1a1a2f` (Dark navy)

#### Brand / Interactive Colors
- **Primary Blue**: `#0066ff` (Bright blue)
- **Hover Blue**: `#0080ff` (Brighter interaction blue)

## Usage

### React Components

The theme system is implemented using React Context:

```jsx
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

// Wrap your app with ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <YourAppComponents />
    </ThemeProvider>
  );
}

// Use theme in components
function MyComponent() {
  const { theme, toggleTheme, isDark, isLight } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {isDark ? 'light' : 'dark'} theme
      </button>
    </div>
  );
}
```

### Theme Toggle Component

A pre-built theme toggle component is available:

```jsx
import ThemeToggle from './components/atoms/ThemeToggle';

// Basic usage
<ThemeToggle />

// With variants
<ThemeToggle className="compact" />
<ThemeToggle className="icon-only" />
```

### CSS Variables

All components use CSS custom properties for theming:

```css
.my-component {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  box-shadow: 0 4px 12px var(--shadow-dark);
}
```

### Available CSS Variables

#### Background Colors
- `--bg-primary`: Main background color
- `--bg-secondary`: Secondary background (navigation, cards)
- `--bg-tertiary`: Input backgrounds
- `--bg-card`: Card backgrounds
- `--bg-overlay`: Overlay/glass effects

#### Text Colors
- `--text-primary`: Main text color
- `--text-secondary`: Secondary text color
- `--text-muted`: Muted text color

#### Brand Colors
- `--color-primary`: Main brand color
- `--color-primary-hover`: Hover state
- `--color-primary-dark`: Darker variant
- `--color-primary-light`: Lighter variant
- `--color-primary-lighter`: Lightest variant

#### Status Colors
- `--color-success`: Success/completion states
- `--color-error`: Error/danger states
- `--color-warning`: Warning/caution states

#### Border Colors
- `--border-primary`: Standard borders
- `--border-secondary`: Interactive borders
- `--border-accent`: Accent borders

#### Shadow Colors
- `--shadow-primary`: Brand-colored shadows
- `--shadow-dark`: Standard dark shadows
- `--shadow-darker`: Deeper shadows

## Implementation Status

### ✅ Completed Components
- **Core Layout**: TopNavBar, LeftSideNavBar, MainLayout
- **Atoms**: Button (all variants), Input, ThemeToggle
- **Molecules**: Card, Header
- **Global Styles**: Body, container, grid

### 🔄 Components Using Theme
All components in the design system automatically inherit theme colors through CSS variables, ensuring comprehensive coverage across:

- Form elements (inputs, textareas, selectors)
- Interactive elements (buttons, links, toggles)
- Layout components (navigation, containers, cards)
- Content elements (text, headings, lists)

## Browser Compatibility

The theme system uses modern CSS features with broad browser support:

- **CSS Custom Properties**: Supported in all modern browsers
- **LocalStorage**: Supported in all browsers
- **Transitions**: Supported in all browsers

## Accessibility

The theme system includes several accessibility features:

- **High Contrast**: Both themes meet WCAG contrast requirements
- **Reduced Motion**: Respects user's motion preferences
- **Screen Reader Support**: Theme toggle has proper ARIA labels
- **Keyboard Navigation**: All interactive elements are keyboard accessible

## Performance

- **Efficient Updates**: Theme changes only trigger CSS variable updates
- **Smooth Transitions**: Hardware-accelerated transitions
- **Minimal JavaScript**: Theme logic is lightweight and optimized
- **No Style Recalculation**: Uses CSS variables for instant theme switching

## Future Enhancements

Potential improvements for the theme system:

1. **System Theme Detection**: Auto-detect OS theme preference
2. **Custom Themes**: Allow users to create custom color schemes
3. **Theme Scheduling**: Auto-switch themes based on time of day
4. **High Contrast Mode**: Enhanced accessibility theme
5. **Color Blind Support**: Optimized themes for color vision deficiencies

## Migration Guide

To add theme support to new components:

1. Replace hardcoded colors with CSS variables
2. Test both light and dark themes
3. Verify hover and active states
4. Ensure proper contrast ratios
5. Add smooth transitions for color properties

Example migration:
```css
/* Before */
.my-button {
  background: #0066ff;
  color: #ffffff;
  border: 1px solid #003d99;
}

/* After */
.my-button {
  background: var(--color-primary);
  color: var(--text-primary);
  border: 1px solid var(--color-primary-dark);
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
```