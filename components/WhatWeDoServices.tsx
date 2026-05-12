import Image from "next/image";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Character Home Renovations",
    body: "Calgary's older homes carry something newer builds simply don't. We bring out the potential in character properties without erasing what makes them worth having.",
    image: "/photos/kitchen-heritage.png",
    imageAlt: "Heritage kitchen renovation — placeholder",
    href: "#",
  },
  {
    num: "02",
    title: "Ready-to-Move Designer Projects",
    body: "Selectively acquired character homes, renovated under full D2 creative control. Move-in ready, no renovation process required.",
    image: "/photos/lounge-walnut.jpg",
    imageAlt: "Walnut-paneled lounge — placeholder",
    href: "#",
  },
  {
    num: "03",
    title: "Complete Designer Renovations",
    body: "Every surface, every system, every room — approached as one cohesive project with a single design vision behind it.",
    image: "/photos/lounge-sculptural.jpg",
    imageAlt: "Sculptural lounge with marble stairs — placeholder",
    href: "#",
  },
  {
    num: "04",
    title: "Custom New Home Design + Build",
    body: "One team from concept to keys. Design, materials, trades, and construction handled together.",
    image: "/photos/architecture-terracotta.png",
    imageAlt: "Terracotta architectural composition — placeholder",
    href: "#",
  },
  {
    num: "05",
    title: "Kitchen + Bathroom Renovations",
    body: "The rooms you use most deserve a real design process. Available as standalone work.",
    image: "/photos/kitchen-vaulted.png",
    imageAlt: "Vaulted-ceiling kitchen — placeholder",
    href: "#",
  },
  {
    num: "06",
    title: "You Spaces",
    body: "Home gyms, theatre rooms, man caves, zen rooms, home offices and more. Built around what you actually want to do in them.",
    image: "/photos/hero-kitchen.jpg",
    imageAlt: "Designed interior space — placeholder",
    href: "#",
  },
];

export function WhatWeDoServices() {
  return (
    <section className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-20">
          {services.map((service) => (
            <Link
              key={service.num}
              href={service.href}
              className="group flex flex-col bg-paper"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden ring-1 ring-evergreen">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col pt-6 md:pt-8">
                <h2 className="font-display text-2xl leading-[1.15] text-ink md:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/75 md:text-base">
                  {service.body}
                </p>
                <div className="mt-6">
                  <span className="inline-flex text-xs font-medium uppercase tracking-[0.18em] text-ink">
                    <span className="border-b border-ink pb-1 transition-colors group-hover:border-terracotta group-hover:text-terracotta">
                      Learn More
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
