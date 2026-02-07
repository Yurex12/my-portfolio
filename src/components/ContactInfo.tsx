import { socialLinks } from "@/constants";
import { LocateIcon, Mail, Phone, User } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="h-fit space-y-5 rounded-md border p-4">
      <p className="text-primary text-xl font-semibold">Let's Connect</p>

      <div className="flex items-center gap-4">
        <User className="bg-foreground/5 text-foreground size-12 rounded-full p-2" />
        <div>
          <h3 className="text-foreground/90 font-normal">Ekungomi Yusuf</h3>
          <span className="text-muted-foreground text-xs md:text-sm">
            Software Developer
          </span>
        </div>
      </div>

      <a
        className="flex items-center gap-4"
        href="mailto:yusufekungomi@gmail.com"
      >
        <Mail className="bg-foreground/5 text-foreground size-12 rounded-full p-2" />
        <div>
          <h3 className="text-foreground/90 font-normal">
            yusufekungomi@gmail.com
          </h3>
          <span className="text-muted-foreground text-xs md:text-sm">
            Email
          </span>
        </div>
      </a>

      <a href="tel:+2349016758057" className="flex items-center gap-4">
        <Phone className="bg-foreground/5 text-foreground size-12 rounded-full p-2" />
        <div>
          <h3 className="text-foreground/90 font-normal">+234 9016758057</h3>
          <span className="text-muted-foreground text-xs md:text-sm">
            Phone
          </span>
        </div>
      </a>

      <div className="flex items-center gap-4">
        <LocateIcon className="bg-foreground/5 text-foreground size-12 rounded-full p-2" />
        <div>
          <h3 className="text-foreground/90 font-normal">Lagos, Nigeria</h3>
          <span className="text-muted-foreground text-xs md:text-sm">
            Location
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
