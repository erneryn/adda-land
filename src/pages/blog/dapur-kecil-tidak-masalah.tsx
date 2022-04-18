import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import ImageFeatured from '../../../public/images/dapur.jpg';

const DapurKecil = () => {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <Seo />
      <div className='layout p-2'>
        <div className='text-center'>
          <h1 className='my-2'>Dapur Kecil Tidak Masalah</h1>
          <NextImage src={ImageFeatured} height={400} width={600} />
        </div>
        <div>
          <h3>1. fungsi Cahaya dan Pemilihan Warna</h3>
          <p>
            Saat merencanakan sebuah dapur ada beberapa factor yang harus anda
            perhatikan. Karena dimensinya kecil, maka fungsi cahaya dan
            pemilihan warna ruangan adalah dua factor utama yg harus anda
            perhatikan
          </p>
          <br />
          <h3>2. Maksimalkan Faktor Cahaya</h3>
          <p>
            Pemilihan warna gelap memang akan memberikan kesan hangat dan
            nyaman, namun factor cahaya harus dimaksimalkan di ruangan tersebut.
            Sebaliknya, jika warna ruang dapur anda berwarna cerah, maka factor
            cahaya sebagai pendukungnya saja.
          </p>
          <br />
          <h3>3. Efesiensi Ruangan</h3>
          <p>
            Manfaatkan lah ruang mungil tersebut dengan furniture custom
            sehingga anda dapat melipat, menyembunyikan atau bahkan mengalihkan
            fungsi satu sudut ke fungsi lainnya dengan mudah dan efisien.
          </p>
        </div>{' '}
      </div>
    </Layout>
  );
};

export default DapurKecil;
