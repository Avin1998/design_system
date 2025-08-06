import React, { useState } from 'react';
import { FiX, FiEdit2, FiLink } from 'react-icons/fi';
import './CanvasElement.css';

export default function CanvasElement({ 
  element, 
  onDelete, 
  onEdit, 
  onConnect,
  isSelected,
  isConnecting = false,
  onSelect,
  position,
  onPositionChange,
  className = ''
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (e.target.closest('.element-actions')) return;
    
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    onSelect?.(element.id);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const newPosition = {
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    };
    
    onPositionChange?.(element.id, newPosition);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  return (
    <div
      className={`canvas-element ${isSelected ? 'selected' : ''} ${isConnecting ? 'connecting' : ''} ${className}`}
      style={{
        left: position.x,
        top: position.y,
        '--element-color': element.color
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="element-icon">
        {element.icon}
      </div>
      <div className="element-label">
        {element.name}
      </div>
      
      {isSelected && (
        <div className="element-actions">
          <button 
            className="element-action"
            onClick={() => onConnect?.(element.id)}
            title="Connect"
          >
            <FiLink />
          </button>
          <button 
            className="element-action"
            onClick={() => onEdit?.(element.id)}
            title="Edit"
          >
            <FiEdit2 />
          </button>
          <button 
            className="element-action delete"
            onClick={() => onDelete?.(element.id)}
            title="Delete"
          >
            <FiX />
          </button>
        </div>
      )}
    </div>
  );
}