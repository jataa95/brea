import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-ink px-5 text-center text-paper">
      <div>
        <p className="eyebrow text-white/50">404</p>
        <h1 className="display mt-4 text-[3rem] md:text-[4.5rem]">
          This room is still <em className="font-serif font-normal">under design.</em>
        </h1>
        <Link href="/" className="mt-8 inline-block rounded-full bg-paper px-6 py-3 text-[14px] font-medium text-ink">
          Back home
        </Link>
      </div>
    </section>
  );
}
