import { socialLinks } from "@/constants";
import { Mail, User } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="h-fit space-y-5 rounded-md border p-4">
      <p className="text-primary text-xl font-semibold">Let's Connect</p>

      <div className="flex items-center gap-4">
        <User className="bg-foreground/5 text-foreground size-12 rounded-full p-2" />
        <div>
          <h3 className="text-foreground/90 font-normal">Ekungomi Yusuf</h3>
          <span className="text-muted-foreground text-xs md:text-sm">
            Fullstack Developer
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mail className="bg-foreground/5 text-foreground size-12 rounded-full p-2" />
        <div>
          <h3 className="text-foreground/90 font-normal">
            yusufekungomi@gmail.com
          </h3>
          <span className="text-muted-foreground text-xs md:text-sm">
            Available for work
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-foreground/80 font-medium">Follow me on:</h4>

        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map(({ name, Icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted text-foreground dark:text-foreground flex items-center justify-center gap-2 rounded-md border p-2 text-sm transition-opacity hover:opacity-90"
            >
              <Icon />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
