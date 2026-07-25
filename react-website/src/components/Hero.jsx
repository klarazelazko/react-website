import React from 'react';
import { Users, Globe, Heart } from 'lucide-react';
import assets from '../assets/assets';

//dane do statystyk
const stats = [
  { icon: Users, value: '120+', label: 'Projects delivered' },
  { icon: Globe, value: '18',   label: 'Countries served' },
  { icon: Heart, value: '97%',  label: 'Client satisfaction' },
];

const Hero = () => {
  return (
    //układ 2-kolumnowy: mobile = pod sobą, od lg = obok siebie
    //relative + overflow-hidden pod blob w tle
    <section id='hero' className='relative flex flex-col lg:flex-row items-center gap-12 lg:gap-8 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 w-full overflow-hidden text-gray-700 dark:text-white'>

        {/* blob w tle*/}
      <div className='absolute top-10 right-0 -z-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl' />

     {/*LEWA KOLUMNA*/}
      <div className='flex-1 max-lg:text-center'>

        {/* etykieta nad nagłówkiem */}
        <span className='inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary bg-primary/10 px-3 py-1 rounded'>
          Digital product studio
        </span>

        <h1 className='mt-6 text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.15] text-gray-900 dark:text-white'>
        We design and build<br />
        digital products
            <span className='block font-display italic font-normal leading-[1.9] pb-[0.3em] bg-gradient-to-r from-[#1E1B4B] to-[#4D8CEA] bg-clip-text text-transparent'>
            people love
            </span>
        </h1>

        <p className='mt-6 max-w-md max-lg:mx-auto text-gray-500 dark:text-gray-300'>
          We help startups and companies create meaningful digital experiences that drive growth.
        </p>

        {/* CTA: główny + poboczny */}
        <div className='mt-8 flex flex-wrap gap-3 max-lg:justify-center'>
          <a href='#contact-us' className='flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:scale-105 transition-all'>
            Start a project <img src={assets.arrow_icon} width={14} alt='' />
          </a>
          <a href='#our-work' className='px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all'>
            See our work
          </a>
        </div>

        {/* statystyki */}
        <div className='mt-12 flex flex-wrap gap-8 max-lg:justify-center'>
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className='flex items-center gap-3'>
              <span className='grid place-items-center size-10 rounded-full bg-primary/10 text-primary'>
                <Icon size={18} />
              </span>
              <span className='text-left'>
                <p className='font-semibold text-gray-900 dark:text-white'>{value}</p>
                <p className='text-xs text-gray-500 dark:text-gray-400'>{label}</p>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* PRAWA KOLUMNA */}
      <div className='flex-1'>
        <img src={assets.dashboard} alt='Podgląd produktu' className='w-full' />
      </div>
    </section>
  );
};

export default Hero;