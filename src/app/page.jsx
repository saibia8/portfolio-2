'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Homepage = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full px-4 flex flex-col sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        <div className='h-1/2 p-10 bg-[#FED795] rounded-[3.5rem] flex-col'>
          <div className='nunito-normal text-2xl md:text-4xl'>
            SABINA KUTNIAUSKE
          </div>
          <p className='h-full bungee-shade-regular text-6xl flex justify-center items-center md:text-8xl xl:text-9xl lg:text-9xl'>
            DESIGNER & DEVELOPER
          </p>
        </div>
        <div className='h-1/2 flex flex-col sm:flex-row justify-center p-10 gap-8'>
          <div className='w-1/2 flex flex-col gap-8'>
            <h1 className='text-2xl font-bold md:text-4xl'>My Portfolio</h1>
            {/* DESCRIPTION */}
            <p>
              Discover my portfolio to see how I blend creativity and technical
              skill to create stunning digital experiences.
            </p>
            {/* BUTTONS */}
            <div className=''>
              <Link href='/portfolio'>
                <button className='p-4 rounded-xl bg-[#FB5FFC] text-[#191919] black-shadow w-40 hover:bg-[#f89af8]'>
                  View My Works
                </button>
              </Link>
            </div>
          </div>
          <div className='w-1/2 flex flex-col gap-8'>
            <h1 className='text-2xl font-bold md:text-4xl'>Hire me</h1>
            {/* DESCRIPTION */}
            <p>
              Ready to bring your vision to life? Contact me today to discuss
              your design and development projects
            </p>
            {/* BUTTONS */}
            <div>
              <Link href='/contact'>
                <button className='p-4 rounded-xl bg-[#99D8DA] text-[#191919] w-40 black-shadow hover:bg-[#b8d8d9]'>
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </motion.div>
  );
};

export default Homepage;
