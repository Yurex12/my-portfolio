export default function About() {
  return (
    <div className="mx-auto grid max-w-4xl gap-4 space-y-4 px-6 md:grid-cols-2 md:px-0">
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl">About</h1>
        <p>
          I’m a Fullstack Developer passionate about building software that
          solves real problems. My curiosity about technology evolved into a
          dedication to crafting digital experiences that merge design thinking
          with robust functionality.
        </p>
        <p>
          Over time, I’ve worked with modern web technologies to build scalable
          and maintainable applications. I enjoy turning ideas into clean,
          efficient code and continuously learning new tools that improve how
          products are designed, developed, and delivered
        </p>
      </div>
      <img src="image.png" className="h-80 w-full rounded-sm object-cover" />
    </div>
  );
}
