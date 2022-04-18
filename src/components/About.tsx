import NextImage from './NextImage';
import Professional from '../../public/images/construction.png';
import Inovation from '../../public/images/function.png';
import SmartHome from '../../public/images/smart-city.png';

const About = () => {
  return (
    <div className='layout my-4 flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-extrabold'>
        <span className='font-light'>ADDA</span>LAND
      </h1>
      <h1 className='my-4 text-xl font-extrabold'>
        <span className='font-light'>
          &quot; We Build Home With Passion &quot;
        </span>
      </h1>
      <div>
        <p className='text-center text-gray-400'>
          Addaland is a property company that focus on a concept of urban living
          intended for millenials. As a local developer we always corporate with
          the best local architects to provide houses that are not only
          architecturally uniqe, but utilize space efficiently. Each of our
          clusters generally has 6-30 units.
        </p>
      </div>
      <div className='layout my-6 flex items-center justify-center'>
        <div className='relative  w-full  border-8 border-l-neutral-700 bg-gray-200 p-3 shadow-2xl sm:flex sm:flex-col sm:items-center sm:justify-center'>
          <NextImage src={SmartHome} height={70} width={70} alt='Smart Home' />
          <span className='text-xs text-gray-400 sm:text-sm'>SMART HOME</span>
        </div>
        <div className='relative mx-2 w-full border-8 border-l-neutral-700 bg-gray-200 p-3 shadow-2xl sm:flex sm:flex-col sm:items-center sm:justify-center'>
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
        <div className='relative w-full border-8 border-l-neutral-700 bg-gray-200 p-3 shadow-2xl sm:flex sm:flex-col sm:items-center sm:justify-center'>
          <NextImage src={Inovation} height={70} width={70} alt='Smart Home' />
          <span className='text-xs text-gray-400 sm:text-sm'>
            DESIGN INOVATION
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
