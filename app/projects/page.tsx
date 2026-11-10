import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Reel } from "@/components/Reel";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected interiors by BREA, a Lagos interior design studio. Living rooms, dining spaces and complete shell-to-home transformations.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-paper md:pb-24 md:pt-44">
        <div className="container-x grid gap-8 md:grid-cols-12">
          <span className="label text-white/60 md:col-span-3">Projects</span>
          <h1 className="display text-[3rem] md:col-span-9 md:text-[5.6rem]">
            Selected <em className="font-serif font-normal">works.</em>
          </h1>
          <p className="max-w-md text-[15px] leading-relaxed text-white/70 md:col-span-5 md:col-start-4">
            Every project on this page was designed and delivered by BREA. No stock imagery, no borrowed work.
          </p>
        </div>
        <nav className="container-x mt-16 border-t border-white/15" aria-label="Projects">
          {projects.map((p, i) => (
            <a key={p.slug} href={`#${p.slug}`} className="grid grid-cols-[60px_1fr_auto] border-b border-white/15 py-4 text-[15px] transition-opacity hover:opacity-60">
              <span className="tabular-nums text-white/50">{String(i + 1).padStart(2, "0")}</span>
              <span>{p.title}</span>
              <span className="text-white/60">{p.type}</span>
            </a>
          ))}
        </nav>
      </section>

      {projects.map((p, i) => (
        <article key={p.slug} id={p.slug} className={`scroll-mt-20 ${i % 2 ? "bg-bone" : "bg-paper"}`}>
          <div className="container-x py-20 md:py-32">
            <header className="grid gap-6 md:grid-cols-12">
              <span className="text-[13px] tabular-nums text-mute md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <div className="md:col-span-6">
                <h2 className="display text-[2.4rem] md:text-[3.8rem]">{p.title}</h2>
                <p className="mt-2 text-[14px] text-mute">
                  {p.type} · {p.location}
                </p>
              </div>
              <p className="text-[15px] leading-relaxed text-ink/75 md:col-span-4 md:col-start-9">{p.summary}</p>
            </header>

            <div className="mt-12 grid gap-4 md:grid-cols-12">
              <div className="relative aspect-[9/16] overflow-hidden bg-ink md:col-span-4">
                <Reel src={p.video} poster={p.cover.src} label={`${p.title} video walkthrough`} />
              </div>
              <div className="grid grid-cols-2 gap-4 md:col-span-8 md:grid-cols-3">
                {[p.cover, ...p.gallery].slice(0, 6).map((shot, k) => (
                  <Reveal key={shot.src} delay={k * 50} className="relative aspect-[3/4] overflow-hidden bg-bone">
                    <Image src={shot.src} alt={shot.alt} fill sizes="(min-width: 768px) 22vw, 50vw" className="img-zoom object-cover" />
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-end">
              <Link href="/enquire" className="rule-link max-w-sm">
                Start a project like this <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
