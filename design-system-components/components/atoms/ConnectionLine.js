import React from 'react';
import './ConnectionLine.css';

export default function ConnectionLine({ 
  from, 
  to, 
  id,
  isSelected = false,
  onSelect,
  onDelete,
  label = '',
  className = '' 
}) {
  // Calculate line coordinates and arrow positioning
  const calculatePath = () => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Create a curved path for better visual appeal
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    
    // Control points for bezier curve
    const controlOffset = Math.min(50, distance * 0.3);
    const control1X = from.x + (dx > 0 ? controlOffset : -controlOffset);
    const control1Y = from.y;
    const control2X = to.x - (dx > 0 ? controlOffset : -controlOffset);
    const control2Y = to.y;
    
    return `M ${from.x} ${from.y} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${to.x} ${to.y}`;
  };

  // Calculate arrow position and rotation
  const calculateArrow = () => {
    const angle = Math.atan2(to.y - from.y, to.x - from.x);
    const arrowLength = 10;
    const arrowX = to.x - Math.cos(angle) * arrowLength;
    const arrowY = to.y - Math.sin(angle) * arrowLength;
    
    return {
      x: arrowX,
      y: arrowY,
      rotation: (angle * 180) / Math.PI
    };
  };

  const handleClick = (e) => {
    e.stopPropagation();
    onSelect?.(id);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete?.(id);
  };

  const path = calculatePath();
  const arrow = calculateArrow();

  return (
    <g className={`connection-line ${isSelected ? 'selected' : ''} ${className}`}>
      {/* Main connection path */}
      <path
        d={path}
        className="connection-path"
        onClick={handleClick}
        strokeWidth="2"
        stroke="rgba(79, 156, 249, 0.8)"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      
      {/* Invisible wider path for easier clicking */}
      <path
        d={path}
        className="connection-clickable"
        onClick={handleClick}
        strokeWidth="12"
        stroke="transparent"
        fill="none"
      />
      
      {/* Arrow marker */}
      <polygon
        points="0,-5 10,0 0,5"
        fill="rgba(79, 156, 249, 0.8)"
        transform={`translate(${arrow.x}, ${arrow.y}) rotate(${arrow.rotation})`}
      />
      
      {/* Connection label */}
      {label && (
        <text
          x={(from.x + to.x) / 2}
          y={(from.y + to.y) / 2 - 10}
          className="connection-label"
          textAnchor="middle"
          onClick={handleClick}
        >
          {label}
        </text>
      )}
      
      {/* Delete button when selected */}
      {isSelected && (
        <circle
          cx={(from.x + to.x) / 2}
          cy={(from.y + to.y) / 2}
          r="8"
          className="connection-delete-btn"
          onClick={handleDelete}
        />
      )}
      
      {isSelected && (
        <text
          x={(from.x + to.x) / 2}
          y={(from.y + to.y) / 2 + 3}
          className="connection-delete-text"
          textAnchor="middle"
          onClick={handleDelete}
        >
          ×
        </text>
      )}
    </g>
  );
}