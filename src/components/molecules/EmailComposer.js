import React, { useState } from 'react';
import InputField from '../atoms/InputField';
import RichTextEditor from '../atoms/RichTextEditor';
import FileUpload from '../atoms/FileUpload';
import Button from '../atoms/Button';

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
      <div className="composer-layout">
        {/* Sidebar with templates */}
        {templates && templates.length > 0 && (
          <div className="templates-sidebar">
            <div className="sidebar-header">
              <h3 className="templates-title">Quick Templates</h3>
              <p className="templates-subtitle">Click to use</p>
            </div>
            <div className="templates-list">
              {templates.map((template, index) => (
                <button
                  key={index}
                  className="template-card"
                  onClick={() => handleTemplateSelect(template)}
                >
                  <div className="template-icon">📧</div>
                  <div className="template-info">
                    <span className="template-name">{template.name}</span>
                    <span className="template-preview">{template.subject}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main composer area */}
        <div className="composer-main">
          <div className="composer-header">
            <h2 className="composer-title">Compose Email</h2>
          </div>

          <div className="composer-form">
            <div className="form-row-group">
              <div className="form-row">
                <InputField
                  label="From"
                  value={formData.from}
                  onChange={(e) => handleInputChange('from', e.target.value)}
                  disabled
                  className="from-input"
                />
              </div>

              <div className="form-row">
                <InputField
                  label="To"
                  value={formData.to}
                  onChange={(e) => handleInputChange('to', e.target.value)}
                  placeholder="recipient@example.com"
                  type="email"
                  className="to-input"
                />
              </div>

              <div className="form-row">
                <InputField
                  label="Subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="Enter email subject"
                  className="subject-input"
                />
              </div>
            </div>

            <div className="form-row message-row">
              <label className="field-label">Message</label>
              <RichTextEditor
                value={formData.body}
                onChange={(value) => handleInputChange('body', value)}
                placeholder="Compose your email..."
              />
            </div>

            <div className="form-row attachments-row">
              <label className="field-label">Attachments</label>
              <div className="attachments-section">
                <FileUpload onFileSelect={handleFileSelect} multiple>
                  <div className="upload-area">
                    <span className="upload-icon">📎</span>
                    <span>Click to attach files or drag and drop</span>
                  </div>
                </FileUpload>
                
                {selectedAttachments.length > 0 && (
                  <div className="attachments-list">
                    {selectedAttachments.map((file, index) => (
                      <div key={index} className="attachment-item">
                        <span className="attachment-icon">📄</span>
                        <span className="attachment-name">{file.name}</span>
                        <button
                          className="remove-attachment"
                          onClick={() => removeAttachment(index)}
                          title="Remove attachment"
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
              <Button variant="primary" onClick={handleSend} className="send-btn">
                Send Email
              </Button>
              <Button variant="secondary" onClick={handleSave} className="save-btn">
                Save Draft
              </Button>
              <Button variant="secondary" onClick={handleSendAndContinue} className="continue-btn">
                Send & Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}