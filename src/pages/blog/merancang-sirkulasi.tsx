import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import ImageFeatured from '../../../public/images/udara.jpg';
import Udara_1 from '../../../public/images/udara1.jpg';
import Udara_2 from '../../../public/images/udara2.jpg';
import Udara_3 from '../../../public/images/udara3.jpg';
import Udara_4 from '../../../public/images/udara4.jpg';

const Sirkulasi = () => {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <Seo />
      <div className='layout p-2'>
        <div className='text-center'>
          <h1 className='my-2'>
            Bagaimana merancang sirkulasi udara yang baik?
          </h1>
          <NextImage src={ImageFeatured} height={400} width={600} />
        </div>
        <div>
          <h3>1. Bentuk Atap</h3>
          <NextImage src={Udara_1} height={400} width={500} />
          <p>
            Memiliki kemiringan cukup besar merupakan ciri khas dari bangunan di
            iklim tropis untuk menghadirkan penghawaan pasif di dalam hunian
          </p>
          <br />
          <h3>2. Orientasi Bukaan</h3>
          <NextImage src={Udara_2} height={400} width={500} />
          <p>
            Bukaan yang baik adalah menghadap arah selatan dan utara supaya
            tidak terpapar sinar matahari langsung dan mengikuti arah angin
            muson yang mengalir utara-selatan{' '}
          </p>
          <br />
          <h3>3. Ventilasi Silang</h3>
          <NextImage src={Udara_3} height={400} width={500} />
          <h3>3. Ketinggian Plafond</h3>
          <NextImage src={Udara_4} height={400} width={500} />
        </div>{' '}
      </div>
    </Layout>
  );
};

export default Sirkulasi;
