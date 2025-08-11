import React from 'react';
import type { CanvasComponent } from '../../data/canvasComponents';

interface PaletteItemProps {
  component: CanvasComponent;
  className?: string;
  onDragStart?: (component: CanvasComponent, e: React.DragEvent) => void;
}

const PaletteItem: React.FC<PaletteItemProps> = ({ 
  component, 
  onDragStart, 
  className = '' 
}) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('application/json', JSON.stringify(component));
    e.dataTransfer.effectAllowed = 'copy';
    if (onDragStart) {
      onDragStart(component, e);
    }
  };

  return (
    <div
      className={`cursor-grab active:cursor-grabbing p-3 border border-white/20 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group ${className}`}
      draggable
      onDragStart={handleDragStart}
      style={{ borderColor: component.color }}
    >
      <div className="text-2xl mb-2 text-center group-hover:scale-110 transition-transform duration-300">
        {component.icon}
      </div>
      <div className="text-xs text-center text-gray-300 font-medium leading-tight">
        {component.name}
      </div>
      <div className="text-xs text-center text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {component.description}
      </div>
    </div>
  );
};

export default PaletteItem;