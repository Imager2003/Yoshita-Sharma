import { ArrowUpRight, BookOpen } from "lucide-react";
import { publication } from "@/data/yoshita";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Publication() {
  return (
    <section id="publication" className="shell scroll-mt-24 py-20 md:py-28">
      <SectionHeading
        eyebrow="Publication"
        index="05"
        title={
          <>
            Published <em className="text-wine italic">research</em>.
          </>
        }
      />

      <Reveal>
        <article className="bg-ink text-ivory mt-14 p-8 md:p-14">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow text-ivory/55 flex items-center gap-2.5">
                <BookOpen aria-hidden="true" className="size-3.5" />
                Journal article
              </p>

              <h3 className="display mt-6 text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]">
                {publication.title}
              </h3>

              <p className="text-ivory/70 mt-6 max-w-2xl text-[0.975rem] leading-relaxed">
                {publication.abstract}
              </p>
            </div>

            <div className="md:col-span-4 md:pl-4">
              <dl className="divide-ivory/15 border-ivory/15 divide-y border-t">
                <div className="py-4">
                  <dt className="eyebrow text-ivory/50">Journal</dt>
                  <dd className="mt-2 text-[0.9375rem] leading-snug">{publication.journal}</dd>
                </div>
                <div className="py-4">
                  <dt className="eyebrow text-ivory/50">Issue</dt>
                  <dd className="mt-2 text-[0.9375rem]">{publication.volume}</dd>
                </div>
                <div className="py-4">
                  <dt className="eyebrow text-ivory/50">Identifier</dt>
                  <dd className="mt-2 text-[0.9375rem]">{publication.issn}</dd>
                </div>
              </dl>

              {publication.url ? (
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-ivory text-ink hover:bg-wine mt-8 inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-300 hover:text-white"
                >
                  Read publication
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ) : (
                /* TODO: Add the published article URL to `publication.url`
                   in src/data/yoshita.ts to turn this into a live link. */
                <p className="border-ivory/25 text-ivory/60 mt-8 inline-flex rounded-full border border-dashed px-5 py-3 text-[0.8125rem]">
                  Publication link — to be added
                </p>
              )}
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
