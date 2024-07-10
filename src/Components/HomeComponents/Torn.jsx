import React, { useEffect, useRef } from 'react';
import './Torn.css';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import protitle from '../../assets/protitle.mp4';

function Torn() {
  const blobRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (mouseEvent) => {
      const { clientX, clientY } = mouseEvent;

      if (blobRef.current) {
        blobFollowMouse(clientX, clientY);
      }

      if (videoContainerRef.current) {
        const rect = videoContainerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = (clientX - centerX) / rect.width;
        const distanceY = (clientY - centerY) / rect.height;

        rotateVideo3D(distanceX, distanceY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Initial animations
    titleSlideIn();
    videoPopIn();
    blobRotate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // GSAP Animations
  const blobRotate = () => {
    gsap.timeline({ repeat: -1, ease: 'none' })
      .to(blobRef.current, { rotation: 180, scaleX: 1.6 })
      .to(blobRef.current, { rotation: 360, scaleX: 1 })
      .totalDuration(17)
      .play();
  };

  const blobFollowMouse = (x, y) => {
    const maxX = window.innerWidth - blobRef.current.offsetWidth / 2;
    const maxY = window.innerHeight - blobRef.current.offsetHeight / 2;
    const boundedX = Math.min(Math.max(x, blobRef.current.offsetWidth / 2), maxX);
    const boundedY = Math.min(Math.max(y, blobRef.current.offsetHeight / 2), maxY);
    gsap.to(blobRef.current, {
      left: boundedX,
      top: boundedY,
      duration: 2,
    });
  };

  const rotateVideo3D = (distanceX, distanceY) => {
    gsap.to(videoContainerRef.current, {
      rotateX: -20 * distanceY,
      rotateY: 20 * distanceX,
      duration: 0.5,
      ease: 'power1.out',
    });
  };

  const videoPopIn = () => {
    gsap.fromTo(videoContainerRef.current, { scale: 0 }, {
      scale: 1,
      ease: 'elastic.out(1, 0.8)',
      duration: 0.8,
      delay: 0.4,
    });
  };

  const titleSlideIn = () => {
    document.querySelectorAll('.word').forEach((word, wordIdx) => {
      Array.from(word.children).forEach((char, charIdx) => {
        gsap.fromTo(char, {
          opacity: 0,
          x: 0,
        }, {
          opacity: 1,
          x: -30,
          ease: 'elastic.out(1.1, 0.7)',
          duration: 1.2,
          delay: wordIdx * 0.2 + charIdx * 0.03,
        });
      });
    });
  };

  return (
    <div className="Apptorn">

      <section id="background-torn">
        <div id="blob" ref={blobRef}></div>
        <div id="blur"></div>
      </section>

      <main>
        <div id="video-container" ref={videoContainerRef}>
          <video
            poster=""
            src={protitle}
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>

        <div id="title-torn">
          <span className="word">
            <span className="char">N</span>
            <span className="char">o</span>
</span>
<span className="word">
            <span className="char">T</span>
            <span className="char">e</span>
            <span className="char">n</span>
            <span className="char">s</span>
            <span className="char">i</span>
            <span className="char">o</span>
            <span className="char">n</span>
          </span>
          <span className="word">
            <span className="char">D</span>
            <span className="char">u</span>
            <span className="char">r</span>
            <span className="char">i</span>
            <span className="char">n</span>
            <span className="char">g</span>
          </span>
          <span className="word">
            <span className="char">E</span>
            <span className="char">x</span>
            <span className="char">a</span>
            <span className="char">m</span>
            <span className="char">s</span>
          </span>
        </div>

        <Link to="/PYQ">
          <button id="redirect-button">
            <span className="button-bg">
              <span className="button-bg-layers">
                <span className="button-bg-layer button-bg-layer-1 -yellow"></span>
                <span className="button-bg-layer button-bg-layer-2 -turquoise"></span>
                <span className="button-bg-layer button-bg-layer-3 -purple"></span>
              </span>
            </span>
            <span className="button-inner">
              <span className="button-inner-static">PYQ</span>
              <span className="button-inner-hover">PYQ</span>
            </span>
          </button>
        </Link>
      </main>
    </div>
  );
}

export default Torn;
