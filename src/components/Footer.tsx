import { navLinks, person } from "@/data/yoshita";

export function Footer() {
  return (
    <footer className="border-rule border-t py-12">
      <div className="shell">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="display text-ink text-[1.75rem] leading-none">{person.name}</p>
            <p className="text-stone mt-3 text-[0.875rem]">{person.title}</p>
            <p className="text-muted mt-1 text-[0.8125rem]">{person.qualification}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="text-stone grid grid-cols-2 gap-x-10 gap-y-2 text-[0.8125rem] sm:grid-cols-3 md:flex md:flex-col md:gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-underline hover:text-ink transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-[0.8125rem]">
            <a
              href={`mailto:${person.email}`}
              className="link-underline text-ink hover:text-wine block transition-colors"
            >
              {person.email}
            </a>
            <a
              href={`tel:${person.phoneRaw}`}
              className="link-underline text-ink hover:text-wine mt-2 block transition-colors"
            >
              {person.phone}
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-ink hover:text-wine mt-2 block transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border-rule text-muted mt-12 flex flex-col gap-2 border-t pt-6 text-[0.75rem] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {person.name}. All rights reserved.</p>
          <p>
            Personal professional portfolio. Not an advertisement or solicitation for legal
            services.
          </p>
        </div>
      </div>
    </footer>
  );
}
