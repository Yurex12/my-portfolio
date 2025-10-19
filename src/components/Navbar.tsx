import { links } from "@/constants";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center gap-x-10">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={`#${link.href}`}
              className="text-foreground after:bg-foreground relative font-medium transition-colors duration-200 after:absolute after:-bottom-[4px] after:left-0 after:h-[1.6px] after:w-0 after:transition-all after:duration-200 after:content-[''] hover:after:w-full"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
