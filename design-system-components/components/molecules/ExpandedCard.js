import React from 'react';
import Button from '../atoms/Button';
import Rating from '../atoms/Rating';
import Badge from '../atoms/Badge';
import './ExpandedCard.css';

export default function ExpandedCard({ 
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
}) {
  return (
    <div className="expanded-card-overlay">
      <div className="expanded-card" {...props}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="expanded-card-content">
          <div className="expanded-card-left">
            <div 
              className="expanded-card-image"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
          
          <div className="expanded-card-right">
            <div className="expanded-card-header">
              <h2 className="expanded-title">{title}</h2>
              <Rating 
                value={rating} 
                difficulty={difficulty} 
                achieved={achieved}
              />
            </div>
            
            <p className="expanded-description">{description}</p>
            
            {companies.length > 0 && (
              <div className="companies-section">
                <h4>Frequently Asked At:</h4>
                <div className="companies-list">
                  {companies.map((company, index) => (
                    <Badge key={index} variant="default">{company}</Badge>
                  ))}
                </div>
              </div>
            )}
            
            {nextTrack && (
              <div className="next-track-section">
                <h4>Next Track:</h4>
                <div className="next-track-details">
                  <span className="next-track-name">{nextTrack.name}</span>
                  <Button variant="minimal" onClick={onContinue}>
                    Continue
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}