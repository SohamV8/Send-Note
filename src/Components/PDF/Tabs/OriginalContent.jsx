import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const OriginalContent = ({ pdfData }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  if (!pdfData) {
    return (
      <div className="article-content empty-state">
        <div className="upload-prompt">
          <h2>No PDF Uploaded</h2>
          <p>Please upload a PDF document to view its contents here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="article-content pdf-viewer">
      <div className="pdf-header">
        <h2>{pdfData.title}</h2>
        <div className="pdf-info">
          <span>{pdfData.pageCount} pages</span>
          <span className="file-size">{Math.round(pdfData.size / 1024)} KB</span>
        </div>
      </div>

      <div className="pdf-container">
        <Document
          file={`http://localhost:5000${pdfData.fileUrl}`}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div className="loading">Loading PDF...</div>}
          error={<div className="error">Error loading PDF!</div>}
        >
          <Page 
            pageNumber={pageNumber}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            scale={1.2}
          />
        </Document>
      </div>

      <div className="pdf-controls">
        <button
          className="nav-button"
          onClick={previousPage}
          disabled={pageNumber <= 1}
        >
          Previous
        </button>
        <span className="page-info">
          Page {pageNumber} of {numPages}
        </span>
        <button
          className="nav-button"
          onClick={nextPage}
          disabled={pageNumber >= numPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OriginalContent; 