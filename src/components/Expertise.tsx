import { expertise } from "@/data/yoshita";
import { ExpertiseCard } from "./ExpertiseCard";
import { Stagger } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Expertise() {
  return (
    <section id="expertise" className="shell scroll-mt-24 py-20 md:py-28">
      <SectionHeading
        eyebrow="Expertise"
        index="02"
        title={
          <>
            Where the work has <em className="text-wine italic">concentrated</em>.
          </>
        }
        intro={
          <p>
            Practice areas Yoshita has worked in during internships with law firms, chambers and an
            in-house legal team — advisory, research, drafting and diligence support.
          </p>
        }
      />

      <Stagger as="ul" className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((item, index) => (
          <ExpertiseCard key={item.title} item={item} index={index} />
        ))}
      </Stagger>
    </section>
  );
}
