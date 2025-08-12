import '../../styles/atoms/TextArea.css';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxLength?: number;
  className?: string;
}

export default function TextArea({ 
  placeholder, 
  value, 
  onChange, 
  rows = 4, 
  maxLength,
  className = '',
  ...props 
}: TextAreaProps) {
  return (
    <div className={`textarea-container ${className}`}>
      <div className="textarea-wrapper">
        <textarea
          className="textarea"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          maxLength={maxLength}
          {...props}
        />
      </div>
      
      {maxLength && (
        <div className="textarea-counter">
          {(value as string)?.length || 0}/{maxLength}
        </div>
      )}
    </div>
  );
}