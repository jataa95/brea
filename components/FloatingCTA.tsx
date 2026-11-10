"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function FloatingCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/enquire") return null;

  return (
    <Link
      href="/enquire"
      className={`fixed bottom-4 right-4 z-30 flex items-center gap-3 rounded-full bg-ink py-3 pl-5 pr-3 text-[13px] font-medium text-paper shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/15 transition-all duration-500 hover:bg-ink-2 md:bottom-6 md:right-6 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      Book a consultation
      <span className="grid h-7 w-7 place-items-center rounded-full bg-paper text-ink">→</span>
    </Link>
  );
}
