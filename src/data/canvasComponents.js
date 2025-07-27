// System Design Canvas Components Data
export const canvasComponents = [
  {
    id: 'user',
    name: 'User/Client',
    icon: '👤',
    category: 'Client',
    color: '#4f9cf9',
    description: 'End users or client applications'
  },
  {
    id: 'mobile-app',
    name: 'Mobile App',
    icon: '📱',
    category: 'Client',
    color: '#4f9cf9',
    description: 'Mobile client application'
  },
  {
    id: 'web-app',
    name: 'Web App',
    icon: '🌐',
    category: 'Client',
    color: '#4f9cf9',
    description: 'Web browser client'
  },
  {
    id: 'load-balancer',
    name: 'Load Balancer',
    icon: '⚖️',
    category: 'Infrastructure',
    color: '#6ba6f5',
    description: 'Distributes incoming requests'
  },
  {
    id: 'api-gateway',
    name: 'API Gateway',
    icon: '🚪',
    category: 'Infrastructure',
    color: '#6ba6f5',
    description: 'Single entry point for API requests'
  },
  {
    id: 'web-server',
    name: 'Web Server',
    icon: '🖥️',
    category: 'Server',
    color: '#84d2c5',
    description: 'Handles HTTP requests'
  },
  {
    id: 'app-server',
    name: 'Application Server',
    icon: '⚙️',
    category: 'Server',
    color: '#84d2c5',
    description: 'Business logic processing'
  },
  {
    id: 'microservice',
    name: 'Microservice',
    icon: '🔧',
    category: 'Server',
    color: '#84d2c5',
    description: 'Independent service component'
  },
  {
    id: 'database',
    name: 'Database',
    icon: '🗄️',
    category: 'Storage',
    color: '#f9a94f',
    description: 'Persistent data storage'
  },
  {
    id: 'cache',
    name: 'Cache',
    icon: '💾',
    category: 'Storage',
    color: '#f9a94f',
    description: 'Fast temporary storage'
  },
  {
    id: 'file-storage',
    name: 'File Storage',
    icon: '📁',
    category: 'Storage',
    color: '#f9a94f',
    description: 'File and blob storage'
  },
  {
    id: 'message-queue',
    name: 'Message Queue',
    icon: '📮',
    category: 'Communication',
    color: '#a594f9',
    description: 'Asynchronous message passing'
  },
  {
    id: 'pub-sub',
    name: 'Pub/Sub',
    icon: '📡',
    category: 'Communication',
    color: '#a594f9',
    description: 'Publish-subscribe messaging'
  },
  {
    id: 'websocket',
    name: 'WebSocket',
    icon: '🔌',
    category: 'Communication',
    color: '#a594f9',
    description: 'Real-time bidirectional communication'
  },
  {
    id: 'cdn',
    name: 'CDN',
    icon: '🌍',
    category: 'Infrastructure',
    color: '#6ba6f5',
    description: 'Content delivery network'
  },
  {
    id: 'monitoring',
    name: 'Monitoring',
    icon: '📊',
    category: 'Infrastructure',
    color: '#6ba6f5',
    description: 'System monitoring and metrics'
  }
];

export const componentCategories = [
  { id: 'Client', name: 'Client', color: '#4f9cf9' },
  { id: 'Infrastructure', name: 'Infrastructure', color: '#6ba6f5' },
  { id: 'Server', name: 'Server', color: '#84d2c5' },
  { id: 'Storage', name: 'Storage', color: '#f9a94f' },
  { id: 'Communication', name: 'Communication', color: '#a594f9' }
];