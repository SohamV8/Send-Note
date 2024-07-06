import React from 'react';
import './notes.css'
import Sidebar from '../Components/Sidebar';
import SearchBar from '../Components/SearchBar';
import PdfViewer from '../Components/PdfViewer';  

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
