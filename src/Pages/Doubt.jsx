import React, { useState } from 'react';
import axios from 'axios';
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

  async function sendMessage() {
    const userMessage = userInput.trim();
    if (!userMessage) return;

    displayMessage('You', userMessage);
    setIsLoading(true);

    try {
      const chatResponse = await chatWithHuggingFace(userMessage);
      console.log('Chat Response:', chatResponse);
      displayMessage('AI', chatResponse);
    } catch (error) {
      console.error('Error in sendMessage:', error);
      displayMessage('AI', `Error: ${error.message}`);
    } finally {
      setIsLoading(false);
      setUserInput('');
    }
  }

  async function chatWithHuggingFace(prompt) {
    const apiKey = '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';
    const apiUrl = 'https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1';

    console.log('Making API request to:', apiUrl);
    console.log('Using API key:', apiKey);

    try {
      const response = await axios.post(
        apiUrl,
        {
          inputs: `You are a helpful assistant. Answer this: ${prompt}`,
          parameters: {
            max_new_tokens: 150,
            return_full_text: false,
            temperature: 0.7,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            Accept: 'application/json',
          },
          timeout: 30000,
        }
      );

      console.log('Raw API Response:', response.data);

      if (response.data && Array.isArray(response.data) && response.data[0]?.generated_text) {
        return response.data[0].generated_text.trim();
      }
      return 'No valid response received from the AI model';
    } catch (error) {
      if (error.response) {
        console.error('API Response Error:', error.response.status, error.response.data);
        if (error.response.status === 404) {
          throw new Error('Model not found. The requested AI model may not be available.');
        }
        throw new Error(`API Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        console.error('Network Error:', error.message);
        throw new Error('Network error: Please check your internet connection');
      } else {
        console.error('Unexpected Error:', error.message);
        throw new Error('An unexpected error occurred');
      }
    }
  }

  function displayMessage(sender, message) {
    setChatMessages((prevMessages) => [...prevMessages, { sender, message }]);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' && !isLoading) {
      sendMessage();
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-messages" id="chat-messages">
        {chatMessages.map((message, index) => (
          <div key={index} className="chat-message">
            <strong>{message.sender}:</strong>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.message}</ReactMarkdown>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          className="chat-input"
          id="user-input"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <button className="send-button" onClick={sendMessage} disabled={isLoading}>
          <img src={sendIcon} alt="Send" className="senddoubt" />
        </button>
      </div>
      {isLoading && <div className="loading">Processing...</div>}
    </div>
  );
}

export default Doubt;