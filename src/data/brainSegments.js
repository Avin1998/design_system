// Brain Segments Data for Interactive Brain Map
// Maps brain regions to system design question categories

export const brainSegments = {
  // Main brain regions for system design
  functionalRequirements: {
    id: 'functional-requirements',
    name: 'Functional Requirements',
    position: { x: 30, y: 20, width: 25, height: 30 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff',
    completedColor: '#00c853',
    description: 'Core features and capabilities',
    svgPath: 'M30,20 Q55,15 55,35 Q55,50 45,50 Q30,50 25,35 Q25,25 30,20 Z'
  },
  
  nonFunctionalRequirements: {
    id: 'non-functional-requirements', 
    name: 'Non-Functional Requirements',
    position: { x: 60, y: 25, width: 25, height: 25 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5', 
    activeColor: '#0066ff',
    completedColor: '#00c853',
    description: 'Performance, scalability, reliability',
    svgPath: 'M60,25 Q85,20 85,40 Q85,50 75,50 Q60,50 55,40 Q55,30 60,25 Z'
  },

  capacityEstimation: {
    id: 'capacity-estimation',
    name: 'Capacity Estimation', 
    position: { x: 35, y: 55, width: 20, height: 25 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff', 
    completedColor: '#00c853',
    description: 'Scale, users, storage, bandwidth',
    svgPath: 'M35,55 Q55,50 55,70 Q55,80 45,80 Q35,80 30,70 Q30,60 35,55 Z'
  },

  highLevelDesign: {
    id: 'high-level-design',
    name: 'High-Level Design',
    position: { x: 60, y: 60, width: 25, height: 20 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff',
    completedColor: '#00c853', 
    description: 'Architecture and system components',
    svgPath: 'M60,60 Q85,55 85,75 Q85,80 75,80 Q60,80 55,75 Q55,65 60,60 Z'
  }
};

// Mapping of questions to brain segments
export const questionToBrainMapping = {
  'functional-requirements': 'functionalRequirements',
  'non-functional-requirements': 'nonFunctionalRequirements', 
  'capacity-estimation': 'capacityEstimation',
  'high-level-design': 'highLevelDesign'
};

// Brain SVG viewBox and dimensions
export const brainDimensions = {
  viewBox: '0 0 120 100',
  width: 400,
  height: 300
};

// Brain interaction states
export const brainStates = {
  INACTIVE: 'inactive',
  HOVER: 'hover', 
  ACTIVE: 'active',
  COMPLETED: 'completed'
};