import Image from "next/image";

const included = [
  "Full design briefing and space planning",
  "Interior design direction (mood boards, material and finish selection)",
  "Structural assessment and any required updates",
  "Complete interior renovation (all rooms in scope)",
  "Trade management throughout construction",
  "Regular progress updates and client walkthroughs",
  "Final walkthrough and deficiency clearance",
];

export function CompleteDesignerBody() {
  return (
    <>
      <section className="bg-paper py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <div className="mx-auto max-w-2xl space-y-8">
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              Most whole home renovations in Calgary involve a designer
              handing off plans to a builder who&apos;s never met them.
              Decisions get made on-site without the designer present. The
              vision and the execution drift apart.
            </p>
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              D2 handles design and construction together. Christian and Raj
              are both in the room from the first briefing through to
              handover. The design decisions and the build decisions are made
              by the same people, which means nothing gets lost between them.
            </p>
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              A complete renovation with D2 covers every room and every
              system that needs attention — layout, structure, finishes,
              lighting, millwork, mechanical updates where required. The
              result is a home that reads as a single considered project, not
              a series of contractor handoffs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
          <Image
            src="/photos/whole-home-feature.jpg"
            alt="Wide open-plan living, dining, and kitchen with wood floors, large windows, and curated furnishings"
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
            <div className="relative aspect-[4/5] w-full lg:col-span-5 lg:aspect-auto">
              <Image
                src="/photos/interior-shelving.jpg"
                alt="Floor-to-ceiling walnut shelving — placeholder"
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
                Good Fit For
              </h2>
            </div>
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg lg:col-span-8">
              Complete Designer Renovations are the right fit for homeowners
              who&apos;ve bought a property that needs a full overhaul before
              it works for them, clients who want a single point of contact
              managing design and construction together, and anyone who has
              tried to coordinate a separate designer and builder on the same
              project and wants a cleaner experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
