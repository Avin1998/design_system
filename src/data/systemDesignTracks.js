// System Design Track Data
// Import images for system design tracks

export const systemDesignTracks = [
  {
    id: 'whatsapp',
    name: 'Build WhatsApp',
    description: 'Design a scalable messaging system like WhatsApp',
     // Will be replaced with specific images later
    progress: 0.3,
    status: 'active',
    difficulty: 'hard',
    companies: ['Meta', 'Google', 'Microsoft', 'Amazon', 'Apple'],
    rating: 4.8,
    estimatedTime: '2-3 hours',
    category: 'Messaging System'
  },
  {
    id: 'redis',
    name: 'Design Redis',
    description: 'Build an in-memory key-value store like Redis',
    
    progress: 1,
    status: 'done',
    difficulty: 'hard',
    companies: ['Redis Labs', 'Netflix', 'Twitter', 'Airbnb'],
    rating: 4.7,
    estimatedTime: '2-3 hours',
    category: 'Caching System'
  },
  {
    id: 'youtube',
    name: 'Design YouTube',
    description: 'Create a video streaming platform architecture',
    
    progress: 0,
    status: 'inactive',
    difficulty: 'hard',
    companies: ['Google', 'Netflix', 'Amazon', 'Disney+'],
    rating: 4.9,
    estimatedTime: '3-4 hours',
    category: 'Video Streaming'
  },
  {
    id: 'uber',
    name: 'Design Uber',
    description: 'Build a location-based ride-sharing system',
    
    progress: 0.6,
    status: 'active',
    difficulty: 'medium',
    companies: ['Uber', 'Lyft', 'Grab', 'Ola'],
    rating: 4.6,
    estimatedTime: '2-3 hours',
    category: 'Location Services'
  },
  {
    id: 'twitter',
    name: 'Design Twitter',
    description: 'Create a social media platform with real-time feeds',
    
    progress: 0,
    status: 'inactive',
    difficulty: 'hard',
    companies: ['Twitter', 'Meta', 'LinkedIn', 'Reddit'],
    rating: 4.8,
    estimatedTime: '3-4 hours',
    category: 'Social Network'
  },
  {
    id: 'netflix',
    name: 'Design Netflix',
    description: 'Build a video streaming and recommendation system',
    
    progress: 0,
    status: 'inactive',
    difficulty: 'hard',
    companies: ['Netflix', 'Amazon Prime', 'Disney+', 'Hulu'],
    rating: 4.7,
    estimatedTime: '3-4 hours',
    category: 'Streaming Platform'
  },
  {
    id: 'amazon',
    name: 'Design Amazon',
    description: 'Create an e-commerce platform with inventory management',
    
    progress: 0,
    status: 'inactive',
    difficulty: 'hard',
    companies: ['Amazon', 'eBay', 'Shopify', 'Alibaba'],
    rating: 4.9,
    estimatedTime: '4-5 hours',
    category: 'E-commerce'
  },
  {
    id: 'slack',
    name: 'Design Slack',
    description: 'Build a team collaboration and messaging platform',
    
    progress: 0,
    status: 'inactive',
    difficulty: 'medium',
    companies: ['Slack', 'Microsoft Teams', 'Discord', 'Zoom'],
    rating: 4.5,
    estimatedTime: '2-3 hours',
    category: 'Collaboration Tool'
  }
];

export const systemDesignCategories = [
  'All',
  'Messaging System',
  'Caching System', 
  'Video Streaming',
  'Location Services',
  'Social Network',
  'Streaming Platform',
  'E-commerce',
  'Collaboration Tool'
];