import Image from "next/image";

export function CharacterHomeIntro() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <Image
        src="/photos/hero-character-home.jpg"
        alt="Refined living room with curved beige sofa, modular leather chairs, exposed wood beams, and framed art on plaster walls"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex h-full w-full items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-24 lg:px-14 lg:pb-28">
          <h1 className="max-w-3xl text-balance font-display text-5xl leading-[1.05] text-paper md:text-6xl lg:text-7xl">
            Character Home Renovation in&nbsp;Calgary
          </h1>
          <p className="mt-8 max-w-xl text-base leading-[1.7] text-paper/85 md:text-lg">
            D2 restores and renovates Calgary&apos;s older homes without
            erasing what makes them worth owning. Original millwork, period
            proportions, and heritage details stay. Everything that needs
            updating gets rebuilt to last.
          </p>
        </div>
      </div>
    </section>
  );
}
