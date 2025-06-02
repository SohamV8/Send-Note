import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spin, message } from 'antd';
import { generateFlashcards } from '../../../services/pdfApi';

const Flashcards = ({ pdfId }) => {
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        setLoading(true);
        const response = await generateFlashcards(pdfId);
        setFlashcards(response.flashcards);
      } catch (error) {
        message.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (pdfId) {
      fetchFlashcards();
    }
  }, [pdfId]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  if (loading) {
    return (
      <div className="flashcards-container">
        <Spin size="large" />
      </div>
    );
  }

  if (!flashcards || flashcards.length === 0) {
    return (
      <div className="empty-state">
        <h3>No Flashcards Available</h3>
        <p>Upload a PDF to generate flashcards for studying.</p>
      </div>
    );
  }

  return (
    <div className="flashcards-container">
      <div className="flashcard-navigation">
        <button 
          onClick={handlePrevious}
          disabled={flashcards.length <= 1}
          className="nav-button"
        >
          Previous
        </button>
        <span className="flashcard-counter">
          {currentIndex + 1} / {flashcards.length}
        </span>
        <button 
          onClick={handleNext}
          disabled={flashcards.length <= 1}
          className="nav-button"
        >
          Next
        </button>
      </div>

      <div className="flashcard">
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <h3>Question</h3>
            <p>{flashcards[currentIndex].question}</p>
          </div>
          <div className="flashcard-back">
            <h3>Answer</h3>
            <p>{flashcards[currentIndex].answer}</p>
          </div>
        </div>
      </div>

      <div className="flashcard-hint">
        <p>Hover over the card to see the answer</p>
      </div>
    </div>
  );
};

Flashcards.propTypes = {
  pdfId: PropTypes.string.isRequired,
};

export default Flashcards; 