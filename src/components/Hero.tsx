'use client';
import { Github, Twitter, Instagram, ChevronDown } from 'lucide-react';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0%,100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(2deg); }
      }
      .float-slow { animation: float 6s ease-in-out infinite; }

      @keyframes scroll-dot {
        0% { transform: translateY(-6px); opacity: 0; }
        10% { opacity: 1; }
        50% { transform: translateY(6px); opacity: 1; }
        90% { opacity: 0; }
        100% { transform: translateY(-6px); opacity: 0; }
      }
      .scroll-dot { animation: scroll-dot 1.6s infinite cubic-bezier(.22,.9,.32,1); }

      @keyframes gentle-bounce {
        0%,100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
      .gentle-bounce { animation: gentle-bounce 2.8s ease-in-out infinite; }

      /* tiny accessibility improvement: prefers-reduced-motion */
      @media (prefers-reduced-motion: reduce) {
        .float-slow, .scroll-dot, .gentle-bounce { animation: none; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className='w-full mt-32 md:mt-40 flex items-center justify-center px-4 relative overflow-hidden'>
      {/* === BACKGROUND ELEMENTS === */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full opacity-15 blur-3xl'></div>
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full opacity-10 blur-3xl'></div>

      {/* Floating code symbols */}
      <span className='absolute top-[15%] left-[10%] text-gray-400/10 text-7xl font-mono select-none float-slow'>
        {'{'}
      </span>
      <span className='absolute bottom-[20%] right-[15%] text-gray-400/10 text-8xl font-mono rotate-12 select-none float-slow'>
        {'}'}
      </span>
      <span className='absolute top-[40%] right-[5%] text-gray-400/10 text-6xl font-mono -rotate-6 select-none float-slow'>
        {'();'}
      </span>
      <span className='absolute bottom-[10%] left-[20%] text-gray-400/10 text-7xl font-mono rotate-3 select-none float-slow'>
        {'<>'}
      </span>
      <span className='absolute top-[5%] right-[30%] text-gray-400/10 text-8xl font-mono rotate-6 select-none float-slow'>
        {'[]'}
      </span>

      {/* === HERO CONTENT === */}
      <div className='w-full text-center relative z-10'>
        {/* Status Badge */}
        <div className='flex items-center justify-center mb-8'>
          <div className='flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 bg-white/40 backdrop-blur-sm'>
            <div className='w-2 h-2 bg-green-600 rounded-full animate-pulse'></div>
            <span className='text-sm font-medium text-gray-700'>
              Available for a new project
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className='text-5xl md:text-6xl font-bold mb-4 text-gray-900'>
          Hey, I’m <span className='text-gray-900'>Yusuf Adeyemi</span>
        </h1>

        {/* Subheading (kept as requested) */}
        <p className='text-2xl md:text-3xl font-medium text-gray-600 mb-2'>
          {/* Software Engineer */}
          Fullstack Developer
        </p>

        {/* Tagline */}
        <p className='text-md text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed'>
          Turning ideas into seamless digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-12'>
          <a
            href='#projects'
            className='px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg active:scale-95'
          >
            View My Work
          </a>
          <a
            href='#contact'
            className='px-8 py-3 border-2 border-gray-300 text-gray-900 font-medium rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all duration-300'
          >
            Get in Touch
          </a>
        </div>

        {/* Social Icons */}
        <div className='flex items-center justify-center gap-6 mb-8'>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-gray-900 transition-transform duration-300 hover:scale-110'
            aria-label='GitHub'
          >
            <Github size={24} />
          </a>
          <a
            href='https://x.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-gray-900 transition-transform duration-300 hover:scale-110'
            aria-label='X'
          >
            <Twitter size={24} />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-gray-900 transition-transform duration-300 hover:scale-110'
            aria-label='Instagram'
          >
            <Instagram size={24} />
          </a>
        </div>

        {/* Modern Scroll Indicator */}
        <div className='mx-auto w-[42px] h-[66px] mt-20 rounded-[28px] border-2 border-gray-300 flex items-start justify-center p-2'>
          {/* animated dot */}
          <div className='size-2 rounded-full bg-green-200 scroll-dot' />
        </div>

        {/* little subtle chevron for extra hint (non-distracting) */}
        <div className='mt-3 flex items-center justify-center gap-2 opacity-70'>
          <ChevronDown size={20} className='text-gray-400 gentle-bounce' />
        </div>
      </div>
    </section>
  );
}
