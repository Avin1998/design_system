import { useRef } from 'react';
import '../../styles/atoms/FileUpload.css';

interface FileUploadProps {
  onFileSelect?: (files: File | File[]) => void;
  accept?: string;
  multiple?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function FileUpload({ 
  onFileSelect, 
  accept = '*/*',
  multiple = false,
  className = '',
  children 
}: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (onFileSelect) {
      onFileSelect(multiple ? files : files[0]);
    }
  };

  return (
    <div className={`file-upload ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <div className="file-upload-trigger" onClick={handleClick}>
        {children || (
          <div className="default-upload-content">
            <span className="upload-icon">📎</span>
            <span>Attach files</span>
          </div>
        )}
      </div>
    </div>
  );
}