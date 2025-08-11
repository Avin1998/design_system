import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiSave, FiPlay, FiUpload } from 'react-icons/fi';
import Button from '../components/atoms/Button';
import ProBadge from '../components/atoms/ProBadge';
import ComponentPalette from '../components/molecules/ComponentPalette';
import DesignCanvas from '../components/organisms/DesignCanvas';
import { systemDesignTracks } from '../data/systemDesignTracks';
import type { SystemDesignTrack } from '../data/systemDesignTracks';

interface CanvasElement {
  id: string;
  name: string;
  icon: string;
  category: string;
  position: { x: number; y: number };
  color?: string;
}

interface Connection {
  id: string;
  from: string;
  to: string;
  fromPosition: { x: number; y: number };
  toPosition: { x: number; y: number };
}

const SystemDesignCanvasPage: React.FC = () => {
  const { trackId } = useParams<{ trackId: string }>();
  const navigate = useNavigate();
  const [canvasElements, setCanvasElements] = useState<CanvasElement[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [isProUser] = useState(false); // Mock pro status

  const track = systemDesignTracks.find((t: SystemDesignTrack) => t.id === trackId);

  useEffect(() => {
    // Load saved canvas state if exists
    const savedCanvas = localStorage.getItem(`canvas_${trackId}`);
    const savedConnections = localStorage.getItem(`connections_${trackId}`);
    
    if (savedCanvas) {
      try {
        setCanvasElements(JSON.parse(savedCanvas));
      } catch (error) {
        console.error('Failed to load saved canvas:', error);
      }
    }
    
    if (savedConnections) {
      try {
        setConnections(JSON.parse(savedConnections));
      } catch (error) {
        console.error('Failed to load saved connections:', error);
      }
    }
  }, [trackId]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleElementAdd = (element: CanvasElement) => {
    setCanvasElements(prev => [...prev, element]);
  };

  const handleElementDelete = (elementId: string) => {
    setCanvasElements(prev => prev.filter(el => el.id !== elementId));
  };

  const handleElementMove = (elementId: string, newPosition: { x: number; y: number }) => {
    setCanvasElements(prev => 
      prev.map(el => 
        el.id === elementId 
          ? { ...el, position: newPosition }
          : el
      )
    );
  };

  const handleConnectionAdd = (connection: Connection) => {
    setConnections(prev => [...prev, connection]);
  };

  const handleSave = () => {
    localStorage.setItem(`canvas_${trackId}`, JSON.stringify(canvasElements));
    localStorage.setItem(`connections_${trackId}`, JSON.stringify(connections));
    alert('Design saved successfully!');
  };

  const handleSubmit = () => {
    if (canvasElements.length === 0) {
      alert('Please add some components to your design before submitting.');
      return;
    }
    
    // Save the current design
    handleSave();
    
    // Navigate to assessment or show completion
    alert('Design submitted for review! This would typically navigate to assessment results.');
  };

  const handleSimulate = () => {
    if (!isProUser) {
      alert('Simulation is a Pro feature. Upgrade to access advanced features!');
      return;
    }
    
    if (canvasElements.length === 0) {
      alert('Please add some components to your design before simulating.');
      return;
    }
    
    alert('Simulation feature coming soon! This would show how your system handles different loads and scenarios.');
  };

  const handleProFeature = (featureName: string) => {
    alert(`${featureName} is a Pro feature. Upgrade to access advanced features!`);
  };

  if (!track) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-red-400 text-lg">Track not found</div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-900 flex flex-col overflow-hidden">
      <div className="flex justify-between items-center px-6 py-4 bg-white/5 border-b border-white/10 flex-shrink-0">
        <div className="flex items-center gap-5">
          <Button 
            variant="secondary" 
            onClick={handleBack}
            className="flex items-center gap-2"
          >
            <FiArrowLeft />
            Back
          </Button>
          
          <div>
            <h1 className="text-white text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              {track.name}
            </h1>
            <p className="text-gray-400 text-sm mt-0.5">Interactive System Design Canvas</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            variant="secondary" 
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2.5 text-sm"
          >
            <FiSave />
            Save
          </Button>
          
          <div className="relative inline-block">
            <Button 
              variant="secondary" 
              onClick={handleSimulate}
              className="flex items-center gap-2 px-4 py-2.5 text-sm"
            >
              <FiPlay />
              Simulate
            </Button>
            {!isProUser && <ProBadge />}
          </div>
          
          <Button 
            variant="primary" 
            onClick={handleSubmit}
            className="flex items-center gap-2 px-5 py-3 text-sm font-semibold"
          >
            <FiUpload />
            Submit for Assessment
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-70 flex-shrink-0 bg-white/5 border-r border-white/10 p-3">
          <ComponentPalette />
        </div>
        
        <div className="flex-1 p-4 overflow-hidden">
          <DesignCanvas
            elements={canvasElements}
            connections={connections}
            onElementAdd={handleElementAdd}
            onElementDelete={handleElementDelete}
            onElementMove={handleElementMove}
            onElementEdit={() => handleProFeature('Advanced Element Editing')}
            onConnectionAdd={handleConnectionAdd}
          />
        </div>
      </div>
    </div>
  );
};

export default SystemDesignCanvasPage;