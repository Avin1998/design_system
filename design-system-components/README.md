# @avinash_tyagi/design-system-components

A comprehensive collection of reusable React components following atomic design principles. This design system provides a consistent and powerful foundation for building modern web applications with a futuristic dark theme.

![Design System Components in Action](https://github.com/user-attachments/assets/a93fbea9-254e-4db7-b10e-fc99bace580c)

## 📖 Table of Contents

- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Architecture](#️-architecture)
- [Visual Examples](#-visual-examples)
- [Component Library](#-component-library)
  - [Atoms](#-atoms-19-components)
  - [Molecules](#-molecules-16-components)
- [Theming & Customization](#-theming--customization)
- [Responsive Design](#-responsive-design)
- [Accessibility](#-accessibility)
- [Development](#-development)

## 📦 Installation

```bash
npm install @avinash_tyagi/design-system-components
```

## 🚀 Quick Start

```jsx
import React from 'react';
import { Button, Card, Input, Badge } from '@avinash_tyagi/design-system-components';

function App() {
  return (
    <div>
      <Button variant="primary" glow>Get Started</Button>
      <Input placeholder="Enter your name" />
      <Badge variant="success" icon="FaCheck">Active</Badge>
      <Card 
        title="Example Card"
        description="This is an example card component"
        status="active"
        progress={0.7}
      />
    </div>
  );
}
```

## 🏗️ Architecture

This design system follows **Atomic Design principles**:

- **Atoms**: Basic building blocks (buttons, inputs, icons, badges)
- **Molecules**: Complex components combining atoms (cards, headers, navigation)

## 🎨 Visual Examples

### Main Application View
The components work together to create a cohesive user interface:

![Main App Overview](https://github.com/user-attachments/assets/a93fbea9-254e-4db7-b10e-fc99bace580c)

### Expanded Card with Multiple Components
Shows Rating, Badge, and Button components working together:

![Expanded Card View](https://github.com/user-attachments/assets/7e85e7f7-2fb3-49fb-8fc6-a13d8d43d4ed)

### Search Functionality
Input component with real-time filtering:

![Search Functionality](https://github.com/user-attachments/assets/7b61a40f-96be-4bee-acf0-8a284982b360)

## 📚 Component Library

### 🔸 Atoms (19 Components)

Basic building blocks that can't be broken down further.

#### Button
Versatile button component with multiple variants and states.

**Props:**
- `variant` (string): 'primary' | 'secondary' | 'back' | 'integration' - Default: 'primary'
- `glow` (boolean): Adds glow effect - Default: false
- `icon` (ReactNode): Icon element for integration buttons
- `subtitle` (string): Subtitle text for integration buttons
- `state` (string): 'default' | 'connected' | 'error' - For integration buttons
- `children` (ReactNode): Button content
- `...props`: All standard button props

**Variants:**
- **Primary**: Standard action button with blue gradient
- **Secondary**: Alternative styling for secondary actions
- **Back**: Navigation button with left arrow
- **Integration**: Special button for external service connections

**Usage:**
```jsx
<Button variant="primary" glow>Save Changes</Button>
<Button variant="back">Go Back</Button>
<Button variant="integration" icon={<GitHubIcon />} subtitle="Connect your account">
  GitHub
</Button>
```

#### Badge
Small status or label component with various styles.

**Props:**
- `variant` (string): 'default' | 'success' | 'warning' | 'danger' - Default: 'default'
- `glow` (boolean): Adds glow effect - Default: false
- `icon` (string): Icon name to display
- `status` (string): 'completed' | 'in-progress' | 'pending' - Adds status styling
- `className` (string): Additional CSS classes
- `children` (ReactNode): Badge content

**Usage:**
```jsx
<Badge variant="success" icon="FaCheck">Completed</Badge>
<Badge variant="warning" glow>Warning</Badge>
<Badge status="in-progress">In Progress</Badge>
```

#### Input
Basic input field with consistent styling.

**Props:**
- All standard HTML input props
- `className` (string): Additional CSS classes

**Usage:**
```jsx
<Input type="text" placeholder="Enter text..." />
<Input type="email" value={email} onChange={setEmail} />
```

#### InputField
Enhanced input with additional features (extends Input).

**Props:**
- All Input props
- Additional styling and validation features

**Usage:**
```jsx
<InputField placeholder="Search patterns..." value={search} onChange={handleSearch} />
```

#### Modal
Overlay component for dialogs and popups.

**Props:**
- `isOpen` (boolean): Controls modal visibility - Required
- `onClose` (function): Callback when modal closes - Required
- `title` (string): Modal title
- `size` (string): 'small' | 'medium' | 'large' - Default: 'medium'
- `className` (string): Additional CSS classes
- `children` (ReactNode): Modal content

**Usage:**
```jsx
<Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Settings">
  <p>Modal content goes here</p>
</Modal>
```

#### ProgressBar
Visual progress indicator with animations.

**Props:**
- `progress` (number): Progress value 0-100 - Default: 0
- `percent` (number): Backward compatibility alias for progress
- `showGlow` (boolean): Adds glow effect - Default: false
- `animated` (boolean): Enables animation - Default: true
- `color` (string): Progress bar color - Default: '#4f9cf9'
- `height` (number): Bar height in pixels - Default: 6
- `showText` (boolean): Shows percentage text - Default: false
- `className` (string): Additional CSS classes

**Usage:**
```jsx
<ProgressBar progress={75} showText animated />
<ProgressBar progress={50} color="#ff6b6b" height={8} showGlow />
```

#### Rating
Star rating component for displaying difficulty or achievement.

**Props:**
- `value` (number): Number of filled stars 1-5 - Default: 0
- `difficulty` (string): 'easy' | 'medium' | 'hard' - Default: 'medium'
- `achieved` (boolean): Whether the rating is achieved - Default: false

**Usage:**
```jsx
<Rating value={4} difficulty="hard" />
<Rating value={3} difficulty="medium" achieved />
```

#### Icon
Flexible icon component supporting multiple icon libraries with built-in mappings.

**Props:**
- `name` (string): Icon name (e.g., 'FaUser', 'FaCog') - Required
- `size` (number): Icon size in pixels - Default: 20
- `className` (string): Additional CSS classes
- `color` (string): Icon color override
- `variant` (string): 'default' | 'status' - Default: 'default'

**Icon Libraries Supported:**
- Font Awesome (`FaIcons`) - e.g., 'FaUser', 'FaCog', 'FaCheck'
- Feather Icons (`FiIcons`) - e.g., 'FiSettings', 'FiZap', 'FiDatabase'
- Heroicons (`HiIcons`) - e.g., 'HiHome', 'HiUser'
- Material Design (`MdIcons`) - e.g., 'MdDashboard', 'MdSettings'

**Built-in Icon Mappings:**
- `'brain'` → Brain icon for cognitive features
- `'completed'` → Check circle for completed states
- `'active'` → Play icon for active states
- `'mentor'` → Robot icon for AI guidance
- `'progress'` → Bar chart for progress indicators
- `'hint'` → Lightning bolt for hints

**Usage:**
```jsx
<Icon name="FaUser" size={24} />
<Icon name="completed" variant="status" color="#22c55e" />
<Icon name="brain" size={32} className="brain-icon" />
```

#### LoadingSpinner
Animated loading indicator.

**Props:**
- Standard component props
- Custom styling through CSS

**Usage:**
```jsx
<LoadingSpinner />
```

#### Tooltip
Contextual information display on hover.

**Props:**
- `children` (ReactNode): Element to attach tooltip to
- `content` (string): Tooltip text
- `position` (string): 'top' | 'bottom' | 'left' | 'right'

**Usage:**
```jsx
<Tooltip content="This is helpful information" position="top">
  <Button>Hover me</Button>
</Tooltip>
```

#### TextArea
Multi-line text input component.

**Props:**
- All standard HTML textarea props
- Consistent styling with other form components

**Usage:**
```jsx
<TextArea placeholder="Enter your message..." rows={4} />
```

#### Container
Layout component for consistent spacing and alignment.

**Props:**
- `children` (ReactNode): Container content
- Layout and styling props

**Usage:**
```jsx
<Container>
  <h1>Page Title</h1>
  <p>Page content</p>
</Container>
```

#### FileUpload
File selection and upload component.

**Props:**
- File handling and upload specific props
- Progress indication support

**Usage:**
```jsx
<FileUpload onFileSelect={handleFileSelect} accept=".jpg,.png" />
```

#### ProBadge
Special badge for premium/pro features.

**Props:**
- Similar to Badge but with premium styling
- `children` (ReactNode): Badge content

**Usage:**
```jsx
<ProBadge>Pro Feature</ProBadge>
```

#### HintDisplay
Component for showing hints and tips.

**Props:**
- `hint` (string): Hint text to display
- `visible` (boolean): Controls visibility

**Usage:**
```jsx
<HintDisplay hint="Try using the two pointers technique" visible={showHint} />
```

#### RichTextEditor
Advanced text editor with formatting capabilities.

**Props:**
- `value` (string): Editor content
- `onChange` (function): Content change handler
- Rich text editing specific props

**Usage:**
```jsx
<RichTextEditor value={content} onChange={setContent} />
```

#### CanvasElement
Canvas-based drawing or visualization component.

**Props:**
- Canvas-specific drawing and interaction props

**Usage:**
```jsx
<CanvasElement width={800} height={600} />
```

#### ConnectionLine
Visual connector between elements.

**Props:**
- Positioning and styling props for connections

**Usage:**
```jsx
<ConnectionLine from="element1" to="element2" />
```

#### DraggableComponent
Component that can be dragged around the interface.

**Props:**
- Drag and drop specific props
- Position and constraint handling

**Usage:**
```jsx
<DraggableComponent onDrag={handleDrag}>
  <div>Drag me around</div>
</DraggableComponent>
```

### 🔸 Molecules (16 Components)

More complex components made by combining atoms.

#### Card
Content display component with status and progress tracking.

**Props:**
- `title` (string): Card title - Required
- `description` (string): Card description
- `progress` (number): Progress value 0-1 - For progress display
- `status` (string): 'inactive' | 'done' | 'active' - Card state
- `image` (string): Background image URL
- `onClick` (function): Click handler

**Status Variants:**
- **inactive**: "Not Started" - Gray styling
- **active**: "In Progress" - Blue accent with progress bar
- **done**: "Mastered" - Success styling with full progress

**Usage:**
```jsx
<Card 
  title="Two Pointers"
  description="Learn the Two Pointers pattern for coding interviews"
  progress={0.8}
  status="active"
  onClick={() => navigate('/pattern/two-pointers')}
/>
```

#### Header
Main navigation header with search and actions.

**Props:**
- `title` (string): Page title
- `search` (string): Search input value
- `onSearchChange` (function): Search change handler
- `onAddTrack` (function): Add track button handler

**Usage:**
```jsx
<Header 
  title="Coding Patterns"
  search={searchTerm}
  onSearchChange={setSearchTerm}
  onAddTrack={() => setShowAddModal(true)}
/>
```

#### NavItem
Navigation link component with icon and active states.

**Props:**
- `icon` (string): Icon name
- `label` (string): Navigation label
- `active` (boolean): Whether item is active
- `onClick` (function): Click handler

**Usage:**
```jsx
<NavItem icon="FaCode" label="Code" active={currentPage === 'code'} />
```

#### ProfileMenu
User profile dropdown with stats and actions.

**Props:**
- `streak` (number): User's current streak - Default: 0
- `notifications` (number): Notification count - Default: 0

**Features:**
- Streak counter with fire icon
- Notification badge
- Dropdown menu with profile options

**Usage:**
```jsx
<ProfileMenu streak={15} notifications={3} />
```

#### QuestionCard
Card component specifically for displaying questions or problems.

**Props:**
- Question-specific props
- Difficulty indicators
- Status tracking

**Usage:**
```jsx
<QuestionCard 
  question="Implement Two Sum"
  difficulty="easy"
  completed={false}
/>
```

#### MetricsCard
Dashboard component for displaying key metrics.

**Props:**
- `title` (string): Metric title
- `value` (number|string): Metric value
- `trend` (string): 'up' | 'down' | 'stable'
- `percentage` (number): Change percentage

**Usage:**
```jsx
<MetricsCard 
  title="Problems Solved"
  value={127}
  trend="up"
  percentage={12}
/>
```

#### ExpandedCard
Detailed modal card with rich content display including ratings, company badges, and navigation.

**Props:**
- `title` (string): Card title - Required
- `image` (string): Background image URL
- `description` (string): Detailed description text
- `companies` (array): Array of company names for badges - Default: []
- `difficulty` (string): 'easy' | 'medium' | 'hard' - Default: 'medium'
- `rating` (number): Star rating value 1-5 - Default: 0
- `achieved` (boolean): Whether rating is achieved - Default: false
- `nextTrack` (object): Next track information - { name: string }
- `onContinue` (function): Continue button handler
- `onClose` (function): Close button handler - Required

**Features:**
- Full-screen modal overlay
- Star rating display
- Company badge list
- Next track navigation
- Close button functionality

**Usage:**
```jsx
<ExpandedCard 
  title="Two Pointers"
  description="Master the Two Pointers pattern through carefully selected problems"
  companies={['Google', 'Microsoft', 'Amazon', 'Facebook', 'Apple']}
  rating={4}
  difficulty="medium"
  achieved={true}
  nextTrack={{ name: 'Advanced Problem Solving' }}
  onContinue={() => navigate('/next-track')}
  onClose={() => setShowExpanded(false)}
/>
```

#### ExpandedCardInline
Inline version of expanded card for compact layouts.

**Props:**
- Similar to ExpandedCard but optimized for inline display

**Usage:**
```jsx
<ExpandedCardInline title="Quick Review" content="Key concepts" />
```

#### EmailComposer
Component for composing and sending emails.

**Props:**
- Email composition specific props
- Recipients, subject, body handling

**Usage:**
```jsx
<EmailComposer 
  to="user@example.com"
  subject="Weekly Progress"
  onSend={handleSend}
/>
```

#### EmailOptionCard
Card component for email-related options and settings.

**Props:**
- Email option specific props
- Configuration and preference handling

**Usage:**
```jsx
<EmailOptionCard 
  title="Weekly Digest"
  description="Get weekly progress updates"
  enabled={emailPrefs.weekly}
  onToggle={toggleWeeklyEmails}
/>
```

#### CardCarousel
Carousel component for displaying multiple cards.

**Props:**
- `cards` (array): Array of card data
- `autoPlay` (boolean): Auto-advance slides
- `interval` (number): Auto-play interval in ms

**Usage:**
```jsx
<CardCarousel 
  cards={featuredPatterns}
  autoPlay={true}
  interval={5000}
/>
```

#### ComponentPalette
Palette for selecting and organizing components.

**Props:**
- Component organization and selection props
- Drag and drop support

**Usage:**
```jsx
<ComponentPalette 
  components={availableComponents}
  onSelect={handleComponentSelect}
/>
```

#### BrainSegment
Specialized component for brain/neural visualization.

**Props:**
- Visualization specific props
- Interactive brain mapping

**Usage:**
```jsx
<BrainSegment 
  region="frontal"
  activity={0.8}
  onClick={showRegionDetails}
/>
```

#### MentorBubble
Chat-like component for mentor guidance.

**Props:**
- `message` (string): Mentor message
- `avatar` (string): Mentor avatar URL
- `timestamp` (Date): Message timestamp

**Usage:**
```jsx
<MentorBubble 
  message="Great job on solving that problem!"
  avatar="/mentor-avatar.jpg"
  timestamp={new Date()}
/>
```

#### ProblemTable
Table component for displaying coding problems.

**Props:**
- `problems` (array): Array of problem data
- `sortBy` (string): Sort field
- `onSort` (function): Sort handler
- `onRowClick` (function): Row click handler

**Usage:**
```jsx
<ProblemTable 
  problems={codingProblems}
  sortBy="difficulty"
  onSort={handleSort}
  onRowClick={openProblem}
/>
```

#### HoverSyncEffect
Advanced utility component for synchronizing hover states between elements (implemented as hooks and manager classes).

**Exports:**
- `useHoverSync` - React hook for basic hover synchronization
- `HoverSyncManager` - Class for managing complex hover interactions
- `useHoverSyncManager` - React hook using the manager
- `requirementsHoverSync` - Singleton instance for global hover sync

**Hook Props (useHoverSync):**
- `activeElementId` (string): Currently active element ID
- `onHoverChange` (function): Callback for hover state changes
- `syncDelay` (number): Delay in ms to prevent flickering - Default: 50

**Manager Methods:**
- `subscribe(elementId, callback)` - Subscribe to hover events
- `setHover(elementId, delay)` - Set hover state
- `clearHover(elementId, delay)` - Clear hover state
- `getCurrentHover()` - Get current hovered element

**Usage:**
```jsx
import { useHoverSyncManager } from '@avinash_tyagi/design-system-components';

function SyncedComponent({ elementId }) {
  const { handleMouseEnter, handleMouseLeave, currentHover } = useHoverSyncManager(
    elementId,
    (hoveredId, isHovered) => {
      console.log(`Element ${hoveredId} hover state:`, isHovered);
    }
  );

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={currentHover === elementId ? 'hovered' : ''}
    >
      Synced hover element
    </div>
  );
}
```

#### RequirementQuestion
Component for requirement gathering questions.

**Props:**
- `question` (string): Question text
- `required` (boolean): Whether answer is required
- `onAnswer` (function): Answer handler

**Usage:**
```jsx
<RequirementQuestion 
  question="What's your experience level?"
  required={true}
  onAnswer={setExperienceLevel}
/>
```

## 🎨 Theming & Customization

The design system uses CSS custom properties for theming. You can override these variables:

```css
:root {
  --primary-color: #0066ff;
  --secondary-color: #003d99;
  --success-color: #22c55e;
  --warning-color: #f59e0b;
  --danger-color: #ef4444;
  --background-dark: #0a0f1c;
  --text-primary: #ffffff;
  --border-radius: 8px;
  --glow-color: rgba(0, 102, 255, 0.4);
}
```

### Component Variants Summary

| Component | Available Variants |
|-----------|-------------------|
| Button | `primary`, `secondary`, `back`, `integration` |
| Badge | `default`, `success`, `warning`, `danger` |
| Modal | `small`, `medium`, `large` |
| Icon | `default`, `status` |
| Card | `inactive`, `active`, `done` |
| Rating | `easy`, `medium`, `hard` |

## 📱 Responsive Design

All components are designed to be responsive and work across different screen sizes:

- **Desktop** (1200px+): Full feature set with hover effects
- **Tablet** (768px - 1199px): Adapted spacing and touch-friendly interactions
- **Mobile** (below 768px): Compact layouts and touch-optimized controls

### Responsive Features:
- Adaptive component sizing
- Touch-friendly interaction areas
- Simplified layouts on smaller screens
- Optimized loading and animations

## ♿ Accessibility

Components follow WCAG 2.1 AA guidelines:

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader**: ARIA labels and descriptions
- **Color Contrast**: High contrast ratios (4.5:1 minimum)
- **Focus Management**: Visible focus indicators and logical tab order

### Accessibility Features:
- `aria-label` attributes on interactive elements
- Semantic button and form elements
- High contrast color schemes
- Keyboard shortcuts for common actions
- Screen reader announcements for state changes

## 🔧 Development

### Building the Package

```bash
cd design-system-components
npm install
npm run build
```

The build process creates:
- `dist/index.cjs.js` - CommonJS bundle
- `dist/index.esm.js` - ES modules bundle
- CSS files are bundled with components

### Testing Components

The main application serves as a living style guide and testing ground:

```bash
# In the root directory
npm install
npm start
```

Visit `http://localhost:3000` to see all components in action with:
- Interactive examples
- State variations
- Real-world usage patterns

### Component Development Guidelines

1. **Follow Atomic Design**: Keep atoms simple, molecules focused
2. **CSS-in-JS**: Each component has its own CSS file
3. **Props Validation**: Use TypeScript or PropTypes for type safety
4. **Accessibility First**: Include ARIA attributes and keyboard support
5. **Performance**: Optimize for tree-shaking and minimal bundle size

### Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/new-component`)
3. **Follow** the existing code style and patterns
4. **Test** your component thoroughly
5. **Update** documentation (including this README)
6. **Submit** a pull request

### Code Style

- Use functional components with hooks
- Follow the existing CSS naming conventions
- Include comprehensive prop documentation
- Add usage examples for complex components
- Ensure responsive behavior

## 📈 Performance

The design system is optimized for performance:

- **Tree Shaking**: Import only the components you use
- **CSS Optimization**: Minimal CSS with efficient selectors
- **Bundle Size**: Optimized builds with code splitting
- **Animations**: Hardware-accelerated CSS transitions
- **Loading**: Lazy loading for complex components

### Bundle Analysis

```bash
# Analyze bundle size
npm run build
npm run analyze  # If available
```

## 🐛 Troubleshooting

### Common Issues

**Icons not displaying:**
- Ensure `react-icons` is installed as a peer dependency
- Check that the icon name is correct (case-sensitive)

**Styling not applied:**
- Verify CSS imports are working in your build system
- Check for CSS conflicts with existing styles

**Components not responsive:**
- Ensure viewport meta tag is set
- Check for fixed width containers

### Debug Mode

Enable debug logging by setting:
```jsx
window.designSystemDebug = true;
```

## 📞 Support

For issues and questions:

- **GitHub Issues**: Create an issue for bugs or feature requests
- **Documentation**: Check component source code for detailed implementation
- **Examples**: Refer to the demo application for usage patterns

### Useful Links

- [Package on NPM](https://www.npmjs.com/package/@avinash_tyagi/design-system-components)
- [Source Code](https://github.com/Avin1998/design_system)
- [Demo Application](http://localhost:3000) (when running locally)

## 📄 License

MIT License - see LICENSE file for details.

---

**Version:** 1.0.1  
**Author:** Avinash Tyagi  
**Package:** @avinash_tyagi/design-system-components  
**Last Updated:** January 2025

> 💡 **Tip**: Start with the basic atoms (Button, Input, Badge) and gradually incorporate the more complex molecules as your application grows. The design system is built to scale with your needs.