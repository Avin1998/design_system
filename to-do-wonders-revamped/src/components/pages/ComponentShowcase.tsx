import { useState } from 'react';
import Icon from '../../components/atoms/Icon';
import Badge from '../../components/atoms/Badge';
import Rating from '../../components/atoms/Rating';
import Button from '../../components/atoms/Button';
import MetricsCard from '../../components/molecules/MetricsCard';
import Modal from '../../components/atoms/Modal';
import ProgressBar from '../../components/atoms/ProgressBar';
import Tooltip from '../../components/atoms/Tooltip';
import InputField from '../../components/atoms/InputField';
import Card from '../../components/molecules/Card';
import '../../styles/pages/ComponentShowcase.css';

export default function ComponentShowcase() {
  const [activeDemo, setActiveDemo] = useState('atoms');
  const [modalOpen, setModalOpen] = useState(false);
  const [formValue, setFormValue] = useState('');

  const demos = {
    atoms: {
      title: 'Atomic Components',
      components: [
        {
          name: 'Icons',
          demo: (
            <div className="demo-section">
              <h4>Icons with Variants</h4>
              <div className="icon-grid">
                <Icon name="brain" size={24} />
                <Icon name="status" size={24} />
                <Icon name="mentor" size={24} />
                <Icon name="hint" size={24} />
                <Icon name="star" size={24} />
                <Icon name="close" size={24} />
              </div>
            </div>
          )
        },
        {
          name: 'Badges',
          demo: (
            <div className="demo-section">
              <h4>Status Badges</h4>
              <div className="badge-grid">
                <Badge status="default">Default</Badge>
                <Badge status="success">Success</Badge>
                <Badge status="warning">Warning</Badge>
                <Badge status="danger">Danger</Badge>
                <Badge status="default" glow>Glow Effect</Badge>
              </div>
            </div>
          )
        },
        {
          name: 'Buttons',
          demo: (
            <div className="demo-section">
              <h4>Button Variants</h4>
              <div className="button-grid">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="minimal">Minimal</Button>
              </div>
            </div>
          )
        },
        {
          name: 'Progress & Rating',
          demo: (
            <div className="demo-section">
              <h4>Progress & Rating Components</h4>
              <div className="progress-rating-grid">
                <div>
                  <p>Progress Bar (75%)</p>
                  <ProgressBar progress={75} showGlow animated />
                </div>
                <div>
                  <p>Difficulty Rating</p>
                  <Rating value={3} difficulty="medium" />
                </div>
                <div>
                  <p>Achieved Rating</p>
                  <Rating value={5} difficulty="hard" achieved />
                </div>
              </div>
            </div>
          )
        },
        {
          name: 'Form Components',
          demo: (
            <div className="demo-section">
              <h4>Form Elements</h4>
              <div className="form-grid">
                <InputField
                  label="Sample Input"
                  value={formValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValue(e.target.value)}
                  placeholder="Type something..."
                  helperText="This is a helper text"
                />
                <Tooltip content="This is a tooltip example" position="top">
                  <Button variant="outline">Hover for Tooltip</Button>
                </Tooltip>
              </div>
            </div>
          )
        },
        {
          name: 'Modal',
          demo: (
            <div className="demo-section">
              <h4>Modal Component</h4>
              <Button variant="primary" onClick={() => setModalOpen(true)}>
                Open Modal
              </Button>
              <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Sample Modal"
                size="medium"
              >
                <p>This is a sample modal content. You can put any content here.</p>
                <div style={{ marginTop: '20px' }}>
                  <Button variant="primary" onClick={() => setModalOpen(false)}>
                    Close Modal
                  </Button>
                </div>
              </Modal>
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
              <h4>Data Visualization Cards</h4>
              <div className="metrics-grid">
                <MetricsCard
                  title="Active Users"
                  value="2,847"
                  icon="status"
                  color="#0066ff"
                  trend={{ direction: 'up', value: '+12%' }}
                />
                <MetricsCard
                  title="Completion Rate"
                  value="78%"
                  icon="star"
                  color="#00c853"
                  trend={{ direction: 'up', value: '+5%' }}
                />
                <MetricsCard
                  title="Average Score"
                  value="4.2"
                  icon="brain"
                  color="#ffd966"
                  trend={{ direction: 'down', value: '-2%' }}
                />
              </div>
            </div>
          )
        },
        {
          name: 'Progress Cards',
          demo: (
            <div className="demo-section">
              <h4>Learning Progress Cards</h4>
              <div className="card-grid">
                <Card
                  title="System Design Basics"
                  description="Learn fundamental concepts of system design"
                  progress={0.7}
                  status="active"
                />
                <Card
                  title="Database Scaling"
                  description="Master database scaling techniques"
                  progress={1.0}
                  status="done"
                />
                <Card
                  title="Microservices"
                  description="Understanding microservice architecture"
                  progress={0.0}
                  status="inactive"
                />
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
        <h1>Design System Components</h1>
        <p>Interactive demonstration of migrated TypeScript components</p>
      </div>

      <div className="showcase-nav">
        {Object.keys(demos).map(key => (
          <Button
            key={key}
            variant={activeDemo === key ? 'primary' : 'outline'}
            onClick={() => setActiveDemo(key)}
          >
            {demos[key as keyof typeof demos].title}
          </Button>
        ))}
      </div>

      <div className="showcase-content">
        <h2>{demos[activeDemo as keyof typeof demos].title}</h2>
        <div className="components-grid">
          {demos[activeDemo as keyof typeof demos].components.map((component, index) => (
            <div key={index} className="component-demo">
              <h3>{component.name}</h3>
              {component.demo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}