import React, { useState, useRef, useEffect } from 'react';

export default function RichTextEditor({ 
  value = '', 
  onChange, 
  placeholder = 'Compose your email...',
  className = '' 
}) {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const editorRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize content only once to prevent cursor jumping
  useEffect(() => {
    if (editorRef.current && !isInitialized && value) {
      editorRef.current.innerHTML = value;
      setIsInitialized(true);
    }
  }, [value, isInitialized]);

  const handleFormat = (command, value = null) => {
    document.execCommand(command, false, value);
    
    // Update button states
    setIsBold(document.queryCommandState('bold'));
    setIsItalic(document.queryCommandState('italic'));
    setIsUnderline(document.queryCommandState('underline'));
  };

  const handleContentChange = (e) => {
    if (onChange) {
      onChange(e.target.innerHTML);
    }
  };

  // Handle selection change to update button states
  const handleSelectionChange = () => {
    if (document.activeElement === editorRef.current) {
      setIsBold(document.queryCommandState('bold'));
      setIsItalic(document.queryCommandState('italic'));
      setIsUnderline(document.queryCommandState('underline'));
    }
  };

  useEffect(() => {
    document.addEventListener('selectionchange', handleSelectionChange);
    return () => document.removeEventListener('selectionchange', handleSelectionChange);
  }, []);

  return (
    <div className={`rich-text-editor ${className}`}>
      <div className="toolbar">
        <div className="format-group">
          <button
            type="button"
            className={`format-btn ${isBold ? 'active' : ''}`}
            onClick={() => handleFormat('bold')}
            title="Bold"
          >
            <strong>B</strong>
          </button>
          <button
            type="button"
            className={`format-btn ${isItalic ? 'active' : ''}`}
            onClick={() => handleFormat('italic')}
            title="Italic"
          >
            <em>I</em>
          </button>
          <button
            type="button"
            className={`format-btn ${isUnderline ? 'active' : ''}`}
            onClick={() => handleFormat('underline')}
            title="Underline"
          >
            <u>U</u>
          </button>
        </div>
        
        <div className="format-group">
          <button
            type="button"
            className="format-btn"
            onClick={() => handleFormat('insertUnorderedList')}
            title="Bullet List"
          >
            • List
          </button>
          <button
            type="button"
            className="format-btn"
            onClick={() => handleFormat('insertOrderedList')}
            title="Numbered List"
          >
            1. List
          </button>
        </div>

        <div className="format-group">
          <select 
            className="font-select"
            onChange={(e) => handleFormat('fontName', e.target.value)}
            defaultValue="Arial"
          >
            <option value="Arial">Arial</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
          </select>
        </div>
      </div>

      <div
        ref={editorRef}
        className="editor-content"
        contentEditable
        onInput={handleContentChange}
        data-placeholder={placeholder}
        suppressContentEditableWarning={true}
      />
    </div>
  );
}