import React from 'react';
import { ProgressBar } from '../atoms';
import type { PatternStatus } from '../../constants';
import './Card.css';

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
  let statusLabel;
  if (status === 'inactive') statusLabel = 'Not Started';
  else if (status === 'done') statusLabel = 'Mastered';
  else statusLabel = 'In Progress';

  return (
    <div
      className={`card ${status}`}
      style={{
        '--progress': progress,
        // Pass the background image to the CSS custom property if provided
        '--bg-url': image ? `url(${image})` : undefined,
      } as React.CSSProperties}
      onClick={onClick}
    >
      <div className="card-top"></div>
      <div className="card-bottom">
        <div>
          <div className="title">{title}</div>
          <div className="desc">{description || `Learn the ${title} pattern for coding interviews.`}</div>
        </div>
        <div className="status-row">
          <span className="status-label">{statusLabel}</span>
          <div className="progress-wrapper">
            <ProgressBar percent={progress * 100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;