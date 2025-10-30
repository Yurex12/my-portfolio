"use client";
import { useState } from "react";

import { Download, Menu, Sun } from "lucide-react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { Sheet } from "./ui/sheet";

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <header className="fixed top-0 left-0 z-50 mt-4 w-full">
      <div className="mx-auto flex w-11/12 max-w-[60rem] items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur lg:py-4">
        <Logo />

        <Navbar />

        <div className="text-foreground flex items-center gap-x-4 font-bold">
          <Button>
            CV <Download />
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <button onClick={() => setOpen(true)} className="p-1">
              <Menu className="block font-semibold sm:hidden" />
            </button>
            <MobileNav onClose={handleClose} />
          </Sheet>
        </div>
      </div>
    </header>
  );
}
