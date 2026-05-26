"use client";

import Image from "next/image";
import { useState } from "react";

type Phase = {
  num: string;
  label: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

const phases: Phase[] = [
  {
    num: "01",
    label: "Design Brief",
    title: "Design Brief + Creative Direction",
    body: "We start by understanding how your space needs to function and what it should feel like. This phase covers space planning, overall design direction, mood boards, and alignment on budget and timeline. Nothing moves forward until the brief is clear and agreed.",
    image: "/photos/process-1-design-brief.jpg",
    imageAlt: "Hand-drawn design sketches with dimensions",
  },
  {
    num: "02",
    label: "Design Development",
    title: "Design Development",
    body: "Materials, finishes, and fixtures are selected and sourced. We bring recommendations based on the approved brief and budget, always with options at different price points. You see and approve every selection before anything gets ordered. By the end of this phase, the design is fully visible.",
    image: "/photos/process-2-development.jpg",
    imageAlt: "Stone and marble slab selection in a material yard",
  },
  {
    num: "03",
    label: "Finalization",
    title: "Project Finalization",
    body: "Construction plans are finalized, trades are briefed and contracted, and all materials are ordered. Nothing moves to the build phase until every detail is confirmed. We provide regular status updates throughout.",
    image: "/photos/process-3-finalization.jpg",
    imageAlt: "Reviewing finalized floor plans before construction begins",
  },
  {
    num: "04",
    label: "Construction",
    title: "Construction + Ordering",
    body: "Build begins. D2 manages the site, the trades, and all deliveries. Weekly updates keep you informed without pulling you into daily logistics. Deficiencies are handled as they arise.",
    image: "/photos/structure-framing.jpg",
    imageAlt: "Interior framing in progress — placeholder",
  },
  {
    num: "05",
    label: "Handover",
    title: "Final Walkthrough + Handover",
    body: "We walk through the completed space together, confirm every detail matches the approved design, and address anything outstanding. Your space is handed over, finished and ready.",
    image: "/photos/about-hero-arch.png",
    imageAlt: "View through an evergreen archway into a finished living room",
  },
];

export function ProcessPhases() {
  const [active, setActive] = useState(0);
  const phase = phases[active];

  return (
    <section className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <div className="mb-10 flex items-center justify-between md:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
            The D2 Process
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
            {String(active + 1).padStart(2, "0")} / {String(phases.length).padStart(2, "0")}
          </p>
        </div>

        <nav
          aria-label="Process phases"
          className="grid grid-cols-5 border-y border-ink/15"
        >
          {phases.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={p.num}
                type="button"
                onClick={() => setActive(i)}
                aria-current={isActive ? "step" : undefined}
                className={[
                  "group flex flex-col items-start gap-1 px-3 py-5 text-left transition-colors md:gap-2 md:px-5 md:py-7",
                  i > 0 ? "border-l border-ink/15" : "",
                  isActive
                    ? "bg-ink text-paper"
                    : "text-ink hover:bg-ink/[0.04]",
                ].join(" ")}
              >
                <span
                  className={[
                    "font-display text-xl leading-none md:text-2xl",
                    isActive ? "text-paper" : "text-ink",
                  ].join(" ")}
                >
                  {p.num}
                </span>
                <span
                  className={[
                    "hidden text-xs font-medium uppercase tracking-[0.15em] md:inline",
                    isActive ? "text-paper/80" : "text-ink/60",
                  ].join(" ")}
                >
                  {p.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="grid grid-cols-1 gap-10 pt-12 md:grid-cols-12 md:gap-12 md:pt-16 lg:gap-16 lg:pt-20">
          <div className="md:col-span-7 lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden ring-1 ring-evergreen">
              <Image
                key={phase.image}
                src={phase.image}
                alt={phase.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-terracotta">
              Phase {phase.num}
            </p>
            <h2 className="mt-4 font-display text-3xl leading-[1.1] text-ink md:text-4xl lg:text-5xl">
              {phase.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/80 md:mt-8 md:text-lg">
              {phase.body}
            </p>

            <div className="mt-10 flex items-center justify-between gap-6 border-t border-ink/15 pt-6 md:mt-14">
              <button
                type="button"
                onClick={() => setActive((i) => Math.max(0, i - 1))}
                disabled={active === 0}
                className="text-xs font-medium uppercase tracking-[0.18em] text-ink transition-opacity hover:text-terracotta disabled:cursor-not-allowed disabled:opacity-30"
              >
                ← Previous
              </button>
              <button
                type="button"
                onClick={() =>
                  setActive((i) => Math.min(phases.length - 1, i + 1))
                }
                disabled={active === phases.length - 1}
                className="text-xs font-medium uppercase tracking-[0.18em] text-ink transition-opacity hover:text-terracotta disabled:cursor-not-allowed disabled:opacity-30"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
