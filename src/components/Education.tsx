export default function Education() {
  return (
    <section className="mx-auto max-w-4xl space-y-2 px-6 lg:px-0">
      <h1 className="text-2xl sm:text-3xl">Education</h1>

      <div className="flex flex-1 flex-col justify-between gap-2 border-b pb-2 md:flex-row">
        <div className="space-y-1">
          <h3 className="text-foreground/80 text-sm font-semibold md:text-base">
            Federal University of Agriculture, Abeokuta.
          </h3>
          <p className="text-sm">B.SC. in Computer Science</p>
        </div>

        <div className="flex items-center gap-1 md:flex-col md:items-end">
          <p className="bg-muted text-foreground w-fit rounded-md p-2 text-xs">
            Nov 2021 - June 2025
          </p>
          <span className="text-sm">Full-Time</span>
        </div>
      </div>
    </section>
  );
}
