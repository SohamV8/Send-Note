import { useState, useRef } from 'react';
import './WikiPage.css';
import logoassets from '../../assets/logoassets.png';
import AIChat from './Tabs/AIChat';

const WikiPage = () => {
  const [activeTab, setActiveTab] = useState('original');
  const [pdfData, setPdfData] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const fileInputRef = useRef(null);

  const tabs = [
    { id: 'original', label: 'Original Content', icon: '📄' },
    { id: 'notes', label: 'AI Notes', icon: '📝' },
    { id: 'summary', label: 'AI Summary', icon: '📋' },
    { id: 'flashcards', label: 'AI Flashcards', icon: '🎴' },
    { id: 'quizzes', label: 'AI Quizzes', icon: '❓' }
  ];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      await handleFileUpload(file);
    }
  };

  const generateFlashcards = () => {
    // Simulate flashcard generation
    return [
      { question: "What is the main topic of this document?", answer: "Sample answer about the main topic" },
      { question: "What are the key findings?", answer: "Sample key findings from the document" },
      { question: "Define important terms:", answer: "Sample definitions of key terms" }
    ];
  };

  const generateQuiz = () => {
    // Simulate quiz generation
    return [
      {
        question: "What is the primary focus of this document?",
        options: [
          "Option A: Sample answer 1",
          "Option B: Sample answer 2",
          "Option C: Sample answer 3",
          "Option D: Sample answer 4"
        ],
        correctAnswer: 0
      },
      {
        question: "Which of the following statements is true according to the document?",
        options: [
          "Option A: Sample statement 1",
          "Option B: Sample statement 2",
          "Option C: Sample statement 3",
          "Option D: Sample statement 4"
        ],
        correctAnswer: 2
      }
    ];
  };

  const handleFileUpload = async (file) => {
    if (!file || file.type !== 'application/pdf') {
      setUploadError('Please select a valid PDF file');
      return;
    }

    setIsUploading(true);
    setUploadError(null);

    try {
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Generate mock data
      const mockData = {
        title: file.name,
        pageCount: 5,
        content: "This is a sample content summary of the uploaded PDF. In a real implementation, this would be generated from the actual PDF content.",
        fileUrl: URL.createObjectURL(file),
        size: file.size,
        uploadDate: new Date().toLocaleString(),
        keywords: ['Sample', 'PDF', 'Document', 'Analysis'],
        sections: [
          { title: 'Introduction', pageNumber: 1 },
          { title: 'Main Content', pageNumber: 2 },
          { title: 'Conclusion', pageNumber: 4 }
        ]
      };

      setPdfData(mockData);
      setFlashcards(generateFlashcards());
      setQuizQuestions(generateQuiz());
      setActiveTab('original');
    } catch (error) {
      console.error('Upload error:', error);
      setUploadError('Failed to process PDF. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const renderEmptyState = () => (
    <div className="empty-state">
      <div className="upload-area" onDragEnter={handleDrag}>
        <div className={`upload-prompt ${dragActive ? 'dragging' : ''}`}>
          <div className="upload-icon">📁</div>
          <h2>Upload Your PDF</h2>
          <p>Drag and drop your file here or click to browse</p>
          <button className="browse-button" onClick={() => fileInputRef.current.click()}>
            Browse Files
          </button>
          {uploadError && <div className="error-message">{uploadError}</div>}
        </div>
      </div>
    </div>
  );

  const renderFlashcards = () => (
    <div className="flashcards-container">
      <h2>Study Flashcards</h2>
      {flashcards.map((card, index) => (
        <div key={index} className="flashcard">
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <h3>Question {index + 1}</h3>
              <p>{card.question}</p>
            </div>
            <div className="flashcard-back">
              <h3>Answer</h3>
              <p>{card.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderQuiz = () => (
    <div className="quiz-container">
      <h2>Knowledge Check</h2>
      {quizQuestions.map((quiz, index) => (
        <div key={index} className="quiz-question">
          <h3>Question {index + 1}</h3>
          <p>{quiz.question}</p>
          <div className="quiz-options">
            {quiz.options.map((option, optionIndex) => (
              <label key={optionIndex} className="quiz-option">
                <input
                  type="radio"
                  name={`q${index}`}
                  value={optionIndex}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button className="submit-quiz">Submit Answers</button>
    </div>
  );

  const renderContent = () => {
    if (!pdfData) {
      return renderEmptyState();
    }

    switch (activeTab) {
      case 'original':
        return (
          <div className="pdf-viewer">
            <div className="pdf-header">
              <h2>{pdfData.title}</h2>
              <div className="pdf-info">
                <span>{pdfData.pageCount} pages</span>
                <span>{Math.round(pdfData.size / 1024)} KB</span>
                <span>Uploaded: {pdfData.uploadDate}</span>
              </div>
            </div>
            <div className="pdf-container">
              <iframe
                src={pdfData.fileUrl}
                title="PDF Viewer"
                className="pdf-frame"
              />
            </div>
          </div>
        );
      case 'notes':
        return (
          <div className="notes-container">
            <h2>AI Generated Notes</h2>
            <div className="keywords-section">
              <h3>Key Topics</h3>
              <div className="keyword-tags">
                {pdfData.keywords.map((keyword, index) => (
                  <span key={index} className="keyword-tag">{keyword}</span>
                ))}
              </div>
            </div>
            <div className="sections-list">
              <h3>Document Sections</h3>
              {pdfData.sections.map((section, index) => (
                <div key={index} className="section-item">
                  <span className="section-title">{section.title}</span>
                  <span className="section-page">Page {section.pageNumber}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'summary':
        return (
          <div className="summary-container">
            <h2>Document Summary</h2>
            <div className="summary-content">
              <p>{pdfData.content}</p>
            </div>
          </div>
        );
      case 'flashcards':
        return renderFlashcards();
      case 'quizzes':
        return renderQuiz();
      default:
        return null;
    }
  };

  return (
    <div 
      className="wiki-container"
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <header className="wiki-header">
        <div className="logo">
          <img src={logoassets} alt="Logo" />
        </div>
        <h1>PDF Analyzer</h1>
        <div className="upload-section">
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => handleFileUpload(e.target.files[0])}
            accept="application/pdf"
            style={{ display: 'none' }}
          />
          <button 
            className={`upload-button ${isUploading ? 'uploading' : ''}`} 
            onClick={() => fileInputRef.current.click()}
            disabled={isUploading}
          >
            {isUploading ? (
              <>
                <span className="loading-spinner"></span>
                Processing...
              </>
            ) : (
              <>
                <span className="upload-icon">📤</span>
                Upload PDF
              </>
            )}
          </button>
        </div>
      </header>

      {pdfData && (
        <nav className="wiki-nav">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={activeTab === tab.id ? 'active' : ''}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                {tab.label}
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="content-wrapper">
        <main className="wiki-content">
          {renderContent()}
        </main>
        {pdfData && (
          <aside className="chat-sidebar">
            <AIChat pdfContent={pdfData.content} />
          </aside>
        )}
      </div>
    </div>
  );
};

export default WikiPage; 