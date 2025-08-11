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
  },
  // Additional Client Components
  {
    id: 'desktop-app',
    name: 'Desktop App',
    icon: '💻',
    category: 'Client',
    color: '#4f9cf9',
    description: 'Desktop application client'
  },
  {
    id: 'iot-device',
    name: 'IoT Device',
    icon: '🌐',
    category: 'Client',
    color: '#4f9cf9',
    description: 'Internet of Things device'
  },
  {
    id: 'smart-tv',
    name: 'Smart TV',
    icon: '📺',
    category: 'Client',
    color: '#4f9cf9',
    description: 'Smart TV application'
  },
  // Additional Infrastructure Components
  {
    id: 'firewall',
    name: 'Firewall',
    icon: '🛡️',
    category: 'Infrastructure',
    color: '#6ba6f5',
    description: 'Network security firewall'
  },
  {
    id: 'proxy-server',
    name: 'Proxy Server',
    icon: '🔄',
    category: 'Infrastructure',
    color: '#6ba6f5',
    description: 'Forward/reverse proxy server'
  },
  {
    id: 'dns-server',
    name: 'DNS Server',
    icon: '🏷️',
    category: 'Infrastructure',
    color: '#6ba6f5',
    description: 'Domain name system server'
  },
  {
    id: 'container',
    name: 'Container',
    icon: '📦',
    category: 'Infrastructure',
    color: '#6ba6f5',
    description: 'Docker container or pod'
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    icon: '☸️',
    category: 'Infrastructure',
    color: '#6ba6f5',
    description: 'Container orchestration'
  },
  // Additional Server Components
  {
    id: 'auth-server',
    name: 'Auth Server',
    icon: '🔐',
    category: 'Server',
    color: '#84d2c5',
    description: 'Authentication service'
  },
  {
    id: 'notification-service',
    name: 'Notification Service',
    icon: '🔔',
    category: 'Server',
    color: '#84d2c5',
    description: 'Push notification service'
  },
  {
    id: 'search-service',
    name: 'Search Service',
    icon: '🔍',
    category: 'Server',
    color: '#84d2c5',
    description: 'Search and indexing service'
  },
  {
    id: 'analytics-service',
    name: 'Analytics Service',
    icon: '📈',
    category: 'Server',
    color: '#84d2c5',
    description: 'Data analytics and reporting'
  },
  {
    id: 'payment-service',
    name: 'Payment Service',
    icon: '💳',
    category: 'Server',
    color: '#84d2c5',
    description: 'Payment processing service'
  },
  // Additional Storage Components
  {
    id: 'nosql-database',
    name: 'NoSQL Database',
    icon: '🍃',
    category: 'Storage',
    color: '#f9a94f',
    description: 'Document or key-value database'
  },
  {
    id: 'data-warehouse',
    name: 'Data Warehouse',
    icon: '🏢',
    category: 'Storage',
    color: '#f9a94f',
    description: 'Large-scale data storage'
  },
  {
    id: 'object-storage',
    name: 'Object Storage',
    icon: '☁️',
    category: 'Storage',
    color: '#f9a94f',
    description: 'Cloud object storage'
  },
  {
    id: 'search-index',
    name: 'Search Index',
    icon: '📚',
    category: 'Storage',
    color: '#f9a94f',
    description: 'Elasticsearch or similar'
  },
  {
    id: 'backup-storage',
    name: 'Backup Storage',
    icon: '💿',
    category: 'Storage',
    color: '#f9a94f',
    description: 'Backup and archive storage'
  },
  // Additional Communication Components
  {
    id: 'event-bus',
    name: 'Event Bus',
    icon: '🚌',
    category: 'Communication',
    color: '#a594f9',
    description: 'Event-driven architecture bus'
  },
  {
    id: 'streaming-platform',
    name: 'Streaming Platform',
    icon: '🌊',
    category: 'Communication',
    color: '#a594f9',
    description: 'Real-time data streaming'
  },
  {
    id: 'rpc-service',
    name: 'RPC Service',
    icon: '📞',
    category: 'Communication',
    color: '#a594f9',
    description: 'Remote procedure call'
  },
  {
    id: 'graphql-api',
    name: 'GraphQL API',
    icon: '🕸️',
    category: 'Communication',
    color: '#a594f9',
    description: 'GraphQL API endpoint'
  },
  {
    id: 'rest-api',
    name: 'REST API',
    icon: '🔗',
    category: 'Communication',
    color: '#a594f9',
    description: 'RESTful API service'
  }
];

export const componentCategories = [
  { id: 'Client', name: 'Client', color: '#4f9cf9' },
  { id: 'Infrastructure', name: 'Infrastructure', color: '#6ba6f5' },
  { id: 'Server', name: 'Server', color: '#84d2c5' },
  { id: 'Storage', name: 'Storage', color: '#f9a94f' },
  { id: 'Communication', name: 'Communication', color: '#a594f9' }
];