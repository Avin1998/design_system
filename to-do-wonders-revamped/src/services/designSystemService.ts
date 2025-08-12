import { DesignSystemAPI } from '../api/designSystemAPI';

// Service layer to handle business logic and data transformation
export class DesignSystemService {
  
  // Brain segments service methods
  static async getBrainSegments() {
    try {
      const response = await DesignSystemAPI.getBrainSegments();
      if (response.success) {
        // Transform API data if needed
        return {
          ...mockBrainSegments, // Using mock data for now
        };
      }
      throw new Error('Failed to fetch brain segments');
    } catch (error) {
      console.error('Error fetching brain segments:', error);
      // Fallback to mock data
      return mockBrainSegments;
    }
  }

  // System design questions service methods
  static async getSystemDesignQuestions() {
    try {
      const response = await DesignSystemAPI.getSystemDesignQuestions();
      if (response.success) {
        return {
          ...mockSystemDesignQuestions,
        };
      }
      throw new Error('Failed to fetch system design questions');
    } catch (error) {
      console.error('Error fetching system design questions:', error);
      return mockSystemDesignQuestions;
    }
  }

  // Canvas components service methods
  static async getCanvasComponents() {
    try {
      const response = await DesignSystemAPI.getCanvasComponents();
      if (response.success) {
        return {
          ...mockCanvasComponents,
        };
      }
      throw new Error('Failed to fetch canvas components');
    } catch (error) {
      console.error('Error fetching canvas components:', error);
      return mockCanvasComponents;
    }
  }

  // System design tracks service methods
  static async getSystemDesignTracks() {
    try {
      const response = await DesignSystemAPI.getSystemDesignTracks();
      if (response.success) {
        return {
          ...mockSystemDesignTracks,
        };
      }
      throw new Error('Failed to fetch system design tracks');
    } catch (error) {
      console.error('Error fetching system design tracks:', error);
      return mockSystemDesignTracks;
    }
  }

  // User progress service methods
  static async getUserProgress(userId: string) {
    try {
      const response = await DesignSystemAPI.getUserProgress(userId);
      if (response.success) {
        return response.data;
      }
      throw new Error('Failed to fetch user progress');
    } catch (error) {
      console.error('Error fetching user progress:', error);
      return {
        userId,
        completedQuestions: [],
        currentTrack: null,
        progress: 0
      };
    }
  }

  static async updateUserProgress(progressData: any) {
    try {
      const response = await DesignSystemAPI.updateUserProgress(progressData);
      if (response.success) {
        return response.data;
      }
      throw new Error('Failed to update user progress');
    } catch (error) {
      console.error('Error updating user progress:', error);
      throw error;
    }
  }
}

// Mock data (moved from data files)
const mockBrainSegments = {
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
  // Add more segments as needed...
};

const mockSystemDesignQuestions = {
  // Mock system design questions
  questions: [
    {
      id: 'question-1',
      title: 'Design a URL Shortener',
      description: 'Design a system like bit.ly',
      difficulty: 'Medium',
      tags: ['URL Shortening', 'Web Services', 'Databases']
    },
    // Add more questions as needed...
  ]
};

const mockCanvasComponents = {
  // Mock canvas components
  components: [
    {
      id: 'load-balancer',
      name: 'Load Balancer',
      type: 'infrastructure',
      icon: 'layers',
      description: 'Distributes incoming requests'
    },
    // Add more components as needed...
  ]
};

const mockSystemDesignTracks = {
  // Mock system design tracks
  tracks: [
    {
      id: 'web-systems',
      name: 'Web Systems Track',
      description: 'Learn to design scalable web systems',
      difficulty: 'Beginner',
      estimatedTime: '2 weeks'
    },
    // Add more tracks as needed...
  ]
};