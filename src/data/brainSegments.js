// Brain Segments Data for Interactive Brain Map
// Maps brain regions to system design question categories

export const brainSegments = {
  // Main brain regions for system design mapped to anatomically accurate brain areas
  functionalRequirements: {
    id: 'functional-requirements',
    name: 'Functional Requirements',
    position: { x: 350, y: 200, width: 180, height: 120 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff',
    completedColor: '#00c853',
    description: 'Core features and capabilities',
    // Frontal lobe area - responsible for planning and decision making
    // Positioned at the front of the brain (left side in profile view)
    svgPath: 'M350,200 Q400,180 450,190 Q480,200 470,250 Q450,280 400,270 Q320,260 350,200 Z',
    anatomicalRegion: 'Frontal Lobe'
  },
  
  nonFunctionalRequirements: {
    id: 'non-functional-requirements', 
    name: 'Non-Functional Requirements',
    position: { x: 550, y: 150, width: 200, height: 160 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5', 
    activeColor: '#0066ff',
    completedColor: '#00c853',
    description: 'Performance, scalability, reliability',
    // Parietal lobe area - responsible for processing and integration
    // Positioned at the top-back of the brain
    svgPath: 'M550,150 Q650,140 750,180 Q780,220 760,260 Q720,300 650,290 Q580,280 550,240 Q530,200 550,150 Z',
    anatomicalRegion: 'Parietal Lobe'
  },

  capacityEstimation: {
    id: 'capacity-estimation',
    name: 'Capacity Estimation', 
    position: { x: 400, y: 350, width: 250, height: 180 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff', 
    completedColor: '#00c853',
    description: 'Scale, users, storage, bandwidth',
    // Temporal lobe area - responsible for memory and processing
    // Positioned at the side-bottom of the brain
    svgPath: 'M400,350 Q500,360 600,380 Q650,420 620,480 Q580,520 500,510 Q420,500 380,460 Q360,420 400,350 Z',
    anatomicalRegion: 'Temporal Lobe'
  },

  highLevelDesign: {
    id: 'high-level-design',
    name: 'High-Level Design',
    position: { x: 750, y: 280, width: 180, height: 160 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff',
    completedColor: '#00c853', 
    description: 'Architecture and system components',
    // Occipital lobe area - responsible for visual processing and organization
    // Positioned at the back of the brain (right side in profile view)
    svgPath: 'M750,280 Q820,270 880,300 Q900,340 890,380 Q870,420 820,430 Q770,440 740,400 Q720,360 750,280 Z',
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

// Brain SVG viewBox and dimensions (matching anatomical brain.svg)
export const brainDimensions = {
  viewBox: '0 0 1024 731',
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