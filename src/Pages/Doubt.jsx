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

    async function sendMessage() {
        const userMessage = userInput.trim();

        if (userMessage !== '') {
            displayMessage('You', userMessage);

            try {
                const chatResponse = await chatWithGPT(userMessage);
                console.log('Chat Response:', chatResponse);
                displayMessage('AI', chatResponse);
            } catch (error) {
                console.error('Error in chatWithGPT:', error);
                displayMessage('AI', 'Sorry, there was an error processing your request.');
            }

            setUserInput('');
        }
    }

    async function chatWithGPT(prompt) {
        if (!process.env.REACT_APP_GOOGLE_API_KEY) {
            console.error('Google API key is missing');
            return 'Error: API key not found';
        }

        try {
            const response = await axios.post(
                'https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5-flash-latest:generateText',
                {
                    prompt: { text: prompt },
                    maxOutputTokens: 150
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${process.env.REACT_APP_GOOGLE_API_KEY}`
                    }
                }
            );
            return response.data?.candidates[0]?.output || 'No response generated';
        } catch (error) {
            console.error('Error in chatWithGPT:', error);
            throw error;
        }
    }

    function displayMessage(sender, message) {
        setChatMessages((prevMessages) => [...prevMessages, { sender, message }]);
    }

    function handleKeyDown(event) {
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
                    onKeyDown={handleKeyDown}
                />
                <button className="send-button" onClick={sendMessage}>
                    <img src={sendIcon} alt="Send" className="senddoubt" />
                </button>
            </div>
        </div>
    );
}

export default Doubt;
