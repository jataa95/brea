"use client";

import { useState, type FormEvent } from "react";
import { site, whatsappLink } from "@/lib/site";

const spaceTypes = ["Living room", "Dining", "Bedroom", "Kitchen", "Whole home", "Shell to finish", "Office / commercial"];
const budgets = ["Under ₦10m", "₦10m – ₦25m", "₦25m – ₦50m", "₦50m – ₦100m", "₦100m+", "Not sure yet"];
const services = ["Consultation", "Site inspection", "Full design & build-out"];

type Tone = "light" | "dark";

export function EnquiryForm({ tone = "light" }: { tone?: Tone }) {
  const [spaces, setSpaces] = useState<string[]>([]);
  const [status, setStatus] = useState<null | "whatsapp" | "copied" | "email">(null);

  const dark = tone === "dark";
  const field = `w-full border-b bg-transparent py-3 text-[16px] outline-none transition-colors placeholder:opacity-50 ${
    dark ? "border-white/25 focus:border-white" : "border-ink/20 focus:border-ink"
  }`;
  const chip = (on: boolean) =>
    `rounded-full border px-4 py-2 text-[13px] transition-colors ${
      on
        ? dark
          ? "border-paper bg-paper text-ink"
          : "border-ink bg-ink text-paper"
        : dark
          ? "border-white/25 hover:border-white"
          : "border-ink/20 hover:border-ink"
    }`;

  function toggle(s: string) {
    setSpaces((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Hello BREA, I'd like to book a ${data.get("service")}.`,
      ``,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Location: ${data.get("location")}`,
      spaces.length ? `Spaces: ${spaces.join(", ")}` : null,
      `Budget: ${data.get("budget")}`,
      data.get("timeline") ? `Timeline: ${data.get("timeline")}` : null,
      data.get("message") ? `\n${data.get("message")}` : null,
    ].filter((l) => l !== null);
    const message = lines.join("\n");

    const wa = whatsappLink(message);
    if (wa) {
      window.open(wa, "_blank", "noopener,noreferrer");
      setStatus("whatsapp");
      return;
    }
    if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent(message)}`;
      setStatus("email");
      return;
    }
    // Instagram DMs cannot be prefilled, so copy the brief for the client to paste.
    try {
      await navigator.clipboard.writeText(message);
    } catch {}
    setStatus("copied");
    window.open(site.instagram.dm, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8">
      <fieldset>
        <legend className={`eyebrow mb-4 ${dark ? "text-white/50" : "text-mute"}`}>I&apos;d like to book</legend>
        <div className="flex flex-wrap gap-2">
          {services.map((s, i) => (
            <label key={s} className="cursor-pointer">
              <input type="radio" name="service" value={s.toLowerCase()} defaultChecked={i === 0} className="peer sr-only" />
              <span
                className={`inline-block rounded-full border px-4 py-2 text-[13px] transition-colors ${
                  dark
                    ? "border-white/25 peer-checked:border-paper peer-checked:bg-paper peer-checked:text-ink peer-focus-visible:ring-2 peer-focus-visible:ring-white"
                    : "border-ink/20 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:ring-2 peer-focus-visible:ring-ink"
                }`}
              >
                {s}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="sr-only">Full name</span>
          <input name="name" required autoComplete="name" placeholder="Full name *" className={field} />
        </label>
        <label className="block">
          <span className="sr-only">Phone or WhatsApp</span>
          <input name="phone" required type="tel" autoComplete="tel" placeholder="Phone / WhatsApp *" className={field} />
        </label>
        <label className="block">
          <span className="sr-only">Property location</span>
          <input name="location" required placeholder="Property location (e.g. Lekki, Ikoyi) *" className={field} />
        </label>
        <label className="block">
          <span className="sr-only">Timeline</span>
          <input name="timeline" placeholder="When would you like to start?" className={field} />
        </label>
      </div>

      <fieldset>
        <legend className={`eyebrow mb-4 ${dark ? "text-white/50" : "text-mute"}`}>Spaces</legend>
        <div className="flex flex-wrap gap-2">
          {spaceTypes.map((s) => (
            <button type="button" key={s} onClick={() => toggle(s)} aria-pressed={spaces.includes(s)} className={chip(spaces.includes(s))}>
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className={`eyebrow mb-2 block ${dark ? "text-white/50" : "text-mute"}`}>Estimated budget</span>
        <select name="budget" defaultValue="Not sure yet" className={`${field} appearance-none`}>
          {budgets.map((b) => (
            <option key={b} value={b} className="text-ink">
              {b}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="sr-only">Tell us about your space</span>
        <textarea name="message" rows={3} placeholder="Tell us about your space and the feeling you want" className={`${field} resize-none`} />
      </label>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          className={`group inline-flex items-center justify-between gap-6 rounded-full py-4 pl-7 pr-4 text-[15px] font-medium transition-colors ${
            dark ? "bg-paper text-ink hover:bg-white" : "bg-ink text-paper hover:bg-ink-2"
          }`}
        >
          Send enquiry
          <span
            className={`grid h-8 w-8 place-items-center rounded-full transition-transform group-hover:translate-x-1 ${
              dark ? "bg-ink text-paper" : "bg-paper text-ink"
            }`}
          >
            →
          </span>
        </button>
        <p className={`text-[12px] ${dark ? "text-white/50" : "text-mute"}`}>
          {site.whatsapp ? "Opens WhatsApp with your brief ready to send." : "Opens Instagram DM. Your brief is copied, just paste and send."}
        </p>
      </div>

      <p role="status" aria-live="polite" className="text-[14px]">
        {status === "copied" && "Your brief has been copied. Paste it into the Instagram chat and we will reply shortly."}
        {status === "whatsapp" && "Opening WhatsApp. Tap send and we will be in touch shortly."}
        {status === "email" && "Opening your email app with the brief ready to send."}
      </p>
    </form>
  );
}
