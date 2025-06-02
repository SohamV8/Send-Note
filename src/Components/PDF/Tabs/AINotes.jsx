import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spin, message } from 'antd';
import { generateAINotes } from '../../../services/pdfApi';

const AINotes = ({ pdfId }) => {
  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const response = await generateAINotes(pdfId);
        setNotes(response.notes);
      } catch (error) {
        message.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (pdfId) {
      fetchNotes();
    }
  }, [pdfId]);

  if (loading) {
    return (
      <div className="ai-generated-content">
        <Spin size="large" />
      </div>
    );
  }

  if (!notes) {
    return (
      <div className="ai-generated-content">
        <h2>AI Generated Notes</h2>
        <div className="empty-state">
          <p>No notes available. Please upload a PDF first.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ai-generated-content">
      <h2>AI Generated Notes</h2>
      {notes.map((section, index) => (
        <div key={index} className="note-section">
          <h3>{section.title}</h3>
          <ul>
            {section.points.map((point, pointIndex) => (
              <li key={pointIndex}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

AINotes.propTypes = {
  pdfId: PropTypes.string.isRequired,
};

export default AINotes; 