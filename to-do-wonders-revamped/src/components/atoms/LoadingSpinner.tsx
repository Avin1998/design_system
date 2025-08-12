import '../../styles/atoms/LoadingSpinner.css';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  className?: string;
}

export default function LoadingSpinner({ 
  size = 'medium',
  text = 'Loading...',
  className = '' 
}: LoadingSpinnerProps) {
  return (
    <div className={`loading-spinner ${size} ${className}`}>
      <div className="spinner-circle"></div>
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
}