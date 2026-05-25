import Image from "next/image";

const included = [
  "Full design briefing and creative direction",
  "Space planning and architectural coordination",
  "Interior design (materials, finishes, millwork, lighting)",
  "Trade partner management throughout construction",
  "Site supervision and weekly progress updates",
  "Final walkthrough and deficiency resolution",
  "Project documentation at handover",
];

export function CustomNewHomeBody() {
  return (
    <>
      <section className="bg-paper py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <div className="mx-auto max-w-2xl space-y-8">
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              A custom home should start with what you want the space to do
              and how you want to live in it. It shouldn&apos;t start with a
              floor plan someone else already built.
            </p>
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              D2&apos;s custom build process begins with a detailed design
              brief. We work with you to understand how the home needs to
              function, establish the overall direction, and make every
              material and finish decision together before construction
              starts. By the time a tool touches the site, every detail has
              been reviewed and approved.
            </p>
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              Raj and Christian bring complementary experience to custom
              builds: high-volume residential project management on one side,
              commercial construction on the other. The result is a custom
              home built with the design depth of a boutique firm and the
              site management discipline of a volume builder.
            </p>
            <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
              D2 builds custom homes across Calgary, Canmore, Springbank,
              Bearspaw, Elbow Valley, and Bragg Creek.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
          <Image
            src="/photos/structure-framing.jpg"
            alt="Custom home framing under construction — placeholder"
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
                src="/photos/heritage-door.jpg"
                alt="Architectural detail of a custom door — placeholder"
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
    </>
  );
}
