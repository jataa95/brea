import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Reel } from "@/components/Reel";
import { FeaturedWorks } from "@/components/FeaturedWorks";
import { Wordmark } from "@/components/Wordmark";
import { EnquiryForm } from "@/components/EnquiryForm";
import { projects, featuredStills } from "@/lib/projects";
import { services, processSteps, stats } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-paper">
        {/* Mobile: full-bleed portrait reel */}
        <div className="absolute inset-0 md:hidden">
          <Reel src="/media/video/reel-lounge.mp4" poster={featuredStills.hero.src} label="Walkthrough of a BREA living room" eager />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/90" />
        </div>

        <div className="container-x relative grid min-h-[100svh] grid-cols-1 pb-8 pt-28 md:grid-cols-12 md:gap-8 md:pb-10 md:pt-32">
          <div className="flex flex-col justify-end md:col-span-7 md:justify-between">
            <p className="eyebrow hidden text-white/60 md:block">Interior Design Studio · Lagos, Nigeria</p>
            <div>
              <p className="eyebrow mb-5 text-white/70 md:hidden">Interior Design Studio · Lagos</p>
              <h1 className="display text-[3.4rem] sm:text-[4.5rem] md:text-[5.4rem] lg:text-[7.2rem]">
                Creating <br className="hidden md:block" />
                <em className="font-serif font-normal tracking-[-0.01em]">beautiful</em> spaces.
              </h1>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/75 md:text-[17px]">
                Calm, considered and beautifully lit homes, designed and delivered by our Lagos studio from bare shell to the final
                cushion.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/enquire"
                  className="group inline-flex items-center justify-between gap-6 rounded-full bg-paper py-3.5 pl-6 pr-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-white"
                >
                  Book a consultation
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-paper transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-medium transition-colors hover:border-white"
                >
                  View our work
                </Link>
              </div>
            </div>
            <dl className="mt-12 hidden grid-cols-3 gap-6 border-t border-white/15 pt-6 md:grid">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="display text-[2rem] lg:text-[2.6rem]">{s.value}</dd>
                  <dd className="mt-1 text-[12px] text-white/55">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Desktop: portrait reel + still, framed like the studio's own reels */}
          <div className="relative hidden md:col-span-5 md:grid md:grid-cols-5 md:gap-4">
            <div className="relative col-span-3 self-end overflow-hidden bg-ink-2" style={{ aspectRatio: "9/16" }}>
              <Reel src="/media/video/reel-lounge.mp4" poster={featuredStills.hero.src} label="Walkthrough of a BREA living room" eager />
            </div>
            <div className="col-span-2 flex flex-col justify-between gap-4">
              <div className="relative overflow-hidden bg-ink-2" style={{ aspectRatio: "9/16" }}>
                <Image src="/media/stills/v2-sofa-art.jpg" alt="Cream sofa beneath a large framed abstract artwork" fill sizes="20vw" className="object-cover" preload />
              </div>
              <p className="text-[12px] leading-relaxed text-white/55">
                The Cove Residence: cove lighting, walnut and stone in a layered Lagos living space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-b border-line bg-paper py-5" aria-hidden>
        <div className="marquee flex w-max gap-12 whitespace-nowrap text-[13px] uppercase tracking-[0.22em] text-mute">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Full interior design", "Shell to finish", "Ceiling & lighting", "Bespoke joinery", "Furniture & styling", "Renovations", "Lagos, Nigeria"].map(
              (t) => (
                <span key={`${k}-${t}`} className="flex items-center gap-12">
                  {t} <span>✦</span>
                </span>
              ),
            ),
          )}
        </div>
      </div>

      {/* STUDIO */}
      <section className="bg-paper">
        <div className="container-x grid gap-10 py-24 md:grid-cols-2 md:gap-0 md:py-0">
          <div className="flex flex-col justify-between md:min-h-[90vh] md:py-10 md:pr-16">
            <div className="flex justify-between">
              <span className="label">Our Studio</span>
              <span className="label">BREA</span>
            </div>
            <Reveal as="h2" className="display my-10 text-center text-[2.2rem] md:text-[3rem] lg:text-[3.6rem]">
              Every beautiful room begins with understanding <em className="font-serif font-normal">how you live.</em>
            </Reveal>
            <span />
          </div>
          <Reveal className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:min-h-[90vh]">
            <Image src={featuredStills.studio.src} alt={featuredStills.studio.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="img-zoom object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="container-x grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <Reveal className="relative aspect-[3/4] overflow-hidden md:col-span-4">
            <Image src={featuredStills.studioAlt.src} alt={featuredStills.studioAlt.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="img-zoom object-cover" />
          </Reveal>
          <div className="flex flex-col justify-end md:col-span-4 md:col-start-8">
            <Reveal className="space-y-5 text-[15px] leading-relaxed text-white/80">
              <p>
                BREA is an interior design studio based in Lagos, Nigeria. We design and deliver complete interiors for homes and
                apartments, from the ceiling and lighting plan to bespoke joinery, furniture, drapery and art.
              </p>
              <p>
                We are hands-on from consultation to handover. Every project you see from us is 100% our own, designed by our
                studio and built by our team on site.
              </p>
            </Reveal>
            <Link href="/studio" className="rule-link mt-10">
              About the studio <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
        <div className="container-x overflow-hidden pb-4">
          <Wordmark showSubline={false} className="h-auto w-full translate-y-[18%] text-paper" />
        </div>
      </section>

      <FeaturedWorks />

      {/* TRANSFORMATION */}
      <section className="bg-bone">
        <div className="container-x grid gap-12 py-24 md:grid-cols-12 md:py-36">
          <div className="md:col-span-5">
            <span className="label">The Transformation</span>
            <Reveal as="h2" className="display mt-6 text-[2.4rem] md:text-[3.4rem]">
              From bare shell to a home you <em className="font-serif font-normal">never</em> want to leave.
            </Reveal>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/70">
              Exposed wiring, unfinished walls and debris. We take it from there: ceilings, lighting, flooring, joinery,
              furniture and styling, all managed by one studio, so you only deal with one team.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                { img: featuredStills.before, tag: "Before" },
                { img: featuredStills.after, tag: "After" },
              ].map(({ img, tag }) => (
                <figure key={tag} className="relative aspect-[3/4] overflow-hidden bg-paper">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 20vw, 50vw" className="object-cover" />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-paper px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]">
                    {tag}
                  </figcaption>
                </figure>
              ))}
            </div>
            <Link href="/enquire" className="rule-link mt-10">
              Book a site inspection <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="relative mx-auto aspect-[9/16] max-h-[88vh] overflow-hidden bg-ink">
              <Reel src="/media/video/reel-transformation.mp4" poster={featuredStills.before.src} label="Time-lapse of a shell transformed into a finished home" />
              <span className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-paper backdrop-blur">
                Shell to Home · Lagos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-paper">
        <div className="container-x py-24 md:py-36">
          <div className="grid gap-8 md:grid-cols-12">
            <span className="label md:col-span-3">What We Do</span>
            <Reveal as="h2" className="display text-[2.4rem] md:col-span-9 md:text-[3.4rem]">
              One studio for the entire interior, so nothing gets lost between design and delivery.
            </Reveal>
          </div>
          <ol className="mt-16 grid border-t border-ink md:grid-cols-3">
            {services.map((s, i) => (
              <li key={s.title} className="group border-b border-line py-8 md:border-r md:px-8 md:py-12 md:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(3n+1)]:pl-0">
                <span className="text-[12px] tabular-nums text-mute">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-[22px] font-medium tracking-tight">{s.title}</h3>
                <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-ink/65">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-ink text-paper">
        <div className="container-x py-24 md:py-36">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="label text-white/60">Our Approach</span>
              <Reveal as="h2" className="display mt-6 text-[2.4rem] md:text-[3.4rem]">
                A clear process, <em className="font-serif font-normal">start to finish.</em>
              </Reveal>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/65">
                You always know what happens next. It starts with a conversation and a visit to your space.
              </p>
              <Link href="/studio#process" className="rule-link mt-10 max-w-sm">
                See how we work <span aria-hidden>→</span>
              </Link>
            </div>
            <ol className="md:col-span-6 md:col-start-7">
              {processSteps.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 60} className="grid grid-cols-[56px_1fr] border-t border-white/15 py-7">
                  <span className="text-[13px] tabular-nums text-white/45">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[20px] font-medium tracking-tight">{step.title}</h3>
                    <p className="mt-2 max-w-md text-[14px] leading-relaxed text-white/60">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* REELS / SOCIAL PROOF */}
      <section className="bg-paper">
        <div className="container-x py-24 md:py-36">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="label">On Instagram</span>
              <h2 className="display mt-6 max-w-2xl text-[2.4rem] md:text-[3.4rem]">
                Join {site.instagram.followers}+ people following our work.
              </h2>
            </div>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 self-start rounded-full border border-ink px-6 py-3 text-[14px] font-medium transition-colors hover:bg-ink hover:text-paper md:self-auto"
            >
              @{site.instagram.handle} <span aria-hidden>↗</span>
            </a>
          </div>
          <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
            {projects.map((p) => (
              <a
                key={p.slug}
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[9/16] w-[75vw] shrink-0 snap-center overflow-hidden bg-ink md:w-auto"
              >
                <Reel src={p.video} poster={p.cover.src} label={`${p.title} video walkthrough`} />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-4 pt-16 text-paper">
                  <div>
                    <p className="text-[15px] font-medium">{p.title}</p>
                    <p className="text-[12px] text-white/70">{p.type}</p>
                  </div>
                  <span className="text-[12px] opacity-80 transition-opacity group-hover:opacity-100">Watch ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section id="enquire" className="border-t border-line bg-bone">
        <div className="container-x grid gap-14 py-24 md:grid-cols-12 md:py-36">
          <div className="md:col-span-5">
            <span className="label">Project Enquiry</span>
            <h2 className="display mt-6 text-[2.4rem] md:text-[3.4rem]">
              Tell us about your <em className="font-serif font-normal">space.</em>
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink/70">
              Share a few details and we will get back to you to arrange a consultation or site inspection.
            </p>
            <div className="relative mt-10 hidden aspect-[4/5] max-w-sm overflow-hidden md:block">
              <Image src="/media/stills/v2-tv-wall.jpg" alt="Bespoke media wall with lit display shelving" fill sizes="384px" className="object-cover" />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
