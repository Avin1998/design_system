import React, { useState } from 'react';
import TextArea from '../atoms/TextArea';
import Button from '../atoms/Button';
import Badge from '../atoms/Badge';
import Icon from '../atoms/Icon';
import Tooltip from '../atoms/Tooltip';
import { brainStates } from '../../data/brainSegments';
import './QuestionCard.css';

export default function QuestionCard({
  question,
  index,
  value = '',
  onChange,
  state = brainStates.INACTIVE,
  isHovered = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
  showHint = true,
  className = ''
}) {
  const [showHintContent, setShowHintContent] = useState(false);
  const [isExpanded, setIsExpanded] = useState(state === brainStates.ACTIVE);

  const {
    id,
    question: questionText,
    hint,
    placeholder
  } = question;

  const handleCardClick = () => {
    if (onClick) onClick();
    if (state !== brainStates.ACTIVE) {
      setIsExpanded(true);
    }
  };

  const handleHintToggle = () => {
    setShowHintContent(!showHintContent);
  };

  // Determine card status
  const getCardStatus = () => {
    if (value?.trim().length > 0) return 'completed';
    if (state === brainStates.ACTIVE) return 'active';
    return 'inactive';
  };

  const cardClasses = `
    question-card 
    question-card-${state} 
    question-card-${getCardStatus()}
    ${isHovered ? 'question-card-hovered' : ''} 
    ${isExpanded ? 'question-card-expanded' : ''} 
    ${className}
  `.trim();

  return (
    <div 
      className={cardClasses}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleCardClick}
    >
      {/* Card Header */}
      <div className="question-card-header">
        <div className="question-card-number">
          <span className="question-number">{index + 1}</span>
        </div>
        
        <div className="question-card-title">
          <h3>{questionText}</h3>
        </div>

        <div className="question-card-status">
          <Badge 
            status={getCardStatus()}
            icon={getCardStatus() === 'completed' ? 'completed' : 
                  getCardStatus() === 'active' ? 'active' : 'inactive'}
            className="question-card-badge"
          >
            {getCardStatus()}
          </Badge>
        </div>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="question-card-content">
          <div className="question-card-input">
            <TextArea
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              rows={state === brainStates.ACTIVE ? 8 : 4}
              maxLength={2000}
              enableSpeechToText={true}
              className="question-card-textarea"
            />
          </div>

          {showHint && (
            <div className="question-card-hint">
              <Button
                variant="minimal"
                onClick={handleHintToggle}
                className="hint-toggle-button"
              >
                <Icon name="hint" size={14} variant="hint" />
                {showHintContent ? 'Hide Hint' : 'Show Hint'}
              </Button>
              
              {showHintContent && (
                <div className="hint-content">
                  <Icon name="hint" size={16} variant="hint" />
                  <span>{hint}</span>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="question-card-actions">
            <Tooltip content="Ask mentor for guidance">
              <Button
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  // TODO: Open mentor dialog
                }}
                className="mentor-button"
              >
                <Icon name="mentor" size={14} variant="mentor" />
                Ask Mentor
              </Button>
            </Tooltip>
          </div>
        </div>
      )}

      {/* Progress Indicator */}
      <div className="question-card-progress">
        <div 
          className="progress-fill"
          style={{ 
            width: value?.trim().length > 0 ? '100%' : '0%',
            backgroundColor: getCardStatus() === 'completed' ? '#00c853' : '#4f9cf9'
          }}
        />
      </div>
    </div>
  );
}