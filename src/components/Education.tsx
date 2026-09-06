import { certifications, education } from "@/data/yoshita";
import { Stagger, StaggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { Credential } from "@/data/yoshita";

function CredentialList({ items, label }: { items: Credential[]; label: string }) {
  return (
    <div>
      <h3 className="eyebrow text-muted border-rule border-t pt-4">{label}</h3>
      <Stagger as="ul" className="mt-2">
        {items.map((item) => (
          <StaggerItem
            as="li"
            key={`${item.title}-${item.institution}`}
            className="border-rule flex flex-col gap-1 border-b py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          >
            <div className="sm:max-w-md">
              <p className="text-ink text-[1.0625rem] leading-snug">{item.title}</p>
              <p className="text-stone mt-1.5 text-[0.875rem]">{item.institution}</p>
              {item.detail ? (
                <p className="text-muted mt-1.5 text-[0.8125rem]">{item.detail}</p>
              ) : null}
            </div>
            <p className="eyebrow text-muted shrink-0 sm:pt-1">{item.year}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

export function Education() {
  return (
    <section id="education" className="shell scroll-mt-24 py-20 md:py-28">
      <SectionHeading
        eyebrow="Education & credentials"
        index="06"
        title={
          <>
            Academic <em className="text-wine italic">record</em>.
          </>
        }
        intro={
          <p>
            Five-year integrated law degree at NMIMS School of Law, Indore, with the ICSI Company
            Secretary entrance qualification and transactional training programmes alongside it.
          </p>
        }
      />

      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-14">
        <CredentialList items={education} label="Education" />
        <CredentialList items={certifications} label="Certifications & workshops" />
      </div>
    </section>
  );
}
