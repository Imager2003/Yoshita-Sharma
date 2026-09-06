"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowDownToLine, Menu } from "lucide-react";
import { navLinks, person } from "@/data/yoshita";
import { useActiveSection } from "@/lib/useActiveSection";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = useMemo(() => navLinks.map((link) => link.href.slice(1)), []);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="bg-ink text-ivory sr-only rounded-full px-4 py-2 text-sm focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-100"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled
            ? "border-rule bg-ivory/85 border-b backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav aria-label="Primary" className="shell flex h-16 items-center justify-between gap-6">
          <a
            href="#top"
            className="text-ink text-[0.8125rem] font-medium tracking-[0.14em] uppercase"
          >
            {person.name}
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "true" : undefined}
                      className={`link-underline text-[0.8125rem] transition-colors duration-200 ${
                        isActive ? "text-wine" : "text-stone hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href={person.resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group bg-ink text-ivory hover:bg-wine inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.8125rem] font-medium transition-colors duration-300"
            >
              Download CV
              <ArrowDownToLine
                aria-hidden="true"
                className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="border-rule-strong text-ink hover:border-ink inline-flex size-10 items-center justify-center rounded-full border transition-colors duration-200 lg:hidden"
          >
            <Menu aria-hidden="true" className="size-4.5" />
          </button>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
