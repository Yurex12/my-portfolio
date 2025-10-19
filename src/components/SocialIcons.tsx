import React from "react";
import { FiGithub } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { RiTwitterXFill } from "react-icons/ri";

export default function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-x-6">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary/90 transition-transform duration-300 hover:scale-110"
        aria-label="GitHub"
      >
        <FiGithub size={25} />
      </a>
      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary/90 transition-transform duration-300 hover:scale-110"
        aria-label="X"
      >
        <RiTwitterXFill size={25} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary/90 transition-transform duration-300 hover:scale-110"
        aria-label="Instagram"
      >
        <GoMail size={25} />
      </a>
    </div>
  );
}
