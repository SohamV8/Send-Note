import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spin, message } from 'antd';
import { generateQuiz } from '../../../services/pdfApi';
import './Quiz.css';

const Quiz = ({ pdfId }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setLoading(true);
        const response = await generateQuiz(pdfId);
        setQuestions(response.questions);
      } catch (error) {
        message.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (pdfId) {
      fetchQuiz();
    }
  }, [pdfId]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer('');
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setShowResults(false);
    setScore(0);
  };

  if (loading) {
    return (
      <div className="quiz-container">
        <Spin size="large" />
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="empty-state">
        <h3>No Quiz Available</h3>
        <p>Upload a PDF to generate quiz questions.</p>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="quiz-results">
        <h2>Quiz Complete!</h2>
        <p>Your score: {score} out of {questions.length}</p>
        <p>Percentage: {((score / questions.length) * 100).toFixed(1)}%</p>
        <button onClick={handleRestart} className="quiz-button">
          Try Again
        </button>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        Question {currentQuestion + 1} of {questions.length}
      </div>

      <div className="quiz-question">
        <h3>{currentQuestionData.question}</h3>
        <div className="quiz-options">
          {currentQuestionData.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`quiz-option ${selectedAnswer === option ? 'selected' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        disabled={!selectedAnswer}
        className="quiz-button"
      >
        {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
      </button>
    </div>
  );
};

Quiz.propTypes = {
  pdfId: PropTypes.string.isRequired,
};

export default Quiz; 