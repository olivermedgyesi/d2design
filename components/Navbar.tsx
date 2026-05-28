"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/about/team" },
  { label: "Process", href: "/process" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
];

type NavbarProps = {
  variant?: "light" | "dark";
};

export function Navbar({ variant = "light" }: NavbarProps) {
  const isDark = variant === "dark";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const logoSrc = isDark
    ? "/brand/logo-secondary.png"
    : "/brand/logo-secondary-white.png";

  const linkClass = isDark
    ? "text-sm font-medium text-ink transition-colors hover:text-ink/60"
    : "text-sm font-medium text-white transition-colors hover:text-white/70";

  const ctaClass = isDark
    ? "inline-flex items-center border border-ink/70 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-paper md:text-sm"
    : "inline-flex items-center border border-white/70 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-ink md:text-sm";

  const hamburgerColor = isDark ? "bg-ink" : "bg-white";

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-14">
        <Link
          href="/"
          aria-label="D2 Design Build — home"
          className="flex items-center"
        >
          <Image
            src={logoSrc}
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
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className={`${ctaClass} hidden md:inline-flex`}>
          Book a Call
        </Link>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span className={`block h-0.5 w-6 ${hamburgerColor}`} />
          <span className={`block h-0.5 w-6 ${hamburgerColor}`} />
          <span className={`block h-0.5 w-6 ${hamburgerColor}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-ink text-paper md:hidden">
          <div className="flex h-20 items-center justify-between px-6">
            <Link
              href="/"
              aria-label="D2 Design Build — home"
              onClick={() => setMenuOpen(false)}
              className="flex items-center"
            >
              <Image
                src="/brand/logo-secondary-white.png"
                alt="D2 Design Build"
                width={600}
                height={180}
                className="h-9 w-auto"
              />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center"
            >
              <span className="relative block h-6 w-6">
                <span className="absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rotate-45 bg-paper" />
                <span className="absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 -rotate-45 bg-paper" />
              </span>
            </button>
          </div>

          <nav
            aria-label="Mobile primary"
            className="flex flex-1 flex-col justify-center gap-8 px-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl leading-none text-paper transition-colors hover:text-terracotta"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-paper/15 px-8 py-8">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center border border-paper/70 px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
