import { Language, Link, Project } from "@/types/types";

export const links: Link[] = [
  { href: "#home", name: "Home" },
  { href: "#about", name: "About" },
  { href: "#projects", name: "Projects" },
  { href: "#skills", name: "Skills" },
  { href: "#contact", name: "Contact" },
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "Yurexpage",
    description:
      "A lightweight social feed with realtime-like UI, post reactions, and responsive layout.",
    image: "beejaykeys.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    github: "https://github.com/yourname/yurexpage",
    live: "https://example.com/yurexpage",
  },

  {
    id: "p3",
    title: "Dev Portfolio",
    description:
      "Personal portfolio site with project showcase, blog, and contact form. Built for performance and accessibility.",
    image: "beejaykeys.png",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/yourname/portfolio",
    live: "https://yourname.dev",
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
