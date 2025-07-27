import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import FileUpload from '../components/atoms/FileUpload';
import LoadingSpinner from '../components/atoms/LoadingSpinner';
import ProBadge from '../components/atoms/ProBadge';
import './AIProFlowPage.css';

export default function AIProFlowPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isOAuthConnected] = useState(false);
  
  const [formData, setFormData] = useState({
    numRecruiters: 1,
    recruiters: [{ email: '', linkedinUrl: '' }],
    resume: null
  });
  
  const [generatedEmails, setGeneratedEmails] = useState([]);

  const updateRecruiterCount = (count) => {
    const newCount = Math.min(Math.max(1, count), 5);
    const recruiters = [...formData.recruiters];
    
    if (newCount > recruiters.length) {
      // Add new recruiters
      for (let i = recruiters.length; i < newCount; i++) {
        recruiters.push({ email: '', linkedinUrl: '' });
      }
    } else {
      // Remove extra recruiters
      recruiters.splice(newCount);
    }
    
    setFormData({
      ...formData,
      numRecruiters: newCount,
      recruiters
    });
  };

  const updateRecruiter = (index, field, value) => {
    const recruiters = [...formData.recruiters];
    recruiters[index] = { ...recruiters[index], [field]: value };
    setFormData({ ...formData, recruiters });
  };

  const handleResumeUpload = (file) => {
    setFormData({ ...formData, resume: file });
  };

  const generateEmails = async () => {
    setIsLoading(true);
    setCurrentStep(3);
    
    // Simulate AI email generation
    setTimeout(() => {
      const mockEmails = formData.recruiters.map((recruiter, index) => ({
        id: index + 1,
        to: recruiter.email,
        from: 'your.email@gmail.com',
        subject: `Application for Software Developer Position - ${new Date().toLocaleDateString()}`,
        preview: `Dear Hiring Manager, I am writing to express my strong interest in the Software Developer position at your company...`,
        fullContent: `Dear Hiring Manager,

I am writing to express my strong interest in the Software Developer position at your company. With my background in full-stack development and passion for innovative technology solutions, I believe I would be a valuable addition to your team.

${recruiter.linkedinUrl ? `I was particularly impressed by your recent post about ${Math.random() > 0.5 ? 'company culture' : 'technical innovation'} on LinkedIn, which aligns perfectly with my professional values.` : ''}

My experience includes:
• 3+ years of React and Node.js development
• Strong background in database design and optimization
• Experience with cloud platforms and DevOps practices
• Excellent problem-solving and communication skills

I have attached my resume for your review and would welcome the opportunity to discuss how my skills and enthusiasm can contribute to your team's success.

Thank you for your time and consideration. I look forward to hearing from you.

Best regards,
[Your Name]`,
        expanded: false,
        canSend: isOAuthConnected
      }));
      
      setGeneratedEmails(mockEmails);
      setIsLoading(false);
      setCurrentStep(4);
    }, 3000);
  };

  const toggleEmailExpansion = (emailId) => {
    setGeneratedEmails(emails => 
      emails.map(email => 
        email.id === emailId 
          ? { ...email, expanded: !email.expanded }
          : email
      )
    );
  };

  const sendEmail = (emailId) => {
    if (!isOAuthConnected) {
      alert('OAuth connection required to send emails. Please connect your Gmail account first.');
      return;
    }
    
    const email = generatedEmails.find(e => e.id === emailId);
    console.log('Sending email:', email);
    alert(`Email sent to ${email.to} successfully!`);
  };

  const connectOAuth = () => {
    alert('OAuth flow would be initiated here. For demo purposes, this would redirect to Gmail authorization.');
  };

  const renderStep1 = () => (
    <div className="step-content">
      <div className="step-header">
        <h2 className="step-title">How many recruiters?</h2>
        <p className="step-description">You can send personalized emails to up to 5 recruiters simultaneously.</p>
      </div>
      
      <div className="recruiter-count-selector">
        <div className="count-controls">
          <button 
            className="count-btn"
            onClick={() => updateRecruiterCount(formData.numRecruiters - 1)}
            disabled={formData.numRecruiters <= 1}
          >
            -
          </button>
          <span className="count-display">{formData.numRecruiters}</span>
          <button 
            className="count-btn"
            onClick={() => updateRecruiterCount(formData.numRecruiters + 1)}
            disabled={formData.numRecruiters >= 5}
          >
            +
          </button>
        </div>
        <p className="count-label">Recruiters</p>
      </div>
      
      <div className="step-actions">
        <Button variant="primary" onClick={() => setCurrentStep(2)}>
          Continue
        </Button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="step-content">
      <div className="step-header">
        <h2 className="step-title">Recruiter Details</h2>
        <p className="step-description">Provide email addresses and optional LinkedIn profiles for personalization.</p>
      </div>
      
      <div className="recruiters-form">
        {formData.recruiters.map((recruiter, index) => (
          <div key={index} className="recruiter-form-group">
            <h4 className="recruiter-label">Recruiter {index + 1}</h4>
            <div className="recruiter-inputs">
              <Input
                label="Email Address"
                value={recruiter.email}
                onChange={(e) => updateRecruiter(index, 'email', e.target.value)}
                placeholder="recruiter@company.com"
                required
              />
              <Input
                label="LinkedIn Profile (Optional)"
                value={recruiter.linkedinUrl}
                onChange={(e) => updateRecruiter(index, 'linkedinUrl', e.target.value)}
                placeholder="https://linkedin.com/in/recruiter-name"
              />
            </div>
          </div>
        ))}
        
        <div className="resume-upload-section">
          <h4 className="resume-label">Upload Resume</h4>
          <FileUpload 
            onFileSelect={handleResumeUpload}
            accept=".pdf,.doc,.docx"
          >
            <div className="resume-upload-area">
              {formData.resume ? (
                <div className="resume-selected">
                  <span className="file-icon">📄</span>
                  <span className="file-name">{formData.resume.name}</span>
                </div>
              ) : (
                <div className="resume-placeholder">
                  <span className="upload-icon">📄</span>
                  <span>Click to upload resume</span>
                  <span className="file-types">PDF, DOC, DOCX</span>
                </div>
              )}
            </div>
          </FileUpload>
        </div>
      </div>
      
      <div className="step-actions">
        <Button variant="secondary" onClick={() => setCurrentStep(1)}>
          Back
        </Button>
        <Button 
          variant="primary" 
          onClick={generateEmails}
          disabled={!formData.recruiters.every(r => r.email) || !formData.resume}
        >
          Generate Emails
        </Button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="step-content loading-step">
      <LoadingSpinner size="large" text="Generating personalized emails..." />
      <p className="loading-description">
        Our AI is analyzing your resume and creating personalized emails for each recruiter. 
        This may take a few moments.
      </p>
    </div>
  );

  const renderStep4 = () => (
    <div className="step-content">
      <div className="step-header">
        <h2 className="step-title">Generated Emails</h2>
        <p className="step-description">Review and send your personalized emails to recruiters.</p>
        
        {!isOAuthConnected && (
          <div className="oauth-warning">
            <span className="warning-icon">⚠️</span>
            <span>Gmail connection required to send emails.</span>
            <Button variant="primary" size="small" onClick={connectOAuth}>
              Connect Gmail
            </Button>
          </div>
        )}
      </div>
      
      <div className="emails-table">
        <div className="table-header">
          <span className="header-from">From</span>
          <span className="header-to">To</span>
          <span className="header-subject">Subject</span>
          <span className="header-preview">Preview</span>
          <span className="header-actions">Actions</span>
        </div>
        
        {generatedEmails.map((email) => (
          <div key={email.id} className="email-row">
            <span className="email-from">{email.from}</span>
            <span className="email-to">{email.to}</span>
            <span className="email-subject">{email.subject}</span>
            <span className="email-preview">
              {email.expanded ? (
                <div className="full-content">
                  <pre>{email.fullContent}</pre>
                </div>
              ) : (
                <span className="preview-text">{email.preview}</span>
              )}
            </span>
            <div className="email-actions">
              <Button 
                variant="secondary" 
                size="small"
                onClick={() => toggleEmailExpansion(email.id)}
              >
                {email.expanded ? 'Collapse' : 'Expand'}
              </Button>
              <Button 
                variant="primary" 
                size="small"
                onClick={() => sendEmail(email.id)}
                disabled={!email.canSend}
                title={!email.canSend ? 'Requires OAuth connection' : 'Send email'}
              >
                Send
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="step-actions">
        <Button variant="secondary" onClick={() => navigate('/email')}>
          Back to Email Hub
        </Button>
        <Button 
          variant="primary" 
          onClick={() => {
            const allSent = generatedEmails.every(email => email.canSend);
            if (allSent && isOAuthConnected) {
              alert('All emails sent successfully!');
              navigate('/email');
            } else {
              alert('Please connect Gmail to send all emails.');
            }
          }}
          disabled={!isOAuthConnected}
        >
          Send All
        </Button>
      </div>
    </div>
  );

  return (
    <div className="ai-pro-flow-page">
      <div className="page-header">
        <div className="header-content">
          <Button 
            variant="secondary" 
            onClick={() => navigate('/email')}
            className="back-btn"
          >
            ← Back to Email Hub
          </Button>
          
          <div className="header-info">
            <div className="title-section">
              <h1 className="page-title">AI Email Pipeline</h1>
              <ProBadge size="medium" />
            </div>
            <div className="step-indicator">
              Step {currentStep} of 4
            </div>
          </div>
        </div>
      </div>

      <div className="flow-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(currentStep / 4) * 100}%` }}
          ></div>
        </div>
        
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderStep4()}
      </div>
    </div>
  );
}