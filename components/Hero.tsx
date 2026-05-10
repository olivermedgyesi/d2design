import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <Image
        src="/photos/hero-kitchen.jpg"
        alt="A modern kitchen interior with warm wood cabinetry and dark stone floors"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center md:px-12">
        <h1 className="max-w-[20ch] text-balance font-display text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
          Spaces Designed With Intention and Built to Last.
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
          Built on one idea: that designer-quality spaces shouldn&apos;t be
          reserved for a select few. From character home renovations to
          custom new builds, we bring design and construction together under
          one roof.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          <Link
            href="#contact"
            className="inline-flex items-center bg-white px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-white/85"
          >
            Book Your Discovery Call
          </Link>
          <Link
            href="#work"
            className="group inline-flex items-center text-xs font-medium uppercase tracking-[0.18em] text-white"
          >
            <span className="border-b border-white pb-1 transition-colors group-hover:border-white/70 group-hover:text-white/70">
              Explore Everything We Do
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
