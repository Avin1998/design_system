import React from 'react';

interface RichTextEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  readOnly?: boolean;
}

export default function RichTextEditor({
  value = '',
  onChange,
  placeholder = 'Start typing...',
  className = '',
  readOnly = false
}: RichTextEditorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    onChange?.(e.target.innerHTML);
  };

  const handleToolAction = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  if (readOnly) {
    return (
      <div 
        className={`p-4 bg-gray-800 border border-gray-600 rounded-lg text-white min-h-[200px] ${className}`}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    );
  }

  return (
    <div className={`border border-gray-600 rounded-lg bg-gray-800 ${className}`}>
      {/* Toolbar */}
      <div className="flex items-center gap-2 p-2 border-b border-gray-600 bg-gray-700">
        <button
          type="button"
          onClick={() => handleToolAction('bold')}
          className="px-2 py-1 bg-gray-600 hover:bg-gray-500 text-white rounded text-sm font-bold"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => handleToolAction('italic')}
          className="px-2 py-1 bg-gray-600 hover:bg-gray-500 text-white rounded text-sm italic"
        >
          I
        </button>
        <button
          type="button"
          onClick={() => handleToolAction('underline')}
          className="px-2 py-1 bg-gray-600 hover:bg-gray-500 text-white rounded text-sm underline"
        >
          U
        </button>
        <div className="w-px h-6 bg-gray-600" />
        <button
          type="button"
          onClick={() => handleToolAction('formatBlock', 'h1')}
          className="px-2 py-1 bg-gray-600 hover:bg-gray-500 text-white rounded text-sm"
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => handleToolAction('formatBlock', 'h2')}
          className="px-2 py-1 bg-gray-600 hover:bg-gray-500 text-white rounded text-sm"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => handleToolAction('insertUnorderedList')}
          className="px-2 py-1 bg-gray-600 hover:bg-gray-500 text-white rounded text-sm"
        >
          •
        </button>
      </div>
      
      {/* Editor */}
      <div
        contentEditable
        className="p-4 text-white min-h-[200px] focus:outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-gray-500"
        dangerouslySetInnerHTML={{ __html: value }}
        onInput={handleChange}
        data-placeholder={placeholder}
      />
    </div>
  );
}