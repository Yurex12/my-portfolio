import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { links } from "@/constants";

import { X } from "lucide-react";
import Link from "next/link";

export default function MobileNav({ onClose }: { onClose: VoidFunction }) {
  return (
    <>
      <SheetTitle className="sr-only">Navbar</SheetTitle>
      <SheetDescription className="sr-only">A mobile navbar</SheetDescription>
      <SheetContent className="sheet-content m-0 flex w-[250px] flex-col gap-0 border-0 p-0">
        <SheetClose className="flex justify-end border-none pt-4 pr-6 pb-2 outline-none">
          <X className="text-2xl" />
        </SheetClose>

        <ul className="basis-4/5">
          {links.map((link) => (
            <li key={link.href} onClick={() => setTimeout(onClose, 50)}>
              <Link href={link.href} className={`block w-full py-1`}>
                <span className="border-l-background block rounded-lg border-l-4 py-2 pl-3">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </>
  );
}
