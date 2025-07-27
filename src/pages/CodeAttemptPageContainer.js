import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CodeAttemptPage from '../components/organisms/CodeAttemptPage';

export default function CodeAttemptPageContainer() {
  const { problemId } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  const handleSubmit = () => {
    alert('Solution submitted! Redirecting to track view...');
    navigate(-1);
  };

  const handleRun = () => {
    // This will be handled within the CodeAttemptPage component
  };

  return (
    <CodeAttemptPage 
      onBack={handleBack}
      onSubmit={handleSubmit}
      onRun={handleRun}
    />
  );
}