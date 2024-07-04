import React, { useState } from 'react';
import './pdf.css';

const PdfViewer = () => {
  const [pdfLinks] = useState([
    { url: 'https://drive.google.com/file/d/1A8DDzXJf4hpfXwLt1CPyQVrDcj2k_rRI/preview', name: 'MFW' },
    { url: 'https://drive.google.com/file/d/140FPH8mrMar87Nq9Lm2TYSzZG2a9wH5t/preview', name: 'Thermodynamics' },
    { url: 'https://drive.google.com/file/d/1rG1FKWl9h42_lkw1H0_Kl91lLRqHacZf/preview', name: 'ADA' },
    { url: 'https://drive.google.com/file/d/16-c9vhjny5iUTqumoe4t_ptZpOy6iMCD/preview', name: 'CS' },
    { url: 'https://drive.google.com/file/d/1A8DDzXJf4hpfXwLt1CPyQVrDcj2k_rRI/preview', name: 'MFW' },
    { url: 'https://drive.google.com/file/d/140FPH8mrMar87Nq9Lm2TYSzZG2a9wH5t/preview', name: 'Thermodynamics' },
    { url: 'https://drive.google.com/file/d/1rG1FKWl9h42_lkw1H0_Kl91lLRqHacZf/preview', name: 'ADA' },
    { url: 'https://drive.google.com/file/d/16-c9vhjny5iUTqumoe4t_ptZpOy6iMCD/preview', name: 'CS' },
  ]);

  return (
    <div className="pdf-viewer-container">
      {pdfLinks.map((pdf, index) => (
        <div key={index} className="pdf-item">
          <div className="pdf-card card">
            <a href={`https://drive.google.com/file/d/${pdf.url.split('/d/')[1].split('/')[0]}/view?usp=sharing`} target="_blank" rel="noopener noreferrer">
              <iframe
                src={pdf.url}
                width="180"
                height="244"
                frameBorder="0"
                title={pdf.name}
                className="pdf-iframe"
              ></iframe>
            </a>
          </div>
          <p className="pdf-name">{pdf.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PdfViewer;
