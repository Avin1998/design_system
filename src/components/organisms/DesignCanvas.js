import React, { useState, useRef, useEffect } from 'react';
import CanvasElement from '../atoms/CanvasElement';
import ConnectionLine from '../atoms/ConnectionLine';
import './DesignCanvas.css';

export default function DesignCanvas({ 
  elements = [], 
  connections = [],
  onElementAdd, 
  onElementDelete, 
  onElementEdit,
  onElementConnect,
  onElementMove,
  onConnectionAdd,
  onConnectionDelete,
  className = '' 
}) {
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedConnection, setSelectedConnection] = useState(null);
  const [dragOverPosition, setDragOverPosition] = useState(null);
  const [connectingFrom, setConnectingFrom] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [copiedElement, setCopiedElement] = useState(null);
  const canvasRef = useRef(null);

  // Keyboard shortcuts for copy/paste
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only handle shortcuts when canvas is focused or element is selected
      if (!selectedElement && !document.activeElement?.closest('.design-canvas')) return;
      
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'c':
            e.preventDefault();
            handleCopyElement();
            break;
          case 'v':
            e.preventDefault();
            handlePasteElement();
            break;
          case 'd':
            e.preventDefault();
            handleDuplicateElement();
            break;
        }
      }
      
      if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault();
        if (selectedElement) {
          onElementDelete?.(selectedElement);
          setSelectedElement(null);
        } else if (selectedConnection) {
          onConnectionDelete?.(selectedConnection);
          setSelectedConnection(null);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedElement, selectedConnection, onElementDelete, onConnectionDelete]);

  const handleCopyElement = () => {
    if (selectedElement) {
      const element = elements.find(el => el.id === selectedElement);
      if (element) {
        setCopiedElement(element);
      }
    }
  };

  const handlePasteElement = () => {
    if (copiedElement) {
      const newElement = {
        ...copiedElement,
        id: `${copiedElement.id.split('_')[0]}_${Date.now()}`,
        position: {
          x: copiedElement.position.x + 20,
          y: copiedElement.position.y + 20
        }
      };
      onElementAdd?.(newElement);
      setSelectedElement(newElement.id);
    }
  };

  const handleDuplicateElement = () => {
    if (selectedElement) {
      const element = elements.find(el => el.id === selectedElement);
      if (element) {
        const newElement = {
          ...element,
          id: `${element.id.split('_')[0]}_${Date.now()}`,
          position: {
            x: element.position.x + 20,
            y: element.position.y + 20
          }
        };
        onElementAdd?.(newElement);
        setSelectedElement(newElement.id);
      }
    }
  };

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
      setSelectedConnection(null);
      setIsConnecting(false);
      setConnectingFrom(null);
    }
  };

  const handleElementSelect = (elementId) => {
    setSelectedElement(elementId);
    setSelectedConnection(null);
    
    // Handle connection creation
    if (isConnecting && connectingFrom && connectingFrom !== elementId) {
      const fromElement = elements.find(el => el.id === connectingFrom);
      const toElement = elements.find(el => el.id === elementId);
      
      if (fromElement && toElement) {
        const connection = {
          id: `connection_${Date.now()}`,
          from: connectingFrom,
          to: elementId,
          fromPosition: {
            x: fromElement.position.x + 50, // Center of element
            y: fromElement.position.y + 50
          },
          toPosition: {
            x: toElement.position.x + 50,
            y: toElement.position.y + 50
          }
        };
        
        onConnectionAdd?.(connection);
      }
      
      setIsConnecting(false);
      setConnectingFrom(null);
    }
  };

  const handleElementConnect = (elementId) => {
    if (isConnecting && connectingFrom === elementId) {
      // Cancel connection
      setIsConnecting(false);
      setConnectingFrom(null);
    } else {
      // Start connection
      setIsConnecting(true);
      setConnectingFrom(elementId);
    }
  };

  const handleElementPositionChange = (elementId, newPosition) => {
    onElementMove?.(elementId, newPosition);
  };

  const handleConnectionSelect = (connectionId) => {
    setSelectedConnection(connectionId);
    setSelectedElement(null);
  };

  const handleConnectionDelete = (connectionId) => {
    onConnectionDelete?.(connectionId);
    setSelectedConnection(null);
  };

  // Calculate connection positions based on current element positions
  const getConnectionsWithPositions = () => {
    return connections.map(connection => {
      const fromElement = elements.find(el => el.id === connection.from);
      const toElement = elements.find(el => el.id === connection.to);
      
      if (!fromElement || !toElement) return null;
      
      return {
        ...connection,
        fromPosition: {
          x: fromElement.position.x + 50, // Center of element
          y: fromElement.position.y + 50
        },
        toPosition: {
          x: toElement.position.x + 50,
          y: toElement.position.y + 50
        }
      };
    }).filter(Boolean);
  };

  return (
    <div 
      ref={canvasRef}
      className={`design-canvas ${className} ${isConnecting ? 'connecting-mode' : ''}`}
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

      {/* SVG layer for connections */}
      <svg className="connections-layer" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="rgba(79, 156, 249, 0.8)"
            />
          </marker>
        </defs>
        
        {getConnectionsWithPositions().map(connection => (
          <ConnectionLine
            key={connection.id}
            id={connection.id}
            from={connection.fromPosition}
            to={connection.toPosition}
            isSelected={selectedConnection === connection.id}
            onSelect={handleConnectionSelect}
            onDelete={handleConnectionDelete}
            label={connection.label}
          />
        ))}
      </svg>

      {/* Canvas elements */}
      {elements.map(element => (
        <CanvasElement
          key={element.id}
          element={element}
          position={element.position}
          isSelected={selectedElement === element.id}
          isConnecting={isConnecting && connectingFrom === element.id}
          onSelect={handleElementSelect}
          onDelete={onElementDelete}
          onEdit={onElementEdit}
          onConnect={handleElementConnect}
          onPositionChange={handleElementPositionChange}
        />
      ))}

      {/* Canvas instructions */}
      {elements.length === 0 && (
        <div className="canvas-instructions">
          <div className="instructions-icon">🎨</div>
          <h3>Start Building Your System</h3>
          <p>Drag and drop components from the palette to design your architecture</p>
          <p>Select elements and click connect to link them together</p>
        </div>
      )}

      {/* Connection mode indicator */}
      {isConnecting && (
        <div className="connection-indicator">
          <p>Click on another element to create a connection</p>
          <p>Click on the same element again to cancel</p>
        </div>
      )}
    </div>
  );
}