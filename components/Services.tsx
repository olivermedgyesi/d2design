import Image from "next/image";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Character Home Renovations",
    body: "Calgary's older homes carry something worth preserving. We restore and renovate character properties with the care their original craftsmanship deserves, bringing them forward without erasing what makes them distinct. The trees in these neighbourhoods took 50 years to grow and the lot sizes don't exist in new developments. Some things you simply cannot buy new!",
    image: "/photos/kitchen-heritage.png",
    imageAlt: "Heritage kitchen renovation with grey-blue cabinets and marble island",
  },
  {
    num: "02",
    title: "Custom New Home Design + Build",
    body: "From early design conversations to the final detail, one team carries your project through. We handle architecture, interiors, and construction together, so nothing gets lost between disciplines.",
    image: "/photos/architecture-terracotta.png",
    imageAlt: "Architectural composition with terracotta wall and black marble floor",
  },
  {
    num: "03",
    title: "Kitchen + Bathroom Renovations",
    body: "Precision where it matters most. We design and build kitchens and bathrooms that function exactly as they should and reflect considered, lasting choices in material and form.",
    image: "/photos/kitchen-vaulted.png",
    imageAlt: "Vaulted-ceiling kitchen with green island and exposed beams",
  },
  {
    num: "04",
    title: "You Spaces",
    body: "Some spaces aren't meant to follow a standard. They're shaped by how you want to live, whether that's to focus, disconnect, recharge, or step into something entirely your own. From a quiet office or yoga studio to a private theatre, a personal retreat, or something more unexpected, each space is designed with intention.",
    image: "/photos/lounge-sculptural.jpg",
    imageAlt: "Sculptural lounge with marble stairs, bouclé chairs, and a glass coffee table",
  },
];

export function Services() {
  return (
    <section
      id="work"
      className="border-t border-ink/15 bg-paper py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <h2 className="mb-16 font-display text-4xl leading-[1.1] text-ink md:mb-24 md:text-5xl lg:text-6xl">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((service, i) => {
            const isLeftCol = i % 2 === 0;
            return (
              <article
                key={service.num}
                className={`border-t border-ink/15 py-12 md:py-16 ${
                  isLeftCol ? "md:pr-12" : "md:border-l md:pl-12"
                }`}
              >
                <div className="relative mb-10 aspect-[4/3] w-full overflow-hidden md:mb-12">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-3xl text-terracotta md:text-4xl">
                    {service.num}
                  </span>
                  <h3 className="font-display text-3xl leading-[1.15] text-ink md:text-4xl">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-6 max-w-prose text-base leading-relaxed text-ink/75 md:text-lg">
                  {service.body}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 md:mt-20">
          <Link
            href="#"
            className="group inline-flex text-xs font-medium uppercase tracking-[0.18em] text-ink"
          >
            <span className="border-b border-ink pb-1 transition-colors group-hover:border-terracotta group-hover:text-terracotta">
              Explore Everything We Do
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
