import React, { useState, useEffect } from 'react';
import Icon from '../atoms/Icon';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';
import Tooltip from '../atoms/Tooltip';
import './SystemBriefBar.css';

export default function SystemBriefBar({
  trackName = '',
  description = '',
  estimatedTime = '',
  interviewMode = false,
  onToggleMode,
  onStartTimer,
  timerRunning = false,
  elapsedTime = 0,
  className = ''
}) {
  const [showDetails, setShowDetails] = useState(false);

  // Format elapsed time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const briefBarClasses = `system-brief-bar ${interviewMode ? 'interview-mode' : ''} ${className}`;

  return (
    <div className={briefBarClasses}>
      {/* Main Brief Content */}
      <div className="brief-content">
        <div className="brief-main">
          <div className="brief-title-section">
            <h2 className="brief-title">
              <Icon name="brain" size={20} variant="brain" className="title-icon" />
              {trackName}
            </h2>
            <div className="brief-badges">
              {interviewMode && (
                <Badge 
                  variant="warning" 
                  icon="progress"
                  glow={timerRunning}
                  className="interview-badge"
                >
                  Interview Mode
                </Badge>
              )}
              <Badge variant="default" className="time-badge">
                Est. {estimatedTime}
              </Badge>
            </div>
          </div>
          
          <p className="brief-description">
            {description}
          </p>
        </div>

        {/* Controls */}
        <div className="brief-controls">
          {/* Timer Display */}
          {interviewMode && (
            <div className="timer-display">
              <Icon name="progress" size={16} className="timer-icon" />
              <span className="timer-text">{formatTime(elapsedTime)}</span>
              <Button
                variant="minimal"
                onClick={onStartTimer}
                className="timer-button"
              >
                <Icon name={timerRunning ? 'pause' : 'active'} size={14} />
                {timerRunning ? 'Pause' : 'Start'}
              </Button>
            </div>
          )}

          {/* Action Buttons */}
          <div className="brief-actions">
            <Tooltip content={showDetails ? 'Hide details' : 'Show more details'}>
              <Button
                variant="minimal"
                onClick={() => setShowDetails(!showDetails)}
                className="details-button"
              >
                <Icon name="hint" size={14} />
                Details
              </Button>
            </Tooltip>

            <Tooltip content={interviewMode ? 'Exit interview mode' : 'Start interview simulation'}>
              <Button
                variant={interviewMode ? "danger" : "secondary"}
                onClick={onToggleMode}
                className="mode-button"
              >
                <Icon name={interviewMode ? 'stop' : 'active'} size={14} />
                {interviewMode ? 'Exit Interview' : 'Interview Mode'}
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Expandable Details */}
      {showDetails && (
        <div className="brief-details">
          <div className="details-grid">
            <div className="detail-item">
              <Icon name="functional" size={14} variant="brain" />
              <div className="detail-content">
                <strong>Requirements Focus</strong>
                <span>Define core features and constraints</span>
              </div>
            </div>
            
            <div className="detail-item">
              <Icon name="capacity" size={14} variant="brain" />
              <div className="detail-content">
                <strong>Scale Planning</strong>
                <span>Estimate users, storage, and performance</span>
              </div>
            </div>
            
            <div className="detail-item">
              <Icon name="architecture" size={14} variant="brain" />
              <div className="detail-content">
                <strong>High-Level Design</strong>
                <span>Structure components and data flow</span>
              </div>
            </div>
            
            <div className="detail-item">
              <Icon name="performance" size={14} variant="brain" />
              <div className="detail-content">
                <strong>Trade-offs</strong>
                <span>Balance consistency, availability, and performance</span>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="brief-tips">
            <Icon name="hint" size={16} variant="hint" />
            <div className="tips-content">
              <strong>Pro Tips:</strong>
              <ul>
                <li>Start with functional requirements before diving into architecture</li>
                <li>Ask clarifying questions about scale and constraints</li>
                <li>Think about failure scenarios and edge cases</li>
                <li>Consider both write-heavy and read-heavy patterns</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Interview Mode Indicator */}
      {interviewMode && (
        <div className="interview-indicator">
          <div className="indicator-pulse"></div>
          <span>Interview Simulation Active</span>
        </div>
      )}
    </div>
  );
}