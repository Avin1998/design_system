import React from 'react';
import { Button, Rating, Badge } from '../atoms';
import type { DifficultyLevel } from '../../constants';

export interface ExpandedCardProps {
  title: string;
  image?: string;
  description?: string;
  companies?: string[];
  difficulty?: DifficultyLevel;
  rating?: number;
  achieved?: boolean;
  nextTrack?: {
    name: string;
  } | null;
  onContinue?: () => void;
  onClose?: () => void;
}

const ExpandedCard: React.FC<ExpandedCardProps> = ({ 
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
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden" {...props}>
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl leading-none z-10"
          onClick={onClose}
        >
          ×
        </button>
        
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div 
              className="h-64 lg:h-full bg-cover bg-center min-h-[300px]"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
          
          <div className="lg:w-1/2 p-6 lg:p-8">
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                {title}
              </h2>
              <Rating 
                value={rating} 
                difficulty={difficulty} 
                achieved={achieved}
              />
            </div>
            
            {description && (
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {description}
              </p>
            )}
            
            {companies.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Frequently Asked At:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {companies.map((company, index) => (
                    <Badge key={index} variant="default">
                      {company}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {nextTrack && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">
                  Next Track:
                </h4>
                <p className="text-blue-300">{nextTrack.name}</p>
              </div>
            )}
            
            <div className="flex gap-3 pt-4">
              <Button 
                variant="primary" 
                onClick={onContinue}
                className="flex-1"
              >
                Continue Learning
              </Button>
              <Button 
                variant="secondary" 
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedCard;