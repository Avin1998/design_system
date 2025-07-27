import React from 'react';
import EmailOptionCard from '../molecules/EmailOptionCard';
import './EmailLandingSection.css';

export default function EmailLandingSection({ onOptionSelect }) {
  const gmailOption = {
    title: "Use Gmail",
    description: "Connect your Gmail account to compose and send emails normally. Access all your contacts and email history.",
    icon: "📧",
    requirements: [
      "Gmail OAuth authorization required",
      "Access to your Gmail account",
      "Internet connection"
    ],
    isPro: false
  };

  const aiProOption = {
    title: "AI Email Pipeline",
    description: "Generate personalized emails to up to 5 recruiters simultaneously using AI. Perfect for job applications and networking.",
    icon: "🤖",
    requirements: [
      "Pro subscription required",
      "Resume upload needed",
      "OAuth for sending emails"
    ],
    isPro: true
  };

  return (
    <div className="email-landing-section">
      <div className="section-header">
        <h1 className="section-title">Email Automation Hub</h1>
        <p className="section-subtitle">
          Choose your preferred email workflow. Connect with Gmail for standard emailing 
          or upgrade to Pro for AI-powered recruiting outreach.
        </p>
      </div>

      <div className="options-grid">
        <EmailOptionCard
          {...gmailOption}
          onClick={() => onOptionSelect('gmail')}
          className="gmail-option"
        />
        
        <EmailOptionCard
          {...aiProOption}
          onClick={() => onOptionSelect('ai-pro')}
          className="ai-pro-option"
        />
      </div>

      <div className="feature-comparison">
        <h3 className="comparison-title">Feature Comparison</h3>
        <div className="comparison-table">
          <div className="comparison-row">
            <div className="feature-name">Email Composition</div>
            <div className="gmail-feature">✓ Full Gmail Interface</div>
            <div className="pro-feature">✓ AI-Generated Content</div>
          </div>
          <div className="comparison-row">
            <div className="feature-name">Recipients</div>
            <div className="gmail-feature">One at a time</div>
            <div className="pro-feature">Up to 5 simultaneously</div>
          </div>
          <div className="comparison-row">
            <div className="feature-name">Personalization</div>
            <div className="gmail-feature">Manual</div>
            <div className="pro-feature">AI-powered with LinkedIn data</div>
          </div>
          <div className="comparison-row">
            <div className="feature-name">Templates</div>
            <div className="gmail-feature">Basic templates</div>
            <div className="pro-feature">AI-customized per recipient</div>
          </div>
        </div>
      </div>
    </div>
  );
}