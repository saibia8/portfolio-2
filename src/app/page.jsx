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
      <div className='container mx-auto'>
        <div className='flex flex-col items-start justify-center bg-[#FED795] w-auto py-64 rounded-2xl'>
          <p className='nunito-normal text-[2rem] self-start ps-6'>
            SABINA KUTNIAUSKE
          </p>
          <h1 className='bungee-shade-regular text-[3rem] lg:text-[5rem] ps-6'>
            DESIGNER & DEVELOPER
          </h1>
        </div>

        <div className='flex flex-col sm:flex-row justify-center p-10 gap-8'>
          <div className='flex flex-col gap-8 mb-7'>
            <h2 className='text-2xl font-bold md:text-4xl'>My Portfolio</h2>
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
          <div className='flex flex-col gap-8'>
            <h2 className='text-2xl font-bold md:text-4xl'>Hire me</h2>
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
      </div>
    </motion.div>
  );
};

export default Homepage;
