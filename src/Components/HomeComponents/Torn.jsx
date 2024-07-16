import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import './Torn.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import image7 from '../../assets/image7.png';
import image8 from '../../assets/image8.png';
import image9 from '../../assets/image9.png';

gsap.registerPlugin(Draggable);

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9
];

const Torn = () => {
  const itemsRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".item-pyq");
    const totalItems = items.length;
    const degree = 360 / totalItems;

    const timeline = gsap.timeline();

    items.forEach((item, index) => {
      const sign = Math.floor((index / 2) % 2) ? 1 : -1;
      const value = Math.floor((index + 4) / 4) * 4;
      const rotation = index > totalItems - 3 ? 0 : sign * value;
      
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
          ease: "power4.out",
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
        0.15 * (totalItems / 2 - 1) + 1
      );

      timeline.to(
        item,
        {
          transformOrigin: "center 200vh",
          rotation:
            index > totalItems / 2 ? -degree * (totalItems - index) : rotationAngle,
          duration: 1,
          ease: "power1.out",
        },
        0.15 * (totalItems / 2 - 1) + 1
      );
    });

    Draggable.create(".items-pyq", {
      type: "rotation",
      onDragStart: function () {
        this.startRotation = this.rotation;
      },
      onDragEnd: function () {
        const rotation = this.rotation;
        const offset = Math.abs(rotation - this.startRotation);
        if (rotation > this.startRotation) {
          if (rotation - this.startRotation < degree / 2) {
            gsap.to(".items-pyq", {
              rotation: `-=${offset}`,
            });
          } else {
            gsap.to(".items-pyq", {
              rotation: `+=${2 * degree - offset}`,
            });
          }
        } else {
          if (Math.abs(rotation - this.startRotation) < degree / 2) {
            gsap.to(".items-pyq", {
              rotation: `+=${offset}`,
            });
          } else {
            gsap.to(".items-pyq", {
              rotation: `-=${2 * degree - offset}`,
            });
          }
        }
      },
    });
  }, []);

  return (
    <div className="container-pyq">
      <div className="text-pyq">
        <h1 className='h1pyq'>NO TENSION DURING EXAMS</h1>
        <h3 className='h3pyq'>Best Question Paper To Practice</h3>
      </div>
      <div className="center-pyq">
        <div className="items-pyq" ref={itemsRef}>
          {images.map((src, index) => (
            <div className="item-pyq" key={index}>
              <div className="card-pyq">
                <img className="image-pyq" src={src} alt={`Image ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Torn;
