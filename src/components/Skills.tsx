import React from "react";
import {
  Code2,
  Braces,
  Atom,
  Box,
  FileCode,
  Globe,
  Palette,
  GitBranch,
  Database,
  Container,
  Cloud,
  Leaf,
} from "lucide-react";

const Skills = () => {
  const technologies = [
    { name: "JavaScript", Icon: Braces },
    { name: "TypeScript", Icon: Braces },
    { name: "React", Icon: Atom },
    { name: "Node.js", Icon: Box },
    { name: "Python", Icon: FileCode },
    { name: "HTML", Icon: Globe },
    { name: "CSS", Icon: Palette },
    { name: "Git", Icon: GitBranch },
    { name: "SQL", Icon: Database },
    { name: "Docker", Icon: Container },
    { name: "AWS", Icon: Cloud },
    { name: "MongoDB", Icon: Leaf },
  ];

  return (
    <section className="mx-auto w-full py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-primary mb-4 text-xl md:text-4xl">Skills</h1>
        <p className="text-muted-foreground mb-6 sm:text-lg md:text-xl">
          Technologies I work with
        </p>

        <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {technologies.map((tech) => {
            const Icon = tech.Icon;
            return (
              <div
                key={tech.name}
                className="group bg-secondary border-border hover:bg-muted hover:border-primary flex cursor-pointer items-center justify-center gap-3 rounded-lg border px-2 py-2 transition-all duration-300"
              >
                <Icon
                  className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors duration-300"
                  strokeWidth={1.5}
                />
                <span className="text-sm font-medium transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
