import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { LagosClock } from "./LagosClock";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-x pt-20 md:pt-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow text-white/50">Start your project</p>
            <h2 className="display mt-5 text-[2.6rem] md:text-[4.2rem]">
              Ready for a home that <em className="font-serif font-normal">feels</em> like you?
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6 md:col-span-5 md:col-start-8">
            <p className="max-w-md text-[15px] leading-relaxed text-white/70">
              Book a consultation or a site inspection. We will walk the space with you, listen to how you live and
              show you what it could become.
            </p>
            <Link href="/enquire" className="rule-link text-[15px]">
              Book a consultation <span aria-hidden>→</span>
            </Link>
            <a href={site.instagram.dm} target="_blank" rel="noopener noreferrer" className="rule-link text-[15px]">
              Send us a DM on Instagram <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-white/15 pt-8 text-[13px] md:grid-cols-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-white/40">Studio</span>
            <span>
              {site.city}, {site.country}
            </span>
            <LagosClock className="text-white/60" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-white/40">Contact</span>
            {site.phone && <a href={`tel:${site.phone}`}>{site.phone}</a>}
            {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
            <a href={site.instagram.dm} target="_blank" rel="noopener noreferrer">
              Instagram DM
            </a>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-white/40">Explore</span>
            <Link href="/">Home</Link>
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
            <Link href="/enquire">Enquire</Link>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-white/40">Follow</span>
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
              Instagram ↗
            </a>
            <span className="text-white/60">{site.instagram.followers}+ followers</span>
          </div>
        </div>

        <div className="pb-6 pt-16 md:pt-24">
          <Wordmark className="h-auto w-full text-paper" />
          <div className="mt-6 flex flex-col justify-between gap-2 text-[12px] text-white/40 md:flex-row">
            <span>All rights reserved. {site.name}.</span>
            <span>Every project shown is 100% our own work.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
