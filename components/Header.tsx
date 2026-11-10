"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";
import { LagosClock } from "./LagosClock";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  // The menu is tied to the path it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* mix-blend-difference keeps the header legible over both black and white sections */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
        <div className="container-x grid grid-cols-2 items-center py-4 md:grid-cols-[1fr_auto_1fr] md:py-5">
          <div className="flex items-center gap-8">
            <Link href="/" aria-label="BREA Interiors home" className="pointer-events-auto block w-[76px] md:w-[92px]">
              <Wordmark showSubline={false} className="h-auto w-full" />
            </Link>
            <LagosClock className="label hidden lg:inline" />
          </div>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="label pointer-events-auto transition-opacity hover:opacity-60">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex justify-end">
            <Link href="/enquire" className="label pointer-events-auto hidden transition-opacity hover:opacity-60 md:inline">
              Book a Consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpenOn(open ? null : pathname)}
              className="label pointer-events-auto md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-ink px-5 pb-8 pt-24 text-paper transition-[opacity,visibility] duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {[{ href: "/", label: "Home" }, ...nav, { href: "/enquire", label: "Book a Consultation" }].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="display border-b border-white/15 py-3 text-[2.6rem]"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex items-end justify-between text-[13px] text-white/60">
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
            @{site.instagram.handle}
          </a>
          <LagosClock />
        </div>
      </div>
    </>
  );
}
