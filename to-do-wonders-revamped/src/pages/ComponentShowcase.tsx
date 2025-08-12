import { useState } from 'react';
import { 
  Icon, 
  Badge, 
  Button 
} from '../components/atoms';
import { 
  MetricsCard
} from '../components/molecules';

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
              <h4 className="text-white text-lg font-semibold mb-4">Icons with Hover Effects</h4>
              <div className="flex gap-4">
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
              <h4 className="text-white text-lg font-semibold mb-4">Badges with Variants</h4>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="default">Default</Badge>
                <Badge variant="success" className="animate-pulse">With Glow</Badge>
              </div>
            </div>
          )
        },
        {
          name: 'Ratings',
          demo: (
            <div className="demo-section">
              <h4 className="text-white text-lg font-semibold mb-4">Star Ratings</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-300">Medium (4/5):</span>
                  <div className="flex gap-1">
                    <Icon name="FaStar" className="text-yellow-400" />
                    <Icon name="FaStar" className="text-yellow-400" />
                    <Icon name="FaStar" className="text-yellow-400" />
                    <Icon name="FaStar" className="text-yellow-400" />
                    <Icon name="FaStar" className="text-gray-400" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-300">Hard (5/5):</span>
                  <div className="flex gap-1">
                    <Icon name="FaStar" className="text-red-400" />
                    <Icon name="FaStar" className="text-red-400" />
                    <Icon name="FaStar" className="text-red-400" />
                    <Icon name="FaStar" className="text-red-400" />
                    <Icon name="FaStar" className="text-red-400" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-300">Achieved (3/5):</span>
                  <div className="flex gap-1">
                    <Icon name="FaStar" className="text-green-400" />
                    <Icon name="FaStar" className="text-green-400" />
                    <Icon name="FaStar" className="text-green-400" />
                    <Icon name="FaStar" className="text-gray-400" />
                    <Icon name="FaStar" className="text-gray-400" />
                  </div>
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
              <h4 className="text-white text-lg font-semibold mb-4">Metrics with Trends</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <h4 className="text-white text-lg font-semibold mb-4">Interactive Elements</h4>
              <div className="flex gap-6 items-center">
                <Button variant="primary" className="animate-pulse">
                  Pulse Effect
                </Button>
                <div className="flex items-center gap-2 p-4 bg-gray-800 rounded-lg border border-gray-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                  <Icon name="FaStar" size={32} className="text-yellow-400 animate-spin" />
                  <span className="text-white">Rotating Glow</span>
                </div>
                <div className="flex items-center gap-2 p-4 bg-gray-800 rounded-lg border border-gray-600 hover:animate-bounce">
                  <Icon name="FaTrophy" size={28} className="text-yellow-400" />
                  <span className="text-white">Achievement Bounce</span>
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Design System Showcase</h1>
        <p className="text-gray-400">Interactive demonstration of all new components</p>
      </div>

      <div className="flex gap-4 mb-8">
        {Object.entries(demos).map(([key, demo]) => (
          <button
            key={key}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeDemo === key 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setActiveDemo(key)}
          >
            {demo.title}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-white">
          {demos[activeDemo as keyof typeof demos].title}
        </h2>
        {demos[activeDemo as keyof typeof demos].components.map((component, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              {component.name}
            </h3>
            {component.demo}
          </div>
        ))}
      </div>
    </div>
  );
}