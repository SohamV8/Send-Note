import React from 'react';
import './notes.css'
import Sidebar from '../Components/Sidebar';
import SearchBar from '../Components/SearchBar';
import PdfViewer from '../Components/PdfViewer';  
import Footer from '../Components/Footer';

function Notes() {
  return (
    <>
      <Sidebar />
      <div className="right-cont">
      <SearchBar />
      <PdfViewer />
      <Footer />
      </div>
    </>
  );
}

export default Notes;
