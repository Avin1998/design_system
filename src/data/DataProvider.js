import React, { createContext, useContext } from 'react';
import { codingPatterns, getExpandedCardData } from './codingPatterns';
import { systemDesignTracks, systemDesignCategories } from './systemDesignTracks';
import { systemDesignQuestions } from './systemDesignQuestions';
import { canvasComponents, componentCategories } from './canvasComponents';
import { componentDemos } from './componentDemos';

// Create the data context
const DataContext = createContext();

// Data provider component
export function DataProvider({ children, dataSource = 'static' }) {
  // In the future, this could switch between static data and API calls
  // based on the dataSource prop
  const data = {
    codingPatterns,
    systemDesignTracks,
    systemDesignCategories,
    systemDesignQuestions,
    canvasComponents,
    componentCategories,
    componentDemos,
    // Helper functions
    getExpandedCardData
  };

  return (
    <DataContext.Provider value={{ data, dataSource }}>
      {children}
    </DataContext.Provider>
  );
}

// Custom hook to use the data context
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}

// Specific hooks for different types of data
export function useCodingPatterns() {
  const { data } = useData();
  return {
    patterns: data.codingPatterns,
    getExpandedCardData: data.getExpandedCardData
  };
}

export function useSystemDesignData() {
  const { data } = useData();
  return {
    tracks: data.systemDesignTracks,
    categories: data.systemDesignCategories,
    questions: data.systemDesignQuestions
  };
}

export function useCanvasData() {
  const { data } = useData();
  return {
    components: data.canvasComponents,
    categories: data.componentCategories
  };
}

export function useComponentDemos() {
  const { data } = useData();
  return data.componentDemos;
}