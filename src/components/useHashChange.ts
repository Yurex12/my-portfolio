"use client";
import { links } from "@/constants";
import { useEffect, useState } from "react";

const sectionIds = links.map((link) => link.href.slice(1));

export function useActiveHash(offset: number = 85) {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setActiveHash(window.location.hash);

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);

        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveHash(`#${sectionId}`);
            break;
          }
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        setActiveHash(`#${sectionIds[sectionIds.length - 1]}`);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeHash;
}
