import Image from "next/image";
import Link from "next/link";

export function Collection() {
  return (
    <section id="collection" className="bg-evergreen text-paper">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:min-h-[680px]">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[480px]">
          <Image
            src="/photos/lounge-walnut.jpg"
            alt="A double-height living space with walnut paneling, marble accents, and a sculptural pendant — from D2 Design Build's 2026 Collection"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-24 lg:px-20">
          <h2 className="font-display text-4xl leading-[1.1] text-paper md:text-5xl lg:text-6xl">
            The 2026 D2 Collection
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/80 md:text-lg">
            Each year, D2 acquires a small number of character properties in
            Calgary. We renovate them under full creative control, no client
            brief, no external constraints. The work is taken to completion,
            submitted to design publications and award bodies, and made
            available to buyers looking for a home with a genuine point of
            view.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/80 md:text-lg">
            The 2026 collection is underway.
          </p>

          <div className="mt-12">
            <Link
              href="#"
              className="group inline-flex text-xs font-medium uppercase tracking-[0.18em] text-paper"
            >
              <span className="border-b border-paper pb-1 transition-colors group-hover:border-terracotta group-hover:text-terracotta">
                Find Out More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
