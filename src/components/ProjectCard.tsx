import { AiFillGithub } from "react-icons/ai";
import { ExternalLink } from "lucide-react";

import { Project } from "@/types/types";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li key={project.id} className="flex flex-col rounded-2xl border p-4">
      <div className="bg-muted relative aspect-video w-full overflow-hidden rounded transition duration-150 hover:scale-105">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain"
        />
      </div>

      <div className="mt-4 flex flex-1 flex-col justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <p className="text-muted-foreground text-sm">{project.description}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700 dark:bg-green-600/20 dark:text-green-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {project.live && (
            <Button className="cursor-pointer gap-2 text-sm" asChild>
              <a href={project.live} target="_blank" rel="noreferrer">
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            </Button>
          )}

          <Button
            variant="secondary"
            className="cursor-pointer text-sm"
            asChild
          >
            <a href={project.github} target="_blank" rel="noreferrer">
              <AiFillGithub size={18} />
              <span>Source Code</span>
            </a>
          </Button>
        </div>
      </div>
    </li>
  );
}
