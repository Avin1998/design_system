import React, { useState, useRef } from 'react';
import CanvasElement from '../atoms/CanvasElement';
import ConnectionLine from '../atoms/ConnectionLine';

interface Position {
  x: number;
  y: number;
}

interface CanvasElementData {
  id: string;
  name: string;
  icon: string;
  category: string;
  position: Position;
  color?: string;
}

interface Connection {
  id: string;
  from: string;
  to: string;
  fromPosition: Position;
  toPosition: Position;
}

interface DesignCanvasProps {
  elements?: CanvasElementData[];
  connections?: Connection[];
  onElementAdd?: (element: CanvasElementData) => void;
  onElementDelete?: (elementId: string) => void;
  onElementEdit?: (elementId: string) => void;
  onElementMove?: (elementId: string, newPosition: Position) => void;
  onConnectionAdd?: (connection: Connection) => void;
  onConnectionDelete?: (connectionId: string) => void;
  className?: string;
}

const DesignCanvas: React.FC<DesignCanvasProps> = ({
  elements = [],
  connections = [],
  onElementAdd,
  onElementDelete,
  onElementEdit,
  onElementMove,
  onConnectionAdd,
  className = ''
}) => {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [selectedConnection, setSelectedConnection] = useState<string | null>(null);
  const [dragOverPosition, setDragOverPosition] = useState<Position | null>(null);
  const [connectingFrom, setConnectingFrom] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      setDragOverPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    // Only clear if leaving the canvas entirely
    if (canvasRef.current && !canvasRef.current.contains(e.relatedTarget as Node)) {
      setDragOverPosition(null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOverPosition(null);
    
    try {
      const componentData = JSON.parse(e.dataTransfer.getData('application/json'));
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        
        const position = {
          x: e.clientX - rect.left - 50, // Center the component
          y: e.clientY - rect.top - 50
        };

        const newElement: CanvasElementData = {
          id: `${componentData.id}_${Date.now()}`,
          ...componentData,
          position
        };

        onElementAdd?.(newElement);
      }
    } catch (error) {
      console.error('Failed to parse dropped component data:', error);
    }
  };

  const handleCanvasClick = (e: React.MouseEvent) => {
    // Deselect if clicking on empty canvas
    if (e.target === canvasRef.current) {
      setSelectedElement(null);
      setSelectedConnection(null);
      setIsConnecting(false);
      setConnectingFrom(null);
    }
  };

  const handleElementSelect = (elementId: string) => {
    setSelectedElement(elementId);
    setSelectedConnection(null);
    
    // Handle connection creation
    if (isConnecting && connectingFrom && connectingFrom !== elementId) {
      const fromElement = elements.find(el => el.id === connectingFrom);
      const toElement = elements.find(el => el.id === elementId);
      
      if (fromElement && toElement) {
        const connection: Connection = {
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

  const handleElementConnect = (elementId: string) => {
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

  const handleElementMove = (elementId: string, newPosition: Position) => {
    onElementMove?.(elementId, newPosition);
    
    // Update connection positions for this element
    // This would typically be handled by the parent component
  };

  const handleElementDelete = (elementId: string) => {
    onElementDelete?.(elementId);
    setSelectedElement(null);
  };

  return (
    <div 
      ref={canvasRef}
      className={`relative w-full h-full bg-gray-900 border border-white/10 rounded-lg overflow-hidden cursor-default ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleCanvasClick}
    >
      {/* Grid background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* Drop indicator */}
      {dragOverPosition && (
        <div
          className="absolute w-24 h-24 border-2 border-dashed border-blue-400 rounded-xl bg-blue-400/10 pointer-events-none z-10 animate-pulse"
          style={{
            left: dragOverPosition.x - 48,
            top: dragOverPosition.y - 48
          }}
        />
      )}

      {/* Canvas instructions */}
      {elements.length === 0 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-400 pointer-events-none">
          <div className="text-lg font-medium mb-2">Drag components from the palette</div>
          <div className="text-sm opacity-75">to start designing your system architecture</div>
        </div>
      )}

      {/* Connections */}
      {connections.map(connection => (
        <ConnectionLine
          key={connection.id}
          startPos={connection.fromPosition}
          endPos={connection.toPosition}
          className={selectedConnection === connection.id ? 'selected' : ''}
        />
      ))}

      {/* Elements */}
      {elements.map(element => (
        <CanvasElement
          key={element.id}
          element={element}
          position={element.position}
          isSelected={selectedElement === element.id}
          isConnecting={isConnecting && connectingFrom === element.id}
          onSelect={() => handleElementSelect(element.id)}
          onConnect={() => handleElementConnect(element.id)}
          onPositionChange={(id, newPosition) => handleElementMove(id, newPosition)}
          onDelete={() => handleElementDelete(element.id)}
          onEdit={() => onElementEdit?.(element.id)}
        />
      ))}
    </div>
  );
};

export default DesignCanvas;