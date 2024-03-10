'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavLink from './NavLink';

const links = [
  { url: '/', label: 'Home' },
  { url: '/about', label: 'About' },
  { url: '/portfolio', label: 'Portfolio' },
  { url: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMeniuOpened, setIsMeniuOpened] = useState(false);

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: 'rgb(241,234,216)' },
  };

  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: 'rgb(241,234,216)' },
  };

  const listVariants = {
    closed: { x: '100vw' },
    opened: {
      x: 0,
      transition: { when: 'beforeChildren', staggerChildren: 0.2 },
    },
  };

  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* LOGO */}
      <div className='lg:flex xl:w-1/3'>
        <Link href='/' className='text-[#2F4F4A] font-medium flex-center'>
          <span className='text-2xl pr-1'>&lt; &gt;</span>
          <span className='text-2xl flex-center'>SaKu</span>
        </Link>
      </div>
      {/* MENU */}
      <div className='hidden md:flex gap-4 w-1/3'>
        {links.map((link) => (
          <NavLink link={link} key={link.label} />
        ))}
      </div>
      {/* LINKS TO SOCIAL MEDIA */}
      <div className='hidden md:flex gap-4 w-1/3 justify-end'>
        <Link href='#'>
          <Image src='/github.png' width={24} height={24} alt='Github' />
        </Link>
        <Link href='/'>
          <Image src='/linkedin.png' width={24} height={24} alt='Linkedin' />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className='md:hidden'>
        {/* MENU BUTTON */}
        <button
          className='w-10 h-8 flex flex-col justify-between z-50 relative'
          onClick={() => setIsMeniuOpened((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={isMeniuOpened ? 'opened' : 'closed'}
            className='w-10 h-1 bg-[#2F4F4A] rounded origin-left'
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={isMeniuOpened ? 'opened' : 'closed'}
            className='w-10 h-1 bg-[#2F4F4A] rounded origin-left'
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={isMeniuOpened ? 'opened' : 'closed'}
            className='w-10 h-1 bg-[#2F4F4A] rounded origin-left'
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {isMeniuOpened && (
          <motion.ul
            variants={listVariants}
            initial='closed'
            animate={'opened'}
            className='absolute top-0 left-0 w-screen h-screen bg-[#191919] text-[#F1EAD8] flex-center flex-col gap-8 text-4xl z-40'
          >
            {links.map((link) => (
              <motion.ul
                variants={listItemVariants}
                className=''
                key={link.label}
              >
                <li>
                  <Link href={link.url}>{link.label}</Link>
                </li>
              </motion.ul>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
