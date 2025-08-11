import { ProBadge, Button } from '../atoms';

interface EmailOptionCardProps {
  title: string;
  description: string;
  icon: string;
  requirements?: string[];
  isPro?: boolean;
  onClick: () => void;
  className?: string;
}

export default function EmailOptionCard({ 
  title,
  description,
  icon,
  requirements,
  isPro = false,
  onClick,
  className = '' 
}: EmailOptionCardProps) {
  return (
    <div className={`email-option-card ${isPro ? 'pro-card' : 'standard-card'} ${className}`}>
      {isPro && <ProBadge size="medium" position="top-right" />}
      
      <div className="card-header">
        <div className="card-icon">{icon}</div>
        <h3 className="card-title">{title}</h3>
      </div>
      
      <div className="card-content">
        <p className="card-description">{description}</p>
        
        {requirements && (
          <div className="requirements">
            <h4 className="requirements-title">Requirements:</h4>
            <ul className="requirements-list">
              {requirements.map((req, index) => (
                <li key={index} className="requirement-item">{req}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="card-footer">
        <Button 
          variant={isPro ? "primary" : "secondary"}
          glow={isPro}
          onClick={onClick}
          className="select-btn"
        >
          {isPro ? "Upgrade & Start" : "Get Started"}
        </Button>
      </div>
    </div>
  );
}