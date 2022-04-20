import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import NextImage from './NextImage';
import Professional from '../../public/images/construction.png';
import Inovation from '../../public/images/function.png';
import SmartHome from '../../public/images/smart-city.png';

const DescriptionComp = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { duration: 1 },
      });
    }
    if (!inView) {
      animation.start({
        x: '-100vw',
      });
    }
  }, [inView, animation]);
  return (
    <div ref={ref}>
      <motion.div animate={animation}>
        <p className='text-center text-gray-400'>
          Addaland is a property company that focus on a concept of urban living
          intended for millenials. As a local developer we always corporate with
          the best local architects to provide houses that are not only
          architecturally uniqe, but utilize space efficiently. Each of our
          clusters generally has 6-30 units.
        </p>
      </motion.div>
    </div>
  );
};

const CardComponent = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        transition: { duration: 1 },
      });
    }
    if (!inView) {
      animation.start({
        scale: 0,
      });
    }
  }, [inView, animation]);
  return (
    <div ref={ref} className='w-full'>
      <motion.div animate={animation}>{children}</motion.div>
    </div>
  );
};

const About = () => {
  return (
    <div className='layout my-4 flex flex-col items-center'>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className='text-center'
      >
        <h1 className='text-2xl font-extrabold'>
          <span className='font-light'>ADDA</span>LAND
        </h1>
        <h1 className='my-4 text-xl font-extrabold'>
          <span className='font-light'>
            &quot; We Build Home With Passion &quot;
          </span>
        </h1>
      </motion.div>
      <DescriptionComp />
      <div className=' my-6 flex w-full items-center justify-around'>
        <CardComponent>
          <div className='relative  border-8 border-l-neutral-700 bg-gray-200 p-3 shadow-2xl sm:flex sm:flex-col sm:items-center sm:justify-center'>
            <NextImage
              src={SmartHome}
              height={70}
              width={70}
              alt='Smart Home'
            />
            <span className='text-xs text-gray-400 sm:text-sm'>SMART HOME</span>
          </div>
        </CardComponent>
        <CardComponent>
          <div className='relative mx-2 border-8 border-l-neutral-700 bg-gray-200 p-3 shadow-2xl sm:flex sm:flex-col sm:items-center sm:justify-center'>
            <NextImage
              src={Professional}
              height={70}
              width={70}
              alt='Smart Home'
            />
            <span className='text-xs text-gray-400 sm:text-sm'>
              PROFESSIONAL BUILDING
            </span>
          </div>
        </CardComponent>
        <CardComponent>
          <div className='relative border-8 border-l-neutral-700 bg-gray-200 p-3 shadow-2xl sm:flex sm:flex-col sm:items-center sm:justify-center'>
            <NextImage
              src={Inovation}
              height={70}
              width={70}
              alt='Smart Home'
            />
            <span className='text-xs text-gray-400 sm:text-sm'>
              DESIGN INOVATION
            </span>
          </div>
        </CardComponent>
      </div>
    </div>
  );
};

export default About;
