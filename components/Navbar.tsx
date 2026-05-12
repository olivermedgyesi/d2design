import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-14">
        <Link
          href="/"
          aria-label="D2 Design Build — home"
          className="flex items-center"
        >
          <Image
            src="/brand/logo-secondary-white.png"
            alt="D2 Design Build"
            width={600}
            height={180}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:gap-10 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white transition-colors hover:text-white/70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center border border-white/70 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-ink md:text-sm"
        >
          Book a Call
        </Link>
      </div>
    </header>
  );
}
