import TitleComp from './layout/TitleCard';
import NextImage from './NextImage';
import BNI from '../../public/images/logo-bni-color.png';
import BRI from '../../public/images/logo-bri.png';
import BTN from '../../public/images/logo-btn-color.png';

const PartnerShip = () => {
  return (
    <div className='mt-3'>
      <TitleComp side='left' label='Partnership' />
      <div className='layout flex items-center justify-around'>
        <NextImage src={BNI} height={100} width={150} />
        <NextImage src={BRI} height={100} width={150} />
        <NextImage src={BTN} height={100} width={150} />
      </div>
    </div>
  );
};

export default PartnerShip;
