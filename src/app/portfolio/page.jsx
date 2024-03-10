'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    title: 'Bidzone',
    description:
      "This is my second-semester project at Noroff School of Technology and Digital Media, which I completed during a 5-week period. My main goal was to use what I've learned in the past three semesters to build an auction website. I named my auction site Bidzone. To use all its features, you need to log in or create an account. Unregistered users can browse items and see item details. Planned with GitHub Projects, Designed with Figma, Utilized CSS preprocessor Sass, Implemented CSS Bootstrap framework, Hosted on Netlify.",
    img: '/Bidzone.jpg',
    webLink: 'https://moonlit-medovik-d45fcf.netlify.app/',
    githubLink: 'https://github.com/saibia8/Semester-project-Noroff',
  },
  {
    id: 2,
    title: 'eCom app',
    description:
      'This is my first React project, developed after 5 weeks of learning. The task was to create an e-commerce store. The assignment required the creation of 5 web pages: Homepage, Individual product page, Cart page, Checkout success page, and Contact page. Each of these pages had to meet specific project requirements, which are detailed in the GitHub README file. The website was hosted on Netlify',
    img: '/ecom.jpg',
    webLink: 'https://frabjous-elf-4d516d.netlify.app/',
    githubLink: 'https://github.com/saibia8/eCom-app',
  },
  {
    id: 3,
    title: 'Holidaze',
    description:
      "As a front-end development student, I completed my final project: designing and coding the fictional Holidaze venue booking website. This project, lasting 7 weeks, demonstrates the skills I've developed over my two years at Noroff in both visual and technical front-end development. For this project, I followed specific user stories and restrictions. These included functionalities like viewing venue lists, searching for venues, booking creation, and user registration. Registered users could also update avatars and manage bookings, while venue managers had additional capabilities such as creating, updating, and deleting venues. I had the freedom to design the user experience and interface according to my preferences. Additionally, the project makes use of an API provided by Noroff. Planned with GitHub Projects, Designed with Figma, Implemented CSS framework Tailwind, Used JavaScript Framework React (>16), Hosted on Netlify.",
    img: '/Holidaze.jpg',
    webLink: 'https://wondrous-crepe-f3e4e1.netlify.app/',
    githubLink: 'https://github.com/saibia8/Holidaze-Project-Exam-2',
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['30%', '-90%']);

  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-[600vh] relative' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex-center nunito-normal text-6xl md:text-8xl'>
          My Projects
        </div>
        <div className='sticky top-0 flex h-screen items-center gap-4 overflow-hidden bg-[#F1EAD8]'>
          <motion.div style={{ x }} className='flex'>
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-[#2F4F4A] ${
                  item.id === 1 ? 'rounded-l-[3.5rem]' : ''
                } ${item.id === 3 ? 'rounded-r-[3.5rem]' : ''}`}
                key={item.id}
              >
                <div className='flex flex-col gap-8'>
                  <h1 className='nunito-normal font-extrabold text-6xl md:text-7xl xl:text-8xl text-[#FDFD93]'>
                    0{item.id}
                  </h1>
                  <h1 className='nunito-normal text-4xl md:text-6xl xl:text-8xl text-white font-bold'>
                    {item.title}
                  </h1>
                  <div className='relative mb-8'>
                    <Image
                      src={item.img}
                      alt=''
                      width={634}
                      height={304}
                      className='w-80 h-56  md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[400px]'
                    />
                  </div>
                  <p className='text-white nunito-normal lg:text-lg w-80 md:w-96 lg:w-[500px] xl:w-[600px] mb-4'>
                    {item.description}
                  </p>
                  <div className='flex flex-col gap-2 nunito-normal text-lg'>
                    <Link className='text-[#FDFD93]' href={item.webLink}>
                      Link to live website
                    </Link>
                    <Link className='text-[#FDFD93]' href={item.githubLink}>
                      Link to the Github
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-[#F1EAD8]'>
        <h1 className='nunito-normal text-4xl md:text-6xl xl:text-8xl'>
          Do you have a project?
        </h1>
        <div className='relative'>
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            viewBox='0 0 300 300'
            className='w-64 h-64 md:w-[500px] md:h-[500px]'
          >
            <defs>
              <path
                id='circlePath'
                d='M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0'
              />
            </defs>
            <text fill='#000'>
              <textPath xlinkHref='#circlePath' className='text-xl'>
                Front-end Develope and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href='/contact'
            className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
