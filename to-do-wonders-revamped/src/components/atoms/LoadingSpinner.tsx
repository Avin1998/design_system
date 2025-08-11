

type SpinnerSize = 'small' | 'medium' | 'large';

interface LoadingSpinnerProps {
  size?: SpinnerSize;
  text?: string;
  className?: string;
}

export default function LoadingSpinner({ 
  size = 'medium',
  text = 'Loading...',
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    small: 'w-6 h-6 border-2',
    medium: 'w-10 h-10 border-3',
    large: 'w-16 h-16 border-4'
  };

  const textSizeClasses = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-base'
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      <div 
        className={`
          ${sizeClasses[size]} 
          border-gray-600 border-t-blue-500 rounded-full animate-spin
        `}
      />
      {text && (
        <p className={`text-white m-0 text-center ${textSizeClasses[size]}`}>
          {text}
        </p>
      )}
    </div>
  );
}