import { heroMetrics } from "@/data/yoshita";
import { Stagger, StaggerItem } from "./Reveal";

/** Three restrained figures summarising scope, sat under the hero. */
export function Metrics() {
  return (
    <Stagger as="dl" className="border-rule mt-16 grid border-t sm:grid-cols-3 md:mt-24">
      {heroMetrics.map((metric) => (
        <StaggerItem
          key={metric.label}
          className="border-rule flex flex-col-reverse gap-3 border-b py-6 sm:border-b-0 sm:py-8 sm:not-first:border-l sm:not-first:pl-8 sm:not-last:pr-8"
        >
          {/* Reversed visually so the figure reads first while the DOM keeps dt → dd. */}
          <dt className="eyebrow text-muted">{metric.label}</dt>
          <dd className="display text-ink text-[clamp(2.25rem,5vw,3.25rem)] leading-none">
            {metric.value}
          </dd>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
