// Data layer exports
export { DataProvider, useData, useCodingPatterns, useSystemDesignData, useCanvasData, useComponentDemos } from './DataProvider';

// Direct data exports (for backward compatibility during migration)
export { codingPatterns, getExpandedCardData } from './codingPatterns';
export { systemDesignTracks, systemDesignCategories } from './systemDesignTracks';
export { systemDesignQuestions } from './systemDesignQuestions';
export { canvasComponents, componentCategories } from './canvasComponents';
export { componentDemos } from './componentDemos';