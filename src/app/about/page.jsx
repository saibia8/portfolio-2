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
            <p className='nunito-normal text-lg max-w-[45rem]'>
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
