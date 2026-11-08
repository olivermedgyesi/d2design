"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories, projects, type Category } from "@/lib/projects";

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
            <p className="font-display text-3xl text-ink md:text-4xl">
              Projects Coming Soon
            </p>
          </div>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-20">
            {visible.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden ring-1 ring-evergreen">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-ink/75 md:text-base">
                    {project.description}
                  </p>
                  <div className="mt-6">
                    <span className="inline-flex text-xs font-medium uppercase tracking-[0.18em] text-ink">
                      <span className="border-b border-ink pb-1 transition-colors group-hover:border-terracotta group-hover:text-terracotta">
                        View Project
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
