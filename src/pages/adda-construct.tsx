import {
  FaBusinessTime,
  FaChevronRight,
  FaFileAlt,
  FaInstagram,
  FaPenAlt,
  FaPhone,
  FaTags,
  FaUsersCog,
} from 'react-icons/fa';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Construct1 from '../../public/images/construct-1.jpg';
import Construct2 from '../../public/images/construct-2.jpg';
import Construct3 from '../../public/images/construct-3.jpg';
import Construct4 from '../../public/images/construct-4.jpg';
import Construct5 from '../../public/images/construct-5.jpg';

const Construct = () => {
  return (
    <>
      <Seo templateTitle='Adda Construct' />
      <Layout>
        <div className='layout my-5'>
          <h1>ADDA CONSTRUCT</h1>
          <div className='my-10'>
            <div className='sm:flex sm:items-center'>
              <NextImage
                src={Construct1}
                height={400}
                width={600}
                alt='add construct'
              />
              <div className='relative bg-white text-left sm:z-10 sm:-ml-10 sm:w-1/2 sm:p-2'>
                <h3>ABOUT US</h3>
                <div className='mb-3 h-1 w-10 bg-neutral-400'></div>
                <p>
                  We are a construction company based in Medan. Our goal is to
                  help our clients build and realize their dream buildings. With
                  our experienced workers, we are ready to serve your needs.
                </p>
              </div>
            </div>
          </div>
          <div className='my-10'>
            <h2 className='flex items-center'>
              <FaBusinessTime className='mr-2 text-neutral-400' />
              History
            </h2>
            <div className='mb-3 h-1 w-10 bg-neutral-400'></div>
            <p>
              since 2012, our founder, Dendy & Rian, was determined to create a
              construction company where we dont neglect our clients dream for a
              cold material calculation.
            </p>
          </div>

          <div className='my-10'>
            <div className='flex flex-col items-center justify-center'>
              <div>
                <h2 className='flex items-center'>
                  <FaTags className='mr-2 text-neutral-400' />
                  VALUES
                </h2>
              </div>
              <div className='mb-3 h-1 w-10 bg-neutral-400'></div>
              <div className='flex w-full items-start justify-center'>
                <div className='mr-2 w-full'>
                  <span className='text-xl'>Vision</span>
                  <div className='relative w-full' style={{ height: '40vh' }}>
                    <NextImage
                      src={Construct3}
                      layout='fill'
                      objectFit='cover'
                      alt='adda construct'
                    />
                  </div>
                  <p>
                    To build and realize every clients dream buildings with our
                    utmost effort.
                  </p>
                </div>
                <div className='ml-2 w-full'>
                  <span className='text-xl'>Mission</span>
                  <div className='relative w-full' style={{ height: '40vh' }}>
                    <NextImage
                      src={Construct2}
                      layout='fill'
                      objectFit='cover'
                      alt='adda construct'
                    />
                  </div>
                  <p>
                    To serve our clients with the best service in the
                    construction management field.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='my-10'>
            <h3>OUR SERVICES</h3>
            <div className='mb-3 h-1 w-10 bg-neutral-400'></div>
            <div className='sm:flex sm:items-center sm:justify-center'>
              <div className='flex w-full items-center bg-gray-200 p-5 sm:justify-center'>
                <FaPenAlt size={20} className='mr-5' />
                <span>Construction Design</span>
              </div>
              <div className='my-3 flex w-full items-center bg-gray-200 p-5 sm:my-0 sm:mx-3 sm:justify-center'>
                <FaUsersCog size={25} className='mr-5' />
                <span>Construction Management</span>
              </div>
              <div className='flex w-full items-center bg-gray-200 p-5 sm:justify-center'>
                <FaFileAlt size={25} className='mr-5' />
                <span>Construction Administration</span>
              </div>
            </div>
          </div>

          <div>
            <h3>THE PROCESS</h3>
            <div className='mb-3 h-1 w-10 bg-neutral-400'></div>
            <div className='mt-5 text-center sm:flex sm:justify-center'>
              <div className='sm:bg-gray-200 sm:p-5'>
                <h4>DESIGN</h4>
                <NextImage
                  src={Construct4}
                  height={150}
                  width={200}
                  alt='adda construct'
                />
              </div>
              <div className='hidden items-center justify-center sm:flex'>
                <FaChevronRight size={50} />
              </div>
              <div className='my-5 sm:my-0 sm:bg-gray-200 sm:p-5'>
                <h4>BUILD</h4>
                <NextImage
                  src={Construct1}
                  height={150}
                  width={200}
                  alt='adda construct'
                />
              </div>
              <div className='hidden items-center justify-center sm:flex'>
                <FaChevronRight size={50} />
              </div>
              <div className='sm:bg-gray-200 sm:p-5'>
                <h4>REVIEW</h4>
                <NextImage
                  src={Construct5}
                  height={150}
                  width={200}
                  alt='adda construct'
                />
              </div>
            </div>

            <div className='my-10'>
              <h3>PORTOFOLIO</h3>
              <div className='mb-3 h-1 w-10 bg-neutral-400'></div>
              <div className='sm:flex sm:justify-between'>
                <NextImage src='/images/porto/8.jpg' height={400} width={500} />
                <NextImage src='/images/porto/4.jpg' height={400} width={500} />
              </div>
              <div className='sm:flex sm:justify-between'>
                <NextImage src='/images/porto/5.jpg' height={400} width={500} />
                <NextImage src='/images/porto/7.jpg' height={400} width={500} />
              </div>
              <div className='sm:flex sm:justify-between'>
                <NextImage src='/images/porto/1.jpg' height={400} width={500} />
                <NextImage src='/images/porto/3.jpg' height={400} width={500} />
              </div>
              <div className='sm:flex sm:justify-between'>
                <NextImage src='/images/porto/2.jpg' height={400} width={500} />
                <NextImage src='/images/porto/6.jpg' height={400} width={500} />
              </div>
            </div>
          </div>

          <div>
            <h3>KEEP IN TOUCH</h3>
            <div className='mb-3 h-1 w-10 bg-neutral-400'></div>
            <div className='ml-3'>
              <div className='flex items-center'>
                <FaPhone size={20} />
                <span className='ml-2 text-lg'>+62852 6267 5111</span>
              </div>
            </div>
            <div className='ml-3'>
              <div className='flex items-center'>
                <FaInstagram size={20} />
                <span className='ml-2 text-lg'>addaconstruct</span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Construct;
