"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight, X } from "lucide-react";
import { navLinks, person } from "@/data/yoshita";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const reduced = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock scroll, move focus into the panel and keep Tab inside it while open.
  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="bg-ivory fixed inset-0 z-60 flex flex-col lg:hidden"
          initial={{ opacity: 0, y: reduced ? 0 : -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduced ? 0 : -8 }}
          transition={{ duration: reduced ? 0.15 : 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="shell flex h-16 shrink-0 items-center justify-between">
            <span className="text-ink text-[0.8125rem] font-medium tracking-[0.14em] uppercase">
              {person.name}
            </span>
            <button
              type="button"
              ref={closeRef}
              onClick={onClose}
              aria-label="Close menu"
              className="border-rule-strong text-ink hover:border-ink inline-flex size-10 items-center justify-center rounded-full border transition-colors duration-200"
            >
              <X aria-hidden="true" className="size-4.5" />
            </button>
          </div>

          <div className="shell flex flex-1 flex-col justify-between overflow-y-auto pt-6 pb-10">
            <nav aria-label="Mobile">
              <ul className="border-rule border-t">
                {navLinks.map((link, i) => (
                  <li key={link.href} className="border-rule border-b">
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="text-ink group flex items-baseline justify-between py-4"
                    >
                      <span className="display text-[1.75rem]">{link.label}</span>
                      <span className="eyebrow text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-10 space-y-3">
              <a
                href={person.resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={onClose}
                className="bg-ink text-ivory flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium"
              >
                Download CV
                <ArrowDownToLine aria-hidden="true" className="size-4" />
              </a>
              <a
                href={`mailto:${person.email}`}
                onClick={onClose}
                className="border-rule-strong text-ink flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3.5 text-sm font-medium"
              >
                {person.email}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
