import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, TextArea, ProgressBar } from '../components/atoms';
import { QuestionCard } from '../components/molecules';

const systemDesignQuestions = [
  {
    id: 'requirements',
    question: 'What are the functional requirements for this system?',
    hint: 'Think about what the system should do - core features like creating short URLs, redirecting, analytics, etc.',
    placeholder: 'List the main features the system needs to support...'
  },
  {
    id: 'scale',
    question: 'What is the expected scale and performance requirements?',
    hint: 'Consider users, requests per second, storage needs, and geographic distribution.',
    placeholder: 'Define the scale: number of users, requests/second, storage requirements...'
  },
  {
    id: 'non-functional',
    question: 'What are the non-functional requirements?',
    hint: 'Think about availability, consistency, latency, security, and other quality attributes.',
    placeholder: 'Specify availability, latency, security requirements...'
  },
  {
    id: 'high-level',
    question: 'Design the high-level architecture',
    hint: 'Start with major components like web servers, databases, cache, load balancers.',
    placeholder: 'Describe the main components and their interactions...'
  },
  {
    id: 'database',
    question: 'Design the database schema',
    hint: 'Define tables, relationships, and consider SQL vs NoSQL based on requirements.',
    placeholder: 'Define your database tables, fields, and relationships...'
  },
  {
    id: 'api',
    question: 'Design the API endpoints',
    hint: 'Define REST/GraphQL endpoints with request/response formats.',
    placeholder: 'List your API endpoints with request/response examples...'
  },
  {
    id: 'deep-dive',
    question: 'Deep dive into critical components',
    hint: 'Focus on the most important/complex parts like URL encoding, caching strategy, etc.',
    placeholder: 'Explain the detailed design of key components...'
  },
  {
    id: 'scalability',
    question: 'How would you scale this system?',
    hint: 'Discuss horizontal scaling, caching, CDN, database sharding, etc.',
    placeholder: 'Describe scaling strategies for different bottlenecks...'
  }
];

const topicTitles: Record<string, string> = {
  'url-shortener': 'URL Shortener System Design',
  'chat-system': 'Chat System Design',
  'news-feed': 'News Feed System Design',
  'notification-system': 'Notification System Design',
  'web-crawler': 'Web Crawler Design',
  'video-streaming': 'Video Streaming Service Design'
};

export default function SystemDesignRequirementsPage() {
  const { trackId } = useParams<{ trackId: string }>();
  const navigate = useNavigate();
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const title = topicTitles[trackId || ''] || 'System Design';
  
  const handleResponseChange = (questionId: string, value: string) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleCardClick = (questionId: string) => {
    setExpandedCard(expandedCard === questionId ? null : questionId);
  };

  const answeredQuestions = Object.keys(responses).filter(id => responses[id]?.trim()).length;
  const progress = (answeredQuestions / systemDesignQuestions.length) * 100;

  const handleProceedToCanvas = () => {
    navigate(`/system-design/canvas/${trackId}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" onClick={() => navigate('/system-design')}>
              ← Back
            </Button>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white">{title}</h1>
              <p className="text-gray-400">Answer the key questions to design your system</p>
            </div>
          </div>

          {/* Progress */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span>Progress</span>
              <span>{answeredQuestions}/{systemDesignQuestions.length} questions answered</span>
            </div>
            <ProgressBar progress={progress} />
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-4 mb-8">
          {systemDesignQuestions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              index={index}
              value={responses[question.id] || ''}
              onChange={(e) => handleResponseChange(question.id, e.target.value)}
              isExpanded={expandedCard === question.id}
              onClick={() => handleCardClick(question.id)}
              state={responses[question.id]?.trim() ? 'completed' : 'inactive'}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={() => navigate('/system-design')}>
            Save as Draft
          </Button>
          <Button 
            variant="primary"
            onClick={handleProceedToCanvas}
            disabled={answeredQuestions < 4}
          >
            Proceed to Canvas Design
          </Button>
        </div>

        {answeredQuestions < 4 && (
          <p className="text-center text-gray-400 mt-4">
            Answer at least 4 questions to proceed to the canvas design phase
          </p>
        )}
      </div>
    </div>
  );
}