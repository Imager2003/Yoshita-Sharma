import type { Expertise } from "@/data/yoshita";
import { StaggerItem } from "./Reveal";

interface ExpertiseCardProps {
  item: Expertise;
  index: number;
}

export function ExpertiseCard({ item, index }: ExpertiseCardProps) {
  return (
    <StaggerItem as="li">
      <article className="group border-rule hover:border-ink/40 h-full border-t pt-5 transition-colors duration-300">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="display text-ink text-[1.5rem] leading-tight">{item.title}</h3>
          <span className="eyebrow text-muted group-hover:text-wine shrink-0 transition-colors duration-300">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="text-stone mt-3 text-[0.9375rem] leading-relaxed">{item.description}</p>

        <ul className="text-muted mt-5 flex flex-wrap gap-x-3 gap-y-1.5 text-[0.75rem]">
          {item.tags.map((tag) => (
            <li key={tag} className="after:text-rule-strong after:ml-3 not-last:after:content-['·']">
              {tag}
            </li>
          ))}
        </ul>
      </article>
    </StaggerItem>
  );
}
