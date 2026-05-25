import Image from "next/image";

const included = [
  "Design briefing and space planning (built around how you'll actually use the room)",
  "Finish and material selection",
  "Specialized requirements (acoustic treatment, rubber flooring, ventilation, dedicated circuits)",
  "Trade coordination and construction management",
  "Final walkthrough and deficiency clearance",
];

export function YouSpacesBody() {
  return (
    <>
      <section className="bg-paper py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <div className="mx-auto max-w-2xl space-y-8">
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              Most finished basement rooms were designed to be storage with
              better lighting. Home gyms get rubber flooring tiles from a
              sports store and a TV mount on the wall. Theater rooms get a
              couch and a projector pointed at bare drywall.
            </p>
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              D2 builds You Spaces differently: home gyms get proper
              flooring, rubber walls, the right lighting, and ventilation
              sized for actual use. Theater rooms get acoustic treatment,
              dedicated lighting circuits, and a layout built around the
              screen. Home offices get designed for focus, not just a desk
              tucked in the corner because there was nowhere else for it.
            </p>
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              These are rooms with a specific purpose, and they deserve to be
              designed that way.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
          <Image
            src="/photos/you-spaces-feature.jpg"
            alt="Designed lounge with sectional sofa, wood-paneled walls, sculptural shelving, and statement floor lamp"
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
                src="/photos/you-spaces-included.jpg"
                alt="Detail of a grey sectional with plaid throw, white ottoman, and walnut-toned doors in the background"
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
              You Spaces suit homeowners with unfinished or underused
              basement space, people who have been planning a home gym or
              theater room for years and keep finding reasons to wait, and
              anyone who wants a dedicated space for something they care
              about built to a standard that will hold up.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
