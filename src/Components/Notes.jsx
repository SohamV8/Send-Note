import React from 'react';
import './notes.css'
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import PdfViewer from './PdfViewer';  

function Notes() {
  return (
    <>
      <Sidebar />
      <div className="right-cont">
      <SearchBar />
      <PdfViewer />
      </div>
    </>
  );
}

export default Notes;
