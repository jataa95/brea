import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { services, processSteps, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Studio & Process",
  description: "Meet BREA, a Lagos interior design studio, and see how we take your home from consultation and site inspection to styling and handover.",
};

export default function StudioPage() {
  return (
    <>
      <section className="bg-paper pt-32 md:pt-44">
        <div className="container-x grid gap-8 md:grid-cols-12">
          <span className="label md:col-span-3">Studio</span>
          <h1 className="display text-[3rem] md:col-span-9 md:text-[5.2rem]">
            Interiors that feel <em className="font-serif font-normal">calm,</em> look considered and are built to last.
          </h1>
        </div>
        <div className="container-x mt-16 grid gap-4 md:mt-24 md:grid-cols-12">
          <Reveal className="relative aspect-[4/5] overflow-hidden md:col-span-7 md:aspect-[4/3]">
            <Image src="/media/stills/v2-lounge.jpg" alt="Cream sofa against walnut panelling with circular sconces" fill sizes="(min-width: 768px) 58vw, 100vw" className="img-zoom object-cover" preload />
          </Reveal>
          <Reveal delay={120} className="relative hidden aspect-[3/4] overflow-hidden md:col-span-5 md:block md:aspect-auto">
            <Image src="/media/stills/v1-dining-dark.jpg" alt="Charcoal pillar with framed textured artwork beside the dining table" fill sizes="42vw" className="img-zoom object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="space-y-5 text-[16px] leading-relaxed text-ink/80 md:col-span-5 md:col-start-2">
            <p>
              BREA Interiors is a Lagos-based interior design studio. We create homes with a quiet, layered kind of luxury:
              soft neutrals, natural textures, sculptural lighting and the occasional bold piece of art.
            </p>
            <p>
              Our work covers the entire interior. We plan ceilings and lighting, design bespoke joinery and media walls, select
              furniture and drapery and style every room to completion. Because one studio handles it all, the finished space looks
              exactly as designed.
            </p>
          </div>
          <dl className="grid gap-8 self-end md:col-span-4 md:col-start-8">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-ink pt-4">
                <dd className="display text-[2.6rem]">{s.value}</dd>
                <dt className="mt-1 text-[13px] text-mute">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="process" className="scroll-mt-16 bg-ink text-paper">
        <div className="container-x py-24 md:py-36">
          <div className="grid gap-8 md:grid-cols-12">
            <span className="label text-white/60 md:col-span-3">Process</span>
            <h2 className="display text-[2.6rem] md:col-span-9 md:text-[4rem]">
              Five steps from first conversation to <em className="font-serif font-normal">keys in hand.</em>
            </h2>
          </div>
          <ol className="mt-16 grid gap-px bg-white/15 md:grid-cols-5">
            {processSteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 80} className="flex flex-col bg-ink pb-8 pt-6 md:min-h-[320px] md:px-6 md:first:pl-0">
                <span className="display text-[3.4rem] text-white/25">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-auto pt-10 text-[20px] font-medium tracking-tight">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/60">{step.body}</p>
              </Reveal>
            ))}
          </ol>
          <div className="mt-14 flex justify-end">
            <Link href="/enquire" className="rule-link max-w-sm">
              Begin with a consultation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x py-24 md:py-36">
          <div className="grid gap-8 md:grid-cols-12">
            <span className="label md:col-span-3">Services</span>
            <h2 className="display text-[2.4rem] md:col-span-9 md:text-[3.4rem]">What we design and deliver.</h2>
          </div>
          <ul className="mt-14 border-t border-ink">
            {services.map((s, i) => (
              <li key={s.title} className="grid gap-3 border-b border-line py-8 md:grid-cols-12">
                <span className="text-[12px] tabular-nums text-mute md:col-span-3">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[22px] font-medium tracking-tight md:col-span-4">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-ink/65 md:col-span-5">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
