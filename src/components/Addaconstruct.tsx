import { ParallaxBanner } from 'react-scroll-parallax';

import UnstyledLink from './links/UnstyledLink';

const Construct = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: '/images/addaconstruct.jpg', speed: -10, opacity: [1, 0.7] },
      ]}
      style={{ height: '50vh' }}
      className=''
    >
      <div className='layout absolute inset-0 z-10 flex flex-col items-center justify-center text-white drop-shadow-md'>
        <h1 className='text-3xl font-extrabold '>ADDA CONSTRUCT</h1>
        <p className='mt-2 text-justify '>
          We are a construction company based in Medan. Our goal is to help our
          clients build and realize their dream buildings. With our experienced
          workers, we are ready to serve your needs.since 2012, our founder,
          Dendy & Rian, was determined to create a construction company where we
          dont neglect our clients dream for a cold material calculation.
        </p>
        <UnstyledLink href='/adda-construct'>
          <div className='mt-4 border-2 border-white px-4 py-1 text-xl '>
            SEE MORE
          </div>
        </UnstyledLink>
      </div>
    </ParallaxBanner>
  );
};

export default Construct;
