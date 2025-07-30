// Data layer exports
export { DataProvider, useData, useCodingPatterns, useSystemDesignData, useCanvasData, useComponentDemos } from './DataProvider.js';

// Direct data exports (for backward compatibility during migration)
export { codingPatterns, getExpandedCardData } from './codingPatterns.js';
export { systemDesignTracks, systemDesignCategories } from './systemDesignTracks.js';
export { systemDesignQuestions } from './systemDesignQuestions.js';
export { canvasComponents, componentCategories } from './canvasComponents.js';
export { componentDemos } from './componentDemos.js';