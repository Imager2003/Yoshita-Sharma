import { skillGroups } from "@/data/yoshita";
import { Stagger, StaggerItem } from "./Reveal";

/** Compact research & technical toolkit, kept deliberately plain. */
export function Skills() {
  return (
    <section id="skills" className="shell scroll-mt-24 pb-20 md:pb-28">
      <Stagger className="border-rule grid gap-10 border-t pt-8 md:grid-cols-12 md:gap-10">
        <StaggerItem className="md:col-span-3">
          <h2 className="eyebrow text-wine">Research &amp; technical</h2>
          <p className="text-muted mt-4 max-w-xs text-[0.875rem] leading-relaxed">
            Databases, regulatory portals and tools used day to day.
          </p>
        </StaggerItem>

        <div className="grid gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-5">
          {skillGroups.map((group) => (
            <StaggerItem key={group.label}>
              <h3 className="eyebrow text-muted">{group.label}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-ink text-[0.9375rem]">
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </div>
      </Stagger>
    </section>
  );
}
