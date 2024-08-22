import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion, useAnimation } from 'framer-motion';

const SparklesCore = ({
  id = 'sparkles-particles',
  className = '',
  background = 'transparent',
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 1200,
  particleColor = '#FFFFFF',
  speed = 4,
}) => {
  const [initialized, setInitialized] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInitialized(true);
      controls.start({ opacity: 1 });
    });
  }, []);

  return (
    <motion.div animate={controls} className={`w-full h-full ${className}`}>
      {initialized && (
        <Particles
          id={id}
          className="absolute inset-0"
          options={{
            background: {
              color: {
                value: background,
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 0,
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: false,
                  mode: 'repulse',
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              collisions: {
                enable: false,
              },
              color: {
                value: particleColor,
              },
              move: {
                enable: true,
                speed,
                direction: 'none',
                random: true,
                straight: false,
                outModes: {
                  default: 'out',
                },
              },
              number: {
                density: {
                  enable: true,
                  value_area: particleDensity,
                },
                value: particleDensity,
              },
              opacity: {
                value: {
                  min: 0.5,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: speed * 2,
                  opacity_min: 0.5,
                  sync: false,
                },
              },
              size: {
                value: {
                  min: minSize,
                  max: maxSize,
                },
                animation: {
                  enable: true,
                  speed,
                  size_min: minSize,
                  sync: false,
                },
              },
              life: {
                duration: {
                  sync: true,
                  value: 10, // Set the lifespan of particles
                },
                delay: {
                  sync: false,
                  value: 0,
                },
              },
              zIndex: {
                value: 0,
                opacity_rate: 1,
                size_rate: 1,
                velocity_rate: 1,
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};

export default SparklesCore;
