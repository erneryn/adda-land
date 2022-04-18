import TitleComp from './layout/TitleCard';
import UnstyledLink from './links/UnstyledLink';
import NextCarousel from './NextCarousel';
import NextImage from './NextImage';
import { dataBlog } from '../data/blog';

const CardComponent = (props: {
  title: string;
  desc: string;
  src: string;
  url: string;
}) => {
  const { title, desc, src, url } = props;
  return (
    <div className='layout my-6 flex items-center justify-center'>
      <div className='w-full'>
        <div className='flex flex-col items-end justify-end p-4 text-right'>
          <h1 className='text-3xl  sm:w-3/6'>{title}</h1>
          <p className='mt-2 sm:w-10/12'>{desc}</p>
          <UnstyledLink href={`${url}`}>
            <button className='mt-3 border-2 border-slate-800 p-1'>
              READ MORE
            </button>
          </UnstyledLink>
        </div>
      </div>
      <div className='relative w-full' style={{ height: '40vh' }}>
        <NextImage
          src={src}
          layout='fill'
          objectFit='cover'
          alt='dapur kecil tidak masalah'
        />
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className='my-4'>
      <TitleComp side='left' label='blog' />
      <NextCarousel items={1}>
        {dataBlog.map(({ title, desc, src, url }) => (
          <CardComponent
            title={title}
            desc={desc}
            src={src}
            url={url}
            key={title}
          />
        ))}
      </NextCarousel>
    </div>
  );
};

export default Blog;
