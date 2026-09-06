import { ArrowDownToLine, ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { person } from "@/data/yoshita";
import { Portrait } from "./Portrait";
import { Reveal } from "./Reveal";
import { Metrics } from "./Metrics";

const directLinks = [
  { label: "Email", href: `mailto:${person.email}`, icon: Mail, external: false },
  { label: "Call", href: `tel:${person.phoneRaw}`, icon: Phone, external: false },
  { label: "LinkedIn", href: person.linkedin, icon: LinkedInIcon, external: true },
  {
    label: "WhatsApp",
    href: `https://wa.me/${person.whatsapp}`,
    icon: MessageCircle,
    external: true,
  },
];

export function Hero() {
  return (
    <section id="top" className="shell pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-wine border-rule border-t pt-5">{person.availability}</p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-8">
              <span className="text-stone block text-[0.8125rem] font-medium tracking-[0.22em] uppercase">
                {person.name}
              </span>
              <span className="display text-ink mt-4 block text-[clamp(2.75rem,8.5vw,5.25rem)]">
                Corporate &amp; Commercial
                <span className="text-wine block italic">Legal Professional</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border-rule mt-8 max-w-xl border-l pl-5">
              <p className="text-graphite text-[0.975rem] leading-relaxed">
                {person.qualification}
              </p>
              <p className="text-stone mt-1.5 text-[0.9375rem] leading-relaxed">
                {person.practiceLine}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="group border-ink text-ink hover:bg-ink hover:text-ivory inline-flex items-center gap-2.5 rounded-full border px-5 py-3 text-sm font-medium transition-colors duration-300"
              >
                View experience
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href={person.resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group bg-wine hover:bg-wine-deep inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium text-white transition-colors duration-300"
              >
                Download CV
                <ArrowDownToLine
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="text-stone mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.8125rem]">
              {directLinks.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="hover:text-wine inline-flex items-center gap-2 transition-colors duration-200"
                  >
                    <Icon aria-hidden="true" className="size-3.5" />
                    <span className="link-underline">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="sm:max-w-md lg:col-span-4 lg:col-start-9 lg:max-w-none">
          <Reveal delay={0.1}>
            <Portrait priority />
          </Reveal>
        </div>
      </div>

      <Metrics />
    </section>
  );
}
