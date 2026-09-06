import { ArrowUpRight } from "lucide-react";
import type { WorkItem } from "@/data/yoshita";
import { StaggerItem } from "./Reveal";

export function WorkCard({ item }: { item: WorkItem }) {
  return (
    <StaggerItem as="li" className="h-full">
      <article className="group border-rule hover:border-ink/40 hover:bg-paper relative flex h-full flex-col border p-6 transition-[transform,border-color,background-color] duration-400 ease-out hover:-translate-y-1 md:p-8">
        <span className="eyebrow text-muted group-hover:text-wine transition-colors duration-300">
          {item.index}
        </span>

        <h3 className="display text-ink mt-5 text-[clamp(1.5rem,2.4vw,1.875rem)] leading-tight">
          {item.title}
        </h3>
        <p className="text-wine mt-2 text-[0.8125rem]">{item.organisation}</p>

        <p className="text-stone mt-5 text-[0.9375rem] leading-relaxed">{item.description}</p>

        <ul className="border-rule text-muted mt-6 flex flex-wrap gap-x-2 gap-y-1.5 border-t pt-5 text-[0.75rem]">
          {item.focus.map((focus) => (
            <li
              key={focus}
              className="after:text-rule-strong after:ml-2 not-last:after:content-['·']"
            >
              {focus}
            </li>
          ))}
        </ul>

        <a
          href={item.href}
          className="text-ink group-hover:text-wine mt-auto inline-flex pt-6 items-center gap-2 text-[0.8125rem] font-medium transition-colors duration-300 after:absolute after:inset-0 after:content-['']"
        >
          View details
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
          <span className="sr-only"> about {item.title} at {item.organisation}</span>
        </a>
      </article>
    </StaggerItem>
  );
}
