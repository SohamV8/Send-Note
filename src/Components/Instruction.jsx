import React from 'react'
import './Instruction.css';
import { FaExclamationCircle, FaCheckCircle, FaSearch } from 'react-icons/fa';

function Instruction() {
  return (
    <div>
      <div className="instructions">
        <h2>How to Use the Lost and Found Website</h2>
        <div className="instruction-card">
          <FaExclamationCircle className="instruction-icon" />
          <h3>Report a Item</h3>
          <p>If you've lost an item or found any item, click on "Report an Item" to report it. Provide a detailed description and upload an image if available to help others identify it.</p>
        </div>
        <div className="instruction-card">
          <FaSearch className="instruction-icon" />
          <h3>Browse Items</h3>
          <p>Click on "Lost Item" or "Found Item"to search through the list of lost and items. Use filters or keywords to quickly locate the item you're looking for.</p>
        </div>
    </div>
    </div>
  )
}

export default Instruction
