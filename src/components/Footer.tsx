import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <div className="mx-auto flex max-w-4xl items-center justify-center gap-x-1 border-t py-4">
      Copyright {new Date().getFullYear()} <Copyright size={20} /> Yusuf
      Adeyemi.
    </div>
  );
}
