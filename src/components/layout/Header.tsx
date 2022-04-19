import * as React from 'react';
import { FaAngleDown, FaBars } from 'react-icons/fa';

import UnstyledLink from '@/components/links/UnstyledLink';

import Drawer from './drawer';
import NextImage from '../NextImage';
const links = [
  { href: '/', label: 'Home' },
  {
    href: '/',
    label: 'Property',
    children: [
      { href: '/property/hunian-karya-darma', label: 'Hunian Karya Darma' },
      { href: '/property/hunian-kasih-lima', label: 'Hunian Kasih Lima' },
      { href: '/property/hunian-balam', label: 'Hunian Balam' },
    ],
  },
  { href: '/adda-construct', label: 'ADDA-Construct' },
];

export default function Header() {
  const [showDrawer, setShowDrawer] = React.useState<boolean>(false);
  const [showDropDown, setShowDropDown] = React.useState<boolean>(false);

  return (
    <header className='sticky top-0 bg-gray-100' style={{ zIndex: 2000 }}>
      <div className='layout flex items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          <NextImage
            src='/images/logo.png'
            height={70}
            width={120}
            alt='Addaland logo'
          />
        </UnstyledLink>
        <nav className='hidden w-6/12 items-center justify-center sm:flex'>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map((e) => {
              return e.children ? (
                <li
                  key={e.label}
                  className='flex cursor-pointer items-center'
                  onClick={() => setShowDropDown(!showDropDown)}
                >
                  <FaAngleDown className='mr-1' /> Property
                  {showDropDown && (
                    <div className='absolute mt-32 bg-gray-300 p-1'>
                      <ul className='flex flex-col '>
                        {e.children.map(({ href, label }) => (
                          <UnstyledLink
                            href={href}
                            key={label}
                            className='my-1 hover:text-gray-500'
                          >
                            {label}
                          </UnstyledLink>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <li key={`${e.href}${e.label}`}>
                  <UnstyledLink
                    href={e.href}
                    className='mx-4 hover:text-gray-600'
                  >
                    {e.label}
                  </UnstyledLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className='rounded-md border-2 p-1 sm:hidden'>
          <FaBars
            className='text-gray-400 '
            onClick={() => setShowDrawer(true)}
            size={30}
          />
        </div>
        {showDrawer && <Drawer closeDrawer={() => setShowDrawer(false)} />}
      </div>
    </header>
  );
}
