import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Button from '../components/atoms/Button';
import RequirementQuestion from '../components/molecules/RequirementQuestion';
import { useSystemDesignData } from '../data/DataProvider.js';
import './SystemDesignRequirementsPage.css';

export default function SystemDesignRequirementsPage() {
  const { trackId } = useParams();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const { tracks, questions } = useSystemDesignData();
  
  const track = tracks.find(t => t.id === trackId);
  const trackQuestions = questions[trackId] || questions.default;

  useEffect(() => {
    // Initialize answers object
    const initialAnswers = {};
    trackQuestions.forEach(q => {
      initialAnswers[q.id] = '';
    });
    setAnswers(initialAnswers);
  }, [trackQuestions]);

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleContinue = () => {
    // Save answers to local storage or context
    localStorage.setItem(`requirements_${trackId}`, JSON.stringify(answers));
    
    // Navigate to design canvas
    navigate(`/system-design/canvas/${trackId}`);
  };

  const isComplete = trackQuestions.every(q => answers[q.id]?.trim().length > 0);

  if (!track) {
    return (
      <div className="container">
        <div className="error-message">Track not found</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="requirements-page">
        <div className="requirements-header">
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
            <p className="track-description">
              Define the requirements and constraints before designing the system
            </p>
          </div>
        </div>

        <div className="requirements-content">
          <div className="progress-indicator">
            <div className="progress-text">
              Requirements Gathering
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${(Object.values(answers).filter(a => a.trim()).length / trackQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="questions-container">
            {trackQuestions.map((question, index) => (
              <RequirementQuestion
                key={question.id}
                question={question.question}
                hint={question.hint}
                placeholder={question.placeholder}
                value={answers[question.id] || ''}
                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                index={index}
              />
            ))}
          </div>

          <div className="requirements-actions">
            <Button 
              variant="primary" 
              onClick={handleContinue}
              disabled={!isComplete}
              className="continue-button"
            >
              Design System
              <FiArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}