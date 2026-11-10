import type { Metadata, Viewport } from "next";
import { Inter_Tight, Instrument_Serif } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { site } from "@/lib/site";
import "./globals.css";

const grotesk = Inter_Tight({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "BREA Interiors | Interior Design Studio in Lagos, Nigeria",
    template: "%s | BREA Interiors",
  },
  description: site.description,
  keywords: [
    "interior designer Lagos",
    "interior design Lagos",
    "interior design Nigeria",
    "luxury interiors Lagos",
    "home makeover Lagos",
    "POP ceiling design Lagos",
    "BREA Interiors",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_NG",
    images: [{ url: "/media/stills/v2-wide-tv.jpg", width: 720, height: 1280, alt: "Cove-lit living room by BREA Interiors" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/media/stills/v2-wide-tv.jpg`,
  logo: `${site.url}/icon.png`,
  areaServed: "Lagos, Nigeria",
  address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "NG" },
  sameAs: [site.instagram.url],
  ...(site.phone ? { telephone: site.phone } : {}),
  ...(site.email ? { email: site.email } : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${grotesk.variable} ${display.variable} antialiased`}>
      <body className="min-h-screen bg-paper text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
