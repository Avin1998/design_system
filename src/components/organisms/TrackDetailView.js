import React from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import ProblemTable from '../molecules/ProblemTable';
import MetricsCard from '../molecules/MetricsCard';
import './TrackDetailView.css';

const sampleProblems = [
  {
    name: 'Two Sum',
    description: 'Find two numbers that add up to target',
    difficulty: 'easy',
    completed: true
  },
  {
    name: 'Three Sum',
    description: 'Find triplets that sum to zero',
    difficulty: 'medium',
    completed: true
  },
  {
    name: 'Container With Most Water',
    description: 'Find container that holds the most water',
    difficulty: 'medium',
    completed: false
  },
  {
    name: 'Trapping Rain Water',
    description: 'Calculate trapped rainwater between elevations',
    difficulty: 'hard',
    completed: false
  }
];

const metrics = [
  {
    title: 'Problems Solved',
    value: '2/4',
    icon: 'FaCheckCircle',
    color: '#0066ff',
    trend: { direction: 'up', value: '+1 today' }
  },
  {
    title: 'Success Rate',
    value: '75%',
    icon: 'FaPercentage',
    color: '#ffd966',
    trend: { direction: 'up', value: '+5%' }
  },
  {
    title: 'Time Spent',
    value: '2.5h',
    icon: 'FaClock',
    color: '#006bbd',
    trend: { direction: 'down', value: '-30min' }
  },
  {
    title: 'Streak',
    value: '15 days',
    icon: 'FaFire',
    color: '#ff9800'
  }
];

export default function TrackDetailView({ 
  trackName = 'Two Pointers Pattern',
  onBack,
  onAttemptProblem,
  ...props 
}) {
  return (
    <div className="track-detail-view" {...props}>
      <div className="track-header">
        <Button 
          variant="secondary" 
          onClick={onBack}
          className="back-btn"
        >
          <Icon name="FaArrowLeft" size={16} />
          Back to Patterns
        </Button>
        
        <div className="track-title-section">
          <h1 className="track-title">{trackName}</h1>
          <p className="track-subtitle">
            Master the two pointers technique with these carefully selected problems
          </p>
        </div>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <MetricsCard key={index} {...metric} />
        ))}
      </div>

      <div className="problems-section">
        <div className="section-header">
          <h2>Practice Problems</h2>
          <div className="progress-indicator">
            <span className="progress-text">Progress: 2/4 completed</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>
        
        <ProblemTable 
          problems={sampleProblems}
          onAttempt={onAttemptProblem}
        />
      </div>
    </div>
  );
}