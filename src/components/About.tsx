import { about, person } from "@/data/yoshita";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const quickFacts = [
  { label: "Qualification", value: "BBA LL.B. (Hons.), 2026" },
  { label: "Institution", value: "NMIMS School of Law, Indore" },
  { label: "ICSI", value: "CSEET Qualified · 164/200" },
  { label: "Based in", value: person.location },
  { label: "Languages", value: person.languages },
];

export function About() {
  return (
    <section id="about" className="shell scroll-mt-24 py-20 md:py-28">
      <SectionHeading
        eyebrow="About"
        index="01"
        title={
          <>
            A corporate practice built on <em className="text-wine italic">research, drafting</em>{" "}
            and diligence.
          </>
        }
        intro={<p>{about.statement}</p>}
      />

      <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <Reveal>
            <div className="text-graphite space-y-5 text-[1.0625rem] leading-[1.75]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border-rule mt-10 border-t pt-6">
              <p className="eyebrow text-muted">Areas of interest</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <li
                    key={interest}
                    className="border-rule-strong text-graphite rounded-full border px-3.5 py-1.5 text-[0.8125rem]"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <Reveal delay={0.06}>
            <dl className="border-rule border-t">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="border-rule border-b py-4">
                  <dt className="eyebrow text-muted">{fact.label}</dt>
                  <dd className="text-ink mt-2 text-[0.9375rem] leading-snug">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
