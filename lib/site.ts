/**
 * Central business details. Update these values and every CTA,
 * footer link and structured-data block on the site follows.
 */
export const site = {
  name: "BREA Interiors",
  shortName: "BREA",
  tagline: "Creating beautiful spaces.",
  description:
    "BREA Interiors is a Lagos interior design studio creating calm, considered and beautifully lit homes from first consultation to final styling.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://brea-interiors.vercel.app",
  city: "Lagos",
  country: "Nigeria",
  timeZone: "Africa/Lagos",
  instagram: {
    handle: "interior_bybrea",
    url: "https://www.instagram.com/interior_bybrea/",
    dm: "https://ig.me/m/interior_bybrea",
    followers: "114K",
  },
  /**
   * International format, digits only (e.g. "2348012345678").
   * Leave empty to route enquiries to Instagram DM instead.
   */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  /** Optional: shown in the footer and used as a fallback enquiry route. */
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
} as const;

export const nav = [
  { href: "/studio", label: "Studio" },
  { href: "/studio#process", label: "Process" },
  { href: "/projects", label: "Projects" },
] as const;

export function whatsappLink(message: string) {
  return site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
    : null;
}
