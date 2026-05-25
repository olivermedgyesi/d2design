import Image from "next/image";

const included = [
  "Full design brief and interior direction by D2",
  "Complete renovation to designer standard throughout",
  "Premium finish specification (tile, cabinetry, fixtures, lighting, flooring)",
  "Professional photography and full project documentation",
  "Material specifications and project history provided at sale",
];

export function ReadyToMoveBody() {
  return (
    <>
      <section className="bg-paper py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <div className="mx-auto max-w-2xl space-y-8">
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              Most move-in ready homes in Calgary were renovated to a price
              point. Decisions were made to keep the listing competitive, not
              because they were the right call for the space.
            </p>
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              D2 work differently. We select the property, develop the full
              design brief, specify every finish and fixture, and build it out
              under complete creative control. No client timeline pressuring
              shortcuts. No value-engineering at the end because the budget
              got tight. The home comes to market when it&apos;s complete and
              the standard has been met.
            </p>
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              If you want a well-designed home you can move into immediately,
              these are built for that.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
          <Image
            src="/photos/ready-to-move-feature.jpg"
            alt="Bright double-height living and dining space with floating wood stair"
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
                src="/photos/architecture-terracotta.png"
                alt="Architectural composition with terracotta wall and black marble floor — placeholder"
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
              Ready-to-Move Designer Projects suit buyers who want a finished
              home with a real design point of view, who don&apos;t want to
              manage a renovation or custom build, and who care as much about
              how a home looks and feels.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
