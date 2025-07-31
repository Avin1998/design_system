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

          {/* =================================================================
              BRAIN SVG SECTION - EASILY REPLACEABLE
              =================================================================
              This section contains the brain visualization SVG.
              To replace with a custom brain SVG:
              1. Replace the entire <g className="brain-base"> section below
              2. Update brainSegments.js with new svgPath coordinates
              3. Adjust neural connections if needed
              ================================================================= */}
          
          {/* Anatomically Accurate Brain with Four Distinct Lobes */}
          <g className="brain-base">
            {/* Main brain outline - more realistic brain shape */}
            <path
              d="M25,35 Q30,20 45,22 Q55,18 70,20 Q85,22 90,35 Q95,45 90,55 Q85,65 75,70 Q65,75 55,72 Q45,75 35,70 Q25,65 20,55 Q15,45 25,35 Z"
              fill="url(#brainGradient)"
              stroke="rgba(79, 156, 249, 0.15)"
              strokeWidth="1"
              className="brain-outline"
            />
            
            {/* Frontal Lobe - front part of brain (planning, decision making) */}
            <path
              d="M25,35 Q35,25 45,28 Q50,30 47,38 Q40,42 30,40 Q23,38 25,35 Z"
              fill="rgba(79, 156, 249, 0.1)"
              stroke="rgba(79, 156, 249, 0.3)"
              strokeWidth="0.5"
              className="frontal-lobe"
            />
            
            {/* Parietal Lobe - top-back part (processing, integration) */}
            <path
              d="M50,25 Q65,22 75,30 Q80,38 73,43 Q65,46 57,43 Q50,40 47,35 Q50,30 50,25 Z"
              fill="rgba(79, 156, 249, 0.1)"
              stroke="rgba(79, 156, 249, 0.3)"
              strokeWidth="0.5"
              className="parietal-lobe"
            />
            
            {/* Temporal Lobe - side part (memory, processing) */}
            <path
              d="M30,45 Q40,48 47,52 Q50,58 45,62 Q37,65 30,62 Q23,58 25,52 Q27,48 30,45 Z"
              fill="rgba(79, 156, 249, 0.1)"
              stroke="rgba(79, 156, 249, 0.3)"
              strokeWidth="0.5"
              className="temporal-lobe"
            />
            
            {/* Occipital Lobe - back part (visual processing) */}
            <path
              d="M57,50 Q70,48 77,55 Q80,62 73,68 Q65,70 60,67 Q53,62 55,55 Q57,50 57,50 Z"
              fill="rgba(79, 156, 249, 0.1)"
              stroke="rgba(79, 156, 249, 0.3)"
              strokeWidth="0.5"
              className="occipital-lobe"
            />
            
            {/* Brain stem */}
            <path
              d="M55,72 Q58,78 60,82 Q62,85 60,87 Q58,89 55,87 Q52,85 54,82 Q55,78 55,72 Z"
              fill="url(#brainGradient)"
              stroke="rgba(79, 156, 249, 0.15)"
              strokeWidth="1"
              className="brain-stem"
            />
            
            {/* Cerebellum */}
            <path
              d="M35,62 Q45,67 55,62 Q60,65 55,69 Q45,72 35,69 Q30,65 35,62 Z"
              fill="url(#brainGradient)"
              stroke="rgba(79, 156, 249, 0.15)"
              strokeWidth="1"
              className="cerebellum"
            />
            
            {/* Brain sulci/folds for anatomical detail */}
            <path
              d="M30,35 Q40,37 50,35"
              fill="none"
              stroke="rgba(79, 156, 249, 0.3)"
              strokeWidth="0.5"
              className="brain-fold"
            />
            <path
              d="M40,50 Q50,52 60,50"
              fill="none"
              stroke="rgba(79, 156, 249, 0.3)"
              strokeWidth="0.5"
              className="brain-fold"
            />
            <path
              d="M35,45 Q45,47 55,45"
              fill="none"
              stroke="rgba(79, 156, 249, 0.3)"
              strokeWidth="0.5"
              className="brain-fold"
            />
            
            {/* Central sulcus (divides frontal and parietal) */}
            <path
              d="M47,30 Q48,40 50,50"
              fill="none"
              stroke="rgba(79, 156, 249, 0.4)"
              strokeWidth="0.8"
              className="central-sulcus"
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

          {/* Neural connections (anatomically inspired) - More realistic pathways */}
          <g className="neural-connections" opacity="0.4">
            {/* Connections between brain regions following neural pathways */}
            
            {/* Frontal to Parietal connection */}
            <line 
              x1="40" y1="35" x2="58" y2="38"
              stroke="#4f9cf9" 
              strokeWidth="1"
              strokeDasharray="3,2"
              className="neural-line"
            />
            
            {/* Parietal to Occipital connection */}
            <line 
              x1="65" y1="45" x2="68" y2="58"
              stroke="#4f9cf9" 
              strokeWidth="1"
              strokeDasharray="3,2"
              className="neural-line"
            />
            
            {/* Frontal to Temporal connection */}
            <line 
              x1="35" y1="42" x2="38" y2="50"
              stroke="#4f9cf9" 
              strokeWidth="1"
              strokeDasharray="2,3"
              className="neural-line"
            />
            
            {/* Temporal to Occipital connection */}
            <line 
              x1="45" y1="55" x2="62" y2="58"
              stroke="#4f9cf9" 
              strokeWidth="1"
              strokeDasharray="2,3"
              className="neural-line"
            />
            
            {/* Central connection (corpus callosum representation) */}
            <line 
              x1="47" y1="35" x2="50" y2="50"
              stroke="#4f9cf9" 
              strokeWidth="1.5"
              strokeDasharray="4,2"
              className="neural-line major-connection"
            />
            
            {/* Neural nodes at key connection points */}
            <circle cx="40" cy="35" r="1.5" fill="#66b3ff" opacity="0.8" className="neural-node" />
            <circle cx="58" cy="38" r="1.5" fill="#66b3ff" opacity="0.8" className="neural-node" />
            <circle cx="38" cy="50" r="1.5" fill="#66b3ff" opacity="0.8" className="neural-node" />
            <circle cx="62" cy="58" r="1.5" fill="#66b3ff" opacity="0.8" className="neural-node" />
            <circle cx="48" cy="42" r="2" fill="#66b3ff" opacity="0.9" className="neural-node major-node" />
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