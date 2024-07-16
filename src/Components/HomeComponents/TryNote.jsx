import React from 'react';
import { Link } from 'react-router-dom';
import './try.css';

const TryNote = () => {
  return (
    <div className="pyqtest">
      <article className="how-to-stay-on-top">
        <h2 className='tryNot'>How to stay on top of things:</h2>
        <ol>
          <li><del>Make a list</del></li>
          <li>Track your time</li>
          <li>Time box all tasks</li>
          <li>Do more difficult tasks first</li>
          <li>Take breaks!!</li>
          <li><u>FOCUS</u>: Don't multitask</li>
          <li><del>z-index: 4;</del></li>
          <li><del>z-index: 9999;</del></li>
        </ol>
        <Link to="/PYQ">
          <button className="learn-more">
            <span className="circle">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">PYQ</span>
          </button>
        </Link>
      </article>
    </div>
  );
};

export default TryNote;
