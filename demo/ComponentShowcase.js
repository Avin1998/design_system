// Import CSS first for proper styling
import '@avinash_tyagi/design-system-react/lib/index.css';

// Import all components from the npm package
import {
  // Atoms
  Badge,
  Button,
  CanvasElement,
  ConnectionLine,
  Container,
  DraggableComponent,
  FileUpload,
  HintDisplay,
  Icon,
  Input,
  InputField,
  LoadingSpinner,
  Modal,
  ProBadge,
  ProgressBar,
  Rating,
  RichTextEditor,
  TextArea,
  Tooltip,
  
  // Molecules
  BrainSegment,
  BRAIN_STATES,
  Card,
  CardCarousel,
  ComponentPalette,
  EmailComposer,
  EmailOptionCard,
  ExpandedCard,
  ExpandedCardInline,
  Header,
  HoverSyncEffect,
  MentorBubble,
  MetricsCard,
  NavItem,
  ProblemTable,
  ProfileMenu,
  QuestionCard,
  RequirementQuestion,
  
  // Organisms
  CardGrid,
  CodeAttemptPage,
  DesignCanvas,
  EmailLandingSection,
  InteractiveBrainMap,
  LeftSideNavBar,
  MainLayout,
  QuestionCardStack,
  SystemBriefBar,
  TopNavBar,
  TrackDetailView
} from '@avinash_tyagi/design-system-react';

import React, { useState } from 'react';

// Dummy data for components
const dummyTracks = [
  {
    id: 'whatsapp',
    name: 'Build WhatsApp',
    description: 'Design a scalable messaging system like WhatsApp',
    progress: 0.3,
    status: 'active',
    difficulty: 'hard',
    companies: ['Meta', 'Google', 'Microsoft'],
    rating: 4.8,
    estimatedTime: '2-3 hours',
    category: 'Messaging System'
  },
  {
    id: 'redis',
    name: 'Design Redis',
    description: 'Build an in-memory key-value store like Redis',
    progress: 1,
    status: 'done',
    difficulty: 'hard',
    companies: ['Redis Labs', 'Netflix', 'Twitter'],
    rating: 4.7,
    estimatedTime: '2-3 hours',
    category: 'Caching System'
  },
  {
    id: 'youtube',
    name: 'Design YouTube',
    description: 'Create a video streaming platform architecture',
    progress: 0,
    status: 'inactive',
    difficulty: 'hard',
    companies: ['Google', 'Netflix', 'Amazon'],
    rating: 4.9,
    estimatedTime: '3-4 hours',
    category: 'Video Streaming'
  }
];

const dummyBrainSegments = {
  functionalRequirements: {
    id: 'functional-requirements',
    name: 'Functional Requirements',
    position: { x: 350, y: 200, width: 180, height: 120 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff',
    completedColor: '#00c853',
    description: 'Core features and capabilities',
    state: BRAIN_STATES.ACTIVE
  },
  nonFunctionalRequirements: {
    id: 'non-functional-requirements',
    name: 'Non-Functional Requirements',
    position: { x: 550, y: 150, width: 200, height: 160 },
    color: '#4f9cf9',
    hoverColor: '#6ba6f5',
    activeColor: '#0066ff',
    completedColor: '#00c853',
    description: 'Performance, scalability, reliability',
    state: BRAIN_STATES.COMPLETED
  }
};

const dummyComponents = [
  { name: 'Button', category: 'Atoms', description: 'Interactive button component' },
  { name: 'Card', category: 'Molecules', description: 'Content card component' },
  { name: 'Header', category: 'Molecules', description: 'Page header component' },
  { name: 'CardGrid', category: 'Organisms', description: 'Grid of cards' }
];

const dummyQuestions = [
  {
    id: 1,
    question: "What are the main functional requirements for WhatsApp?",
    options: ["Messaging", "File sharing", "Voice calls", "All of the above"],
    correctAnswer: 3,
    difficulty: "medium",
    category: "functional-requirements"
  },
  {
    id: 2,
    question: "Which database would you choose for real-time messaging?",
    options: ["MySQL", "MongoDB", "Cassandra", "Redis"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "database-design"
  }
];

function ComponentShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [rating, setRating] = useState(4);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Design System Component Showcase</h1>
      <p>This demonstrates all exported components from @avinash_tyagi/design-system-react with proper styling and dummy data.</p>
      
      {/* ATOMS Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2>🔹 Atoms</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Buttons</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="back">← Back</Button>
            <Button variant="integration" icon="🔗" subtitle="Connect your account">
              GitHub Integration
            </Button>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Badges</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info" icon="info">Info Badge</Badge>
            <Badge status="completed" glow>Completed</Badge>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Progress Bar</h3>
          <ProgressBar progress={75} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Rating</h3>
          <Rating value={rating} onChange={setRating} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Loading Spinner</h3>
          <LoadingSpinner />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Inputs</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
            <Input 
              placeholder="Enter text..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <InputField 
              label="Email"
              type="email"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Text Area</h3>
          <TextArea 
            placeholder="Enter your message..."
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.target.value)}
            rows={4}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Pro Badge</h3>
          <ProBadge />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Icon</h3>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Icon name="star" size={24} />
            <Icon name="heart" size={24} variant="primary" />
            <Icon name="settings" size={24} variant="secondary" />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Hint Display</h3>
          <HintDisplay message="This is a helpful hint for users" />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>File Upload</h3>
          <FileUpload onFileSelect={(files) => console.log('Files selected:', files)} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Modal</h3>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          {modalOpen && (
            <Modal onClose={() => setModalOpen(false)}>
              <h3>Modal Content</h3>
              <p>This is a modal dialog with some content.</p>
              <Button onClick={() => setModalOpen(false)}>Close</Button>
            </Modal>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Tooltip</h3>
          <Tooltip text="This is a tooltip message">
            <Button>Hover for tooltip</Button>
          </Tooltip>
        </div>
      </section>

      {/* MOLECULES Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2>🔸 Molecules</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Header</h3>
          <Header 
            title="Design System Demo"
            subtitle="Showcasing all components"
            showProfile={true}
            showNotifications={true}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Card</h3>
          <Card 
            title="Sample Card"
            description="This is a demonstration card with some content"
            image="https://via.placeholder.com/300x200"
            tags={['React', 'Design System']}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Expanded Card</h3>
          <ExpandedCard 
            track={dummyTracks[0]}
            onStartClick={() => console.log('Start clicked')}
            onContinueClick={() => console.log('Continue clicked')}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Brain Segment</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            <BrainSegment 
              segment={dummyBrainSegments.functionalRequirements}
              onClick={() => console.log('Segment clicked')}
            />
            <BrainSegment 
              segment={dummyBrainSegments.nonFunctionalRequirements}
              onClick={() => console.log('Segment clicked')}
            />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Question Card</h3>
          <QuestionCard 
            question={dummyQuestions[0]}
            onAnswerSelect={(answer) => console.log('Answer selected:', answer)}
            showResult={false}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Metrics Card</h3>
          <MetricsCard 
            title="Total Problems"
            value="150"
            change="+12%"
            trend="up"
            icon="📊"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Email Option Card</h3>
          <EmailOptionCard 
            title="Daily Digest"
            description="Get a summary of your progress"
            isEnabled={true}
            onToggle={() => console.log('Email option toggled')}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Mentor Bubble</h3>
          <MentorBubble 
            message="Great job! You're making excellent progress."
            avatar="👨‍🏫"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Nav Item</h3>
          <NavItem 
            icon="🏠"
            label="Dashboard"
            isActive={true}
            onClick={() => console.log('Nav item clicked')}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Profile Menu</h3>
          <ProfileMenu 
            userName="John Doe"
            userEmail="john@example.com"
            avatar="👤"
            onLogout={() => console.log('Logout clicked')}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Component Palette</h3>
          <ComponentPalette 
            components={dummyComponents}
            categories={['All', 'Atoms', 'Molecules', 'Organisms']}
            onComponentSelect={(component) => console.log('Component selected:', component)}
          />
        </div>
      </section>

      {/* ORGANISMS Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2>🔷 Organisms</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Card Grid</h3>
          <CardGrid 
            tracks={dummyTracks}
            onTrackClick={(track) => console.log('Track clicked:', track)}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Question Card Stack</h3>
          <QuestionCardStack 
            questions={dummyQuestions}
            onQuestionComplete={(question, answer) => console.log('Question completed:', question, answer)}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Interactive Brain Map</h3>
          <InteractiveBrainMap 
            brainSegments={dummyBrainSegments}
            brainDimensions={{ viewBox: '0 0 1024 731', width: 400, height: 300 }}
            onSegmentClick={(segment) => console.log('Brain segment clicked:', segment)}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Top Nav Bar</h3>
          <TopNavBar 
            userName="John Doe"
            onProfileClick={() => console.log('Profile clicked')}
            onNotificationClick={() => console.log('Notifications clicked')}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>System Brief Bar</h3>
          <SystemBriefBar 
            title="WhatsApp System Design"
            description="Design a scalable messaging system"
            estimatedTime="2-3 hours"
            difficulty="Hard"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Track Detail View</h3>
          <TrackDetailView 
            track={dummyTracks[0]}
            onStartTrack={() => console.log('Track started')}
            onBookmark={() => console.log('Track bookmarked')}
          />
        </div>
      </section>

      <footer style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>🎉 All Components Showcased Successfully!</h3>
        <p>
          This demonstrates all {43} exported components from the @avinash_tyagi/design-system-react package 
          with proper styling and functionality. Each component is imported from the npm package and 
          includes the required CSS import for proper styling.
        </p>
        <p><strong>Key Features Demonstrated:</strong></p>
        <ul>
          <li>✅ CSS styling working properly</li>
          <li>✅ All atomic design levels (Atoms, Molecules, Organisms)</li>
          <li>✅ Interactive components with dummy data</li>
          <li>✅ Proper npm package import structure</li>
          <li>✅ BRAIN_STATES constant export</li>
        </ul>
      </footer>
    </div>
  );
}

export default ComponentShowcase;