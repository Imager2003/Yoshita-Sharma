import { Mail, Phone } from "lucide-react";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { person } from "@/data/yoshita";

const items = [
  { label: "Email", href: `mailto:${person.email}`, icon: Mail, external: false },
  { label: "Call", href: `tel:${person.phoneRaw}`, icon: Phone, external: false },
  { label: "LinkedIn", href: person.linkedin, icon: LinkedInIcon, external: true },
];

/** Sticky one-tap contact strip, phones and tablets only. */
export function MobileContactBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="border-rule bg-ivory/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur-md lg:hidden"
    >
      <ul className="grid grid-cols-3">
        {items.map(({ label, href, icon: Icon, external }) => (
          <li key={label} className="border-rule not-first:border-l">
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-ink active:bg-sand flex min-h-14 flex-col items-center justify-center gap-1 py-2.5 transition-colors"
            >
              <Icon aria-hidden="true" className="text-wine size-4" />
              <span className="text-[0.6875rem] tracking-wide">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
