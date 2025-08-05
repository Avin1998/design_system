import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmailLandingSection from '../components/organisms/EmailLandingSection';

export default function EmailLandingPage() {
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    switch (option) {
      case 'gmail':
        navigate('/email/gmail-composer');
        break;
      case 'ai-pro':
        navigate('/email/ai-pro-flow');
        break;
      default:
        console.log('Unknown option:', option);
    }
  };

  return (
    <div className="email-landing-page">
      <EmailLandingSection onOptionSelect={handleOptionSelect} />
    </div>
  );
}