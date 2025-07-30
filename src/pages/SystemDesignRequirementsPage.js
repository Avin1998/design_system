import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';
import SystemBriefBar from '../components/organisms/SystemBriefBar';
import InteractiveBrainMap from '../components/organisms/InteractiveBrainMap';
import QuestionCardStack from '../components/organisms/QuestionCardStack';
import MentorBubble from '../components/molecules/MentorBubble';
import { systemDesignTracks } from '../data/systemDesignTracks';
import { systemDesignQuestions } from '../data/systemDesignQuestions';
import { brainSegments, questionToBrainMapping, brainStates } from '../data/brainSegments';
import { useHoverSyncManager } from '../components/molecules/HoverSyncEffect';
import './SystemDesignRequirementsPage.css';

export default function SystemDesignRequirementsPage() {
  const { trackId } = useParams();
  const navigate = useNavigate();
  
  // State management
  const [answers, setAnswers] = useState({});
  const [activeQuestionId, setActiveQuestionId] = useState(null);
  const [hoveredQuestionId, setHoveredQuestionId] = useState(null);
  const [interviewMode, setInterviewMode] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showMentor, setShowMentor] = useState(true);

  // Data
  const track = systemDesignTracks.find(t => t.id === trackId);
  const questions = systemDesignQuestions[trackId] || systemDesignQuestions.default;

  // Hover sync for brain-card interaction
  const { handleMouseEnter, handleMouseLeave } = useHoverSyncManager('page-root', (hoveredId) => {
    setHoveredQuestionId(hoveredId);
  });

  // Initialize answers
  useEffect(() => {
    const initialAnswers = {};
    questions.forEach(q => {
      initialAnswers[q.id] = '';
    });
    setAnswers(initialAnswers);
  }, [questions]);

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (interviewMode && timerRunning) {
      interval = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [interviewMode, timerRunning]);

  // Auto-activate first unanswered question
  useEffect(() => {
    if (!activeQuestionId) {
      const firstUnanswered = questions.find(q => !answers[q.id]?.trim());
      if (firstUnanswered) {
        setActiveQuestionId(firstUnanswered.id);
      }
    }
  }, [questions, answers, activeQuestionId]);

  // Event handlers
  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleQuestionClick = (questionId) => {
    // Toggle active state - clicking the same question closes it, clicking different opens it
    setActiveQuestionId(activeQuestionId === questionId ? null : questionId);
  };

  const handleQuestionHover = (questionId) => {
    setHoveredQuestionId(questionId);
  };

  const handleQuestionLeave = () => {
    setHoveredQuestionId(null);
  };

  const handleBrainSegmentClick = (segmentId) => {
    // Find corresponding question
    const questionId = Object.keys(questionToBrainMapping).find(
      qId => questionToBrainMapping[qId] === segmentId
    );
    if (questionId) {
      setActiveQuestionId(questionId);
    }
  };

  const handleBrainSegmentHover = (segmentId) => {
    // Find corresponding question
    const questionId = Object.keys(questionToBrainMapping).find(
      qId => questionToBrainMapping[qId] === segmentId
    );
    if (questionId) {
      setHoveredQuestionId(questionId);
    }
  };

  const handleBrainSegmentLeave = () => {
    setHoveredQuestionId(null);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleContinue = () => {
    // Save answers to local storage
    localStorage.setItem(`requirements_${trackId}`, JSON.stringify(answers));
    
    // Navigate to design canvas
    navigate(`/system-design/canvas/${trackId}`);
  };

  const toggleInterviewMode = () => {
    setInterviewMode(!interviewMode);
    if (!interviewMode) {
      setElapsedTime(0);
      setTimerRunning(true);
    } else {
      setTimerRunning(false);
    }
  };

  const toggleTimer = () => {
    setTimerRunning(!timerRunning);
  };

  // Calculate completion state
  const completedQuestions = questions.filter(q => answers[q.id]?.trim().length > 0);
  const completedSegments = completedQuestions.map(q => 
    brainSegments[questionToBrainMapping[q.id]]?.id
  ).filter(Boolean);
  const isComplete = questions.length > 0 && completedQuestions.length === questions.length;

  // Get active brain segment
  const activeBrainSegment = activeQuestionId ? 
    brainSegments[questionToBrainMapping[activeQuestionId]]?.id : null;
  const hoveredBrainSegment = hoveredQuestionId ? 
    brainSegments[questionToBrainMapping[hoveredQuestionId]]?.id : null;

  if (!track) {
    return (
      <div className="container">
        <div className="error-message">Track not found</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="requirements-page-redesigned">
        {/* Back Button */}
        <div className="page-header">
          <Button 
            variant="back" 
            onClick={handleBack}
            className="back-button"
          >
            Back
          </Button>
        </div>

        {/* System Brief Bar */}
        <SystemBriefBar
          trackName={track.name}
          description="Map out requirements and constraints before you start designing"
          estimatedTime={track.estimatedTime}
          interviewMode={interviewMode}
          onToggleMode={toggleInterviewMode}
          onStartTimer={toggleTimer}
          timerRunning={timerRunning}
          elapsedTime={elapsedTime}
        />

        {/* Main Two-Column Layout */}
        <div className="requirements-main-layout">
          {/* Left Column - Question Cards */}
          <div className="requirements-left-column">
            <QuestionCardStack
              questions={questions}
              answers={answers}
              activeQuestionId={activeQuestionId}
              hoveredQuestionId={hoveredQuestionId}
              onQuestionChange={handleAnswerChange}
              onQuestionClick={handleQuestionClick}
              onQuestionHover={handleQuestionHover}
              onQuestionLeave={handleQuestionLeave}
            />
          </div>

          {/* Right Column - Interactive Brain Map */}
          <div className="requirements-right-column">
            <InteractiveBrainMap
              activeSegmentId={activeBrainSegment}
              hoveredSegmentId={hoveredBrainSegment}
              completedSegments={completedSegments}
              onSegmentClick={handleBrainSegmentClick}
              onSegmentHover={handleBrainSegmentHover}
              onSegmentLeave={handleBrainSegmentLeave}
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="requirements-footer">
          <Button 
            variant="primary" 
            onClick={handleContinue}
            disabled={!isComplete}
            className="continue-button"
            glow={isComplete}
          >
            Proceed to System Design Canvas
            <span className="continue-arrow">→</span>
          </Button>
          
          {!isComplete && (
            <div className="completion-hint">
              Complete all requirements to proceed ({completedQuestions.length}/{questions.length})
            </div>
          )}
        </div>

        {/* AI Mentor */}
        {showMentor && (
          <MentorBubble
            isVisible={true}
          />
        )}
      </div>
    </div>
  );
}