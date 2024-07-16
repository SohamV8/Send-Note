import React, { useEffect, useMemo } from 'react';
import './Torn.css';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

// Define images array with correct import paths
const images = [
  require('../../assets/image1.png').default,
  require('../../assets/image2.png').default,
  require('../../assets/image3.png').default,
  require('../../assets/image4.png').default,
  require('../../assets/image5.png').default,
  require('../../assets/image6.png').default,
  require('../../assets/image7.png').default,
  require('../../assets/image8.png').default,
  require('../../assets/image9.png').default
];

gsap.registerPlugin(Draggable);

const Torn = () => {
  useEffect(() => {
    const items = gsap.utils.toArray('.item-pyq');
    const imageSize = items.length;
    const degree = 360 / imageSize;

    const init = () => {
      const timeline = gsap.timeline();

      items.forEach((item, index) => {
        const sign = Math.floor((index / 2) % 2) ? 1 : -1;
        const value = Math.floor((index + 4) / 4) * 4;
        const rotation = index > imageSize - 3 ? 0 : sign * value;

        gsap.set(item, {
          rotation: rotation,
          scale: 0.5,
        });

        timeline.from(
          item,
          {
            x: () =>
              index % 2
                ? window.innerWidth + item.clientWidth * 4
                : -window.innerWidth - item.clientWidth * 4,
            y: () => window.innerHeight - item.clientHeight,
            rotation: index % 2 ? 200 : -200,
            scale: 4,
            opacity: 1,
            ease: 'power4.out',
            duration: 1,
            delay: 0.15 * Math.floor(index / 2),
          },
          0
        );

        let rotationAngle = index * degree;
        timeline.to(
          item,
          {
            scale: 1,
            duration: 0,
          },
          0.15 * (imageSize / 2 - 1) + 1
        );

        timeline.to(
          item,
          {
            transformOrigin: 'center 200vh',
            rotation:
              index > imageSize / 2 ? -degree * (imageSize - index) : rotationAngle,
            duration: 1,
            ease: 'power1.out',
          },
          0.15 * (imageSize / 2 - 1) + 1
        );
      });
    };

    const draggable = () => {
      let start = 0;
      Draggable.create('.items-pyq', {
        type: 'rotation',

        onDragStart: function () {
          start = this.rotation;
        },
        onDragEnd: function () {
          const rotation = this.rotation;
          const offset = Math.abs(rotation - start);
          if (rotation > start) {
            if (rotation - start < degree / 2) {
              gsap.to('.items-pyq', {
                rotation: `-=${offset}`,
              });
            } else {
              gsap.to('.items-pyq', {
                rotation: `+=${2 * degree - offset}`,
              });
            }
          } else {
            if (Math.abs(rotation - start) < degree / 2) {
              gsap.to('.items-pyq', {
                rotation: `+=${offset}`,
              });
            } else {
              gsap.to('.items-pyq', {
                rotation: `-=${2 * degree - offset}`,
              });
            }
          }
        },
      });
    };

    init();
    draggable();
  }, []);

  const imageSources = useMemo(() => images, []);

  return (
    <main>
      <div className="text-pyq">
        <h1 className='h1pyq'>NO TENSION DURING EXAMS</h1>
        <h3 className='h3pyq'>Best Question Paper To Practice</h3>
      </div>
      <div className="container-pyq">
        <div className="center-pyq">
          <div className="items-pyq">
            {imageSources.map((src, index) => (
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
