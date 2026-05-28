const channels = [
  { label: "Email", value: "info@D2design.ca", href: "mailto:info@D2design.ca" },
  { label: "Phone", value: "—", href: null },
  { label: "Address", value: "Calgary, Alberta", href: null },
  { label: "Instagram", value: "@d2designbuild", href: "#" },
  { label: "Facebook", value: "D2 Design Build", href: "#" },
];

export function ContactInfo() {
  return (
    <section className="bg-paper pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-6xl lg:text-7xl">
            Contact Us
          </h1>
          <p className="mt-8 text-base leading-[1.75] text-ink/85 md:text-lg">
            Every project begins with a conversation. Reach out below, or
            book a free 15-minute discovery call. Raj or Christian will
            personally review your submission and follow up within 24 hours.
          </p>

          <dl className="mt-14 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-ink/15 pt-10 sm:grid-cols-2 md:mt-16 md:pt-12">
            {channels.map((channel) => (
              <div key={channel.label} className="flex flex-col">
                <dt className="text-xs font-medium uppercase tracking-[0.2em] text-ink/60">
                  {channel.label}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-ink md:text-lg">
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="underline decoration-ink/30 underline-offset-4 transition-colors hover:text-terracotta hover:decoration-terracotta"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    channel.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
