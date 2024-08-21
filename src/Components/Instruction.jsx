import React from 'react';
import './Instruction.css';
import { FaExclamationCircle, FaSearch } from 'react-icons/fa';

function Instruction() {
  return (
    <div className="instruction-wrapper">
      <div className="instructions">
        <h2>Instructions:</h2>
        <div className="instruction-card">
          <FaExclamationCircle className="instruction-icon" />
          <div className="instruction-text">
            <h3>Report an Item</h3>
            <p>If you've lost or found an item, click on "Report an Item" to report it. Provide a detailed description and upload an image if available to help others identify it.</p>
          </div>
        </div>
        <div className="instruction-card">
          <FaSearch className="instruction-icon" />
          <div className="instruction-text">
            <h3>Browse Items</h3>
            <p>Click on "Lost Item" or "Found Item" to search through the list of lost and found items. Use filters or keywords to quickly locate the item you're looking for.</p>
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
