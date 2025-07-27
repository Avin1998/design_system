import React, { useState } from 'react';
import Icon from '../components/atoms/Icon';
import Badge from '../components/atoms/Badge';
import Rating from '../components/atoms/Rating';
import Button from '../components/atoms/Button';
import MetricsCard from '../components/molecules/MetricsCard';
import './ComponentShowcase.css';

export default function ComponentShowcase() {
  const [activeDemo, setActiveDemo] = useState('atoms');

  const demos = {
    atoms: {
      title: 'Atomic Components',
      components: [
        {
          name: 'Icons',
          demo: (
            <div className="demo-section">
              <h4>Icons with Hover Effects</h4>
              <div className="icon-grid">
                <Icon name="FaHome" size={24} />
                <Icon name="FaCode" size={24} />
                <Icon name="FaStar" size={24} />
                <Icon name="FaFire" size={24} />
                <Icon name="FaBell" size={24} />
                <Icon name="FaUser" size={24} />
              </div>
            </div>
          )
        },
        {
          name: 'Badges',
          demo: (
            <div className="demo-section">
              <h4>Badges with Variants</h4>
              <div className="badge-grid">
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="default">Default</Badge>
                <Badge variant="success" glow>With Glow</Badge>
              </div>
            </div>
          )
        },
        {
          name: 'Ratings',
          demo: (
            <div className="demo-section">
              <h4>Star Ratings</h4>
              <div className="rating-grid">
                <div className="rating-item">
                  <span>Medium (4/5):</span>
                  <Rating value={4} difficulty="medium" />
                </div>
                <div className="rating-item">
                  <span>Hard (5/5):</span>
                  <Rating value={5} difficulty="hard" />
                </div>
                <div className="rating-item">
                  <span>Achieved (3/5):</span>
                  <Rating value={3} difficulty="medium" achieved />
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    molecules: {
      title: 'Molecular Components',
      components: [
        {
          name: 'Metrics Cards',
          demo: (
            <div className="demo-section">
              <h4>Metrics with Trends</h4>
              <div className="metrics-demo-grid">
                <MetricsCard
                  title="Problems Solved"
                  value="24"
                  icon="FaCheckCircle"
                  color="#0066ff"
                  trend={{ direction: 'up', value: '+3 today' }}
                />
                <MetricsCard
                  title="Streak"
                  value="15 days"
                  icon="FaFire"
                  color="#ff9800"
                />
                <MetricsCard
                  title="Success Rate"
                  value="85%"
                  icon="FaPercentage"
                  color="#ffd966"
                  trend={{ direction: 'down', value: '-2%' }}
                />
              </div>
            </div>
          )
        }
      ]
    },
    animations: {
      title: 'Premium Animations',
      components: [
        {
          name: 'Hover Effects',
          demo: (
            <div className="demo-section">
              <h4>Interactive Elements</h4>
              <div className="animation-demo">
                <Button variant="primary" className="pulse-btn">
                  Pulse Effect
                </Button>
                <div className="glow-card">
                  <Icon name="FaStar" size={32} className="rotating-icon" />
                  <span>Rotating Glow</span>
                </div>
                <div className="bounce-card">
                  <Icon name="FaTrophy" size={28} />
                  <span>Achievement Bounce</span>
                </div>
              </div>
            </div>
          )
        }
      ]
    }
  };

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
            {component.demo}
          </div>
        ))}
      </div>
    </div>
  );
}