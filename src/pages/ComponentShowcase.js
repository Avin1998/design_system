import React, { useState } from 'react';
import DemoRenderer from '../components/molecules/DemoRenderer';
import './ComponentShowcase.css';

export default function ComponentShowcase({ demos }) {
  const [activeDemo, setActiveDemo] = useState('atoms');

  return (
    <div className="component-showcase">
      <div className="showcase-header">
        <h1>Design System Showcase</h1>
        <p>Interactive demonstration of all new components</p>
      </div>

      <div className="showcase-nav">
        {Object.entries(demos).map(([key, demo]) => (
          <button
            key={key}
            className={`nav-tab ${activeDemo === key ? 'active' : ''}`}
            onClick={() => setActiveDemo(key)}
          >
            {demo.title}
          </button>
        ))}
      </div>

      <div className="showcase-content">
        <h2>{demos[activeDemo].title}</h2>
        {demos[activeDemo].components.map((component, index) => (
          <div key={index} className="component-demo">
            <h3>{component.name}</h3>
            <DemoRenderer demo={component.demo} />
          </div>
        ))}
      </div>
    </div>
  );
}