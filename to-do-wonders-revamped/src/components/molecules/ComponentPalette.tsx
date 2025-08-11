import React, { useState } from 'react';
import PaletteItem from '../atoms/PaletteItem';
import { canvasComponents, componentCategories } from '../../data/canvasComponents';
import type { CanvasComponent, ComponentCategory } from '../../data/canvasComponents';

interface ComponentPaletteProps {
  className?: string;
}

const ComponentPalette: React.FC<ComponentPaletteProps> = ({ className = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredComponents = canvasComponents.filter((component: CanvasComponent) => {
    const matchesCategory = selectedCategory === 'All' || component.category === selectedCategory;
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`bg-white/5 border border-white/10 rounded-xl p-4 h-full flex flex-col overflow-hidden ${className}`}>
      <div className="mb-4">
        <h3 className="text-white text-lg font-semibold mb-3">Components</h3>
        <input
          type="text"
          placeholder="Search components..."
          className="w-full px-3 py-2 border border-white/20 rounded-md bg-white/5 text-white text-sm transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-white/8 placeholder-gray-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-1 mb-4 pb-4 border-b border-white/10">
        <button
          className={`px-3 py-1.5 border border-white/20 rounded-2xl text-xs font-medium cursor-pointer transition-all duration-300 whitespace-nowrap ${
            selectedCategory === 'All' 
              ? 'bg-blue-500 border-blue-500 text-white' 
              : 'bg-white/5 text-gray-300 hover:bg-white/8 hover:border-white/30'
          }`}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        {componentCategories.map((category: ComponentCategory) => (
          <button
            key={category.id}
            className={`px-3 py-1.5 border border-white/20 rounded-2xl text-xs font-medium cursor-pointer transition-all duration-300 whitespace-nowrap ${
              selectedCategory === category.id 
                ? 'text-white border-current' 
                : 'bg-white/5 text-gray-300 hover:bg-white/8 hover:border-white/30'
            }`}
            onClick={() => setSelectedCategory(category.id)}
            style={selectedCategory === category.id ? { backgroundColor: category.color, borderColor: category.color } : {}}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-3 overflow-y-auto flex-1 pr-1">
        {filteredComponents.map((component: CanvasComponent) => (
          <PaletteItem
            key={component.id}
            component={component}
            className="aspect-square"
          />
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <div className="text-center text-gray-400 text-sm py-10 px-5 italic">
          No components found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default ComponentPalette;