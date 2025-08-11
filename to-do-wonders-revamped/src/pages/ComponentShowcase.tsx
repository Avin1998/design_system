import { useState } from 'react';
import { 
  Icon, 
  Badge, 
  Rating, 
  Button, 
  ProgressBar, 
  Input, 
  TextArea,
  LoadingSpinner,
  Tooltip,
  FileUpload,
  Modal
} from '../components/atoms';
import { 
  MetricsCard, 
  ProfileMenu,
  NavItem,
  ProblemTable 
} from '../components/molecules';

export default function ComponentShowcase() {
  const [activeDemo, setActiveDemo] = useState('atoms');
  const [rating] = useState(4);
  const [inputValue, setInputValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [showModal, setShowModal] = useState(false);

  const sampleProblems = [
    { id: '1', title: 'Two Sum', difficulty: 'easy' as const, status: 'solved' as const, acceptance: 89 },
    { id: '2', title: 'Add Two Numbers', difficulty: 'medium' as const, status: 'attempted' as const, acceptance: 56 },
    { id: '3', title: 'Longest Substring', difficulty: 'hard' as const, status: 'unsolved' as const, acceptance: 34 },
  ];

  const demos = {
    atoms: {
      title: 'Atomic Components',
      components: [
        {
          name: 'Icons',
          demo: (
            <div className="space-y-4">
              <h4 className="text-white text-lg font-semibold">Icons with Hover Effects</h4>
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
            <div className="space-y-4">
              <h4 className="text-white text-lg font-semibold">Badges with Variants</h4>
              <div className="flex gap-2 flex-wrap">
                <Badge status="active">Active</Badge>
                <Badge status="inactive">Inactive</Badge>
                <Badge status="done">Done</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
              </div>
            </div>
          )
        },
        {
          name: 'Ratings',
          demo: (
            <div className="space-y-4">
              <h4 className="text-white text-lg font-semibold">Interactive Rating</h4>
              <Rating 
                value={rating} 
                className="mb-4"
              />
              <p className="text-gray-300">Current rating: {rating}</p>
            </div>
          )
        },
        {
          name: 'Buttons',
          demo: (
            <div className="space-y-4">
              <h4 className="text-white text-lg font-semibold">Button Variants</h4>
              <div className="flex gap-2 flex-wrap">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          )
        },
        {
          name: 'Progress Bar',
          demo: (
            <div className="space-y-4">
              <h4 className="text-white text-lg font-semibold">Progress Indicators</h4>
              <div className="space-y-2">
                <ProgressBar progress={25} />
                <ProgressBar progress={50} />
                <ProgressBar progress={75} />
                <ProgressBar progress={100} />
              </div>
            </div>
          )
        },
        {
          name: 'Form Inputs',
          demo: (
            <div className="space-y-4">
              <h4 className="text-white text-lg font-semibold">Form Components</h4>
              <Input
                placeholder="Enter some text..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <TextArea
                placeholder="Enter multiple lines..."
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
                rows={3}
              />
            </div>
          )
        },
        {
          name: 'Loading & Tooltips',
          demo: (
            <div className="space-y-4">
              <h4 className="text-white text-lg font-semibold">Loading States & Tooltips</h4>
              <div className="flex gap-4 items-center">
                <LoadingSpinner size="small" text="Small" />
                <LoadingSpinner size="medium" text="Medium" />
                <LoadingSpinner size="large" text="Large" />
              </div>
              <div className="flex gap-4">
                <Tooltip content="This is a tooltip!" position="top">
                  <Button>Hover me (top)</Button>
                </Tooltip>
                <Tooltip content="Another tooltip!" position="bottom">
                  <Button>Hover me (bottom)</Button>
                </Tooltip>
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
            <div className="space-y-4">
              <h4 className="text-white text-lg font-semibold">Metrics Display</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <MetricsCard
                  title="Total Problems"
                  value="152"
                  icon="FaCode"
                  trend={{ direction: 'up', value: '+12%' }}
                />
                <MetricsCard
                  title="Solved Today"
                  value="7"
                  icon="FaCheck"
                  color="#00c853"
                />
              </div>
            </div>
          )
        },
        {
          name: 'Profile Menu',
          demo: (
            <div className="space-y-4">
              <h4 className="text-white text-lg font-semibold">Profile Menu</h4>
              <ProfileMenu streak={15} notifications={3} />
            </div>
          )
        },
        {
          name: 'Navigation Items',
          demo: (
            <div className="space-y-4">
              <h4 className="text-white text-lg font-semibold">Navigation</h4>
              <div className="space-y-2 max-w-xs">
                <NavItem icon="FaHome" label="Home" active />
                <NavItem icon="FaCode" label="Problems" />
                <NavItem icon="FaChart" label="Analytics" />
              </div>
            </div>
          )
        },
        {
          name: 'Problem Table',
          demo: (
            <div className="space-y-4">
              <h4 className="text-white text-lg font-semibold">Problem Table</h4>
              <ProblemTable 
                problems={sampleProblems}
                onProblemClick={(problem) => alert(`Clicked: ${problem.title}`)}
              />
            </div>
          )
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Component Showcase</h1>
          <p className="text-gray-400">
            Explore the design system components with interactive examples
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8">
          {Object.keys(demos).map((key) => (
            <Button
              key={key}
              variant={activeDemo === key ? 'primary' : 'ghost'}
              onClick={() => setActiveDemo(key)}
              className="capitalize"
            >
              {key}
            </Button>
          ))}
        </div>

        {/* Demo Content */}
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

        {/* Modal Demo */}
        <div className="mt-8">
          <Button onClick={() => setShowModal(true)}>
            Open Modal Demo
          </Button>
          
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title="Modal Demo"
          >
            <div className="space-y-4">
              <p className="text-gray-300">
                This is a sample modal with various content.
              </p>
              <FileUpload
                onFileSelect={(files) => console.log('Selected files:', files)}
                accept="image/*"
                multiple
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}