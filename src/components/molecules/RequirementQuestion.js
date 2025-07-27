import React from 'react';
import TextArea from '../atoms/TextArea';
import HintDisplay from '../atoms/HintDisplay';
import './RequirementQuestion.css';

export default function RequirementQuestion({
  question,
  hint,
  placeholder,
  value,
  onChange,
  index,
  className = ''
}) {
  return (
    <div className={`requirement-question ${className}`}>
      <div className="question-header">
        <div className="question-number">{index + 1}</div>
        <h3 className="question-title">{question}</h3>
      </div>
      
      <TextArea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={6}
        maxLength={2000}
        enableSpeechToText={true}
      />
      
      <HintDisplay hint={hint} />
    </div>
  );
}