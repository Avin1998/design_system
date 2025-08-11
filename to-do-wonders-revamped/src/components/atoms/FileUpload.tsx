import React, { useRef } from 'react';

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
    <div className={className}>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        className="hidden"
      />
      <div 
        className="cursor-pointer"
        onClick={handleClick}
      >
        {children || (
          <div className="flex items-center gap-2 p-3 border-2 border-dashed border-gray-600 rounded-lg 
                         hover:border-blue-500 transition-colors duration-200 text-gray-300">
            <span className="text-xl">📎</span>
            <span>Attach files</span>
          </div>
        )}
      </div>
    </div>
  );
}