import TitleComp from './layout/TitleCard';

const VirtualTour = () => {
  return (
    <>
      <TitleComp side='right' label='Virtual Tour' />
      <div className='layout mt-3 flex items-center justify-center'>
        <iframe
          width='800'
          height='400'
          src='https://www.youtube.com/embed/Emkme-HtkII'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default VirtualTour;
