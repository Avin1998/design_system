import React, { useState, useRef, useEffect } from 'react';
import { FiMic, FiMicOff } from 'react-icons/fi';

interface TextAreaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  maxLength?: number;
  className?: string;
  enableSpeechToText?: boolean;
  [key: string]: any;
}

// Extend window interface for speech recognition
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export default function TextArea({ 
  placeholder, 
  value, 
  onChange, 
  rows = 4, 
  maxLength,
  className = '',
  enableSpeechToText = false,
  ...props 
}: TextAreaProps) {
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const recognitionRef = useRef<any>(null);

  // Initialize speech recognition
  useEffect(() => {
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
      
      recognitionRef.current.onresult = (event: any) => {
        let finalTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          }
        }
        
        if (finalTranscript && onChange) {
          const currentValue = value || '';
          const newValue = currentValue + (currentValue ? ' ' : '') + finalTranscript.trim();
          
          // Create synthetic event for onChange
          const syntheticEvent = {
            target: { value: newValue }
          } as React.ChangeEvent<HTMLTextAreaElement>;
          onChange(syntheticEvent);
        }
      };
      
      recognitionRef.current.onerror = (event: any) => {
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
    <div className={`${className}`}>
      <div className="relative">
        <textarea
          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-vertical
                     transition-colors duration-200"
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
            className={`
              absolute top-3 right-3 p-2 rounded-md transition-all duration-200
              ${isListening 
                ? 'bg-red-500 text-white animate-pulse' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }
            `}
            onClick={toggleSpeechRecognition}
            title={isListening ? 'Stop recording' : 'Start speech-to-text'}
          >
            {isListening ? <FiMicOff size={16} /> : <FiMic size={16} />}
          </button>
        )}
      </div>
      
      {maxLength && (
        <div className="text-right text-xs text-gray-400 mt-1">
          {value?.length || 0}/{maxLength}
        </div>
      )}
      
      {enableSpeechToText && isListening && (
        <div className="text-sm text-blue-400 mt-2 flex items-center gap-2">
          🎤 Listening... Speak now
        </div>
      )}
    </div>
  );
}