import { achievements, leadership } from "@/data/yoshita";
import { Stagger, StaggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Achievements() {
  return (
    <section id="achievements" className="shell scroll-mt-24 py-20 md:py-28">
      <SectionHeading
        eyebrow="Achievements & leadership"
        index="07"
        title={
          <>
            Competitions and <em className="text-wine italic">responsibility</em>.
          </>
        }
      />

      <div className="mt-14 grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <h3 className="eyebrow text-muted">Achievements</h3>
          <Stagger as="ul" className="mt-6">
            {achievements.map((item) => (
              <StaggerItem
                as="li"
                key={item.event}
                className="border-rule grid gap-2 border-b py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-6"
              >
                <p className="text-wine text-[0.8125rem] font-medium">{item.result}</p>
                <div>
                  <p className="text-ink text-[0.9375rem] leading-snug">{item.event}</p>
                  <p className="text-muted mt-1.5 text-[0.8125rem]">
                    {item.host ? `${item.host} · ` : ""}
                    {item.year}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <h3 className="eyebrow text-muted">Positions of responsibility</h3>
          <Stagger as="ul" className="mt-6 space-y-5">
            {leadership.map((item) => (
              <StaggerItem as="li" key={item.role} className="border-rule border-l pl-4">
                <p className="text-ink text-[0.9375rem] leading-snug">{item.role}</p>
                <p className="text-stone mt-1.5 text-[0.8125rem]">{item.organisation}</p>
                <p className="text-muted mt-1 text-[0.75rem]">{item.period}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
