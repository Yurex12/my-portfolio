import { projects } from "@/constants";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      className="mx-auto mt-4 max-w-4xl space-y-4 px-6 md:px-0"
      id="projects"
    >
      <h2 className="text-2xl sm:text-3xl">Projects</h2>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ul>
    </section>
  );
}
