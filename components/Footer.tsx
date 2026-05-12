import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Collection", href: "#collection" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Image
              src="/brand/logo-secondary-white.png"
              alt="D2 Design Build"
              width={600}
              height={180}
              className="h-10 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/70">
              A Calgary design-build firm by Dracek &amp; Dhaliwal. Custom new
              builds, character home renovations, and precision interiors.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-paper/60">
              Pages
            </p>
            <ul className="space-y-2 text-sm text-paper/85">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-terracotta"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-paper/60">
              Get In Touch
            </p>
            <ul className="space-y-2 text-sm text-paper/85">
              <li>
                <a
                  href="tel:5878797627"
                  className="transition-colors hover:text-terracotta"
                >
                  587 879 7627
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@d2designbuild.ca"
                  className="transition-colors hover:text-terracotta"
                >
                  hello@d2designbuild.ca
                </a>
              </li>
              <li className="text-paper/60">Calgary, Alberta</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/10 pt-8 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} D2 Design Build. All rights reserved.</p>
          <p>By Dracek &amp; Dhaliwal</p>
        </div>
      </div>
    </footer>
  );
}
