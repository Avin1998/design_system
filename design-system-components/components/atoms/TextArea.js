import React, { useState, useRef } from 'react';
import { FiMic, FiMicOff } from 'react-icons/fi';
import './TextArea.css';

export default function TextArea({ 
  placeholder, 
  value, 
  onChange, 
  rows = 4, 
  maxLength,
  className = '',
  enableSpeechToText = false,
  ...props 
}) {
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const recognitionRef = useRef(null);

  // Initialize speech recognition
  React.useEffect(() => {
    if (!enableSpeechToText) return;
    
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';
      
      recognitionRef.current.onstart = () => {
        setIsListening(true);
      };
      
      recognitionRef.current.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }
        
        if (finalTranscript) {
          const currentValue = value || '';
          const newValue = currentValue + (currentValue ? ' ' : '') + finalTranscript.trim();
          
          // Create synthetic event for onChange
          const syntheticEvent = {
            target: { value: newValue }
          };
          onChange(syntheticEvent);
        }
      };
      
      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    } else {
      setSpeechSupported(false);
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [enableSpeechToText, value, onChange]);

  const toggleSpeechRecognition = () => {
    if (!recognitionRef.current || !speechSupported) return;
    
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

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
        
        {enableSpeechToText && speechSupported && (
          <button
            type="button"
            className={`speech-button ${isListening ? 'listening' : ''}`}
            onClick={toggleSpeechRecognition}
            title={isListening ? 'Stop recording' : 'Start speech-to-text'}
          >
            {isListening ? <FiMicOff /> : <FiMic />}
          </button>
        )}
      </div>
      
      {maxLength && (
        <div className="textarea-counter">
          {value?.length || 0}/{maxLength}
        </div>
      )}
      
      {enableSpeechToText && isListening && (
        <div className="speech-status">
          🎤 Listening... Speak now
        </div>
      )}
    </div>
  );
}