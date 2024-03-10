'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutPage = () => {
  const skillRef = useRef();
  const isSkillRefVisible = useInView(skillRef, {
    once: true,
    margin: '100px',
  });

  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full overflow-scroll'>
        {/* TEXT CONTAINER */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64'>
          {/* ABOUT */}
          <div className='flex flex-col gap-12 justify-center'>
            <h1 className='bungee-shade-regular text-6xl mb-10'>ABOUT</h1>
            <p className='nunito-normal text-lg'>
              I{`'`}m Sabina, a passionate
              <span className='font-bold'> front-end developer</span>. I have
              the skills to turn concepts into reality. Beyond just coding, I
              prioritize understanding{' '}
              <span className='font-bold'>client needs</span> and translating
              them into engaging user experiences. Whether it{`'`}s developing
              sleek interfaces, ensuring responsiveness across devices, or
              fine-tuning for optimal performance, I{`'`}m dedicated to
              delivering results that exceed expectations. My commitment to{' '}
              <span className='font-bold'>quality, attention</span> to detail,
              and <span className='font-bold'>passion</span> for innovation make
              me the ideal partner for bringing your web projects to life.
            </p>
            <div className='self-end'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='300'
                height='168'
                viewBox='0 0 453 168'
                fill='none'
              >
                <path
                  d='M242.631 4.86382C221.549 4.86382 199.109 6.91629 184.539 23.5669C174.88 34.6067 189.442 43.7435 198.416 48.1308C212.864 55.1942 228.563 57.7132 242.286 66.92C249.712 71.9018 253.052 85.4865 243.148 90.1911C234.232 94.4262 223.76 95.8064 214.102 97.0863C211.541 97.4257 193.891 102.247 197.726 95.5349C200.933 89.9231 205.619 86.2744 210.913 82.6065C229.518 69.7172 250.147 60.4969 270.211 50.1993C295.713 37.1112 319.724 21.2532 345.368 8.48377C350.123 6.11608 361.151 -1.11916 360.71 4.17431C360.338 8.63495 351.633 14.3465 348.816 16.4132C342.465 21.0734 272.701 58.4439 277.451 64.6791C280.095 68.1491 297.217 63.2064 299.516 62.783C319.579 59.0872 340.845 53.8538 361.4 54.7674C369.879 55.1442 351.223 65.8884 350.885 66.0582C320.502 81.3206 285.103 87.1584 252.543 95.9658C241.684 98.9031 231.909 101.589 221.342 105.016C218.58 105.912 210.642 108.289 213.499 108.808C222.79 110.497 231.977 113.929 240.562 117.944C258.412 126.292 272.294 140.061 288.656 150.696C292.224 153.015 315.193 162.525 298.999 163.969C245.999 168.697 191.033 164.659 137.911 164.659C98.0238 164.659 58.0772 165.142 18.1942 164.314C14.9113 164.246 -10.3286 164.723 8.88578 160.435C56.9028 149.721 106.697 146.985 155.235 139.319C218.019 129.403 279.841 114.978 341.318 98.9824C372.199 90.9474 403.025 82.7988 433.971 75.0218C439.537 73.623 444.75 71.5743 450.519 71.5743'
                  stroke='#191919'
                  stroke-width='3'
                  stroke-linecap='round'
                />
              </svg>
            </div>
          </div>
          {/* SKILLS */}
          <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isSkillRefVisible ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className='font-bold text-2xl'
            >
              SKILLS
            </motion.h1>
            {/* SKILLS LISTS */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isSkillRefVisible ? { x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className='flex gap-4 flex-wrap'
            >
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                HTML
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                CSS
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Tailwind
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Bootstrap
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                JavaScript
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                React
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Git
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Redux
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Figma
              </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Zustand
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
