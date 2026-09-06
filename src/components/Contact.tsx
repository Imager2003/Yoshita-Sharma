import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { person } from "@/data/yoshita";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const actions = [
  {
    label: "Send email",
    value: person.email,
    href: `mailto:${person.email}`,
    icon: Mail,
    external: false,
    primary: true,
  },
  {
    label: "Call",
    value: person.phone,
    href: `tel:${person.phoneRaw}`,
    icon: Phone,
    external: false,
    primary: false,
  },
  {
    label: "LinkedIn",
    value: "in/yoshita-sharma1500",
    href: person.linkedin,
    icon: LinkedInIcon,
    external: true,
    primary: false,
  },
  {
    label: "WhatsApp",
    value: person.phone,
    href: `https://wa.me/${person.whatsapp}`,
    icon: MessageCircle,
    external: true,
    primary: false,
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-rule bg-sand scroll-mt-24 border-t py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <Reveal>
              <p className="eyebrow text-wine">Contact</p>
              <h2 className="display text-ink mt-6 text-[clamp(2.5rem,7vw,4.5rem)]">
                Let&apos;s <em className="text-wine italic">connect</em>.
              </h2>
              <p className="text-stone mt-6 max-w-md text-[1.0625rem] leading-relaxed">
                Interested in discussing an opportunity or learning more about Yoshita&apos;s work?
                She is reachable directly by email, phone or LinkedIn.
              </p>
              <p className="text-muted mt-6 text-[0.875rem]">
                {person.location} · {person.languages}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Stagger as="ul" className="border-rule border-t">
              {actions.map(({ label, value, href, icon: Icon, external, primary }) => (
                <StaggerItem as="li" key={label} className="border-rule border-b">
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between gap-6 py-5"
                  >
                    <span className="flex items-center gap-4">
                      <Icon
                        aria-hidden="true"
                        className={`size-4 transition-colors duration-300 ${
                          primary ? "text-wine" : "text-muted group-hover:text-wine"
                        }`}
                      />
                      <span>
                        <span className="text-ink block text-[1.0625rem] leading-snug">
                          {label}
                        </span>
                        <span className="text-muted mt-1 block text-[0.8125rem]">{value}</span>
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="text-muted group-hover:text-wine size-4 shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1}>
              <a
                href={person.resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group bg-ink text-ivory hover:bg-wine mt-8 flex items-center justify-center gap-2.5 rounded-full px-6 py-4 text-sm font-medium transition-colors duration-300"
              >
                Download CV
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
