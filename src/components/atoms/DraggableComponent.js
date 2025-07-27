import React from 'react';
import './DraggableComponent.css';

export default function DraggableComponent({ 
  component, 
  onDragStart, 
  className = '',
  style = {},
  children 
}) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('application/json', JSON.stringify(component));
    e.dataTransfer.effectAllowed = 'copy';
    if (onDragStart) {
      onDragStart(component, e);
    }
  };

  return (
    <div
      className={`draggable-component ${className}`}
      draggable
      onDragStart={handleDragStart}
      style={{
        '--component-color': component.color,
        ...style
      }}
    >
      <div className="component-icon">
        {component.icon}
      </div>
      <div className="component-label">
        {component.name}
      </div>
      {children}
    </div>
  );
}