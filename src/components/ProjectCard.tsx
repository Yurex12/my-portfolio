import { AiFillGithub } from "react-icons/ai";
import { ExternalLink } from "lucide-react";

import { Project } from "@/types/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li key={project.id} className="flex flex-col rounded-2xl border p-4">
      <div className="h-56 w-full">
        <img
          src={project.image}
          alt={project.title}
          className="size-full rounded-md object-contain"
        />
      </div>

      <div className="mt-4 flex flex-1 flex-col justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <p className="text-foreground/80 text-sm">{project.description}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-foreground/90 hover:bg-accent hover:text-accent-foreground inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors"
          >
            <AiFillGithub size={18} />
            <span>Code</span>
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/90 hover:bg-accent hover:text-accent-foreground inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors"
            >
              <ExternalLink size={18} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
