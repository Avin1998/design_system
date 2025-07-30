import React, { useState, useEffect } from 'react';
import QuestionCard from '../molecules/QuestionCard';
import ProgressBar from '../atoms/ProgressBar';
import { brainStates } from '../../data/brainSegments';
import './QuestionCardStack.css';

export default function QuestionCardStack({
  questions = [],
  answers = {},
  activeQuestionId = null,
  hoveredQuestionId = null,
  onQuestionChange,
  onQuestionClick,
  onQuestionHover,
  onQuestionLeave,
  className = ''
}) {
  const [expandedCards, setExpandedCards] = useState(new Set([activeQuestionId]));

  useEffect(() => {
    if (activeQuestionId) {
      setExpandedCards(prev => new Set([...prev, activeQuestionId]));
    }
  }, [activeQuestionId]);

  // Calculate progress
  const completedQuestions = questions.filter(q => answers[q.id]?.trim().length > 0);
  const progressPercentage = (completedQuestions.length / questions.length) * 100;

  // Determine question state
  const getQuestionState = (questionId) => {
    if (answers[questionId]?.trim().length > 0) {
      return brainStates.COMPLETED;
    }
    if (activeQuestionId === questionId) {
      return brainStates.ACTIVE;
    }
    if (hoveredQuestionId === questionId) {
      return brainStates.HOVER;
    }
    return brainStates.INACTIVE;
  };

  const handleQuestionClick = (questionId) => {
    // Toggle expansion
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });

    if (onQuestionClick) {
      onQuestionClick(questionId);
    }
  };

  const handleAnswerChange = (questionId, value) => {
    if (onQuestionChange) {
      onQuestionChange(questionId, value);
    }
  };

  const stackClasses = `question-card-stack ${className}`;

  return (
    <div className={stackClasses}>
      {/* Stack Header */}
      <div className="card-stack-header">
        <h3 className="stack-title">Requirements Analysis</h3>
        <p className="stack-subtitle">
          Answer each question to build your system design foundation
        </p>
        
        {/* Progress */}
        <div className="stack-progress">
          <div className="progress-info">
            <span className="progress-text">
              {completedQuestions.length} of {questions.length} completed
            </span>
            <span className="progress-percentage">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <ProgressBar 
            progress={progressPercentage}
            className="stack-progress-bar"
            showGlow={true}
          />
        </div>
      </div>

      {/* Question Cards */}
      <div className="card-stack-container">
        {questions.map((question, index) => {
          const isExpanded = expandedCards.has(question.id) || activeQuestionId === question.id;
          
          return (
            <QuestionCard
              key={question.id}
              question={question}
              index={index}
              value={answers[question.id] || ''}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              state={getQuestionState(question.id)}
              isHovered={hoveredQuestionId === question.id}
              onMouseEnter={() => onQuestionHover && onQuestionHover(question.id)}
              onMouseLeave={() => onQuestionLeave && onQuestionLeave(question.id)}
              onClick={() => handleQuestionClick(question.id)}
              showHint={true}
              className={`stack-card ${isExpanded ? 'expanded' : 'collapsed'}`}
            />
          );
        })}
      </div>

      {/* Stack Footer */}
      <div className="card-stack-footer">
        <div className="completion-stats">
          <div className="stat-item">
            <span className="stat-number">{completedQuestions.length}</span>
            <span className="stat-label">Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{questions.length - completedQuestions.length}</span>
            <span className="stat-label">Remaining</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {completedQuestions.reduce((acc, q) => acc + (answers[q.id]?.length || 0), 0)}
            </span>
            <span className="stat-label">Words Written</span>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="stack-actions">
          <button 
            className="action-button expand-all"
            onClick={() => setExpandedCards(new Set(questions.map(q => q.id)))}
          >
            Expand All
          </button>
          <button 
            className="action-button collapse-all"
            onClick={() => setExpandedCards(new Set())}
          >
            Collapse All
          </button>
        </div>
      </div>
    </div>
  );
}