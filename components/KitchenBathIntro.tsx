import Image from "next/image";

export function KitchenBathIntro() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <Image
        src="/photos/kitchen-bath-hero.png"
        alt="Mid-century kitchen with walnut cabinetry, terrazzo floors, and graphic tile backsplash in green and orange"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex h-full w-full items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-24 lg:px-14 lg:pb-28">
          <h1 className="max-w-3xl text-balance font-display text-5xl leading-[1.05] text-paper md:text-6xl lg:text-7xl">
            Kitchen and Bathroom Renovations in&nbsp;Calgary
          </h1>
          <p className="mt-8 max-w-xl text-base leading-[1.7] text-paper/85 md:text-lg">
            Design-led renovations for the two rooms that get the most use.
            D2 handles design, material selection, trade management, and
            build from one team.
          </p>
        </div>
      </div>
    </section>
  );
}
