import { links } from '@/constants';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <ul className='flex items-center gap-x-10'>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={`#${link.href}`}
              className="
                 hover:text-secondary-foreground/90 
                transition-colors duration-200
                relative font-medium
                after:content-[''] after:absolute after:left-0 after:-bottom-[4px] after:w-0 after:h-[1.6px] 
                after:bg-secondary-foreground after:transition-all after:duration-200 
                hover:after:w-full
              "
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
