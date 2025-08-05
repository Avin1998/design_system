
import React from 'react';
import ProgressBar from '../atoms/ProgressBar';

export default function Card({ title, description, progress, status, image, onClick }) {
  let statusLabel;
  let statusColor;
  
  if (status === 'inactive') {
    statusLabel = 'Not Started';
    statusColor = 'text-red-400';
  } else if (status === 'done') {
    statusLabel = 'Mastered';
    statusColor = 'text-blue-primary';
  } else {
    statusLabel = 'In Progress';
    statusColor = 'text-yellow-400';
  }

  const baseCardClasses = "relative rounded-xl overflow-hidden shadow-card h-[340px] bg-card-bg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover";
  const cardClasses = status === 'done' ? `${baseCardClasses} border-2 border-blue-primary shadow-blue` : baseCardClasses;
  
  return (
    <div
      className={cardClasses}
      onClick={onClick}
    >
      {/* Card Top with Background Image */}
      <div className="relative h-[65%] overflow-hidden">
        {/* Background Image */}
        <div 
          className={`absolute inset-0 z-10 bg-cover bg-center ${
            status === 'inactive' ? 'grayscale brightness-[0.3]' : ''
          }`}
          style={{
            backgroundImage: image ? `url(${image})` : `url('/src/assets/background.png')`
          }}
        />
        
        {/* Progress Overlay - simplified version */}
        {status !== 'done' && progress < 1 && (
          <div 
            className="absolute inset-0 z-20 bg-black/60"
            style={{
              height: `${(1 - progress) * 100}%`,
              top: 0
            }}
          />
        )}
      </div>
      
      {/* Card Bottom */}
      <div className={`absolute bottom-0 left-0 right-0 h-[35%] backdrop-blur-[10px] p-3.5 flex flex-col justify-between ${
        status === 'inactive' ? 'bg-black/70' : 'bg-glass'
      }`}>
        <div>
          <div className="text-base font-semibold mb-1 text-white">{title}</div>
          <div className="text-sm leading-tight mb-2 text-white/90">{description}</div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-medium ${statusColor}`}>{statusLabel}</span>
          <div className="flex-1">
            <ProgressBar percent={progress * 100} />
          </div>
        </div>
      </div>
    </div>
  );
}
