import React, { useState } from 'react';
import Input from '../atoms/Input';
import RichTextEditor from '../atoms/RichTextEditor';
import FileUpload from '../atoms/FileUpload';
import Button from '../atoms/Button';
import './EmailComposer.css';

export default function EmailComposer({ 
  to = '',
  from = '',
  subject = '',
  body = '',
  attachments = [],
  templates = [],
  onSend,
  onSave,
  onSendAndContinue,
  onTemplateSelect,
  onChange,
  className = '' 
}) {
  const [formData, setFormData] = useState({
    to,
    from, 
    subject,
    body
  });
  const [selectedAttachments, setSelectedAttachments] = useState(attachments);

  const handleInputChange = (field, value) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    if (onChange) {
      onChange(newData);
    }
  };

  const handleFileSelect = (files) => {
    const fileArray = Array.isArray(files) ? files : [files];
    const newAttachments = [...selectedAttachments, ...fileArray];
    setSelectedAttachments(newAttachments);
  };

  const removeAttachment = (index) => {
    const newAttachments = selectedAttachments.filter((_, i) => i !== index);
    setSelectedAttachments(newAttachments);
  };

  const handleTemplateSelect = (template) => {
    setFormData({
      ...formData,
      subject: template.subject,
      body: template.body
    });
    if (onTemplateSelect) {
      onTemplateSelect(template);
    }
  };

  const handleSend = () => {
    if (onSend) {
      onSend({ ...formData, attachments: selectedAttachments });
    }
  };

  const handleSave = () => {
    if (onSave) {
      onSave({ ...formData, attachments: selectedAttachments });
    }
  };

  const handleSendAndContinue = () => {
    if (onSendAndContinue) {
      onSendAndContinue({ ...formData, attachments: selectedAttachments });
    }
  };

  return (
    <div className={`email-composer ${className}`}>
      <div className="composer-header">
        <h2 className="composer-title">Compose Email</h2>
        
        {templates && templates.length > 0 && (
          <div className="templates-section">
            <h3 className="templates-title">Templates</h3>
            <div className="templates-grid">
              {templates.map((template, index) => (
                <button
                  key={index}
                  className="template-btn"
                  onClick={() => handleTemplateSelect(template)}
                >
                  <span className="template-name">{template.name}</span>
                  <span className="template-preview">{template.subject}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="composer-form">
        <div className="form-row">
          <Input
            label="From"
            value={formData.from}
            onChange={(e) => handleInputChange('from', e.target.value)}
            disabled
            className="from-input"
          />
        </div>

        <div className="form-row">
          <Input
            label="To"
            value={formData.to}
            onChange={(e) => handleInputChange('to', e.target.value)}
            placeholder="recipient@example.com"
            className="to-input"
          />
        </div>

        <div className="form-row">
          <Input
            label="Subject"
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            placeholder="Enter email subject"
            className="subject-input"
          />
        </div>

        <div className="form-row">
          <label className="field-label">Message</label>
          <RichTextEditor
            value={formData.body}
            onChange={(value) => handleInputChange('body', value)}
            placeholder="Compose your email..."
          />
        </div>

        <div className="form-row">
          <label className="field-label">Attachments</label>
          <div className="attachments-section">
            <FileUpload onFileSelect={handleFileSelect} multiple>
              <div className="upload-area">
                <span className="upload-icon">📎</span>
                <span>Click to attach files</span>
              </div>
            </FileUpload>
            
            {selectedAttachments.length > 0 && (
              <div className="attachments-list">
                {selectedAttachments.map((file, index) => (
                  <div key={index} className="attachment-item">
                    <span className="attachment-name">{file.name}</span>
                    <button
                      className="remove-attachment"
                      onClick={() => removeAttachment(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="composer-actions">
          <Button variant="primary" onClick={handleSend}>
            Send
          </Button>
          <Button variant="secondary" onClick={handleSave}>
            Save Draft
          </Button>
          <Button variant="secondary" onClick={handleSendAndContinue}>
            Send & Continue
          </Button>
        </div>
      </div>
    </div>
  );
}