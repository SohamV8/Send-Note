import React, { useEffect, useRef } from 'react';
import './Torn.css';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'; // Import MotionPathPlugin for circular motion
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import image7 from '../../assets/image7.png';
import image8 from '../../assets/image8.png';
import image9 from '../../assets/image9.png';

gsap.registerPlugin(Draggable, MotionPathPlugin); // Register MotionPathPlugin

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9
];

const Torn = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const items = itemsRef.current;
    const imageSize = images.length;
    const degree = 360 / imageSize;

    const init = () => {
      const timeline = gsap.timeline();

      items.forEach((item, index) => {
        const sign = Math.floor((index / 2) % 2) ? 1 : -1;
        const value = Math.floor((index + 4) / 4) * 4;
        const rotation = index > imageSize - 3 ? 0 : sign * value;

        gsap.set(item, {
          rotation: rotation,
          scale: 0.8,
          transformOrigin: 'center', // Set transform origin to center for proper rotation
        });

        timeline.from(
          item,
          {
            x: index % 2 ? window.innerWidth + item.offsetWidth * 4 : -window.innerWidth - item.offsetWidth * 4,
            y: window.innerHeight - item.offsetHeight,
            rotation: index % 2 ? 200 : -200,
            scale: 4,
            opacity: 1,
            ease: 'power4.out',
            duration: 1,
            delay: 0.15 * Math.floor(index / 2),
          },
          0
        );

        // Use MotionPathPlugin for circular motion
        timeline.to(
          item,
          {
            motionPath: {
              path: { x: 100, y: 100, curvature: 1.5, autoRotate: true },
              align: 'self', // Align the item to its path
              immediateRender: false,
            },
            duration: 4, // Adjust duration as needed
            ease: 'none',
            repeat: -1, // Infinite repeat for continuous rotation
          },
          0
        );
      });
    };

    const draggable = () => {
      Draggable.create('.items-pyq', {
        type: 'rotation',
        throwResistance: 10000, // Increase throw resistance for smoother drag
      });
    };

    if (items.length > 0) {
      init();
      draggable();
    }
  }, []);

  return (
    <main>
      <div className="text-pyq">
        <h1 className='h1pyq'>NO TENSION DURING EXAMS</h1>
        <h3 className='h3pyq'>Best Question Paper To Practice</h3>
      </div>
      <div className="container-pyq">
        <div className="center-pyq">
          <div className="items-pyq" ref={itemsRef}>
            {images.map((src, index) => (
              <div className="item-pyq" key={index}>
                <div className="card-pyq">
                  <img className="image-pyq" src={src} alt={`Image ${index + 1}`} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Torn;
