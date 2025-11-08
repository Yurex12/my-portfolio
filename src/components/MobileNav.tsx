import { links } from "@/constants";

import Link from "next/link";
import { DialogContent } from "./ui/dialog";
import { useActiveHash } from "./useHashChange";

export default function MobileNav({ onClose }: { onClose: VoidFunction }) {
  const hash = useActiveHash();
  return (
    <DialogContent
      className="dark:bg-muted/95 top-[85px] right-[4%] left-auto w-40 translate-x-[-0] translate-y-[-0] border-0 p-0 px-2 py-2 shadow-lg outline-0 focus:outline-none"
      showCloseButton={false}
    >
      <ul>
        {links.map((link) => (
          <li key={link.href} onClick={() => setTimeout(onClose, 50)}>
            <Link
              href={link.href}
              className={`block w-full py-2 pl-3 text-sm ${link.href === hash ? "bg-muted text-foreground dark:bg-foreground dark:text-background rounded-md" : ""}`}
            >
              <span className="block rounded-lg">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </DialogContent>
  );
}
