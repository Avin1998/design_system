// Brain Segments Data for Interactive Brain Map
// Maps brain regions to system design question categories

export interface BrainSegment {
  id: string;
  name: string;
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  color: string;
  hoverColor: string;
  activeColor: string;
  completedColor: string;
  description: string;
  svgPath?: string;
  anatomicalRegion: string;
}

export const BRAIN_SEGMENTS: Record<string, BrainSegment> = {
  functionalRequirements: {
    id: 'functional-requirements',
    name: 'Functional Requirements',
    position: { x: 350, y: 200, width: 180, height: 120 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff',
    completedColor: '#00c853',
    description: 'Core features and capabilities',
    anatomicalRegion: 'Frontal Lobe'
  },
  performanceRequirements: {
    id: 'performance-requirements',
    name: 'Performance Requirements',
    position: { x: 500, y: 180, width: 160, height: 100 },
    color: '#f39c12',
    hoverColor: '#f4a62a',
    activeColor: '#e67e22',
    completedColor: '#00c853',
    description: 'Speed, throughput, and scalability',
    anatomicalRegion: 'Parietal Lobe'
  },
  capacityRequirements: {
    id: 'capacity-requirements',
    name: 'Capacity Requirements',
    position: { x: 400, y: 320, width: 140, height: 90 },
    color: '#9b59b6',
    hoverColor: '#a569bd',
    activeColor: '#8e44ad',
    completedColor: '#00c853',
    description: 'Storage and user load planning',
    anatomicalRegion: 'Temporal Lobe'
  },
  architectureDesign: {
    id: 'architecture-design',
    name: 'Architecture Design',
    position: { x: 250, y: 280, width: 160, height: 110 },
    color: '#e74c3c',
    hoverColor: '#ec7063',
    activeColor: '#c0392b',
    completedColor: '#00c853',
    description: 'System structure and components',
    anatomicalRegion: 'Occipital Lobe'
  }
};

// Question types and difficulty levels
export const QUESTION_DIFFICULTIES = ['Easy', 'Medium', 'Hard'] as const;
export const QUESTION_TYPES = ['Design', 'Architecture', 'Optimization', 'Troubleshooting'] as const;

export type QuestionDifficulty = typeof QUESTION_DIFFICULTIES[number];
export type QuestionType = typeof QUESTION_TYPES[number];