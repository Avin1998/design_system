import React, { useState } from 'react';
import DraggableComponent from '../atoms/DraggableComponent';
import { canvasComponents, componentCategories } from '../../data/canvasComponents';

export default function ComponentPalette({ className = '' }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredComponents = canvasComponents.filter(component => {
    const matchesCategory = selectedCategory === 'All' || component.category === selectedCategory;
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`component-palette ${className}`}>
      <div className="palette-header">
        <h3 className="palette-title">Components</h3>
        <input
          type="text"
          placeholder="Search components..."
          className="palette-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="category-tabs">
        <button
          className={`category-tab ${selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        {componentCategories.map(category => (
          <button
            key={category.id}
            className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
            style={{ '--category-color': category.color }}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="components-grid">
        {filteredComponents.map(component => (
          <DraggableComponent
            key={component.id}
            component={component}
            className="palette-component"
          />
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <div className="no-components">
          No components found matching your criteria.
        </div>
      )}
    </div>
  );
}