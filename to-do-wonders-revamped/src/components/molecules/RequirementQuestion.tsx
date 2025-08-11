import React from 'react';
import TextArea from '../atoms/TextArea';
import HintDisplay from '../atoms/HintDisplay';

interface RequirementQuestionProps {
  question: string;
  hint?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  index: number;
  className?: string;
}

const RequirementQuestion: React.FC<RequirementQuestionProps> = ({
  question,
  hint,
  placeholder,
  value,
  onChange,
  index,
  className = ''
}) => {
  return (
    <div className={`bg-white/[0.03] border border-white/10 rounded-xl p-6 mb-6 transition-all duration-300 hover:bg-white/5 hover:border-white/15 ${className}`}>
      <div className="flex items-start gap-4 mb-5">
        <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-0.5">
          {index + 1}
        </div>
        <h3 className="text-white text-lg font-semibold m-0 leading-relaxed">{question}</h3>
      </div>
      
      <TextArea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={6}
        maxLength={2000}
        enableSpeechToText={true}
      />
      
      {hint && <HintDisplay hint={hint} />}
    </div>
  );
};

export default RequirementQuestion;