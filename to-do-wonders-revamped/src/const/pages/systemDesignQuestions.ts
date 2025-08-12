// System Design Questions Data

export interface SystemDesignQuestion {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedTime: string;
  tags: string[];
  category: string;
  prerequisites?: string[];
  learningObjectives: string[];
}

export const SYSTEM_DESIGN_QUESTIONS: SystemDesignQuestion[] = [
  {
    id: 'url-shortener',
    title: 'Design a URL Shortener',
    description: 'Design a system like bit.ly that can shorten URLs and redirect users',
    difficulty: 'Medium',
    estimatedTime: '45 mins',
    tags: ['URL Shortening', 'Web Services', 'Databases', 'Caching'],
    category: 'Web Applications',
    learningObjectives: [
      'Understand URL encoding and decoding',
      'Learn about database design for URL mapping',
      'Implement caching strategies',
      'Handle high traffic and scalability'
    ]
  },
  {
    id: 'chat-system',
    title: 'Design a Chat System',
    description: 'Design a real-time chat system like WhatsApp or Slack',
    difficulty: 'Hard',
    estimatedTime: '60 mins',
    tags: ['Real-time', 'WebSockets', 'Message Queue', 'Databases'],
    category: 'Real-time Systems',
    learningObjectives: [
      'Implement real-time communication',
      'Design message storage and retrieval',
      'Handle online/offline status',
      'Scale for millions of users'
    ]
  },
  {
    id: 'social-media-feed',
    title: 'Design a Social Media Feed',
    description: 'Design a news feed system like Facebook or Twitter',
    difficulty: 'Hard',
    estimatedTime: '60 mins',
    tags: ['Social Media', 'Timeline', 'Algorithms', 'Caching'],
    category: 'Social Platforms',
    learningObjectives: [
      'Design feed generation algorithms',
      'Implement timeline storage',
      'Handle viral content',
      'Optimize for personalization'
    ]
  },
  {
    id: 'file-storage',
    title: 'Design a File Storage System',
    description: 'Design a distributed file storage system like Google Drive',
    difficulty: 'Medium',
    estimatedTime: '45 mins',
    tags: ['File Storage', 'Distributed Systems', 'Metadata', 'Synchronization'],
    category: 'Storage Systems',
    learningObjectives: [
      'Design file upload and download',
      'Implement file versioning',
      'Handle file synchronization',
      'Ensure data durability'
    ]
  }
];

// Question categories and tags
export const QUESTION_CATEGORIES = [
  'Web Applications',
  'Real-time Systems', 
  'Social Platforms',
  'Storage Systems',
  'E-commerce',
  'Streaming Services',
  'Infrastructure'
] as const;

export const COMMON_TAGS = [
  'Databases',
  'Caching',
  'Load Balancing',
  'Microservices',
  'APIs',
  'Security',
  'Monitoring',
  'CDN',
  'Message Queue',
  'Real-time',
  'WebSockets',
  'Sharding',
  'Replication'
] as const;