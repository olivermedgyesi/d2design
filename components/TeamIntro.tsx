import Image from "next/image";

export function TeamIntro() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <Image
        src="/photos/interior-shelving.jpg"
        alt="A quiet architectural interior detail — placeholder hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

      <div className="relative z-10 flex h-full w-full items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 md:pb-20 lg:px-14 lg:pb-24">
          <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-paper md:text-6xl lg:text-7xl">
            The Team
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-paper/85 md:text-lg">
            Owner-led from the first conversation to the final walkthrough.
            The people on this page are the people on every project.
          </p>
        </div>
      </div>
    </section>
  );
}
