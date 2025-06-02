import React from 'react';
import { Link } from 'react-router-dom';
import './try.css';
import torntry from '../../assets/torntry.png';

const TryNote = () => {
  return (
    <>
    <div className="pyqtest">
      <div className="left-pyq">
        <article className="how-to-stay-on-top">
          <h2 className='tryNot'>How to top in Exams :</h2>
          <ol>
            <li><del>Worry about notes</del></li>
            <li>Visit <b>Send Notes</b> website for notes</li>
            <li>Track your time</li>
            <li>Study important topics</li>
            <li>Take ideas from previous papers</li>
            <li><u>FOCUS</u>: Practice on old exams</li>
            <li><del>Organize study groups with friends</del></li>
            <li>Ask your doubts frequently</li>
          </ol>
        </article>
      </div>
      <div className="right-pyq">
        <h1 className='tension'>NO TENSION DURING EXAMS</h1>
        <h3 className='sub-pyq'>Get a wide range of question paper from previous years</h3>

        <Link to="/PYQ">
          <button className="learn-more">
            GET STARTED
          </button>
        </Link>
      </div>
    </div>
    <img
  src={torntry}
  alt="torn effect"
  className="absolute z-50 flex w-full h-auto object-cover"
  style={{ marginTop: '-70px' }}
/>
    </>
  );
};

export default TryNote;
