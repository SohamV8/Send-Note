import React from 'react';
import './Instruction.css';
import { FaExclamationCircle, FaSearch, FaPenFancy } from 'react-icons/fa';

function Instruction() {
  return (
    <div className="instruction-wrapper">
      <div className="instructions">
        <h2>Instructions:</h2>
        
        <div className="instruction-card">
          <FaExclamationCircle className="instruction-icon" />
          <div className="instruction-text">
            <h3>Uploading PDFs</h3>
            <p>Ensure that the uploaded PDF is accurate and free from any explicit or inappropriate content. Only upload content that adheres to legal and ethical standards.</p>
          </div>
        </div>
        
        <div className="instruction-card">
          <FaPenFancy className="instruction-icon" />
          <div className="instruction-text">
            <h3>Quality of Notes</h3>
            <p>Notes should be comprehensive, covering all necessary topics and chapters. They must be clearly written, preferably with neat handwriting or well-formatted text.</p>
          </div>
        </div>
        
        <div className="instruction-card">
          <FaSearch className="instruction-icon" />
          <div className="instruction-text">
            <h3>Correct Search Tags</h3>
            <p>Make sure to upload notes under the correct year and subject. Use precise tags to help others find your notes easily. Complete and accurate notes are essential for helping peers.</p>
          </div>
        </div>

      </div>
      <div className="balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
    </div>
  );
}

export default Instruction;
