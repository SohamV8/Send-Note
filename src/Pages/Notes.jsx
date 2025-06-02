import React from 'react';
import './notes.css'
import Sidebar from '../Components/Notes/Sidebar';
import SearchBar from '../Components/Notes/SearchBar';
import PdfViewer from '../Components/Notes/PdfViewer';  
import NoteFooter from '../Components/Notes/NoteFooter';

function Notes() {
  return (
    <>
      <Sidebar />
      <NoteFooter />
      <div className="right-cont">
      <SearchBar />
      <PdfViewer />
      
      </div>
    </>
  );
}

export default Notes;
