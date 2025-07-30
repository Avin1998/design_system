import React, { useState, useEffect } from 'react';
import BrainSegment from '../molecules/BrainSegment';
import { brainSegments, brainDimensions, brainStates } from '../../data/brainSegments';
import './InteractiveBrainMap.css';

export default function InteractiveBrainMap({
  activeSegmentId = null,
  hoveredSegmentId = null,
  completedSegments = [],
  onSegmentClick,
  onSegmentHover,
  onSegmentLeave,
  className = ''
}) {
  const [internalHoveredSegment, setInternalHoveredSegment] = useState(null);

  // Determine segment state
  const getSegmentState = (segmentId) => {
    if (completedSegments.includes(segmentId)) {
      return brainStates.COMPLETED;
    }
    if (activeSegmentId === segmentId) {
      return brainStates.ACTIVE;
    }
    if (hoveredSegmentId === segmentId || internalHoveredSegment === segmentId) {
      return brainStates.HOVER;
    }
    return brainStates.INACTIVE;
  };

  const handleSegmentClick = (segmentId) => {
    if (onSegmentClick) {
      onSegmentClick(segmentId);
    }
  };

  const handleSegmentMouseEnter = (segmentId) => {
    setInternalHoveredSegment(segmentId);
    if (onSegmentHover) {
      onSegmentHover(segmentId);
    }
  };

  const handleSegmentMouseLeave = (segmentId) => {
    setInternalHoveredSegment(null);
    if (onSegmentLeave) {
      onSegmentLeave(segmentId);
    }
  };

  const brainMapClasses = `interactive-brain-map ${className}`;

  return (
    <div className={brainMapClasses}>
      {/* Brain Title */}
      <div className="brain-map-header">
        <h3 className="brain-map-title">System Design Brain</h3>
        <p className="brain-map-subtitle">
          Click or hover over regions to explore requirements
        </p>
      </div>

      {/* SVG Brain */}
      <div className="brain-svg-container">
        <svg
          viewBox={brainDimensions.viewBox}
          className="brain-svg"
          width="100%"
          height="100%"
        >
          {/* Brain outline/background */}
          <defs>
            <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1a1a2f', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: '#2d2d44', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#404066', stopOpacity: 0.8 }} />
            </linearGradient>
            
            <filter id="brainGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Brain Base Shape - More anatomically correct brain silhouette */}
          <g className="brain-base">
            {/* Main brain outline */}
            <path
              d="M30,25 Q35,18 45,20 Q55,15 70,18 Q80,20 90,25 Q95,30 92,40 Q90,50 85,60 Q80,70 70,75 Q60,78 50,75 Q40,72 32,65 Q25,55 28,45 Q30,35 30,25 Z"
              fill="url(#brainGradient)"
              stroke="rgba(79, 156, 249, 0.15)"
              strokeWidth="1"
              className="brain-outline"
            />
            
            {/* Brain stem */}
            <path
              d="M55,75 Q58,82 60,85 Q62,88 60,90 Q58,92 55,90 Q52,88 54,85 Q55,82 55,75 Z"
              fill="url(#brainGradient)"
              stroke="rgba(79, 156, 249, 0.15)"
              strokeWidth="1"
              className="brain-stem"
            />
            
            {/* Cerebellum */}
            <path
              d="M35,65 Q45,70 55,65 Q60,68 55,72 Q45,75 35,72 Q30,68 35,65 Z"
              fill="url(#brainGradient)"
              stroke="rgba(79, 156, 249, 0.15)"
              strokeWidth="1"
              className="cerebellum"
            />
            
            {/* Brain sulci/folds for texture */}
            <path
              d="M40,30 Q50,32 60,30"
              fill="none"
              stroke="rgba(79, 156, 249, 0.2)"
              strokeWidth="0.5"
              className="brain-fold"
            />
            <path
              d="M45,45 Q55,47 65,45"
              fill="none"
              stroke="rgba(79, 156, 249, 0.2)"
              strokeWidth="0.5"
              className="brain-fold"
            />
            <path
              d="M42,55 Q52,57 62,55"
              fill="none"
              stroke="rgba(79, 156, 249, 0.2)"
              strokeWidth="0.5"
              className="brain-fold"
            />
          </g>

          {/* Brain Segments */}
          {Object.entries(brainSegments).map(([key, segment]) => (
            <BrainSegment
              key={segment.id}
              segment={segment}
              state={getSegmentState(segment.id)}
              isHovered={hoveredSegmentId === segment.id || internalHoveredSegment === segment.id}
              onClick={() => handleSegmentClick(segment.id)}
              onMouseEnter={() => handleSegmentMouseEnter(segment.id)}
              onMouseLeave={() => handleSegmentMouseLeave(segment.id)}
              showTooltip={true}
            />
          ))}

          {/* Neural connections (decorative) - More realistic pathways */}
          <g className="neural-connections" opacity="0.4">
            {/* Connections between brain regions */}
            <line 
              x1="50" y1="32" x2="68" y2="35"
              stroke="#4f9cf9" 
              strokeWidth="1"
              strokeDasharray="3,2"
              className="neural-line"
            />
            <line 
              x1="52" y1="50" x2="72" y2="55"
              stroke="#4f9cf9" 
              strokeWidth="1"
              strokeDasharray="3,2"
              className="neural-line"
            />
            <line 
              x1="45" y1="40" x2="48" y2="48"
              stroke="#4f9cf9" 
              strokeWidth="1"
              strokeDasharray="2,3"
              className="neural-line"
            />
            <line 
              x1="58" y1="42" x2="70" y2="52"
              stroke="#4f9cf9" 
              strokeWidth="1"
              strokeDasharray="2,3"
              className="neural-line"
            />
            
            {/* Neural nodes */}
            <circle cx="50" cy="32" r="1.5" fill="#66b3ff" opacity="0.8" className="neural-node" />
            <circle cx="68" cy="35" r="1.5" fill="#66b3ff" opacity="0.8" className="neural-node" />
            <circle cx="52" cy="50" r="1.5" fill="#66b3ff" opacity="0.8" className="neural-node" />
            <circle cx="72" cy="55" r="1.5" fill="#66b3ff" opacity="0.8" className="neural-node" />
          </g>
        </svg>
      </div>

      {/* Legend */}
      <div className="brain-legend">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: brainSegments.functionalRequirements.color }}></div>
          <span>Inactive</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: brainSegments.functionalRequirements.activeColor }}></div>
          <span>Active</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: brainSegments.functionalRequirements.completedColor }}></div>
          <span>Completed</span>
        </div>
      </div>

      {/* Progress Summary */}
      <div className="brain-progress-summary">
        <div className="progress-stat">
          <span className="stat-value">{completedSegments.length}</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="progress-stat">
          <span className="stat-value">{Object.keys(brainSegments).length - completedSegments.length}</span>
          <span className="stat-label">Remaining</span>
        </div>
        <div className="progress-stat">
          <span className="stat-value">
            {Math.round((completedSegments.length / Object.keys(brainSegments).length) * 100)}%
          </span>
          <span className="stat-label">Progress</span>
        </div>
      </div>
    </div>
  );
}