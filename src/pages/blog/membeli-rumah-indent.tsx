import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import ImageFeatured from '../../../public/images/indent.jpg';

const Indent = () => {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <Seo />
      <div className='layout p-2'>
        <div className='text-center'>
          <h1 className='my-2'>Membeli Rumah Indent Ini Tipsnya</h1>
          <NextImage src={ImageFeatured} height={400} width={600} />
        </div>
        <div>
          <h3>1. Periksa Legalitas</h3>
          <p>
            Tanyakan semua kelengkapan legalitas proyek tersebut, hal yang
            terpenting adalah sertifikat lahan dan IMB
          </p>
          <br />
          <h3>2. Riset Track Record Developer</h3>
          <p>
            Lakukan riset ini dengan cara mengunjungi beberapa proyek yang telah
            selesai dikerjakan. Dari sini anda bisa melihat hasil kerja
            developer tersebut tanpa harus mendengar penjelasan dari mereka
          </p>
          <br />
          <h3>3. Timeline Pengerjaan Proyek</h3>
          <p>
            Tidak ada salahnya bertanya lebih detail ke developer tentang
            timeline proyek, ini berguna untuk mengecek progress ketika anda
            berkunjung ke proyek{' '}
          </p>
        </div>{' '}
      </div>
    </Layout>
  );
};

export default Indent;
