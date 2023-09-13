import React from 'react';

import FooterJSON from '../../constants/Footer.json';
//Images
import Logo from '../../assets/Footer/Logoo.png';
import UniversityLogo from '../../assets/Footer/deakin.png';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='w-full h-full bg-blue py-2 px-4'>
      <div className='grid md:grid-cols-2'>
        <div className='w-full h-full flex gap-3 items-center'>
          <div className='w-[100px] h-[100px]'>
            <img
              src={Logo}
              alt='Chamleon'
              className='w-full h-full object-contain'
            />
          </div>
          <div className='w-full h-full flex flex-col justify-start items-start'>
            <div className='flex  md:justify-start justify-center'>
              {FooterJSON?.map((item, idx) => {
                return (
                  <Link to={item.link} key={idx}>
                    <img
                      src={item.img}
                      alt={item.alt}
                      className='w-[40px] h-[40px] object-contain rounded-md'
                    />
                  </Link>
                );
              })}
            </div>
            <div>
              <h1 className='text-lg  md:text-2xl text-white flex md:justify-start justify-center'>
                &copy;2023 Copyright reserved by Chameleon
              </h1>
            </div>
          </div>
        </div>
        <div className='w-full h-full flex justify-between items-center'>
          <div className='w-full h-full pt-3 flex flex-col justify-start items-start font-semibold text-white'>
            <div>
              <h1 className=' text-lg md:text-xl  text-center mb-2'>
                Contact Us
              </h1>
              <p className='text-md text-center'>PH: 03 59756586</p>
              <p className='text-md text-center'>
                E:
                <a
                  href='mailto:info@chameleon.com'
                  className='text-white no-underline hover:underline'>
                  info@chameleon.com
                </a>
              </p>
            </div>
          </div>
          <div className='w-[100px] h-[100px]'>
            <img
              src={UniversityLogo}
              alt={'Deakin'}
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
