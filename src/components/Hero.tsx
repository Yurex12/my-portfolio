import { ChevronDown } from "lucide-react";
import SocialIcons from "./SocialIcons";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="caged-bg relative min-h-svh pt-30 lg:pt-40">
      {/* Background touches */}
      <>
        <div className="absolute top-28 left-10 h-48 w-48 rounded-full bg-green-400 opacity-15 blur-3xl sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72"></div>
        <div className="absolute right-10 bottom-20 h-64 w-64 rounded-full bg-green-400 opacity-10 blur-3xl sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"></div>
      </>

      {/* Floating code symbols */}
      <>
        <span className="text-primary/10 float-slow absolute top-[18%] left-[8%] font-mono text-4xl select-none sm:text-5xl md:text-6xl lg:text-7xl">
          {"{"}
        </span>
        <span className="text-primary/10 float-slow absolute right-[12%] bottom-[15%] rotate-12 font-mono text-5xl select-none sm:text-6xl md:text-7xl lg:text-8xl">
          {"}"}
        </span>
        <span className="text-primary/10 float-slow absolute top-[30%] right-[8%] -rotate-6 font-mono text-3xl select-none sm:text-4xl md:text-5xl lg:text-6xl">
          {"();"}
        </span>
        <span className="text-primary/10 float-slow absolute bottom-[25%] left-[15%] rotate-3 font-mono text-4xl select-none sm:text-5xl md:text-6xl lg:text-7xl">
          {"<>"}
        </span>
        <span className="text-primary/10 float-slow absolute top-[13%] right-[25%] rotate-6 font-mono text-4xl select-none sm:text-5xl md:text-6xl lg:text-7xl">
          {"[]"}
        </span>
      </>

      <div className="flex flex-col items-center justify-center space-y-14">
        <div className="border-input flex items-center gap-x-2 rounded-full border px-4 py-2 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
          </span>
          <span className="text-sm">Available for work</span>
        </div>

        <div className="space-y-4 text-center md:space-y-4">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              Hey, I’m Yusuf Adeyemi
            </h1>

            <p className="text-foreground/90 text-xl sm:text-2xl md:text-3xl">
              Fullstack Developer
            </p>
          </div>

          <p className="mx-auto max-w-xl text-sm leading-relaxed sm:text-base">
            Creating digital products and elegant experiences
          </p>

          <Button className="px-6">Let’s Work Together! </Button>
        </div>

        <SocialIcons />

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
          <div className="border-muted-foreground/40 relative h-12 w-7 rounded-full border-2">
            <div className="animate-scroll bg-muted-foreground/60 absolute top-3 left-1/2 h-2 w-1 -translate-x-1/2 rounded-full"></div>
          </div>
          <ChevronDown className="text-muted-foreground/60 size-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
