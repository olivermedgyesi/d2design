const sections = [
  {
    heading: "What Information We Collect",
    body: [
      "We collect personal information when you fill out our discovery call questionnaire or contact form. This includes your name, email address, phone number, mailing address, and any project details you choose to share.",
      "We also collect standard website analytics data (pages visited, time on site, device type) through our website platform. This data is anonymous and not linked to your identity.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use the information you submit to respond to your inquiry, schedule and prepare for your discovery call, and follow up regarding your project.",
      "If you opt in to our newsletter, we use your email to send occasional updates about D2 projects and upcoming properties. We do not use your information for any other purpose without your consent.",
    ],
  },
  {
    heading: "How Long We Keep It",
    body: [
      "We retain contact form submissions and inquiry records for up to 24 months from the date of submission. If you would like your information removed sooner, contact us at the email address below and we will delete it within 30 days.",
    ],
  },
  {
    heading: "Do We Share Your Information?",
    body: [
      "We do not sell, rent, or trade your personal information. We may share it with third-party service providers (such as our CRM or email platform) solely for the purpose of managing your inquiry. These providers are contractually required to handle your data securely and only as directed by us.",
    ],
  },
  {
    heading: "Your Rights",
    body: [
      "You have the right to request access to the personal information we hold about you, to request corrections to inaccurate information, and to request that we delete your information. To make any of these requests, contact us at the email address below.",
    ],
  },
];

export function PrivacyPolicyContent() {
  return (
    <>
      <section className="bg-paper pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <div className="mx-auto max-w-2xl">
            <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-6xl lg:text-7xl">
              Privacy Policy
            </h1>
            <p className="mt-8 text-base leading-[1.75] text-ink/85 md:text-lg">
              This policy explains how D2 Design Build (&ldquo;D2,&rdquo;
              &ldquo;we,&rdquo; &ldquo;our&rdquo;) collects, uses, and protects
              personal information submitted through this website. We comply
              with Alberta&apos;s Personal Information Protection Act (PIPA)
              and Canada&apos;s PIPEDA.
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
                  For questions about this policy or to make a privacy request,
                  contact us at:
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
