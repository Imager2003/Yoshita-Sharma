import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  /** Small uppercase label above the title. */
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Zero-padded section number shown at the right of the rule. */
  index?: string;
}

/**
 * Shared editorial section header: hairline rule, numbered eyebrow,
 * large serif title and an optional standfirst.
 */
export function SectionHeading({ eyebrow, title, intro, index }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="border-t border-rule pt-5">
        <div className="flex items-baseline justify-between gap-6">
          <span className="eyebrow text-wine">{eyebrow}</span>
          {index ? <span className="eyebrow text-muted">{index}</span> : null}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-12 md:gap-10">
          <h2 className="display text-ink text-[clamp(2rem,5.2vw,3.5rem)] md:col-span-7">
            {title}
          </h2>
          {intro ? (
            <div className="text-stone max-w-prose text-[0.975rem] leading-relaxed md:col-span-5 md:pt-2">
              {intro}
            </div>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
