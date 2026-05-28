"use client";

import { useState } from "react";

type Item = {
  question: string;
  answer: string;
};

const items: Item[] = [
  {
    question: "What is a design-build firm?",
    answer:
      "A design-build firm handles both the design and construction of a project under one roof. At D2, the same team that develops the design brief, selects materials, and finalizes the plans also manages the build. This means one point of contact, one contract, and no gap between what was designed and what gets built.",
  },
  {
    question:
      "How is working with D2 different from hiring a designer and a contractor separately?",
    answer:
      "When you hire a designer and a contractor separately, the two parties often disagree on-site and you end up managing the relationship between them. D2 eliminates that. Because our team handles both design and construction, decisions are made together and the vision stays intact from brief to handover.",
  },
  {
    question: "What types of projects does D2 take on?",
    answer:
      "D2 works on character home renovations, complete home redesigns, custom new builds, kitchen and bathroom renovations, and specialty spaces (home gyms, theater rooms, home offices). We also acquire a small number of properties each year, renovate them under full creative control, and list them as finished designer homes.",
  },
  {
    question: "Where does D2 work?",
    answer:
      "Calgary and the surrounding communities of Canmore, Springbank, Bearspaw, Elbow Valley, and Bragg Creek, and select high-income areas across Southern Alberta.",
  },
  {
    question: "What does a project typically cost?",
    answer:
      "Scope and specifications vary widely, so these are general ranges only. A targeted kitchen renovation runs roughly $50,000 to $120,000. A character home renovation covering full interiors and mechanical upgrades typically starts at $150,000 and goes up from there. A custom new home build depends heavily on size, site, and finish level. D2 provides a detailed proposal after the discovery call so you know exactly what you're committing to before any work starts.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A kitchen or bathroom renovation is typically 6 to 12 weeks once construction starts, with 3 to 4 months of planning beforehand. A character home renovation or full redesign runs 4 to 8 months total. A custom new build from design sign-off to keys is generally 12 to 18 months. Every project gets a specific timeline as part of the proposal.",
  },
  {
    question: "Do I need to have my design ready before reaching out?",
    answer:
      "Most clients come to us with a general idea of what they want and a rough sense of budget. Design development is Phase 2 of our process and happens after the initial conversation. If you have inspiration images or a clear sense of how the space should function, bring that. If you have nothing, that's a fine place to start.",
  },
  {
    question: "What happens if something unexpected comes up during construction?",
    answer:
      "Older homes in particular can have surprises behind the walls. D2 budgets conservatively to account for the unexpected and communicates immediately when something changes. You will always know what is happening before we make a call on it.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a discovery call with our team. It's 15 minutes, there's no cost, and no obligation beyond that. We'll understand your project, confirm whether it's the right fit, and tell you what the next step looks like.",
  },
];

export function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="bg-paper pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <div className="mx-auto max-w-2xl">
            <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-6xl lg:text-7xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-8 text-base leading-[1.75] text-ink/85 md:text-lg">
              Common questions about working with D2 — projects, process,
              pricing, timelines, and service areas.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper pb-24 md:pb-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <div className="mx-auto max-w-2xl">
            <ul>
              {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <li key={index} className="border-t border-ink/15">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-8 text-left md:py-10"
                    >
                      <h2 className="font-display text-2xl leading-[1.15] text-ink md:text-3xl">
                        {item.question}
                      </h2>
                      <span
                        aria-hidden="true"
                        className={[
                          "mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center text-ink transition-transform duration-300 md:mt-2",
                          isOpen ? "rotate-45" : "rotate-0",
                        ].join(" ")}
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 3.5V18.5M3.5 11H18.5"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="square"
                          />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={[
                        "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-10 text-base leading-[1.75] text-ink/85 md:pb-12 md:text-lg">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
              <li className="border-t border-ink/15" aria-hidden="true" />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
