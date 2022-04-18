import * as React from 'react';

const WrapperLeft = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex'>{children}</div>;
};

const WrapperRight = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex justify-end'>{children}</div>;
};

const Title = (props: { side: string; label: string }) => {
  const { side, label } = props;

  return (
    <>
      {side === 'left' ? (
        <WrapperLeft>
          <div className=' rounded-tr-3xl border-4 border-solid border-b-neutral-700 bg-gray-200 p-4 text-right text-xl uppercase sm:w-1/4'>
            {label}
          </div>
        </WrapperLeft>
      ) : (
        <WrapperRight>
          <div className='rounded-tl-3xl border-4 border-solid border-b-neutral-700 bg-gray-200 p-4 text-xl uppercase sm:w-1/4'>
            {label}
          </div>
        </WrapperRight>
      )}
    </>
  );
};

export default Title;
