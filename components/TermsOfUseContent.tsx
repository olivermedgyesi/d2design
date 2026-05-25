const sections = [
  {
    heading: "About This Website",
    body: [
      "This website is owned and operated by D2 Design Build, based in Calgary, Alberta, Canada. The content on this site is provided for general informational purposes about our services.",
    ],
  },
  {
    heading: "Use of This Site",
    body: [
      "You may browse and use this website for personal, non-commercial purposes. You may not copy, reproduce, republish, or distribute any content from this site without our written permission.",
      "You may not use this site for any unlawful purpose or in any way that could damage, disable, or impair the site or its content.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "All content on this website, including text, photography, graphics, and design, is the property of D2 Design Build or its content suppliers and is protected by applicable copyright laws. Project photography remains the property of D2 Design Build unless otherwise credited.",
      "If you would like to reference or share our content, contact us at info@D2design.ca to request permission.",
    ],
  },
  {
    heading: "No Warranties",
    body: [
      "This website is provided on an “as is” basis. D2 Design Build makes no representations or warranties about the accuracy, completeness, or suitability of the content for any purpose. We reserve the right to update or remove content at any time without notice.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, D2 Design Build is not liable for any direct, indirect, or consequential loss arising from your use of this website or reliance on its content.",
    ],
  },
  {
    heading: "Third-Party Links",
    body: [
      "This site may contain links to third-party websites. These links are provided for convenience only. D2 Design Build does not endorse and is not responsible for the content, privacy practices, or availability of any third-party site.",
    ],
  },
  {
    heading: "Governing Law",
    body: [
      "These terms are governed by the laws of the Province of Alberta and the federal laws of Canada applicable therein.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may update these terms from time to time. Continued use of the site after any changes constitutes your acceptance of the revised terms.",
    ],
  },
];

export function TermsOfUseContent() {
  return (
    <>
      <section className="bg-paper pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <div className="mx-auto max-w-2xl">
            <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-6xl lg:text-7xl">
              Terms of Use
            </h1>
            <p className="mt-8 text-base leading-[1.75] text-ink/85 md:text-lg">
              By accessing and using this website, you agree to the following
              terms. If you do not agree, please do not use the site.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper pb-24 md:pb-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <div className="mx-auto max-w-2xl">
            {sections.map((section) => (
              <div
                key={section.heading}
                className="border-t border-ink/15 py-12 md:py-16"
              >
                <h2 className="font-display text-2xl leading-[1.15] text-ink md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-6 space-y-5">
                  {section.body.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-base leading-[1.75] text-ink/85 md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="border-t border-ink/15 py-12 md:py-16">
              <h2 className="font-display text-2xl leading-[1.15] text-ink md:text-3xl">
                Contact
              </h2>
              <div className="mt-6 space-y-5">
                <p className="text-base leading-[1.75] text-ink/85 md:text-lg">
                  For questions about these terms, contact us at:
                </p>
                <div className="text-base leading-[1.75] text-ink/85 md:text-lg">
                  <a
                    href="mailto:info@D2design.ca"
                    className="underline decoration-ink/30 underline-offset-4 transition-colors hover:text-terracotta hover:decoration-terracotta"
                  >
                    info@D2design.ca
                  </a>
                  <p className="mt-2">D2 Design Build</p>
                  <p>Calgary, Alberta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
