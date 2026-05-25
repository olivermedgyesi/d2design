import Image from "next/image";

export function YouSpacesIntro() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <Image
        src="/photos/you-spaces-hero.png"
        alt="Mid-century styled lounge and bar interior with curved sofa, terrazzo island, and floor-to-ceiling garden window"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex h-full w-full items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-24 lg:px-14 lg:pb-28">
          <h1 className="max-w-3xl text-balance font-display text-5xl leading-[1.05] text-paper md:text-6xl lg:text-7xl">
            You Spaces
          </h1>
          <p className="mt-8 max-w-xl text-base leading-[1.7] text-paper/85 md:text-lg">
            Some rooms are for living in. You Spaces are for doing the things
            you actually want to do. D2 designs and builds them with the same
            process we bring to the rest of the home.
          </p>
        </div>
      </div>
    </section>
  );
}
