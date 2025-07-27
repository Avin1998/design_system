
import React from 'react';
import './ProgressBar.css';
export default function ProgressBar({ percent }) {
  return (
    <div className="progress-bar">
      <div className="progress-bar-inner" style={{ width: `${percent}%` }}></div>
    </div>
  );
}
