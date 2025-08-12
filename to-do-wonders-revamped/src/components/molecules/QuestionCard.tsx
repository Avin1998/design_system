import { useState } from 'react';
import TextArea from '../atoms/TextArea';
import Button from '../atoms/Button';
import Badge from '../atoms/Badge';
import Icon from '../atoms/Icon';
import Tooltip from '../atoms/Tooltip';
import '../../styles/molecules/QuestionCard.css';

interface QuestionCardProps {
  question: {
    id: string;
    question: string;
    hint?: string;
    placeholder?: string;
  };
  index: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  state?: 'inactive' | 'active' | 'completed';
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  showHint?: boolean;
  className?: string;
  isExpanded?: boolean;
}

export default function QuestionCard({
  question,
  index,
  value = '',
  onChange,
  state = 'inactive',
  isHovered = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
  showHint = true,
  className = '',
  isExpanded = false
}: QuestionCardProps) {
  const [showHintContent, setShowHintContent] = useState(false);

  const {
    question: questionText,
    hint,
    placeholder
  } = question;

  const handleCardClick = () => {
    if (onClick) onClick();
  };

  const handleHintToggle = () => {
    setShowHintContent(!showHintContent);
  };

  // Determine card status
  const getCardStatus = () => {
    if (value?.trim().length > 0) return 'completed';
    if (state === 'active') return 'active';
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
      onClick={!isExpanded ? handleCardClick : undefined}
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
            status="default"
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
              rows={state === 'active' ? 8 : 4}
              maxLength={2000}
              className="question-card-textarea"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {showHint && hint && (
            <div className="question-card-hint">
              <Button
                variant="minimal"
                onClick={(e) => { e.stopPropagation(); handleHintToggle(); }}
                className="hint-toggle-button"
              >
                <Icon name="hint" size={14} />
                {showHintContent ? 'Hide Hint' : 'Show Hint'}
              </Button>
              
              {showHintContent && (
                <div className="hint-content">
                  <Icon name="hint" size={16} />
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
                <Icon name="mentor" size={14} />
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