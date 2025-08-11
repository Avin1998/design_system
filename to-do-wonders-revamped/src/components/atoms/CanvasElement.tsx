import React, { useState, useEffect } from 'react';
import { FiX, FiEdit2, FiLink } from 'react-icons/fi';

interface Position {
  x: number;
  y: number;
}

interface CanvasElementData {
  id: string;
  name: string;
  icon: React.ReactNode;
  color?: string;
}

interface CanvasElementProps {
  element: CanvasElementData;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
  onConnect?: (id: string) => void;
  isSelected?: boolean;
  isConnecting?: boolean;
  onSelect?: (id: string) => void;
  position: Position;
  onPositionChange?: (id: string, position: Position) => void;
  className?: string;
}

export default function CanvasElement({
  element,
  onDelete,
  onEdit,
  onConnect,
  isSelected = false,
  isConnecting = false,
  onSelect,
  position,
  onPositionChange,
  className = ''
}: CanvasElementProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.element-actions')) return;
    
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    onSelect?.(element.id);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
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

  useEffect(() => {
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
      className={`
        absolute flex flex-col items-center p-4 min-w-[100px] z-10 select-none cursor-move
        bg-white/8 border-2 border-white/20 rounded-xl transition-all duration-300
        hover:bg-white/12 hover:shadow-xl hover:-translate-y-0.5
        ${isSelected ? 'border-blue-400 shadow-lg shadow-blue-400/30 z-20' : ''}
        ${isConnecting ? 'border-yellow-400 shadow-lg shadow-yellow-400/50 animate-pulse' : ''}
        ${className}
      `}
      style={{
        left: position.x,
        top: position.y,
        borderColor: isSelected ? element.color || '#4f9cf9' : undefined
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="text-3xl mb-2 drop-shadow-md">
        {element.icon}
      </div>
      <div className="text-xs font-semibold text-gray-200 text-center leading-tight max-w-20 break-words">
        {element.name}
      </div>
      
      {isSelected && (
        <div className="element-actions absolute -top-3 -right-3 flex gap-1 opacity-100 translate-y-0">
          <button 
            className="w-6 h-6 bg-white/90 hover:bg-white text-gray-700 rounded-full flex items-center justify-center text-xs transition-all hover:scale-110"
            onClick={() => onConnect?.(element.id)}
            title="Connect"
          >
            <FiLink />
          </button>
          <button 
            className="w-6 h-6 bg-white/90 hover:bg-white text-gray-700 rounded-full flex items-center justify-center text-xs transition-all hover:scale-110"
            onClick={() => onEdit?.(element.id)}
            title="Edit"
          >
            <FiEdit2 />
          </button>
          <button 
            className="w-6 h-6 bg-red-500/90 hover:bg-red-500 text-white rounded-full flex items-center justify-center text-xs transition-all hover:scale-110"
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