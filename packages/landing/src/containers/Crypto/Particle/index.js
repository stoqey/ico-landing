import React from 'react';
import Particles from 'react-particles-js';

import Particle1 from 'common/assets/image/crypto/particles/particle-1.png';
import Particle2 from 'common/assets/image/crypto/particles/particle-2.png';
import Particle3 from 'common/assets/image/crypto/particles/particle-3.png';
import Particle4 from 'common/assets/image/crypto/particles/particle-4.png';
import Particle5 from 'common/assets/image/crypto/particles/particle-5.png';
import Particle6 from 'common/assets/image/crypto/particles/particle-2.png';
import Particle7 from 'common/assets/image/crypto/particles/particle-4.png';
import ParticleStq from 'common/assets/image/crypto/particles/particle-6.png';
import ParticleCicleSmall from 'common/assets/image/crypto/particles/circle_small.png';
import ParticleCicleBig from 'common/assets/image/crypto/particles/circle_big.png';

const ParticlesComponent = () => {
  return (
    <>
      <Particles
        className="particle"
        params={{
          particles: {
            number: {
              value: 7,
              density: { enable: true, value_area: 800 },
            },

            shape: {
              type: ['images'],
              images: [
                {
                  src: `${ParticleCicleSmall}`,
                  width: 22,
                  height: 22,
                },
                {
                  src: `${ParticleCicleSmall}`,
                  width: 22,
                  height: 22,
                },
                {
                  src: `${ParticleCicleBig}`,
                  width: 40,
                  height: 40,
                },
                {
                  src: `${ParticleCicleBig}`,
                  width: 40,
                  height: 40,
                },
                {
                  src: `${ParticleCicleBig}`,
                  width: 40,
                  height: 40,
                },
                {
                  src: `${ParticleStq}`,
                  width: 30,
                  height: 30,
                },
                {
                  src: `${ParticleStq}`,
                  width: 25,
                  height: 25,
                },
                {
                  src: `${ParticleStq}`,
                  width: 18,
                  height: 18,
                },
                {
                  src: `${ParticleStq}`,
                  width: 32,
                  height: 32,
                },
                {
                  src: `${ParticleStq}`,
                  width: 41,
                  height: 41,
                },
                {
                  src: `${ParticleStq}`,
                  width: 22,
                  height: 22,
                },
                {
                  src: `${ParticleStq}`,
                  width: 22,
                  height: 22,
                },
              ],
            },
            opacity: {
              value: 0.17626369048095938,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 10,
              random: false,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: false,
              straight: false,
              bounce: true,
              attract: { enable: true, rotateX: 100, rotateY: 400 },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};
export default ParticlesComponent;
