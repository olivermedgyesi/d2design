import Link from "next/link";

const stages = [
  {
    num: "Stage 1",
    title: "Design Brief + Creative Direction",
    body: "We start by understanding how your space needs to function and what it should feel like.",
  },
  {
    num: "Stage 2",
    title: "Design Development",
    body: "Materials, finishes, and fixtures selected and sourced. You see and approve everything before anything gets built.",
  },
  {
    num: "Stage 3",
    title: "Project Finalization",
    body: "Plans locked, trades confirmed, everything ordered. Nothing moves to build until every detail is set.",
  },
  {
    num: "Stage 4",
    title: "Construction + Ordering",
    body: "Build begins. We manage the site, the trades, and the deliveries. Regular updates throughout.",
  },
  {
    num: "Stage 5",
    title: "Final Walkthrough + Handover",
    body: "We walk the completed space together and hand it over finished and ready.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="bg-ink py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <h2 className="mb-16 font-display text-4xl leading-[1.1] text-paper md:mb-24 md:text-5xl lg:text-6xl">
          The D2 Process
        </h2>

        <ol className="border-t border-paper/20">
          {stages.map((stage) => (
            <li
              key={stage.num}
              className="grid grid-cols-1 gap-4 border-b border-paper/20 py-10 md:grid-cols-12 md:gap-8 md:py-12"
            >
              <div className="md:col-span-3">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-terracotta">
                  {stage.num}
                </p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl leading-[1.15] text-paper md:text-3xl">
                  {stage.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/75 md:text-lg">
                  {stage.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 md:mt-20">
          <Link
            href="#"
            className="group inline-flex text-xs font-medium uppercase tracking-[0.18em] text-paper"
          >
            <span className="border-b border-paper pb-1 transition-colors group-hover:border-terracotta group-hover:text-terracotta">
              View Our Full Process
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
