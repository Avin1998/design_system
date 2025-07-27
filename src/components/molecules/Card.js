
import React from 'react';
import ProgressBar from '../atoms/ProgressBar';
import './Card.css';

export default function Card({ title, description, progress, status, image }) {
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
      }}
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
            <ProgressBar percent={progress * 100} />
          </div>
        </div>
      </div>
    </div>
  );
}
