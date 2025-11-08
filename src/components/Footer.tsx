import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-4xl items-center justify-center gap-x-1 border-t py-4 text-sm md:py-8 md:text-base">
      Copyright {new Date().getFullYear()}{" "}
      <Copyright className="size-4 md:size-6" /> Yusuf Adeyemi.
    </footer>
  );
}
