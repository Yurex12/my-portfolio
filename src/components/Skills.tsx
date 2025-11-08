import { languages } from "@/constants";

export default function Skills() {
  return (
    <section
      className="mx-auto max-w-4xl space-y-2 rounded-md px-6 md:px-0"
      id="skills"
    >
      <h2 className="flex items-center gap-2 text-2xl sm:text-3xl">
        <span> Skills</span>{" "}
        <span className="text-muted-foreground text-sm">
          ({languages.length})
        </span>
      </h2>
      <p>Technologies I work with</p>

      <ul className="flex flex-wrap gap-3">
        {languages.map((language) => (
          <li
            key={language.name}
            className="bg-muted/80 dark:bg-muted-dark flex items-center gap-2 rounded-md px-3 py-2"
          >
            <img
              src={language.image}
              alt={language.name}
              className="h-5 w-5 object-contain"
            />
            <span className="text-foreground text-xs">{language.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
