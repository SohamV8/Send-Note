import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './doubt.css';
import sendIcon from '../assets/send.png';

function Doubt() {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    // Initial chat greeting after 2 seconds
    const initialGreeting = setTimeout(() => {
      displayMessage('AI', 'Hello! How can I help you today?');
    }, 2000);

    return () => clearTimeout(initialGreeting);
  }, []);

  async function sendMessage() {
    const userMessage = userInput.trim();

    if (userMessage !== '') {
      displayMessage('You ', userMessage);

      try {
        const chatResponse = await chatWithGPT(userMessage);
       
          console.log("Chat ",chatResponse);
          displayMessage('AI ', chatResponse);
        
        
      } catch (error) {
        console.error('Error in chatWithGPT:', error);
        displayMessage('AI ', 'Sorry, there was an error processing your request.');
      }

      setUserInput('');
    }
  }

  async function chatWithGPT(prompt) {
    
    try {
      const response = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAQK2Lz942PeArg70JE43pCTu8SayCqVvw",{"contents":[{"parts":[{"text":`${prompt}`}]}]});
      // const response = await axios.post(
      //   'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText', // Use the correct endpoint for Google AI Studio
      //   {
      //     prompt: { text: prompt },
      //     maxOutputTokens: 150, // Adjust tokens as needed
      //   },
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': `Bearer ${'AIzaSyAQK2Lz942PeArg70JE43pCTu8SayCqVvw'}`, // Include your Google API key
      //     },
      //   }
  
      // setChatMessages(response.data.candidates[0]?.output);
      console.log(response);
      console.log( response.data.candidates[0]?.content.parts[0].text);
      
        return response.data.candidates[0]?.content.parts[0].text ; // Adjust this path based on the response structure
      
      
  
      // return response.data.candidates[0]?.output || 'No response generated'; // Adjust this path based on the response structure
    } catch (error) {
      console.error('Error in chatWithGPT:', error);
      throw error;
    }
  }
  

  function displayMessage(sender, message) {
    setChatMessages((prevMessages) => [...prevMessages, { sender, message }]);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
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
          onKeyPress={handleKeyPress}
        />
        <button className="send-button" onClick={sendMessage}>
          <img src={sendIcon} alt="Send" className='senddoubt'/>
        </button>
      </div>
    </div>
  );
}

export default Doubt;
