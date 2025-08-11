import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Badge } from '../components/atoms';
import { Card, MetricsCard } from '../components/molecules';

// Sample system design topics
const systemDesignTopics = [
  {
    id: 'url-shortener',
    title: 'URL Shortener (like bit.ly)',
    difficulty: 'medium',
    estimatedTime: '45-60 min',
    companies: ['Google', 'Facebook', 'Amazon'],
    status: 'completed'
  },
  {
    id: 'chat-system',
    title: 'Chat System (like WhatsApp)',
    difficulty: 'hard',
    estimatedTime: '60-90 min', 
    companies: ['Facebook', 'Uber', 'Microsoft'],
    status: 'in-progress'
  },
  {
    id: 'news-feed',
    title: 'News Feed System',
    difficulty: 'hard',
    estimatedTime: '60-90 min',
    companies: ['Facebook', 'Twitter', 'LinkedIn'],
    status: 'not-started'
  },
  {
    id: 'notification-system',
    title: 'Notification System',
    difficulty: 'medium',
    estimatedTime: '45-60 min',
    companies: ['Google', 'Apple', 'Netflix'],
    status: 'not-started'
  },
  {
    id: 'web-crawler',
    title: 'Web Crawler',
    difficulty: 'hard',
    estimatedTime: '60-90 min',
    companies: ['Google', 'Microsoft', 'Yahoo'],
    status: 'not-started'
  },
  {
    id: 'video-streaming',
    title: 'Video Streaming Service',
    difficulty: 'hard',
    estimatedTime: '90+ min',
    companies: ['Netflix', 'YouTube', 'Amazon'],
    status: 'not-started'
  }
];

export default function SystemDesignPage() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredTopics = systemDesignTopics.filter(topic =>
    topic.title.toLowerCase().includes(search.toLowerCase())
  );

  const completedCount = systemDesignTopics.filter(t => t.status === 'completed').length;
  const inProgressCount = systemDesignTopics.filter(t => t.status === 'in-progress').length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success';
      case 'in-progress': return 'warning';
      default: return 'default';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const handleTopicClick = (topic: any) => {
    if (topic.status === 'completed' || topic.status === 'in-progress') {
      navigate(`/system-design/track/${topic.id}`);
    } else {
      navigate(`/system-design/track/${topic.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">System Design Interview</h1>
          <p className="text-gray-400 mb-6">
            Master system design concepts through practical examples and real-world scenarios
          </p>
          
          {/* Search */}
          <div className="max-w-md">
            <Input
              placeholder="Search system design topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricsCard
            title="Completed"
            value={completedCount}
            icon="FaCheck"
            color="#00c853"
          />
          <MetricsCard
            title="In Progress"
            value={inProgressCount}
            icon="FaClock"
            color="#ff9800"
          />
          <MetricsCard
            title="Total Topics"
            value={systemDesignTopics.length}
            icon="FaCode"
            color="#2196f3"
          />
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 
                         transition-all duration-200 cursor-pointer hover:transform hover:scale-105"
              onClick={() => handleTopicClick(topic)}
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white leading-tight">
                    {topic.title}
                  </h3>
                  <Badge variant={getStatusColor(topic.status) as any}>
                    {topic.status.replace('-', ' ')}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Difficulty:</span>
                    <span className={`capitalize font-medium ${getDifficultyColor(topic.difficulty)}`}>
                      {topic.difficulty}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-gray-300">{topic.estimatedTime}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Asked by:</div>
                <div className="flex flex-wrap gap-1">
                  {topic.companies.slice(0, 3).map((company) => (
                    <span 
                      key={company}
                      className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs"
                    >
                      {company}
                    </span>
                  ))}
                  {topic.companies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600/20 text-gray-400 rounded text-xs">
                      +{topic.companies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <Button 
                variant={topic.status === 'completed' ? 'success' : 'primary'}
                className="w-full"
              >
                {topic.status === 'completed' ? 'Review' : 
                 topic.status === 'in-progress' ? 'Continue' : 'Start'}
              </Button>
            </div>
          ))}
        </div>

        {filteredTopics.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">No topics found matching "{search}"</div>
          </div>
        )}
      </div>
    </div>
  );
}