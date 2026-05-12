import Link from "next/link";

export function CTA() {
  return (
    <section id="contact" className="bg-paper py-24 md:py-40 lg:py-48">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-5xl leading-[1.05] text-ink md:text-6xl lg:text-7xl">
          Ready to Start?
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-ink/75 md:text-xl">
          Every project begins with a conversation. Tell us what you&apos;re
          thinking, and we&apos;ll let you know what&apos;s possible.
        </p>
        <div className="mt-12 flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center bg-ink px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-evergreen"
          >
            Book Your Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
}
