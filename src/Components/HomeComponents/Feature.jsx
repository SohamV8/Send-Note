import React, { useEffect, useState } from 'react';
import './Feature.css';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion, useAnimation } from 'framer-motion';
import feature from '../../assets/feature.png';

const Feature = ({
  background = '#0d47a1',
  minSize = 1,
  maxSize = 3,
  speed = 1,
  particleColor = '#ffffff',
  particleDensity = 120,
}) => {
  const [init, setInit] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(Particles.engine);
      setInit(true);
    };
    initParticles();
  }, []);

  const particlesLoaded = (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  };

  return (
    <motion.div animate={controls} className="opacity-0 particles-container">
      {init && (
        <Particles
          id="tsparticles"
          className="particles"
          loaded={particlesLoaded}
          options={{
            background: { color: { value: background } },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: 'push' },
                onHover: { enable: false, mode: 'repulse' },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: particleColor },
              links: { enable: false },
              move: {
                direction: 'none',
                enable: true,
                outModes: { default: 'out' },
                speed: { min: 0.1, max: speed },
              },
              number: {
                density: { enable: true, width: 400, height: 400 },
                value: particleDensity,
              },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: { enable: true, speed, sync: false },
              },
              size: {
                value: { min: minSize, max: maxSize },
                animation: { enable: false },
              },
            },
            detectRetina: true,
          }}
        />
      )}
      <div className="Feat">
        <img src={feature} alt="feature" className="Feat-img" />
      </div>
    </motion.div>
  );
};

export default Feature;
