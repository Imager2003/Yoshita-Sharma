"use client";

import { useMemo } from "react";
import { additionalExperience, experience } from "@/data/yoshita";
import { useActiveSection } from "@/lib/useActiveSection";
import { ExperienceItem } from "./ExperienceItem";
import { Reveal, Stagger } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const ids = useMemo(() => experience.map((item) => item.id), []);
  const active = useActiveSection(ids);

  return (
    <section id="experience" className="shell scroll-mt-24 py-20 md:py-28">
      <SectionHeading
        eyebrow="Experience"
        index="03"
        title={
          <>
            Four corporate internships, <em className="text-wine italic">2024 – 2026</em>.
          </>
        }
        intro={
          <p>
            Work supporting partners, senior associates and in-house counsel across insolvency,
            banking, securities, real estate and commercial contracting mandates.
          </p>
        }
      />

      <Stagger as="ol" className="mt-16 space-y-16 md:space-y-20" gap={0.1}>
        {experience.map((item) => (
          <ExperienceItem key={item.id} item={item} isActive={active === item.id} />
        ))}
      </Stagger>

      <Reveal>
        <div className="border-rule mt-16 border-t pt-6">
          <h3 className="eyebrow text-muted">Earlier internships</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {additionalExperience.map((item) => (
              <li key={item.organisation} className="border-rule border-l pl-4">
                <p className="text-ink text-[0.9375rem] leading-snug">{item.organisation}</p>
                <p className="text-muted mt-1.5 text-[0.8125rem]">
                  {item.practice}
                  {item.period !== "—" ? ` · ${item.period}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
