import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { CaseStudyRow } from "@/content";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Editorial section: numbered label + heading in a narrow left column, content on the right. */
export const Section = ({ id, index, title, intro, children, className }: SectionProps) => (
  <section id={id} aria-labelledby={`${id}-heading`} className={cn("border-t border-border py-20 md:py-28", className)}>
    <div className="page-container grid gap-10 lg:grid-cols-[13rem_1fr] lg:gap-16">
      <header className="lg:pt-1">
        <p className="eyebrow" aria-hidden="true">
          {index}
        </p>
        <h2 id={`${id}-heading`} className="mt-2 font-serif text-3xl font-medium tracking-tight text-foreground">
          {title}
        </h2>
      </header>
      <div className="min-w-0">
        {intro && <div className="mb-12 max-w-3xl font-serif text-2xl leading-snug text-foreground md:text-[1.75rem]">{intro}</div>}
        {children}
      </div>
    </div>
  </section>
);

/** Problem → Context → Role → Approach → Outcome, as a definition list rather than a card. */
export const CaseStudy = ({ rows }: { rows: CaseStudyRow[] }) => (
  <dl className="divide-y divide-border border-y border-border">
    {rows.map((row) => (
      <div key={row.label} className="grid gap-2 py-5 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:pt-1">{row.label}</dt>
        <dd className="text-[0.975rem] leading-relaxed text-foreground/90">
          {Array.isArray(row.body) ? (
            <ul className="space-y-2">
              {row.body.map((item) => (
                <li key={item} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-accent">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            row.body
          )}
        </dd>
      </div>
    ))}
  </dl>
);

export const StudyHeading = ({ id, title, meta, subtitle }: { id: string; title: string; meta: string; subtitle?: string }) => (
  <div className="mb-6">
    <p className="text-sm text-muted-foreground">{meta}</p>
    <h3 id={id} className="mt-1 font-serif text-2xl font-medium text-foreground md:text-3xl">{title}</h3>
    {subtitle && <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p>}
  </div>
);
