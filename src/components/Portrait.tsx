import Image from "next/image";
import { person } from "@/data/yoshita";

/**
 * Portrait frame.
 *
 * Renders the professional photograph once `person.portraitAvailable` is true
 * and `public/yoshita.jpg` exists; otherwise it shows a typographic placeholder
 * so the layout is complete and no broken image is requested.
 */
export function Portrait({ priority = false }: { priority?: boolean }) {
  return (
    <figure className="relative">
      <div className="border-rule bg-sand relative aspect-4/5 w-full overflow-hidden border">
        {person.portraitAvailable ? (
          <Image
            src={person.portrait}
            alt={`${person.name}, ${person.title}`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 34vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover object-center"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          >
            <span className="display text-rule-strong text-[clamp(4rem,10vw,7rem)] leading-none">
              YS
            </span>
            <span className="eyebrow text-muted">Portrait</span>
          </div>
        )}

        {/* Hairline corner marks — subtle editorial framing. */}
        <span
          aria-hidden="true"
          className="border-wine/40 absolute top-3 left-3 size-4 border-t border-l"
        />
        <span
          aria-hidden="true"
          className="border-wine/40 absolute right-3 bottom-3 size-4 border-r border-b"
        />
      </div>

      <figcaption className="border-rule text-muted mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t pt-3">
        <span className="eyebrow">{person.name}</span>
        <span className="eyebrow">{person.location}</span>
      </figcaption>
    </figure>
  );
}
