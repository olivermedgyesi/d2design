import Image from "next/image";

export function PortfolioIntro() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <Image
        src="/photos/lounge-walnut.jpg"
        alt="A walnut-panelled lounge interior — placeholder hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

      <div className="relative z-10 flex h-full w-full items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 md:pb-20 lg:px-14 lg:pb-24">
          <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-paper md:text-6xl lg:text-7xl">
            Our Work
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-paper/85 md:text-lg">
            Every project documented here started with a design brief and
            ended at a standard we were willing to put our name on.
            Photography and project details are added as work reaches
            completion.
          </p>
        </div>
      </div>
    </section>
  );
}
