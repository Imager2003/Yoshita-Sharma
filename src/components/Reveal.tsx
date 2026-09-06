import type { ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Seconds of delay before the reveal starts. */
  delay?: number;
  /** Render as a different element (e.g. "li", "article"). */
  as?: ElementType;
  className?: string;
}

/**
 * Fades and lifts content into view once, when it enters the viewport.
 *
 * Progressive enhancement: the hidden state is only applied after
 * `RevealController` marks the document as script-enabled, so the page is
 * fully legible without JavaScript and if the observer never fires.
 * Reduced-motion preferences collapse the transition to an instant reveal.
 */
export function Reveal({ children, delay = 0, as: Tag = "div", className }: RevealProps) {
  return (
    <Tag
      className={className ? `reveal ${className}` : "reveal"}
      data-reveal=""
      data-delay={delay ? Math.round(delay * 1000) : undefined}
    >
      {children}
    </Tag>
  );
}

/**
 * Marks a group whose children reveal in sequence. Pair with {@link StaggerItem}.
 */
export function Stagger({
  children,
  className,
  as: Tag = "div",
  gap = 0.08,
}: RevealProps & { gap?: number }) {
  return (
    <Tag className={className} data-stagger-gap={Math.round(gap * 1000)}>
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className, as: Tag = "div" }: RevealProps) {
  return (
    <Tag className={className ? `reveal ${className}` : "reveal"} data-reveal="stagger">
      {children}
    </Tag>
  );
}
