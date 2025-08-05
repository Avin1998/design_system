import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiSave, FiPlay, FiUpload } from 'react-icons/fi';
import Button from '../components/atoms/Button';
import ProBadge from '../components/atoms/ProBadge';
import ComponentPalette from '../components/molecules/ComponentPalette';
import DesignCanvas from '../components/organisms/DesignCanvas';
import { systemDesignTracks } from '../data/systemDesignTracks';

export default function SystemDesignCanvasPage() {
  const { trackId } = useParams();
  const navigate = useNavigate();
  const [canvasElements, setCanvasElements] = useState([]);
  const [connections, setConnections] = useState([]);
  const [isProUser, setIsProUser] = useState(false); // Mock pro status

  const track = systemDesignTracks.find(t => t.id === trackId);

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

  const handleElementAdd = (element) => {
    setCanvasElements(prev => [...prev, element]);
  };

  const handleElementDelete = (elementId) => {
    setCanvasElements(prev => prev.filter(el => el.id !== elementId));
  };

  const handleElementMove = (elementId, newPosition) => {
    setCanvasElements(prev => 
      prev.map(el => 
        el.id === elementId 
          ? { ...el, position: newPosition }
          : el
      )
    );
  };

  const handleConnectionAdd = (connection) => {
    setConnections(prev => [...prev, connection]);
  };

  const handleConnectionDelete = (connectionId) => {
    setConnections(prev => prev.filter(conn => conn.id !== connectionId));
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

  const handleProFeature = (featureName) => {
    alert(`${featureName} is a Pro feature. Upgrade to access advanced features!`);
  };

  if (!track) {
    return (
      <div className="container">
        <div className="error-message">Track not found</div>
      </div>
    );
  }

  return (
    <div className="canvas-page">
      <div className="canvas-header">
        <div className="header-left">
          <Button 
            variant="secondary" 
            onClick={handleBack}
            className="back-button"
          >
            <FiArrowLeft />
            Back
          </Button>
          
          <div className="track-info">
            <h1 className="track-title">{track.name}</h1>
            <p className="track-subtitle">Interactive System Design Canvas</p>
          </div>
        </div>

        <div className="header-actions">
          <Button 
            variant="secondary" 
            onClick={handleSave}
            className="action-button"
          >
            <FiSave />
            Save
          </Button>
          
          <div className="simulate-button-container">
            <Button 
              variant="secondary" 
              onClick={handleSimulate}
              className="action-button"
            >
              <FiPlay />
              Simulate
            </Button>
            {!isProUser && <ProBadge />}
          </div>
          
          <Button 
            variant="primary" 
            onClick={handleSubmit}
            className="submit-button"
          >
            <FiUpload />
            Submit for Assessment
          </Button>
        </div>
      </div>

      <div className="canvas-workspace">
        <div className="palette-sidebar">
          <ComponentPalette />
        </div>
        
        <div className="canvas-area">
          <DesignCanvas
            elements={canvasElements}
            connections={connections}
            onElementAdd={handleElementAdd}
            onElementDelete={handleElementDelete}
            onElementMove={handleElementMove}
            onElementEdit={(id) => handleProFeature('Advanced Element Editing')}
            onElementConnect={() => {}} // Connection is now built into the canvas
            onConnectionAdd={handleConnectionAdd}
            onConnectionDelete={handleConnectionDelete}
          />
        </div>
      </div>
    </div>
  );
}