import Image from "next/image";

const included = [
  "Full design briefing and creative direction",
  "Heritage feature assessment (what to restore, what to replace)",
  "Interior redesign (layout, finishes, millwork, lighting)",
  "Structural, electrical, and plumbing updates where required",
  "Trade coordination and construction management",
  "Final walkthrough and deficiency clearance",
];

export function CharacterHomeBody() {
  return (
    <>
      <section className="bg-paper py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <div className="mx-auto max-w-2xl space-y-8">
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              Calgary&apos;s older neighbourhoods are full of homes built with
              wide overhangs, brick detailing, original hardwood, and proper
              plaster walls. Most haven&apos;t been updated since the 80s, or
              they&apos;ve been updated in ways that stripped out exactly what
              made them worth owning.
            </p>
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              We don&apos;t remove heritage features to install generic
              finishes. We work with the existing architecture, restore
              what&apos;s worth keeping, and modernize what isn&apos;t,
              without making the whole thing look like a show suite. The
              result is a home that feels like it evolved.
            </p>
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              Older homes come with complexity: structural surprises, outdated
              electrical, plumbing that predates modern code. Our team has the
              background to handle all of it. We budget conservatively for the
              unexpected and communicate immediately when something changes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
          <Image
            src="/photos/lounge-walnut.jpg"
            alt="Walnut-paneled lounge interior — placeholder"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <div className="text-center">
            <h2 className="font-display text-3xl leading-[1.1] text-ink md:text-4xl lg:text-5xl">
              What&apos;s Included
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:mt-20 lg:mt-24 lg:grid-cols-12 lg:gap-16">
            <div className="relative aspect-[4/5] w-full lg:col-span-5">
              <Image
                src="/photos/included-living-room.jpg"
                alt="Double-height living room with cream sectional, organic-shaped grey chair, and geometric wall art"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>

            <ul className="lg:col-span-7">
              {included.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-baseline gap-8 border-t border-ink/15 py-6 md:py-8 ${
                    i === included.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="shrink-0 text-xs font-medium uppercase tracking-[0.25em] text-ink/55">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-[1.4] text-ink md:text-lg lg:text-xl">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-paper pb-24 md:pb-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 border-t border-ink/15 pt-24 md:pt-32 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-display text-3xl leading-[1.1] text-ink md:text-4xl lg:text-5xl">
                Who This Is For
              </h2>
            </div>
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg lg:col-span-8">
              Character home renovation is the right fit for homeowners who
              bought a property in an established Calgary neighbourhood
              knowing it needed work, buyers who want to renovate before
              moving in, and clients who have a genuine appreciation for what
              Calgary&apos;s older homes were built with and want to preserve
              it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
