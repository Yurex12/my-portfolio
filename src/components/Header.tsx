import GithubLogo from './GithubLogo';
import Logo from './Logo';
import Navbar from './Navbar';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full z-50 mt-4'>
      <div
        className='flex items-center justify-between mx-auto w-11/12 lg:w-full max-w-7xl 
    bg-gradient-to-r from-background/50 to-background/30 backdrop-blur 
    py-2 lg:py-4 px-4 border rounded-xl border-input 
    shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all'
      >
        <Logo />

        <Navbar />

        {/* <GithubLogo /> */}

        <Button className='bg-primary/90'>Resume</Button>

        {/* <div className='flex items-center gap-4'>
          <a
            href='#contact-me'
            className='px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg 
        hover:bg-gray-800 hover:scale-[1.03] transition-transform duration-200'
          >
            Get in touch
          </a>

          <GithubLogo />
        </div> */}
      </div>
    </header>
  );
}

{
  /* <div className='flex items-center gap-x-4'> */
}
{
  /* <MenuIcon className='font-black' /> */
}
{
  /* </div> */
}

{
  /* <div className='flex items-center gap-6'>
  <Navbar />
  <GithubLogo />
</div> */
}
