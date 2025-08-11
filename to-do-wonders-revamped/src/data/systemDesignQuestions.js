// System Design Requirements Page Questions Data
export const systemDesignQuestions = {
  whatsapp: [
    {
      id: 'functional-requirements',
      question: 'What are the functional requirements for this messaging system?',
      hint: 'Consider core features like sending/receiving messages, user registration, group chats, media sharing, online status, message delivery status.',
      placeholder: 'e.g., Users should be able to send text messages, create group chats, share media files...'
    },
    {
      id: 'non-functional-requirements',
      question: 'What are the non-functional requirements?',
      hint: 'Think about scalability, availability, consistency, performance, and security requirements.',
      placeholder: 'e.g., Support 1 billion users, 99.9% uptime, low latency message delivery...'
    },
    {
      id: 'capacity-estimation',
      question: 'What are the capacity estimation and constraints?',
      hint: 'Estimate daily active users, messages per day, storage requirements, bandwidth needs.',
      placeholder: 'e.g., 500 million DAU, 60 billion messages per day, average message size...'
    },
    {
      id: 'high-level-design',
      question: 'Describe the high-level system design approach.',
      hint: 'Think about the overall architecture, main components, and how they interact.',
      placeholder: 'e.g., Microservices architecture with user service, message service, notification service...'
    }
  ],
  redis: [
    {
      id: 'functional-requirements',
      question: 'What are the functional requirements for this key-value store?',
      hint: 'Consider operations like GET, SET, DELETE, expiration, data types, persistence.',
      placeholder: 'e.g., Support GET/SET operations, handle string/hash/list data types, TTL support...'
    },
    {
      id: 'non-functional-requirements',
      question: 'What are the non-functional requirements?',
      hint: 'Think about performance, availability, consistency, memory efficiency.',
      placeholder: 'e.g., Sub-millisecond latency, high availability, eventual consistency...'
    },
    {
      id: 'capacity-estimation',
      question: 'What are the capacity estimation and constraints?',
      hint: 'Estimate QPS, memory requirements, data size, network bandwidth.',
      placeholder: 'e.g., 100k QPS, 100GB memory, average key-value size...'
    },
    {
      id: 'high-level-design',
      question: 'Describe the high-level system design approach.',
      hint: 'Think about storage engine, memory management, persistence, replication.',
      placeholder: 'e.g., In-memory hash table, background persistence, master-slave replication...'
    }
  ],
  // Default questions for other tracks
  default: [
    {
      id: 'functional-requirements',
      question: 'What are the functional requirements for this system?',
      hint: 'Consider the core features and capabilities that users need from this system.',
      placeholder: 'List the main functional requirements...'
    },
    {
      id: 'non-functional-requirements',
      question: 'What are the non-functional requirements?',
      hint: 'Think about scalability, availability, consistency, performance, and security.',
      placeholder: 'Define scalability, performance, and reliability requirements...'
    },
    {
      id: 'capacity-estimation',
      question: 'What are the capacity estimation and constraints?',
      hint: 'Estimate users, requests, storage, and bandwidth requirements.',
      placeholder: 'Provide capacity estimates and system constraints...'
    },
    {
      id: 'high-level-design',
      question: 'Describe the high-level system design approach.',
      hint: 'Think about the overall architecture and main system components.',
      placeholder: 'Outline the high-level architecture and key components...'
    }
  ]
};