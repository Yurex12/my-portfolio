"use client";
import { Github, Twitter, Instagram, ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { Button } from "./ui/button";

export default function Hero() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes float {
        0%,100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(2deg); }
      }
      .float-slow { animation: float 6s ease-in-out infinite; }

      @keyframes scroll-dot {
        0% { transform: translateY(-6px); opacity: 0; }
        10% { opacity: 1; }
        50% { transform: translateY(6px); opacity: 1; }
        90% { opacity: 0; }
        100% { transform: translateY(-6px); opacity: 0; }
      }
      .scroll-dot { animation: scroll-dot 1.6s infinite cubic-bezier(.22,.9,.32,1); }

      @keyframes gentle-bounce {
        0%,100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
      .gentle-bounce { animation: gentle-bounce 2.8s ease-in-out infinite; }

      /* tiny accessibility improvement: prefers-reduced-motion */
      @media (prefers-reduced-motion: reduce) {
        .float-slow, .scroll-dot, .gentle-bounce { animation: none; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="relative mt-20 flex w-full items-center justify-center overflow-hidden px-4">
      {/* === BACKGROUND ELEMENTS === */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-green-400 opacity-15 blur-3xl"></div>
      <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-green-400 opacity-10 blur-3xl"></div>

      {/* Floating code symbols */}
      <span className="text-secondary-foreground/10 float-slow absolute top-[15%] left-[10%] font-mono text-7xl select-none">
        {"{"}
      </span>
      <span className="text-secondary-foreground/10 float-slow absolute right-[15%] bottom-[20%] rotate-12 font-mono text-8xl select-none">
        {"}"}
      </span>
      <span className="text-secondary-foreground/10 float-slow absolute top-[20%] right-[5%] -rotate-6 font-mono text-6xl select-none">
        {"();"}
      </span>
      <span className="text-secondary-foreground/10 float-slow absolute bottom-[20%] left-[20%] rotate-3 font-mono text-7xl select-none">
        {"<>"}
      </span>
      {/* <span className='absolute top-[10%] right-[20%] text-secondary-foreground/10 text-7xl font-mono rotate-6 select-none float-slow'>
        {'[]'}
      </span> */}

      {/* === HERO CONTENT === */}
      <div className="relative z-10 w-full text-center">
        {/* Status Badge */}
        <div className="mb-8 flex items-center justify-center">
          <div className="border-input flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur">
            <div className="size-2 animate-pulse rounded-full bg-green-600"></div>
            <span className="text-sm">Available for a new project</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="mb-4 text-2xl md:text-6xl">Hey, I’m Yusuf Adeyemi</h1>

        <p className="text-foreground/80 mb-2 text-2xl md:text-3xl">
          {/* Software Engineer */}
          Fullstack Developer
        </p>

        {/* Tagline */}
        <p className="mx-auto mb-8 max-w-xl leading-relaxed">
          Turning ideas into seamless digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="px-10 py-6">View My Work</Button>
          <Button className="px-10 py-6" variant="outline">
            Get in Touch
          </Button>
        </div>

        {/* Social Icons */}
        <div className="mb-8 flex items-center justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-secondary-foreground/90 transition-transform duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={30} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-secondary-foreground/90 transition-transform duration-300 hover:scale-110"
            aria-label="X"
          >
            <Twitter size={30} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-secondary-foreground/90 transition-transform duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={30} />
          </a>
        </div>

        {/* Modern Scroll Indicator */}
        <div className="border-secondary-foreground/10 mx-auto mt-20 flex h-[66px] w-[42px] items-start justify-center rounded-[28px] border-2 p-2">
          {/* animated dot */}
          <div className="bg-secondary-foreground/10 scroll-dot size-2 rounded-full" />
        </div>

        {/* little subtle chevron for extra hint (non-distracting) */}
        <div className="mt-3 flex items-center justify-center gap-2 opacity-70">
          <ChevronDown
            size={30}
            className="text-secondary-foreground/10 gentle-bounce"
          />
        </div>
      </div>
    </section>
  );
}
