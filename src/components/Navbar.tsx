"use client";
import Link from "next/link";

import { links } from "@/constants";
import { useActiveHash } from "./useHashChange";

export default function Navbar() {
  const hash = useActiveHash();
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center gap-x-10">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-foreground after:bg-foreground relative font-medium transition-colors duration-200 after:absolute after:-bottom-[4px] after:left-0 after:h-[1.6px] after:w-0 after:transition-all after:duration-200 after:content-[''] hover:after:w-full ${link.href === hash ? "after:w-full" : ""}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
