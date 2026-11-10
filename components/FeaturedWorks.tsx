"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/projects";

export function FeaturedWorks() {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section className="container-x py-24 md:py-36" aria-labelledby="featured-title">
      <div className="flex items-baseline justify-between">
        <h2 id="featured-title" className="label">
          Featured Works
        </h2>
        <Link href="/projects" className="label transition-opacity hover:opacity-60">
          All projects →
        </Link>
      </div>

      {/* Desktop: hover list with a centred image, as in an editorial index */}
      <div className="relative mt-16 hidden md:block">
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 aspect-[3/4] w-[min(30vw,420px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-bone">
          {projects.map((p, i) => (
            <Image
              key={p.slug}
              src={p.cover.src}
              alt={p.cover.alt}
              fill
              sizes="420px"
              className={`object-cover transition-[opacity,transform] duration-700 ease-out ${
                i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}
        </div>
        <ul className="relative py-24">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Link
                href={`/projects#${p.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`grid grid-cols-[60px_1fr_auto] items-center border-t border-line py-4 text-[15px] transition-colors duration-300 ${
                  i === active ? "border-ink text-ink" : "text-ink/30 hover:text-ink/60"
                }`}
              >
                <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span>{p.title}</span>
                <span>{p.type}</span>
              </Link>
            </li>
          ))}
          <li className="border-t border-line" aria-hidden />
        </ul>
        <p className="sr-only" aria-live="polite">
          {current.title}
        </p>
      </div>

      {/* Mobile: stacked cards */}
      <ul className="mt-10 grid gap-10 md:hidden">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <Link href={`/projects#${p.slug}`} className="block">
              <div className="relative aspect-[4/5] overflow-hidden bg-bone">
                <Image src={p.cover.src} alt={p.cover.alt} fill sizes="100vw" className="object-cover" />
              </div>
              <div className="mt-3 grid grid-cols-[40px_1fr_auto] text-[14px]">
                <span className="tabular-nums text-mute">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-medium">{p.title}</span>
                <span className="text-mute">{p.type}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
