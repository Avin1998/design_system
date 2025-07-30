import React, { useState } from 'react';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';
import './MentorBubble.css';

export default function MentorBubble({
  isVisible = true,
  onToggle,
  className = ''
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'mentor',
      content: "Hi! I'm your AI mentor. I'm here to help you with system design questions. What would you like to know?",
      timestamp: Date.now()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    // Don't call onToggle when just opening/closing the chat
    // The mentor bubble should always stay visible
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate mentor response
    setTimeout(() => {
      const mentorResponse = {
        id: Date.now() + 1,
        type: 'mentor',
        content: getMentorResponse(inputValue),
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, mentorResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getMentorResponse = (userInput) => {
    const responses = [
      "That's a great question! Let me help you think through this systematically.",
      "For this type of system, you should consider scalability, consistency, and performance trade-offs.",
      "Remember to think about both functional and non-functional requirements when designing systems.",
      "Consider breaking down the problem into smaller components and thinking about how they interact.",
      "Don't forget to estimate capacity and consider bottlenecks in your design!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`mentor-bubble ${className}`}>
      {/* Mentor Avatar/Toggle */}
      <div className="mentor-avatar" onClick={handleToggle}>
        <Icon name="mentor" size={24} variant="mentor" className="mentor-icon" />
        {!isOpen && (
          <div className="mentor-notification">
            <Icon name="chat" size={12} />
          </div>
        )}
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="mentor-chat">
          <div className="mentor-chat-header">
            <div className="mentor-info">
              <Icon name="mentor" size={16} variant="mentor" />
              <span>AI Mentor</span>
              <div className="mentor-status">Online</div>
            </div>
            <Button 
              variant="minimal"
              onClick={handleToggle}
              className="close-chat-button"
            >
              ×
            </Button>
          </div>

          <div className="mentor-chat-messages">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`chat-message chat-message-${message.type}`}
              >
                {message.type === 'mentor' && (
                  <Icon name="mentor" size={14} variant="mentor" className="message-avatar" />
                )}
                <div className="message-content">
                  {message.content}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="chat-message chat-message-mentor">
                <Icon name="mentor" size={14} variant="mentor" className="message-avatar" />
                <div className="message-content typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          <div className="mentor-chat-input">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about system design..."
              rows={2}
              className="chat-textarea"
            />
            <Button
              variant="primary"
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="send-button"
            >
              <Icon name="continue" size={14} />
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="mentor-quick-actions">
            <Button
              variant="minimal"
              onClick={() => setInputValue("Help me with functional requirements")}
              className="quick-action"
            >
              Functional Req
            </Button>
            <Button
              variant="minimal"
              onClick={() => setInputValue("How do I estimate capacity?")}
              className="quick-action"
            >
              Capacity
            </Button>
            <Button
              variant="minimal"
              onClick={() => setInputValue("Architecture patterns?")}
              className="quick-action"
            >
              Architecture
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}