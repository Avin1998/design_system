import React, { useState } from 'react';
import { TextArea, Button, Badge, Icon, Tooltip } from '../atoms';

interface Question {
  id: string;
  question: string;
  hint?: string;
  placeholder?: string;
}

interface QuestionCardProps {
  question: Question;
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

  const statusColors = {
    inactive: 'border-gray-600 bg-gray-800',
    active: 'border-blue-500 bg-blue-900/20',
    completed: 'border-green-500 bg-green-900/20'
  };

  return (
    <div 
      className={`
        border-2 rounded-xl p-4 transition-all duration-200 cursor-pointer
        ${statusColors[getCardStatus()]}
        ${isHovered ? 'transform scale-105 shadow-lg' : ''}
        ${isExpanded ? 'cursor-default' : ''}
        ${className}
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={!isExpanded ? handleCardClick : undefined}
    >
      {/* Card Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {index + 1}
          </div>
          <h3 className="text-white font-medium">{questionText}</h3>
        </div>

        <Badge 
          status={getCardStatus()}
          className="capitalize"
        >
          {getCardStatus()}
        </Badge>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="space-y-4">
          <div>
            <TextArea
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              rows={state === 'active' ? 8 : 4}
              maxLength={2000}
              enableSpeechToText={true}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            />
          </div>

          {showHint && hint && (
            <div className="space-y-2">
              <Button
                variant="secondary"
                onClick={(e) => { e.stopPropagation(); handleHintToggle(); }}
                className="text-sm"
              >
                <Icon name="hint" size={14} />
                {showHintContent ? 'Hide Hint' : 'Show Hint'}
              </Button>
              
              {showHintContent && (
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-2 text-blue-700">
                    <span className="text-lg">💡</span>
                    <span className="text-sm">{hint}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Tooltip content="Ask mentor for guidance">
              <Button
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  // TODO: Open mentor dialog
                }}
                className="text-sm"
              >
                <Icon name="mentor" size={14} />
                Ask Mentor
              </Button>
            </Tooltip>
          </div>
        </div>
      )}

      {/* Progress Indicator */}
      <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full transition-all duration-300 rounded-full"
          style={{ 
            width: value?.trim().length > 0 ? '100%' : '0%',
            backgroundColor: getCardStatus() === 'completed' ? '#00c853' : '#4f9cf9'
          }}
        />
      </div>
    </div>
  );
}