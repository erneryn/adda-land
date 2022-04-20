import { FaHandshake } from 'react-icons/fa';
import { ParallaxBanner } from 'react-scroll-parallax';

const Construct = () => {
  return (
    <ParallaxBanner
      layers={[{ image: '/images/land.jpg', speed: -10, opacity: [3, 0.6] }]}
      style={{ height: '50vh' }}
      className='mb-4'
    >
      <div className='layout absolute inset-0 z-10 flex flex-col items-center justify-center text-white drop-shadow-2xl'>
        <FaHandshake size={40} />
        <h1 className='text-3xl font-extrabold '>LAND PARTNERSHIP</h1>
        <p className='mt-2 text-center text-lg drop-shadow-2xl'>
          ADDALAND sangat terbuka untuk dalam pengembangan lahan milik anda.
          dengan skema kerjasama.
          <br />
          Land Owners tidak perlu mengeluarkan biaya tambahan dalam pengembangan
          proyek. jadi resiko relatif kecil untuk pihak yang belum pernah
          terlibat di bidang property.
        </p>
        <div className='mt-4 border-b-2 border-b-white px-4 py-1 text-xl '>
          So Lets Talk
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default Construct;
