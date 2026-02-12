import { Language, Link, Project, Service, SocialLink } from "@/types/types";
import { Globe, Smartphone } from "lucide-react";
import { BiGlobe } from "react-icons/bi";

import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { LuGlobe, LuSmartphone } from "react-icons/lu";

export const links: Link[] = [
  { href: "#home", name: "Home" },
  { href: "#about", name: "About" },
  { href: "#projects", name: "Projects" },
  { href: "#skills", name: "Skills" },
  { href: "#contact", name: "Contact" },
];

export const services: Service[] = [
  {
    icon: LuGlobe,
    title: "Web Application",
    description:
      "Building responsive, performant web applications with modern frameworks and best practices.",
  },
  {
    icon: LuSmartphone,
    title: "Mobile Application",
    description:
      "Creating cross-platform mobile applications that deliver seamless user experiences.",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", Icon: BsGithub, url: "https://github.com/yurex12" },
  {
    name: "LinkedIn",
    Icon: BsLinkedin,
    url: "https://linkedin.com/in/yusuf-ekungomi-21ab23221",
  },
  { name: "X", Icon: BsTwitterX, url: "https://x.com/0x_adeyemi" },
  {
    name: "Instagram",
    Icon: BsInstagram,
    url: "https://instagram.com/ekungomiadeyemi",
  },
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "Yurexpage",
    description:
      "A lightweight social feed with realtime-like UI, post reactions, and responsive layout.",
    image: "/beejaykeys.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma"],
    github: "https://github.com/yourname/yurexpage",
    live: "https://example.com/yurexpage",
  },

  {
    id: "p2",
    title: "Nexura Store",
    description:
      "A full-stack e-commerce site with an admin dashboard to manage products, categories, and orders.",
    image: "/nexura.png",
    tech: ["React", "TypeScript", "Tailwind", "PostgreSQL", "Prisma"],
    github: "https://github.com/Yurex12/yurexstore-ecommerce",
    live: "https://nexurastore.vercel.app/",
  },

  {
    id: "p3",
    title: "FreshFarm",
    description:
      "A responsive website for a local farm featuring a Home, About, contact page.",
    image: "/freshfarm.png",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/Yurex12/freshfarm",
    live: "https://freshfarm.vercel.app",
  },
];

export const languages: Language[] = [
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Mongoose",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
  },
  {
    name: "Prisma",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  {
    name: "PostgreSQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
  },
  {
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg",
  },
  {
    name: "Github",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
];
