import React, { useEffect, useState } from 'react';
import gsap from 'gsap'; // Import GSAP library
import './Torn.css';

function Torn() {
  const [allowRotation, setAllowRotation] = useState(true);
  const [btnPlayed, setBtnPlayed] = useState(false);

  const titleSlideIn = () => {
    document.querySelectorAll(".word").forEach((word, wordIdx) => {
      Array.from(word.children).forEach((char, charIdx) => {
        gsap.fromTo(
          char,
          {
            opacity: 0,
            x: 0
          },
          {
            opacity: 1,
            x: -300,
            ease: "elastic.out(1.1, 0.7)",
            duration: 1.2,
            delay: wordIdx * 0.2 + charIdx * 0.03
          }
        );
      });
    });
  };

  useEffect(() => {
    const handleMouseMove = (mouseEvent) => {
      const { clientX, clientY } = mouseEvent;
      
      // Ensure #blob exists before animating
      const blob = document.querySelector("#blob");
      if (blob) {
        gsap.to(blob, {
          left: clientX,
          top: clientY,
          duration: 2
        });
      }

      const videoContainer = document.querySelector("#video-container");
      if (videoContainer) {
        const rect = videoContainer.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = (clientX - centerX) / rect.width;
        const distanceY = (clientY - centerY) / rect.height;

        if (allowRotation) {
          gsap.to(videoContainer, {
            rotateX: -20 * distanceY,
            rotateY: 20 * distanceX,
            duration: 0.5,
            ease: "power1.out"
          });
        }
      }
    };

    const handleButtonMouseOver = () => {
      buttonGrow();
      buttonTextIn();
      if (!btnPlayed) {
        buttonColorsWave();
        setBtnPlayed(true);
      }
    };

    const handleButtonMouseOut = () => {
      buttonShrink();
      setBtnPlayed(false);
    };

    const handleButtonClick = () => {
      titleSlideIn();
      videoButtonPopIn();
    };

    const buttonGrow = () => {
      gsap.to("#normalButton", {
        width: 170,
        height: 46
      });
    };

    const buttonShrink = () => {
      gsap.to("#normalButton", {
        width: 180,
        height: 50
      });
    };

    const buttonColorsWave = () => {
      gsap.fromTo(
        "#purple",
        {
          scale: 0
        },
        {
          scale: 1
        }
      );
      gsap.fromTo(
        "#turquois",
        {
          scale: 0
        },
        {
          scale: 1,
          delay: 0.1
        }
      );
      gsap.fromTo(
        "#yellow",
        {
          scale: 0
        },
        {
          scale: 1,
          delay: 0.2
        }
      );
    };

    const buttonTextIn = () => {
      gsap.fromTo(
        ".text",
        {
          y: 9
        },
        {
          y: -8
        }
      );
      gsap.fromTo(
        "#text-static",
        {
          opacity: 1
        },
        {
          opacity: 0
        }
      );
      gsap.fromTo(
        "#text-reveal",
        {
          opacity: 0
        },
        {
          opacity: 1
        }
      );
    };

    // Event listeners setup
    window.addEventListener("mousemove", handleMouseMove);
    const button = document.querySelector("#normalButton");
    if (button) {
      button.addEventListener("mouseover", handleButtonMouseOver);
      button.addEventListener("mouseout", handleButtonMouseOut);
      button.addEventListener("click", handleButtonClick);
    }

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (button) {
        button.removeEventListener("mouseover", handleButtonMouseOver);
        button.removeEventListener("mouseout", handleButtonMouseOut);
        button.removeEventListener("click", handleButtonClick);
      }
    };
  }, [allowRotation, btnPlayed]); // Dependency array ensures effect runs only when allowRotation or btnPlayed changes

  useEffect(() => {
    // Initial animations
    titleSlideIn();
    videoButtonPopIn();
  }, []); // Empty dependency array ensures these animations run only once on mount

  const videoButtonPopIn = () => {
    setAllowRotation(false);

    gsap.fromTo(
      "#normalButton, #video-container",
      { scale: 0 },
      {
        scale: 1,
        ease: "elastic.out(1, 0.8)",
        duration: 0.8,
        delay: 0.4,
        onComplete: () => {
          setAllowRotation(true);
        }
      }
    );
  };

  return (
    <div className='backtorn'>
      <section id="background">
        <div id="blob" />
        <div id="blur" />
      </section>
      <main>
        <div id="video-container">
          <video
            poster=""
            src=""
            muted=""
            autoPlay=""
            loop=""
            playsInline=""
          />
        </div>
        <div id="title">
          <span className="word">
            <span className="char">n</span>
            <span className="char">o</span>
            <span className="char">t</span>
            <span className="char">e</span>
            <span className="char">n</span>
            <span className="char">s</span>
            <span className="char">i</span>
            <span className="char">o</span>
            <span className="char">n</span>
          </span>
          <span className="word">
            <span className="char">d</span>
            <span className="char">u</span>
            <span className="char">r</span>
            <span className="char">i</span>
            <span className="char">n</span>
            <span className="char">g</span>
          </span>
          <span className="word">
            <span className="char">e</span>
            <span className="char">x</span>
            <span className="char">a</span>
            <span className="char">m</span>
            <span className="char">s</span>
          </span>
        </div>
        <button id="normalButton">
          <span id="purple" />
          <span id="turquois" />
          <span id="yellow" />
          <span className="text" id="text-static">
            PYQ
          </span>
          <span className="text" id="text-reveal">
            PYQ
          </span>
        </button>
      </main>
    </div>
  );
}

export default Torn;
