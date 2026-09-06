"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import type { Experience } from "@/data/yoshita";
import { StaggerItem } from "./Reveal";

interface ExperienceItemProps {
  item: Experience;
  /** Highlights the timeline marker while this entry is the one in view. */
  isActive: boolean;
}

export function ExperienceItem({ item, isActive }: ExperienceItemProps) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const panelId = useId();

  return (
    <StaggerItem as="li">
      <article id={item.id} className="scroll-mt-28">
        <div className="grid gap-x-8 gap-y-4 md:grid-cols-12">
          {/* Date rail */}
          <div className="md:col-span-3 lg:col-span-2">
            <p className="display text-ink text-[1.75rem] leading-none">{item.year}</p>
            <p className="text-muted mt-2 text-[0.8125rem]">{item.period}</p>
            <p className="text-muted mt-1 text-[0.8125rem]">{item.location}</p>
          </div>

          {/* Timeline spine */}
          <div aria-hidden="true" className="relative hidden md:col-span-1 md:block">
            <span className="bg-rule absolute inset-y-0 left-1/2 w-px -translate-x-1/2" />
            <span
              className={`absolute top-2.5 left-1/2 size-2.5 -translate-x-1/2 rounded-full border transition-colors duration-500 ${
                isActive ? "border-wine bg-wine" : "border-rule-strong bg-ivory"
              }`}
            />
          </div>

          {/* Content */}
          <div className="border-rule border-t pt-5 md:col-span-8 lg:col-span-9">
            <h3 className="display text-ink text-[clamp(1.5rem,3vw,2rem)] leading-tight">
              {item.organisation}
            </h3>
            <p className="text-wine mt-2 text-[0.9375rem]">{item.role}</p>
            <p className="eyebrow text-muted mt-3">{item.practice}</p>

            <p className="text-graphite mt-5 max-w-3xl text-[0.975rem] leading-relaxed">
              {item.summary}
            </p>

            <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
              {item.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col-reverse gap-1">
                  <dt className="eyebrow text-muted">{metric.label}</dt>
                  <dd className="display text-ink text-[1.5rem] leading-none">{metric.value}</dd>
                </div>
              ))}
            </dl>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls={panelId}
              className="group text-ink hover:text-wine mt-6 inline-flex items-center gap-2.5 text-[0.8125rem] font-medium transition-colors duration-200"
            >
              <span className="border-rule-strong group-hover:border-wine flex size-6 items-center justify-center rounded-full border transition-colors duration-200">
                {open ? (
                  <Minus aria-hidden="true" className="size-3" />
                ) : (
                  <Plus aria-hidden="true" className="size-3" />
                )}
              </span>
              {open ? "Hide details" : "View details"}
            </button>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={panelId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: reduced ? 0.15 : 0.45,
                    ease: [0.16, 1, 0.3, 1],
                    opacity: { duration: reduced ? 0.15 : 0.3 },
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-rule mt-6 grid gap-8 border-t pt-6 sm:grid-cols-2">
                    {item.details.map((group) => (
                      <div key={group.heading}>
                        <h4 className="eyebrow text-wine">{group.heading}</h4>
                        <ul className="mt-4 space-y-3">
                          {group.points.map((point) => (
                            <li
                              key={point.slice(0, 40)}
                              className="text-stone border-rule border-l pl-4 text-[0.875rem] leading-relaxed"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </article>
    </StaggerItem>
  );
}
