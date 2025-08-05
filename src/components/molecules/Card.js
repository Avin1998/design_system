
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
          className="absolute inset-0 z-10 bg-cover bg-center"
          style={{
            backgroundImage: image ? `url(${image})` : `url('/src/assets/background.png')`,
            filter: status === 'inactive' ? 'grayscale(100%) brightness(0.3)' : undefined
          }}
        />
        
        {/* Progress Overlay - only show if not completed */}
        {status !== 'done' && (
          <div 
            className="absolute inset-0 z-20 bg-cover bg-center grayscale blur-sm brightness-[0.4]"
            style={{
              backgroundImage: `url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAJYAZADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDyKiiitSAooooAKUdaSlHWgBKXtSUvagBKKKKACiiloAKSlooAKKKKACiiigAooooAKKKKACjFLSUCCiiigAooooGFFFFABRRRQAUUUUAFB60vSkoAKKKKACiiigApKWigBKKXFFACUUUUAFFLRQAlLRSUALSUUtACUUtJQAUo60UDrQAlL2oo7UAJS0UUAFFFFABRRRQIKKKWgBKKWigBKKWigAooooAO1FHaigBKKWigBKWiigApKWigBKKWigBKXpRSUAFFFLQAUlLRQAlLRSUAFFFFAwooooAKKKKACiiigAooooASilooAKMUUD0NABQOooxigcGgApe1IRiloEJRS96SgAoopaAEopaKACiiimAUUtJQAHrRSnrSUAFFLRQAdvxpKXt+NFACUUtFABSUUUAFFFLQAlHSl6fWkoAKKKehAzmgBlFOfBbim0AFFHSikAUYoxRQAUlLSUAFFLSUAFFFFABRRRQMKKKKACiiigAooooAX2pMYopR6GgQA9jQRijGDSj0PSmAnsaMUYxS/WgBKKMUUAFFFLQAlFLRQAUUdhRQID...')`,
              height: `calc(100% * ${1 - progress})`,
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
