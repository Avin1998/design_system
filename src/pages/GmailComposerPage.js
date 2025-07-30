import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailComposer from '../components/molecules/EmailComposer';
import Button from '../components/atoms/Button';
import Container from '../components/atoms/Container';
import './GmailComposerPage.css';

export default function GmailComposerPage() {
  const navigate = useNavigate();
  const [isOAuthConnected] = useState(false); // Mock OAuth state
  
  // Mock templates
  const templates = [
    {
      name: "Job Application",
      subject: "Application for [Position Name]",
      body: "Dear Hiring Manager,<br><br>I am writing to express my interest in the [Position Name] role at your company. With my background in [Your Field], I believe I would be a valuable addition to your team.<br><br>Please find my resume attached for your review.<br><br>Best regards,<br>[Your Name]"
    },
    {
      name: "Follow Up",
      subject: "Following up on our conversation",
      body: "Hi [Name],<br><br>I wanted to follow up on our recent conversation about [Topic]. I'm very interested in moving forward and would love to discuss next steps.<br><br>Please let me know when you're available to chat.<br><br>Best regards,<br>[Your Name]"
    },
    {
      name: "Networking",
      subject: "Great meeting you at [Event]",
      body: "Hi [Name],<br><br>It was great meeting you at [Event] yesterday. I really enjoyed our conversation about [Topic].<br><br>I'd love to stay in touch and perhaps explore opportunities to collaborate.<br><br>Best regards,<br>[Your Name]"
    },
    {
      name: "Thank You",
      subject: "Thank you for your time",
      body: "Dear [Name],<br><br>Thank you for taking the time to speak with me about [Topic]. I found our conversation very insightful.<br><br>I look forward to staying in touch.<br><br>Best regards,<br>[Your Name]"
    }
  ];

  const handleSend = (emailData) => {
    if (!isOAuthConnected) {
      alert('Please connect your Gmail account first to send emails.');
      return;
    }
    console.log('Sending email:', emailData);
    alert('Email sent successfully!');
  };

  const handleSave = (emailData) => {
    console.log('Saving draft:', emailData);
    alert('Draft saved successfully!');
  };

  const handleSendAndContinue = (emailData) => {
    if (!isOAuthConnected) {
      alert('Please connect your Gmail account first to send emails.');
      return;
    }
    console.log('Sending email and continuing:', emailData);
    alert('Email sent! You can compose another one.');
    // Reset form or navigate to new composer
  };

  const connectGmail = () => {
    // Mock OAuth flow
    alert('OAuth flow would be initiated here. For demo purposes, this would redirect to Gmail authorization.');
  };

  return (
    <div className="gmail-composer-page">
      <div className="page-header">
        <div className="header-content">
          <Button 
            variant="back" 
            onClick={() => navigate('/email')}
            className="back-btn"
          >
            Back to Email Hub
          </Button>
          
          <div className="header-info">
            <h1 className="page-title">Gmail Composer</h1>
            <div className="oauth-status">
              {isOAuthConnected ? (
                <div className="connected-status">
                  <span className="status-indicator connected"></span>
                  Gmail Connected
                </div>
              ) : (
                <div className="disconnected-status">
                  <span className="status-indicator disconnected"></span>
                  <span>Gmail Not Connected</span>
                  <Button 
                    variant="integration" 
                    icon="📧"
                    subtitle="Connect your account"
                    onClick={connectGmail}
                    className="connect-btn"
                  >
                    Connect Gmail
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Container maxWidth="wide" padding="spacious">
        <EmailComposer
          from="your.email@gmail.com"
          templates={templates}
          onSend={handleSend}
          onSave={handleSave}
          onSendAndContinue={handleSendAndContinue}
          onTemplateSelect={(template) => {
            console.log('Template selected:', template);
          }}
        />
      </Container>
    </div>
  );
}