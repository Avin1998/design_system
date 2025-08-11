import React, { useState, useRef, useEffect } from 'react';

interface DraggableComponentProps {
  children: React.ReactNode;
  onDrag?: (position: { x: number; y: number }) => void;
  initialPosition?: { x: number; y: number };
  className?: string;
  disabled?: boolean;
}

export default function DraggableComponent({
  children,
  onDrag,
  initialPosition = { x: 0, y: 0 },
  className = '',
  disabled = false
}: DraggableComponentProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (disabled) return;
    
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || disabled) return;
    
    const newPosition = {
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    };
    
    setPosition(newPosition);
    onDrag?.(newPosition);
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
      ref={elementRef}
      className={`
        absolute select-none transition-transform
        ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-move'}
        ${isDragging ? 'z-50 scale-105' : 'z-10'}
        ${className}
      `}
      style={{
        left: position.x,
        top: position.y,
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
}