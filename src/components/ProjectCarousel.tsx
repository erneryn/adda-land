import { FaBed, FaHome, FaToilet } from 'react-icons/fa';

import TitleComp from './layout/TitleCard';
import UnstyledLink from './links/UnstyledLink';
import NextCarousel from './NextCarousel';
import NextImage from './NextImage';
import { Products } from '../data/product';

interface Product {
  id: number;
  title: string;
  desc: string;
  tahun: number;
  lt: number;
  lb: number;
  kamar: number;
  toilet: number;
  harga: string;
  src: string;
  link: string;
  slug: string;
}

const CardProduct = (props: { product: Product }) => {
  const { product } = props;

  return (
    <UnstyledLink href={`/property/${product.slug}`}>
      <div className='relative mr-2 mb-8 h-52'>
        <div className='absolute right-0 top-0 z-10'>
          <div className='bg-neutral-500 bg-opacity-70 p-2 text-white'>
            {product.harga ? product.harga : 'SOLD OUT'}
          </div>
        </div>
        <div className='absolute left-0 bottom-0 right-0 z-10'>
          <div className='bg-neutral-500 bg-opacity-70 p-2 text-lg text-white'>
            {product.title}
          </div>
          <div className='flex rounded-lg bg-zinc-700 bg-opacity-80 p-2'>
            <div className='ml-3 flex items-center text-white'>
              <FaBed size={15} /> <span className='ml-3'>{product.kamar}</span>
            </div>
            <div className='mx-16 flex items-center text-white'>
              <FaToilet size={10} />{' '}
              <span className='ml-3'>{product.toilet}</span>
            </div>
            <div className='mr-3 flex items-center text-white'>
              <FaHome size={15} />
              <span className='ml-3'>
                {product.lb} m<sup>2</sup>
              </span>
            </div>
          </div>
        </div>
        <NextImage
          layout='fill'
          src={product.src}
          objectFit='cover'
          alt={product.title}
        />
      </div>
    </UnstyledLink>
  );
};

const Project = () => {
  return (
    <>
      <TitleComp side='right' label='Our Project' />
      <div className='layout mt-5'>
        <NextCarousel items={3}>
          {Products.map((data) => {
            return <CardProduct key={data.id} product={data} />;
          })}
        </NextCarousel>
      </div>
    </>
  );
};

export default Project;
