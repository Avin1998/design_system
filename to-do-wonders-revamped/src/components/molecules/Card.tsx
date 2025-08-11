import React from 'react';
import { ProgressBar } from '../atoms';
import type { PatternStatus } from '../../constants';

export interface CardProps {
  title: string;
  description?: string;
  progress: number;
  status: PatternStatus;
  image?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  progress, 
  status, 
  image, 
  onClick 
}) => {
  const getStatusLabel = (status: PatternStatus) => {
    switch (status) {
      case 'inactive': return 'Not Started';
      case 'done': return 'Mastered';
      default: return 'In Progress';
    }
  };

  const statusLabel = getStatusLabel(status);

  const backgroundImage = image || '/src/assets/background.png';

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-lg h-80 bg-gray-800 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl group"
      onClick={onClick}
    >
      {/* Top section with image */}
      <div className="relative h-2/3 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Progress overlay */}
        <div 
          className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm z-20 transition-all duration-500"
          style={{ 
            height: `${(1 - progress) * 100}%`,
            filter: 'grayscale(100%) brightness(0.4)'
          }}
        />
      </div>

      {/* Bottom section with content */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white/10 backdrop-blur-lg p-4">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="text-white font-semibold text-base mb-1 line-clamp-2">
              {title}
            </div>
            {description && (
              <div className="text-gray-300 text-sm opacity-80 line-clamp-2">
                {description}
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-gray-300 font-medium">
              {statusLabel}
            </span>
            <div className="flex-1 ml-3">
              <ProgressBar 
                progress={progress * 100} 
                height={4}
                animated={true}
                showGlow={status === 'active'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;