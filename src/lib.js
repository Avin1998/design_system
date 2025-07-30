// Main entry point for the design system package

// Data layer exports - the new data injection system
export { 
  DataProvider, 
  useData, 
  useCodingPatterns, 
  useSystemDesignData, 
  useCanvasData, 
  useComponentDemos 
} from './data/DataProvider.js';

// Direct data exports (for advanced use cases or gradual migration)
export { 
  codingPatterns, 
  getExpandedCardData
} from './data/codingPatterns.js';

export {
  systemDesignTracks,
  systemDesignCategories
} from './data/systemDesignTracks.js';

export {
  systemDesignQuestions
} from './data/systemDesignQuestions.js';

export {
  canvasComponents,
  componentCategories
} from './data/canvasComponents.js';

export {
  componentDemos 
} from './data/componentDemos.js';

// Component exports - Atomic Design Structure
// Atoms
export { default as Badge } from './components/atoms/Badge';
export { default as Button } from './components/atoms/Button';
export { default as Icon } from './components/atoms/Icon';
export { default as Input } from './components/atoms/Input';
export { default as Rating } from './components/atoms/Rating';
export { default as ProgressBar } from './components/atoms/ProgressBar';
export { default as LoadingSpinner } from './components/atoms/LoadingSpinner';
export { default as Modal } from './components/atoms/Modal';
export { default as Container } from './components/atoms/Container';
export { default as ProBadge } from './components/atoms/ProBadge';
export { default as FileUpload } from './components/atoms/FileUpload';
export { default as TextArea } from './components/atoms/TextArea';
export { default as RichTextEditor } from './components/atoms/RichTextEditor';
export { default as InputField } from './components/atoms/InputField';
export { default as HintDisplay } from './components/atoms/HintDisplay';
export { default as CanvasElement } from './components/atoms/CanvasElement';
export { default as ConnectionLine } from './components/atoms/ConnectionLine';
export { default as DraggableComponent } from './components/atoms/DraggableComponent';

// Molecules
export { default as Card } from './components/molecules/Card';
export { default as Header } from './components/molecules/Header';
export { default as MetricsCard } from './components/molecules/MetricsCard';
export { default as ExpandedCard } from './components/molecules/ExpandedCard';
export { default as ExpandedCardInline } from './components/molecules/ExpandedCardInline';
export { default as NavItem } from './components/molecules/NavItem';
export { default as ProfileMenu } from './components/molecules/ProfileMenu';
export { default as EmailComposer } from './components/molecules/EmailComposer';
export { default as EmailOptionCard } from './components/molecules/EmailOptionCard';
export { default as ProblemTable } from './components/molecules/ProblemTable';
export { default as RequirementQuestion } from './components/molecules/RequirementQuestion';
export { default as ComponentPalette } from './components/molecules/ComponentPalette';
export { default as CardCarousel } from './components/molecules/CardCarousel';
export { default as DemoRenderer } from './components/molecules/DemoRenderer';

// Organisms
export { default as CardGrid } from './components/organisms/CardGrid';
export { default as MainLayout } from './components/organisms/MainLayout';
export { default as TopNavBar } from './components/organisms/TopNavBar';
export { default as LeftSideNavBar } from './components/organisms/LeftSideNavBar';
export { default as TrackDetailView } from './components/organisms/TrackDetailView';
export { default as CodeAttemptPage } from './components/organisms/CodeAttemptPage';
export { default as EmailLandingSection } from './components/organisms/EmailLandingSection';
export { default as DesignCanvas } from './components/organisms/DesignCanvas';

// Application components (optional - for demo/reference)
export { default as App } from './App';
export { default as AppWithRouting } from './AppWithRouting';