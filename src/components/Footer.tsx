import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (

    <footer className="bg-black shadow dark:bg-black">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <img src="https://cdn.icon-icons.com/icons2/665/PNG/512/alien_pixel2_icon-icons.com_60290.png" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="text-white self-center text-4xl font-semibold whitespace-nowrap dark:text-white">PixelArcade</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            <li className="flex items-center">
              <img src="https://cdn.icon-icons.com/icons2/2873/PNG/512/instagram_pixel_logo_icon_181922.png" alt="Red Social" className="h-7 mr-1" />
              <Link href="/contact" className="text-2xl hover:underline md:mr-6 text-white">Instagram</Link>
            </li>
            <li className="flex items-center">
              <img src="https://cdn.icon-icons.com/icons2/2873/PNG/512/facebook_pixel_logo_icon_181920.png" alt="Red Social" className="h-7 mr-1" />
              <Link href="/contact" className="text-2xl hover:underline md:mr-6 text-white">Facebook</Link>
            </li>
            <li className="flex items-center">
              <img src="https://cdn.icon-icons.com/icons2/2873/PNG/512/twitter_pixel_logo_icon_181924.png" alt="Red Social" className="h-7 mr-1" />
              <Link href="/contact" className="text-2xl hover:underline md:mr-6 text-white">Twitter</Link>
            </li>
            <li className="flex items-center">
              <img src="https://cdn.icon-icons.com/icons2/2873/PNG/512/google_pixel_logo_icon_181921.png" alt="Red Social" className="h-7 mr-1" />
              <Link href="/contact" className="text-2xl hover:underline md:mr-6 text-white">Correo</Link>
            </li>
            <li className="flex items-center">
              <img src="https://cdn.icon-icons.com/icons2/2873/PNG/512/whatsapp_pixel_logo_icon_181923.png" alt="Red Social" className="h-7 mr-1" />
              <Link href="/contact" className="text-2xl hover:underline md:mr-6 text-white">Whatsapp</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-white textFooter">2023 <Link href="https://docs.google.com/document/d/1mvDJvf6r2iy5AcjhwRjMr0Mekp3u7H5RYqvORB15muE/edit?usp=sharing" className="hover:underline textFooter" target='_blank'>MANUAL DE USUARIO</Link>. PIXEL ARCADE</span>
      </div>
    </footer>



  );
};

export default Footer;