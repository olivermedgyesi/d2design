const pillars = [
  {
    label: "We Serve",
    body: "Calgary and the surrounding communities of Canmore, Springbank, Bearspaw, Elbow Valley, and Bragg Creek, and select high-income areas across Southern Alberta.",
  },
  {
    label: "Why We Started",
    body: "We started D2 because we wanted to do work we actually care about — work that expresses something and keeps the client's outcome as the only priority. We are not interested in volume or filling a schedule. We are here to do intentional work that means something.",
  },
  {
    label: "Who We Are",
    body: "D2 is an owner-operated design-build firm. Christian and Raj are involved in every project from the first conversation to the final walkthrough. We take on one-of-a-kind projects, not volume: spaces built with genuine character, intentionally designed for the way you actually live.",
  },
];

export function AboutPillars() {
  return (
    <section className="bg-paper py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <div className="max-w-3xl space-y-6 text-base leading-relaxed text-ink/80 md:text-lg">
          <p>
            We came from large-scale construction backgrounds and wanted to do
            work that was more intentional. D2 is the result: a firm where
            design decisions and build decisions are made by the same team,
            and where every client gets our full attention from start to
            finish.
          </p>
          <p>
            We work across character home renovations, complete redesigns,
            custom new builds, kitchens, bathrooms, and specialty spaces in
            Calgary, Canmore, Springbank, Bearspaw, Elbow Valley, and Bragg
            Creek.
          </p>
        </div>

        <div className="mt-20 border-t border-ink/15 md:mt-28">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.label}
                className={[
                  "pt-10 md:pt-14",
                  index > 0 ? "border-t border-ink/15 md:border-t-0" : "",
                  index > 0 ? "md:border-l md:border-ink/15 md:pl-10" : "",
                  "md:pr-10",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-ink/60">
                  {pillar.label}
                </div>
                <p className="mt-6 text-base leading-relaxed text-ink/80 md:text-base">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
