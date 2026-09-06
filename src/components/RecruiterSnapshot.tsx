"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownToLine, FileText, Mail, X } from "lucide-react";
import { person, snapshot } from "@/data/yoshita";

/**
 * A compact, always-reachable summary for recruiters scanning quickly.
 * Appears once the visitor has scrolled past the hero.
 */
export function RecruiterSnapshot() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Show once past the hero, and stand down over the contact section —
  // its actions are already on the page there.
  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const contactInView = contact
        ? contact.getBoundingClientRect().top < window.innerHeight * 0.85
        : false;
      const shouldShow = window.scrollY > 520 && !contactInView;
      setVisible(shouldShow);
      if (!shouldShow) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!panelRef.current?.contains(target) && !triggerRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div className="pointer-events-none fixed right-4 bottom-20 z-50 flex flex-col items-end gap-3 md:right-6 lg:bottom-6">
      <AnimatePresence>
        {open && visible ? (
          <motion.div
            ref={panelRef}
            id="recruiter-snapshot"
            role="dialog"
            aria-label="Recruiter snapshot"
            initial={{ opacity: 0, y: reduced ? 0 : 12, scale: reduced ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduced ? 0 : 8, scale: reduced ? 1 : 0.98 }}
            transition={{ duration: reduced ? 0.15 : 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="border-rule-strong bg-paper pointer-events-auto w-[min(21rem,calc(100vw-2rem))] border p-6 shadow-[0_18px_50px_-30px_rgba(22,19,15,0.55)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-wine">Recruiter snapshot</p>
                <p className="display text-ink mt-3 text-[1.375rem] leading-tight">
                  {person.name}
                </p>
                <p className="text-stone mt-1 text-[0.8125rem]">{person.title}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  triggerRef.current?.focus();
                }}
                aria-label="Close recruiter snapshot"
                className="text-muted hover:text-ink -mt-1 -mr-1 p-1 transition-colors"
              >
                <X aria-hidden="true" className="size-4" />
              </button>
            </div>

            <ul className="border-rule mt-5 flex flex-wrap gap-x-2 gap-y-1.5 border-t pt-4 text-[0.75rem]">
              {snapshot.practices.map((practice) => (
                <li
                  key={practice}
                  className="border-rule text-graphite rounded-full border px-2.5 py-1"
                >
                  {practice}
                </li>
              ))}
            </ul>

            <ul className="text-stone mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.8125rem]">
              {snapshot.facts.map((fact) => (
                <li key={fact} className="border-rule border-l pl-2.5 leading-snug">
                  {fact}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-2">
              <a
                href={person.resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-ink text-ivory hover:bg-wine flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[0.8125rem] font-medium transition-colors duration-300"
              >
                Download CV
                <ArrowDownToLine aria-hidden="true" className="size-3.5" />
              </a>
              <a
                href={`mailto:${person.email}`}
                className="border-rule-strong text-ink hover:border-ink flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-[0.8125rem] font-medium transition-colors duration-300"
              >
                Email {person.firstName}
                <Mail aria-hidden="true" className="size-3.5" />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {visible ? (
          <motion.button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="recruiter-snapshot"
            initial={{ opacity: 0, y: reduced ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : 10 }}
            transition={{ duration: reduced ? 0.15 : 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-rule-strong bg-paper text-ink hover:border-ink pointer-events-auto inline-flex items-center gap-2.5 rounded-full border py-2.5 pr-4 pl-3.5 text-[0.8125rem] font-medium shadow-[0_12px_30px_-22px_rgba(22,19,15,0.7)] transition-colors duration-300"
          >
            <FileText aria-hidden="true" className="text-wine size-3.5" />
            Recruiter snapshot
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
