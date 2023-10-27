import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (

    <footer className="bg-black shadow dark:bg-black">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <img src="https://cdn.icon-icons.com/icons2/665/PNG/512/alien_pixel2_icon-icons.com_60290.png" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PixelArcade</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/" className="mr-4 hover:underline md:mr-6 text-white">Home</Link>
            </li>
            <li>
              <Link href="/games" className="mr-4 hover:underline md:mr-6 text-white">Games</Link>
            </li>
            <li>
              <Link href="/contact" className="mr-4 hover:underline md:mr-6 text-white">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-white">2023 <Link href="/" className="hover:underline">PixelArcade</Link>. Modelado de Software</span>
      </div>
    </footer>



  );
};

export default Footer;