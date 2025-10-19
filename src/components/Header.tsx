import { Download, Menu, Moon, Sun } from "lucide-react";
import GithubLogo from "./GithubLogo";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 mt-4 w-full">
      <div className="mx-auto flex w-11/12 max-w-5xl items-center justify-between rounded-2xl border px-4 py-3 lg:py-4">
        <Logo />

        <Navbar />

        <div className="text-foreground flex items-center gap-x-4 font-bold">
          {/* <Sun /> */}
          <Button>
            CV <Download />
          </Button>
          <Menu className="block sm:hidden" />
        </div>
      </div>
    </header>
  );
}
