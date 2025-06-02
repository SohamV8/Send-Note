import React, { useState, useRef, useEffect } from 'react';

const AIChat = ({ pdfContent }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I can help you understand this document better. What would you like to know?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateResponse = async (userMessage) => {
    // Simulate AI thinking
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simple response generation based on keywords
    let response = '';
    const lowercaseMessage = userMessage.toLowerCase();
    
    if (lowercaseMessage.includes('summary')) {
      response = "This document appears to be about [topic]. The main points discussed are...";
    } else if (lowercaseMessage.includes('explain')) {
      response = "Let me break that down for you...";
    } else if (lowercaseMessage.includes('key points')) {
      response = "The key points from this document are: 1)... 2)... 3)...";
    } else {
      response = "I understand you're asking about " + userMessage + ". Based on the document...";
    }

    setIsTyping(false);
    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Get AI response
    const response = await simulateResponse(input);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
  };

  return (
    <div className="ai-chat">
      <div className="chat-header">
        <h3>AI Assistant</h3>
        <span className="ai-status">Online</span>
      </div>

      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
          >
            <div className="message-content">
              {message.role === 'assistant' && (
                <div className="assistant-avatar">🤖</div>
              )}
              <p>{message.content}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="message assistant-message">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about the document..."
        />
        <button type="submit" disabled={!input.trim()}>
          <span className="send-icon">📤</span>
        </button>
      </form>
    </div>
  );
};

export default AIChat; 