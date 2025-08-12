import React from 'react';
import { Button, Rating, Badge } from '../atoms';
import type { DifficultyLevel } from '../../constants';
import './ExpandedCardInline.css';

export interface ExpandedCardInlineProps {
  id: string;
  name: string;
  title?: string;
  image?: string;
  description?: string;
  companies?: string[];
  difficulty?: DifficultyLevel;
  rating?: number;
  achieved?: boolean;
  nextTrack?: { name: string } | null;
  onContinue?: () => void;
  onClose?: () => void;
  [key: string]: any;
}

const ExpandedCardInline: React.FC<ExpandedCardInlineProps> = ({ 
  id,
  name,
  title, 
  image, 
  description, 
  companies = [], 
  difficulty = 'medium',
  rating = 0,
  achieved = false,
  nextTrack = null,
  onContinue,
  onClose,
  ...props 
}) => {
  const displayTitle = title || name;
  const displayDescription = description || `Master the ${displayTitle} pattern through carefully selected problems and expert guidance.`;
  
  return (
    <div className="expanded-card-inline" {...props}>
      <button className="close-btn-inline" onClick={onClose}>×</button>
      
      <div className="expanded-card-content-inline">
        <div className="expanded-card-left-inline">
          <div 
            className="expanded-card-image-inline"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        
        <div className="expanded-card-right-inline">
          <div className="expanded-card-header-inline">
            <h2 className="expanded-title-inline">{displayTitle}</h2>
            <Rating 
              value={rating} 
              difficulty={difficulty} 
              achieved={achieved}
            />
          </div>
          
          <p className="expanded-description-inline">{displayDescription}</p>
          
          {companies.length > 0 && (
            <div className="companies-section-inline">
              <h4>Frequently Asked At:</h4>
              <div className="companies-list-inline">
                {companies.map((company, index) => (
                  <Badge key={index} variant="default">{company}</Badge>
                ))}
              </div>
            </div>
          )}
          
          {nextTrack && (
            <div className="next-track-section-inline">
              <h4>Next Track:</h4>
              <div className="next-track-details-inline">
                <span className="next-track-name-inline">{nextTrack.name}</span>
                <Button variant="primary" onClick={onContinue}>
                  Continue
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpandedCardInline;