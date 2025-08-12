import React from 'react';
import ProgressBar from '../atoms/ProgressBar';
import '../../styles/molecules/Card.css';

interface CardProps {
  title: string;
  description: string;
  progress: number;
  status: 'inactive' | 'active' | 'done';
  image?: string;
  onClick?: () => void;
}

export default function Card({ title, description, progress, status, image, onClick }: CardProps) {
  let statusLabel: string;
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
          <div className="desc">{description}</div>
        </div>
        <div className="status-row">
          <span className="status-label">{statusLabel}</span>
          <div className="progress-wrapper">
            <ProgressBar progress={progress * 100} />
          </div>
        </div>
      </div>
    </div>
  );
}