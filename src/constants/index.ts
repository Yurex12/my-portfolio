import { Link, Project } from "@/types/types";

export const links: Link[] = [
  { href: "About", name: "About" },
  { href: "Projects", name: "Projects" },
  { href: "skills", name: "Skills" },
  { href: "contact-me", name: "Contact" },
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
