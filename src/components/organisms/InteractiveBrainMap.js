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

          {/* Brain Base Shape */}
          <path
            d="M20,15 Q60,5 100,20 Q110,40 100,60 Q100,80 80,85 Q60,90 40,85 Q20,80 15,60 Q10,40 20,15 Z"
            fill="url(#brainGradient)"
            stroke="rgba(79, 156, 249, 0.3)"
            strokeWidth="1"
            className="brain-base"
          />

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

          {/* Neural connections (decorative) */}
          <g className="neural-connections" opacity="0.3">
            <line 
              x1="45" y1="35" x2="65" y2="40"
              stroke="#4f9cf9" 
              strokeWidth="1"
              strokeDasharray="2,2"
              className="neural-line"
            />
            <line 
              x1="50" y1="65" x2="70" y2="65"
              stroke="#4f9cf9" 
              strokeWidth="1"
              strokeDasharray="2,2"
              className="neural-line"
            />
            <line 
              x1="45" y1="45" x2="55" y2="60"
              stroke="#4f9cf9" 
              strokeWidth="1"
              strokeDasharray="2,2"
              className="neural-line"
            />
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