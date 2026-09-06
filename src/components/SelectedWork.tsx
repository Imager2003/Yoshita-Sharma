import { selectedWork } from "@/data/yoshita";
import { Stagger } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WorkCard } from "./WorkCard";

export function SelectedWork() {
  return (
    <section id="work" className="shell scroll-mt-24 py-20 md:py-28">
      <SectionHeading
        eyebrow="Selected work"
        index="04"
        title={
          <>
            What I&apos;ve <em className="text-wine italic">worked on</em>.
          </>
        }
        intro={
          <p>
            Assignments carried out under the supervision of partners, senior associates and
            in-house counsel. Client names and confidential matter details are not disclosed.
          </p>
        }
      />

      <Stagger as="ul" className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8 [&>li:last-child]:md:col-span-2">
        {selectedWork.map((item) => (
          <WorkCard key={item.id} item={item} />
        ))}
      </Stagger>
    </section>
  );
}
