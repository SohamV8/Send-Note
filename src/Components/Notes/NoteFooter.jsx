import React from 'react';
import { Link } from 'react-router-dom';

function NoteFooter() {
  return (
    <footer
      className="text-white text-center py-4 fixed bottom-0 w-full border-t border-gray-200 font-mono"
      style={{
        background: 'rgba(11, 16, 32, 0.90)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(9px)',
        WebkitBackdropFilter: 'blur(9px)',
      }}
    >
      <p>
        Please help us make this website better by{' '}
        <Link to="/contribute" className="underline hover:text-gray-300">
          Contributing
        </Link>
      </p>
      <p>Your education stuff</p>
    </footer>
  );
}

export default NoteFooter;