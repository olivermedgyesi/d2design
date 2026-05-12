const testimonials = [
  { quote: "[Client to provide]", attribution: "Client name, project type" },
  { quote: "[Client to provide]", attribution: "Client name, project type" },
  { quote: "[Client to provide]", attribution: "Client name, project type" },
];

export function Testimonials() {
  return (
    <section className="border-t border-ink/15 bg-paper py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <h2 className="mb-16 font-display text-4xl leading-[1.1] text-ink md:mb-24 md:text-5xl lg:text-6xl">
          From Our Clients
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-x-12 md:gap-y-16">
          {testimonials.map((t, i) => (
            <article key={i}>
              <p
                aria-hidden="true"
                className="font-display text-6xl leading-none text-terracotta"
              >
                &ldquo;
              </p>
              <blockquote className="mt-4 font-display text-xl leading-relaxed text-ink md:text-2xl">
                {t.quote}
              </blockquote>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
                — {t.attribution}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
