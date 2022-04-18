import {
  FaEnvelope,
  FaInstagram,
  FaMapPin,
  FaPhone,
  FaYoutube,
} from 'react-icons/fa';

import UnstyledLink from '@/components/links/UnstyledLink';

import NextImage from '../NextImage';

const Footer = () => {
  return (
    <div className='bg-gray-100'>
      <div className='sm:layout mt-3  sm:flex'>
        <div className='px-2 py-4 sm:w-1/2'>
          <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
            <NextImage
              src='/images/logo.png'
              height={70}
              width={120}
              alt='Addaland logo'
            />
          </UnstyledLink>
          <div className='mt-4 flex items-start  text-gray-500'>
            <div className='mr-2'>
              <FaMapPin />
            </div>
            <span>
              Jl. Ir. H. Juanda Jl. Bahagia No.50, Sukaraja, Kec. Medan Maimun,
              Kota Medan, Sumatera Utara 20159
            </span>
          </div>
          <div className='mt-4 flex items-start  text-gray-500'>
            <div className='mr-2'>
              <FaEnvelope />
            </div>
            <span>Industribahari@yahoo.com</span>
          </div>
          <div className='mt-4 flex items-start  text-gray-500'>
            <div className='mr-2'>
              <FaPhone />
            </div>
            <span>+6281260754118</span>
          </div>
        </div>
        <div className='border-2 border-t-neutral-700 px-2 py-4 sm:w-1/4 sm:border-none'>
          <span className='text-xl'>OUR PROJECT</span>
          <ul className='ml-3'>
            <li className='my-2'>
              <UnstyledLink href='/'>Hunian Balam</UnstyledLink>
            </li>
            <li className='my-2'>
              <UnstyledLink href='/'>Kasih Lima</UnstyledLink>
            </li>
            <li className='my-2'>
              <UnstyledLink href='/'>Suka Jaya Residence</UnstyledLink>
            </li>
            <li className='my-2'>
              <UnstyledLink href='/'>Melinjo 2 Residence</UnstyledLink>
            </li>
            <li className='my-2'>
              <UnstyledLink href='/'>Eka Warni 4 Residence</UnstyledLink>
            </li>
          </ul>
        </div>
        <div className='flex justify-around border-2 border-t-neutral-700 py-2 sm:ml-2 sm:block sm:w-1/4 sm:border-none'>
          <FaInstagram size={50} />
          <FaYoutube size={50} />
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <span>© 2020 - ADDALAND ,by ERN</span>
      </div>
    </div>
  );
};

export default Footer;
