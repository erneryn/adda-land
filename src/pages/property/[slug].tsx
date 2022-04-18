import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaMap } from 'react-icons/fa';

import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextCarousel from '@/components/NextCarousel';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import { Products } from '../../data/product';

interface ProductIF {
  id: number;
  slug: string;
  title: string;
  desc: string;
  tahun: number;
  lt: number;
  lb: number;
  kamar: number;
  toilet: number;
  harga: string;
  status: string;
  src: string;
  link: string;
  slide: string[];
  location: string;
  maps: string;
}

const ImageCarousel = (props: { slide: string[] }) => {
  const { slide } = props;
  return (
    <div className='sm:w-1/2'>
      <NextCarousel items={1}>
        {slide &&
          slide.map((url) => {
            return (
              <NextImage src={url} height={400} width={600} alt='' key={url} />
            );
          })}
      </NextCarousel>
    </div>
  );
};

const Property = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState<ProductIF | null | undefined>(undefined);

  useEffect(() => {
    const product = Products.find((e) => e.slug === slug);

    setData(product);
  }, [slug]);

  return (
    <Layout>
      <Seo templateTitle='Home' />
      <div className='layout my-2'>
        {data && (
          <div>
            <h1>{data.title}</h1>
            <ImageCarousel slide={data.slide} />
            <div className='my-2 flex'>
              <h2 className='rounded-lg bg-neutral-500 p-2 text-white'>
                {data.harga ? data.harga : 'Sold Out'}
              </h2>
            </div>
            <div className='my-4 mb-5 sm:mb-10'>
              <h3>Description</h3>
              <div className='mb-3 h-1 w-20 bg-neutral-400'></div>
              <p>{data.desc}</p>
            </div>
            <div className='my-4 mb-5 sm:mb-10'>
              <h3>Location</h3>
              <div className='mb-3 h-1 w-20 bg-neutral-400'></div>
              <ul>
                {data.location &&
                  data.location.split(',').map((e) => <li key={e}>{e}</li>)}
              </ul>
              <span className='mt-3 flex items-center'>
                <FaMap className='mr-3' />
                <UnstyledLink
                  href={data.maps}
                  target='_blank'
                  className='border-b border-b-neutral-700'
                >
                  open in maps
                </UnstyledLink>
              </span>
            </div>
            <div className='my-4 mb-5 sm:mb-10'>
              <h3>Details</h3>
              <div className='mb-3 h-1 w-10 bg-neutral-400'></div>
              <table className='border'>
                <tr>
                  <td className='p-4'>Tahun</td>
                  <td className='w-20 p-4'>{data.tahun}</td>
                </tr>
                <tr className='bg-neutral-200'>
                  <td className='p-4'>Lebar Tanah</td>
                  <td className='w-20 p-4'>
                    {data.lt} m<sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td className='p-4'>Lebar Bangunan</td>
                  <td className='w-20 p-4'>
                    {data.lb} m<sup>2</sup>
                  </td>
                </tr>
                <tr className='bg-neutral-200'>
                  <td className='p-4'>Kamar Tidur</td>
                  <td className='w-20 p-4'>{data.kamar}</td>
                </tr>
                <tr>
                  <td className='p-4'>Kamar Mandi</td>
                  <td className='w-20 p-4'>{data.toilet}</td>
                </tr>
                <tr className='bg-neutral-200'>
                  <td className='p-4'>Status</td>
                  <td className='w-40 p-4'>
                    {data.harga ? 'On Progress' : 'Sold Out'}
                  </td>
                </tr>
              </table>
            </div>
            <div>
              {data.slug === 'hunian-balam' && (
                <div>
                  <UnstyledLink
                    href='/images/products/balam/balam.pdf'
                    download
                    target='_blank'
                  >
                    <span>Download E-Brochure</span>
                  </UnstyledLink>
                </div>
              )}
              {data.slug === 'hunian-kasih-lima' && (
                <div>
                  <UnstyledLink
                    href='/images/products/kasih/kasihlima.pdf'
                    download
                    target='_blank'
                  >
                    <span>Download E-Brochure</span>
                  </UnstyledLink>{' '}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Property;
