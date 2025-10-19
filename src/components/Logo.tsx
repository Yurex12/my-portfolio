import Link from "next/link";

export default function Logo() {
  return (
    <Link href="#" className="group">
      <div className="relative flex size-8 items-center justify-center">
        <div className="border-primary/90 absolute inset-0 rotate-45 rounded-sm border-2"></div>
        <h1 className="text-secondary-foreground font-mono text-xl font-bold">
          A
        </h1>
      </div>
    </Link>
  );
}
