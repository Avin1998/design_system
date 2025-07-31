// Brain Segments Data for Interactive Brain Map
// Maps brain regions to system design question categories

export const brainSegments = {
  // Main brain regions for system design mapped to anatomically accurate brain areas
  functionalRequirements: {
    id: 'functional-requirements',
    name: 'Functional Requirements',
    position: { x: 25, y: 35, width: 25, height: 15 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff',
    completedColor: '#00c853',
    description: 'Core features and capabilities',
    // Frontal lobe area - responsible for planning and decision making
    svgPath: 'M25,35 Q35,25 45,28 Q50,30 47,38 Q40,42 30,40 Q23,38 25,35 Z',
    anatomicalRegion: 'Frontal Lobe'
  },
  
  nonFunctionalRequirements: {
    id: 'non-functional-requirements', 
    name: 'Non-Functional Requirements',
    position: { x: 50, y: 25, width: 30, height: 20 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5', 
    activeColor: '#0066ff',
    completedColor: '#00c853',
    description: 'Performance, scalability, reliability',
    // Parietal lobe area - responsible for processing and integration
    svgPath: 'M50,25 Q65,22 75,30 Q80,38 73,43 Q65,46 57,43 Q50,40 47,35 Q50,30 50,25 Z',
    anatomicalRegion: 'Parietal Lobe'
  },

  capacityEstimation: {
    id: 'capacity-estimation',
    name: 'Capacity Estimation', 
    position: { x: 25, y: 45, width: 25, height: 20 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff', 
    completedColor: '#00c853',
    description: 'Scale, users, storage, bandwidth',
    // Temporal lobe area - responsible for memory and processing
    svgPath: 'M30,45 Q40,48 47,52 Q50,58 45,62 Q37,65 30,62 Q23,58 25,52 Q27,48 30,45 Z',
    anatomicalRegion: 'Temporal Lobe'
  },

  highLevelDesign: {
    id: 'high-level-design',
    name: 'High-Level Design',
    position: { x: 57, y: 50, width: 23, height: 20 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff',
    completedColor: '#00c853', 
    description: 'Architecture and system components',
    // Occipital lobe area - responsible for visual processing and organization
    svgPath: 'M57,50 Q70,48 77,55 Q80,62 73,68 Q65,70 60,67 Q53,62 55,55 Q57,50 57,50 Z',
    anatomicalRegion: 'Occipital Lobe'
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