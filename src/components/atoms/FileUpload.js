import React, { useRef } from 'react';
import './FileUpload.css';

export default function FileUpload({ 
  onFileSelect, 
  accept = '*/*',
  multiple = false,
  className = '',
  children 
}) {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
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