import Link from "next/link";

export function WhatWeDoCTA() {
  return (
    <section className="bg-paper pt-4 pb-24 md:pt-6 md:pb-32">
      <div className="mx-auto flex max-w-7xl justify-center px-6 md:px-10 lg:px-14">
        <Link
          href="/contact"
          className="inline-flex items-center border border-ink px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-paper md:text-sm"
        >
          Book Your Discovery Call
        </Link>
      </div>
    </section>
  );
}
