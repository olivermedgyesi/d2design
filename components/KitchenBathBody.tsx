import Image from "next/image";

const included = [
  "Design brief and space planning",
  "Material and finish selection (tile, cabinetry, fixtures, countertops, lighting)",
  "Trade coordination (plumbing, electrical, tile, millwork)",
  "Construction management and site supervision",
  "Final walkthrough and deficiency clearance",
];

export function KitchenBathBody() {
  return (
    <>
      <section className="bg-paper py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <div className="mx-auto max-w-2xl space-y-8">
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              Kitchens and bathrooms get renovated more often than any other
              room, and they&apos;re also the ones where a wrong decision is
              the hardest to undo. Layout, cabinetry, plumbing placement,
              tile — every choice affects how the room feels and functions
              for years.
            </p>
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              D2 brings the same design process to a kitchen or bathroom
              renovation as it does to a full home project. The scope is
              smaller, but the approach is the same: brief first, design
              second, build third. No guessing at what you want on-site. No
              finish decisions made under time pressure.
            </p>
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              We work with a trades network we know and trust. Plumbing,
              tile, millwork, and electrical are coordinated through D2 — you
              don&apos;t manage sub-trades. You approve the design and we
              build it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
          <Image
            src="/photos/kitchen-bath-feature.jpg"
            alt="Contemporary kitchen with high-gloss grey cabinetry, marble counters, and warm under-cabinet lighting"
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
                src="/photos/kitchen-bath-included.jpg"
                alt="Minimalist kitchen detail — integrated Bosch ovens, light cabinetry, and a thick walnut counter"
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
              Kitchen and bathroom renovations at D2 suit homeowners who want
              more than a budget refresh, clients who&apos;ve put the project
              off because they didn&apos;t know where to start, and anyone
              who wants the room done properly, once, with a result they
              won&apos;t want to redo in five years.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
