import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './doubt.css';
import sendIcon from '../assets/send.png';

function Doubt() {
  const [chatMessages, setChatMessages] = useState([
    { sender: 'AI', message: 'Hello! How can I help you today?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatMessages]);

  async function sendMessage() {
    const userMessage = userInput.trim();
    if (!userMessage) return;

    setError(null);
    displayMessage('You', userMessage);
    setIsLoading(true);

    try {
      const chatResponse = await mockAIResponse(userMessage);
      displayMessage('AI', chatResponse);
    } catch (error) {
      console.error('Error in sendMessage:', error);
      setError(error.message);
      displayMessage('AI', 'I encountered an error. Please try again later.');
    } finally {
      setIsLoading(false);
      setUserInput('');
    }
  }

  // 🔁 Mock AI response (no API key required)
  async function mockAIResponse(prompt) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`You asked: "${prompt}". This is a dummy AI response.`);
      }, 1000); // Simulate delay
    });
  }

  function displayMessage(sender, message) {
    setChatMessages((prevMessages) => [...prevMessages, { sender, message }]);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' && !isLoading && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="chat-container">
      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}
      <div className="chat-messages" ref={chatMessagesRef} aria-live="polite">
        {chatMessages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.sender === 'You' ? 'user-message' : 'ai-message'}`}
          >
            <strong>{message.sender}:</strong>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.message}</ReactMarkdown>
          </div>
        ))}
      </div>
      <div className="input-container flex">
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          aria-label="Type your message"
        />
        <button
          className="send-button"
          onClick={sendMessage}
          disabled={isLoading}
          aria-label="Send message"
        >
          <img src={sendIcon} alt="Send" className="send-icon" />
        </button>
      </div>
      {isLoading && <div className="loading" role="status">Processing...</div>}
    </div>
  );
}

export default Doubt;
