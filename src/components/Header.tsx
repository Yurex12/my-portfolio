"use client";
import { useState } from "react";

import { Download, Menu, X } from "lucide-react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { Dialog } from "./ui/dialog";
import { ModeToggle } from "./modeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <header className="fixed top-0 left-0 z-50 mt-4 w-full">
      <div className="mx-auto flex w-11/12 max-w-[60rem] items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur lg:py-4">
        <Logo />

        <Navbar />

        <div className="text-foreground flex items-center gap-x-4 font-bold">
          <ModeToggle className="hidden md:flex" />
          <Button asChild>
            <a href="/EkungomiYusuf.pdf" download="EkungomiYusuf_CV.pdf">
              CV <Download />
            </a>
          </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <button onClick={() => setOpen(!open)} className="p-1">
              <span className="block font-black sm:hidden">
                {open ? <X /> : <Menu />}
              </span>
            </button>

            <MobileNav onClose={handleClose} />
          </Dialog>
        </div>
      </div>
    </header>
  );
}
