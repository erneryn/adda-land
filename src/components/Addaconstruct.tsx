import UnstyledLink from './links/UnstyledLink';

const Construct = () => {
  return (
    <div
      className='flex items-center justify-center bg-addaconstruct bg-cover bg-center'
      style={{ height: '40vh' }}
    >
      <div className='layout w-3/4 text-white'>
        <h1 className='text-3xl font-extrabold text-white'>ADDA CONSTRUCT</h1>
        <p className='mt-2'>
          We are a construction company based in Medan. Our goal is to help our
          clients build and realize their dream buildings. With our experienced
          workers, we are ready to serve your needs.since 2012, our founder,
          Dendy & Rian, was determined to create a construction company where we
          dont neglect our clients dream for a cold material calculation.
        </p>
        <div className='flex'>
          <UnstyledLink href='/adda-construct'>
            <div className='mt-4 border-2 border-white px-4 py-1 text-xl '>
              SEE MORE
            </div>
          </UnstyledLink>
        </div>
      </div>
    </div>
  );
};

export default Construct;
