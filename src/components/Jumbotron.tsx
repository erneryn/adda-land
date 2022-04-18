import Image from 'next/image';
import { FaBed, FaHome, FaMapMarkedAlt, FaToilet } from 'react-icons/fa';

import NextCarousel from '@/components/NextCarousel';

const DetailInfo = (props: {
  name: string;
  location: string;
  price: string;
  bed: string;
  toilet: string;
  size: string;
  status: string;
}) => {
  const { name, location, price, bed, toilet, size, status } = props;

  return (
    <>
      <div className='flex justify-end'>
        <div className='mb-2 rounded-lg bg-neutral-500 bg-opacity-70 p-2 text-lg text-white'>
          {price}
        </div>
      </div>
      <div className='relative rounded-lg bg-neutral-500 bg-opacity-70 p-3'>
        <div className='absolute right-0 top-0 bg-white p-3'>
          <h1 className='text-sm uppercase'>{status}</h1>
        </div>
        <h1 className='text-xl text-white'>{name}</h1>
        <div className='my-3 flex'>
          <FaMapMarkedAlt size={20} className='mr-2 text-white' />
          <h1 className='text-sm text-white'>{location}</h1>
        </div>
        <div className='mt-5 flex rounded-lg bg-zinc-700 bg-opacity-80 p-2'>
          <div className='ml-3 flex items-center text-white'>
            <FaBed size={30} /> <span className='ml-3'>{bed}</span>
          </div>
          <div className='mx-16 flex items-center text-white'>
            <FaToilet size={20} /> <span className='ml-3'>{toilet}</span>
          </div>
          <div className='mr-3 flex items-center text-white'>
            <FaHome size={25} />
            <span className='ml-3'>
              {size} m<sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const Jumbotron = () => {
  return (
    <NextCarousel items={1}>
      <div className='relative h-3/4 w-full' style={{ height: '70vh' }}>
        <Image
          src='/images/kasihlima.png'
          alt='kasih lima'
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute left-2 right-2 bottom-0 mb-10 sm:left-0 sm:right-auto sm:ml-60'>
          <DetailInfo
            name='Hunian Kasih Lima'
            location='Jalan Kasih V'
            price='Rp. 625.000.000'
            bed='1'
            toilet='3'
            size='80'
            status='on progress'
          />
        </div>
      </div>
      <div className='relative h-3/4 w-full' style={{ height: '70vh' }}>
        <Image
          src='/images/balam.png'
          alt='kasih lima'
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute left-2 right-2 bottom-0 mb-10 sm:left-0 sm:right-auto sm:ml-60'>
          <DetailInfo
            name='Hunian Balam'
            location='Jalan Balam - Ringroad'
            price='Rp. 750.000.000'
            bed='1'
            toilet='3'
            size='80'
            status='on progress'
          />
        </div>
      </div>
    </NextCarousel>
  );
};

export default Jumbotron;
