import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Button from '../components/atoms/Button';
import RequirementQuestion from '../components/molecules/RequirementQuestion';
import { systemDesignTracks } from '../data/systemDesignTracks';
import { systemDesignQuestions } from '../data/systemDesignQuestions';
import type { SystemDesignTrack } from '../data/systemDesignTracks';
import type { SystemDesignQuestion } from '../data/systemDesignQuestions';

const SystemDesignRequirementsPageBackup: React.FC = () => {
  const { trackId } = useParams<{ trackId: string }>();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  const track = systemDesignTracks.find((t: SystemDesignTrack) => t.id === trackId);
  const questions = systemDesignQuestions[trackId as keyof typeof systemDesignQuestions] || systemDesignQuestions.default;

  useEffect(() => {
    // Initialize answers object
    const initialAnswers: Record<string, string> = {};
    questions.forEach((q: SystemDesignQuestion) => {
      initialAnswers[q.id] = '';
    });
    setAnswers(initialAnswers);
  }, [questions]);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleContinue = () => {
    // Save answers to local storage or context
    localStorage.setItem(`requirements_${trackId}`, JSON.stringify(answers));
    
    // Navigate to design canvas
    navigate(`/system-design/canvas/${trackId}`);
  };

  const isComplete = questions.every((q: SystemDesignQuestion) => answers[q.id]?.trim().length > 0);

  if (!track) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-red-400 text-lg">Track not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Button 
            variant="secondary" 
            onClick={handleBack}
            className="flex items-center gap-2 mb-6"
          >
            <FiArrowLeft />
            Back
          </Button>
          
          <div>
            <h1 className="text-white text-3xl font-bold mb-3">{track.name}</h1>
            <p className="text-gray-400 text-lg">
              Define the requirements and constraints before designing the system
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-gray-300 text-sm font-medium mb-3">
              Requirements Gathering
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(Object.values(answers).filter(a => a.trim()).length / questions.length) * 100}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-2">
              {Object.values(answers).filter(a => a.trim()).length} of {questions.length} questions completed
            </div>
          </div>

          <div className="space-y-6">
            {questions.map((question: SystemDesignQuestion, index: number) => (
              <RequirementQuestion
                key={question.id}
                question={question.question}
                hint={question.hint}
                placeholder={question.placeholder}
                value={answers[question.id] || ''}
                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                index={index}
              />
            ))}
          </div>

          <div className="flex justify-end pt-8">
            <Button 
              variant="primary" 
              onClick={handleContinue}
              disabled={!isComplete}
              className="flex items-center gap-2 px-6 py-3 text-base font-semibold"
            >
              Design System
              <FiArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDesignRequirementsPageBackup;