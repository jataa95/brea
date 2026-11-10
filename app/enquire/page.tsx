import type { Metadata } from "next";
import Image from "next/image";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: "Book an interior design consultation or site inspection with BREA Interiors in Lagos, Nigeria.",
};

export default function EnquirePage() {
  return (
    <section className="bg-ink text-paper">
      <div className="container-x grid min-h-screen gap-14 pb-20 pt-32 md:grid-cols-12 md:pt-44">
        <div className="flex flex-col md:col-span-5">
          <span className="label text-white/60">Project Enquiry</span>
          <h1 className="display mt-6 text-[3rem] md:text-[4.6rem]">
            Let&apos;s design your <em className="font-serif font-normal">space.</em>
          </h1>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">
            Tell us a little about your home. We will reply to arrange a consultation or a site inspection anywhere in Lagos.
          </p>
          <ul className="mt-10 space-y-3 text-[14px] text-white/75">
            {["Response within one working day", "Site inspections across Lagos", "Every project 100% designed and delivered by BREA"].map((t) => (
              <li key={t} className="flex gap-3">
                <span aria-hidden>✦</span>
                {t}
              </li>
            ))}
          </ul>
          <div className="relative mt-12 hidden aspect-[4/5] max-w-xs overflow-hidden md:block">
            <Image src="/media/stills/v2-dining-boucle.jpg" alt="Boucle dining chairs under sculptural pendants" fill sizes="320px" className="object-cover" />
          </div>
          <p className="mt-auto pt-10 text-[13px] text-white/50">
            Prefer to chat?{" "}
            <a href={site.instagram.dm} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
              DM @{site.instagram.handle}
            </a>
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7 md:pt-24">
          <EnquiryForm tone="dark" />
        </div>
      </div>
    </section>
  );
}
