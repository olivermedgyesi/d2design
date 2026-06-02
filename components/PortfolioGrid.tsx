"use client";

import Image from "next/image";
import { useState } from "react";

const categories = [
  "All",
  "Character Home Renovations",
  "Designer Projects",
  "Complete Renovations",
  "Custom Builds",
  "Kitchens + Bathrooms",
  "You Spaces",
] as const;

type Category = (typeof categories)[number];

type Project = {
  name: string;
  location: string;
  category: Exclude<Category, "All">;
  // Optional kicker label shown on the card; defaults to the filter category.
  label?: string;
  description: string;
  image: string;
  imageAlt: string;
};

const placeholderProject = {
  name: "Project Name TBA",
  location: "Calgary, Alberta",
  description:
    "One to two sentence project description goes here — to be provided by Christian alongside final photography.",
  image: "/photos/kitchen-heritage.png",
  imageAlt: "Project photography placeholder",
};

// Custom Design Concepts — concept studies shown under the Designer Projects
// filter. These are design concepts, not built projects.
const customDesignConcepts: Project[] = [
  {
    name: "Layered Primary Bedroom",
    location: "Concept Study",
    category: "Designer Projects",
    label: "Custom Design Concepts",
    description:
      "A warm primary suite built on natural materials. Walnut casegoods, a jute rug, and a woven gallery wall, grounded by soft terracotta accents.",
    image: "/photos/concept-bedroom.png",
    imageAlt:
      "Concept rendering of a warm bedroom with a walnut wardrobe, woven storage bench, framed gallery wall, and terracotta headboard.",
  },
  {
    name: "Spa-Inspired Ensuite",
    location: "Concept Study",
    category: "Designer Projects",
    label: "Custom Design Concepts",
    description:
      "A calm ensuite pairing vertical wood slats and marble with dual vessel basins, a black-framed glass shower, and fine speckled floor tile.",
    image: "/photos/concept-bathroom.png",
    imageAlt:
      "Concept rendering of an ensuite bathroom with wood-slat walls, a marble surround, dual vessel sinks, and a black-framed walk-in shower.",
  },
  {
    name: "Garden Lounge & Bar",
    location: "Concept Study",
    category: "Designer Projects",
    label: "Custom Design Concepts",
    description:
      "A sculptural lounge opening to the garden, with a curved sofa, a stone-topped bar, and floor-to-ceiling glazing that draws the planting indoors.",
    image: "/photos/concept-bar.png",
    imageAlt:
      "Concept rendering of a lounge with a curved green sofa, a stone bar counter, brass pendant, and full-height windows onto a garden.",
  },
  {
    name: "Arched Sitting Room",
    location: "Concept Study",
    category: "Designer Projects",
    label: "Custom Design Concepts",
    description:
      "A quiet sitting room framed by a plaster archway, finished in deep evergreen with panelled walls and a marble fireplace.",
    image: "/photos/concept-arch.png",
    imageAlt:
      "Concept rendering looking through a green archway into a deep-green panelled sitting room with a marble fireplace.",
  },
  {
    name: "Double-Height Living Room",
    location: "Concept Study",
    category: "Designer Projects",
    label: "Custom Design Concepts",
    description:
      "A double-height living room anchored by built-in shelving and an oversized abstract canvas, kept light with oak floors and a neutral palette.",
    image: "/photos/concept-living-room.png",
    imageAlt:
      "Concept rendering of a double-height living room with built-in bookshelves, a large abstract painting, and a fireplace.",
  },
  {
    name: "Open-Plan Library",
    location: "Concept Study",
    category: "Designer Projects",
    label: "Custom Design Concepts",
    description:
      "An open-plan living library wrapped in full-height oak shelving, lit warmly and opening through to a sunlit garden beyond.",
    image: "/photos/concept-library.png",
    imageAlt:
      "Concept rendering of an open-plan room with floor-to-ceiling oak bookshelves, a low sofa, and a doorway through to a garden.",
  },
  {
    name: "Mid-Century Kitchen",
    location: "Concept Study",
    category: "Designer Projects",
    label: "Custom Design Concepts",
    description:
      "A mid-century kitchen in walnut and terrazzo, with a hand-glazed geometric tile backsplash and full-height glazing onto the garden.",
    image: "/photos/concept-kitchen.png",
    imageAlt:
      "Concept rendering of a walnut kitchen with a terrazzo island, geometric tile backsplash, sculptural wood pendant, and garden windows.",
  },
];

const projects: Project[] = [
  { ...placeholderProject, category: "Character Home Renovations" },
  ...customDesignConcepts,
  { ...placeholderProject, category: "Complete Renovations" },
  { ...placeholderProject, category: "Custom Builds" },
  { ...placeholderProject, category: "Kitchens + Bathrooms" },
  { ...placeholderProject, category: "You Spaces" },
];

export function PortfolioGrid() {
  const [active, setActive] = useState<Category>("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <p className="text-base leading-relaxed text-ink/80 md:text-lg">
          D2 is a pre-launch firm and this portfolio grows as projects reach
          handover. Christian and Raj are actively compiling documentation
          from prior work. Check back as new projects are added.
        </p>

        <nav
          aria-label="Filter projects by type"
          className="mt-12 grid grid-cols-2 border-y border-ink/15 sm:grid-cols-4 lg:grid-cols-7 md:mt-16"
        >
          {categories.map((cat, i) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={[
                  "flex items-center justify-center px-3 py-4 text-center text-xs font-medium uppercase tracking-[0.15em] transition-colors md:py-5 md:text-sm",
                  i > 0 ? "border-t border-ink/15 sm:border-t-0 sm:border-l" : "",
                  i > 0 ? "sm:border-l-ink/15" : "",
                  isActive
                    ? "bg-ink text-paper"
                    : "text-ink/60 hover:bg-ink/[0.04] hover:text-ink",
                ].join(" ")}
              >
                {cat}
              </button>
            );
          })}
        </nav>

        {visible.length === 0 ? (
          <div className="py-24 text-center md:py-32">
            <p className="text-base leading-relaxed text-ink/60 md:text-lg">
              No projects in this category yet. Check back soon.
            </p>
          </div>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-20">
            {visible.map((project, i) => (
              <article key={i} className="flex flex-col">
                <div className="relative aspect-[4/5] w-full overflow-hidden ring-1 ring-evergreen">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col pt-6 md:pt-8">
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-ink/60">
                    {project.label ?? project.category}
                  </div>
                  <h2 className="mt-3 font-display text-2xl leading-[1.15] text-ink md:text-3xl">
                    {project.name}
                  </h2>
                  <div className="mt-2 text-sm text-ink/60 md:text-base">
                    {project.location}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink/75 md:text-base">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
