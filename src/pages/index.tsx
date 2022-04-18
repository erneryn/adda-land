import * as React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import About from '@/components/About';
import Construct from '@/components/Addaconstruct';
import Blog from '@/components/Blog';
import Jumbotron from '@/components/Jumbotron';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import PartnerShip from '@/components/Partnership';
import Project from '@/components/ProjectCarousel';
import Seo from '@/components/Seo';
import VirtualTour from '@/components/VirtualTour';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <Seo />
      <main>
        <section className='bg-slate-50'>
          <Jumbotron />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Construct />
        </section>
        <section>
          <Blog />
        </section>
        <section>
          <Project />
        </section>

        <section>
          <div className='flex items-center justify-center bg-gray-200 p-6'>
            <div className='mr-4 w-full text-right text-xl sm:text-4xl'>
              For More Information
            </div>
            <div className='ml-4 flex w-full'>
              <UnstyledLink
                href='https://api.whatsapp.com/send?phone=6281260754118'
                className='flex items-center justify-center border-2 border-neutral-700 p-2 px-10 sm:w-1/2'
              >
                <FaWhatsapp className='mr-2' />
                <span>WhatsApp</span>
              </UnstyledLink>
            </div>
          </div>
        </section>

        <section>
          <PartnerShip />
        </section>

        <section>
          <VirtualTour />
        </section>
      </main>
    </Layout>
  );
}
