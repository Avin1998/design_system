import React, { useState, useRef } from 'react';
import CanvasElement from '../atoms/CanvasElement';
import './DesignCanvas.css';

export default function DesignCanvas({ 
  elements = [], 
  onElementAdd, 
  onElementDelete, 
  onElementEdit,
  onElementConnect,
  onElementMove,
  className = '' 
}) {
  const [selectedElement, setSelectedElement] = useState(null);
  const [dragOverPosition, setDragOverPosition] = useState(null);
  const canvasRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    
    const rect = canvasRef.current.getBoundingClientRect();
    setDragOverPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleDragLeave = (e) => {
    // Only clear if leaving the canvas entirely
    if (!canvasRef.current.contains(e.relatedTarget)) {
      setDragOverPosition(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOverPosition(null);
    
    try {
      const componentData = JSON.parse(e.dataTransfer.getData('application/json'));
      const rect = canvasRef.current.getBoundingClientRect();
      
      const position = {
        x: e.clientX - rect.left - 50, // Center the component
        y: e.clientY - rect.top - 50
      };

      const newElement = {
        id: `${componentData.id}_${Date.now()}`,
        ...componentData,
        position
      };

      onElementAdd?.(newElement);
    } catch (error) {
      console.error('Failed to parse dropped component data:', error);
    }
  };

  const handleCanvasClick = (e) => {
    // Deselect if clicking on empty canvas
    if (e.target === canvasRef.current) {
      setSelectedElement(null);
    }
  };

  const handleElementSelect = (elementId) => {
    setSelectedElement(elementId);
  };

  const handleElementPositionChange = (elementId, newPosition) => {
    onElementMove?.(elementId, newPosition);
  };

  return (
    <div 
      ref={canvasRef}
      className={`design-canvas ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleCanvasClick}
    >
      {/* Grid pattern */}
      <div className="canvas-grid" />
      
      {/* Drop indicator */}
      {dragOverPosition && (
        <div 
          className="drop-indicator"
          style={{
            left: dragOverPosition.x - 50,
            top: dragOverPosition.y - 50
          }}
        />
      )}

      {/* Canvas elements */}
      {elements.map(element => (
        <CanvasElement
          key={element.id}
          element={element}
          position={element.position}
          isSelected={selectedElement === element.id}
          onSelect={handleElementSelect}
          onDelete={onElementDelete}
          onEdit={onElementEdit}
          onConnect={onElementConnect}
          onPositionChange={handleElementPositionChange}
        />
      ))}

      {/* Canvas instructions */}
      {elements.length === 0 && (
        <div className="canvas-instructions">
          <div className="instructions-icon">🎨</div>
          <h3>Start Building Your System</h3>
          <p>Drag and drop components from the palette to design your architecture</p>
        </div>
      )}
    </div>
  );
}