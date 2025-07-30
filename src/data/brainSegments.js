// Brain Segments Data for Interactive Brain Map
// Maps brain regions to system design question categories

export const brainSegments = {
  // Main brain regions for system design mapped to actual brain areas
  functionalRequirements: {
    id: 'functional-requirements',
    name: 'Functional Requirements',
    position: { x: 35, y: 25, width: 25, height: 20 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff',
    completedColor: '#00c853',
    description: 'Core features and capabilities',
    // Frontal lobe area - responsible for planning and decision making
    svgPath: 'M35,25 Q50,20 60,25 Q65,30 60,35 Q50,40 40,38 Q30,35 32,30 Q35,25 35,25 Z'
  },
  
  nonFunctionalRequirements: {
    id: 'non-functional-requirements', 
    name: 'Non-Functional Requirements',
    position: { x: 65, y: 25, width: 25, height: 20 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5', 
    activeColor: '#0066ff',
    completedColor: '#00c853',
    description: 'Performance, scalability, reliability',
    // Parietal lobe area - responsible for processing and integration
    svgPath: 'M65,25 Q80,22 85,30 Q88,38 82,42 Q75,45 68,42 Q62,38 63,32 Q65,25 65,25 Z'
  },

  capacityEstimation: {
    id: 'capacity-estimation',
    name: 'Capacity Estimation', 
    position: { x: 40, y: 45, width: 20, height: 20 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff', 
    completedColor: '#00c853',
    description: 'Scale, users, storage, bandwidth',
    // Temporal lobe area - responsible for memory and processing
    svgPath: 'M40,45 Q55,42 60,48 Q62,55 57,60 Q50,62 45,58 Q38,52 40,45 Z'
  },

  highLevelDesign: {
    id: 'high-level-design',
    name: 'High-Level Design',
    position: { x: 65, y: 50, width: 20, height: 15 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff',
    completedColor: '#00c853', 
    description: 'Architecture and system components',
    // Occipital lobe area - responsible for visual processing and organization
    svgPath: 'M65,50 Q75,48 80,52 Q82,58 78,62 Q72,65 68,62 Q63,58 65,50 Z'
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