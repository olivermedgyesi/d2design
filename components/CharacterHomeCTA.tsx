import Image from "next/image";
import Link from "next/link";

export function CharacterHomeCTA() {
  return (
    <section className="relative overflow-hidden text-paper">
      <Image
        src="/photos/cta-discovery-call.jpg"
        alt="Designer reviewing fabric and finish samples over architectural blueprints"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl leading-[1.05] text-paper md:text-5xl lg:text-6xl">
              Start With a Free 15-Minute Call
            </h2>
            <p className="mt-8 max-w-xl text-base leading-[1.75] text-paper/80 md:text-lg">
              Tell us about the property and where you want to take it. If
              it&apos;s the right fit, we&apos;ll put together a detailed
              proposal.
            </p>
            <Link
              href="/contact"
              className="mt-12 inline-flex items-center bg-paper px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-paper/85 md:text-sm"
            >
              Book Your Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
