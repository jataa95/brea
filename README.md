# BREA Interiors: website

Marketing site for **BREA Interiors**, an interior design studio in Lagos, Nigeria ([@interior_bybrea](https://www.instagram.com/interior_bybrea/)).

Built with Next.js 16 (App Router, Cache Components) and Tailwind CSS v4. Black-and-white brand palette; the interiors supply the colour.

## Pages

| Route       | Purpose                                                                 |
| ----------- | ----------------------------------------------------------------------- |
| `/`         | Hero reel, studio intro, featured works, transformation, services, process, Instagram reels, enquiry form |
| `/projects` | Every project with its walkthrough reel and gallery                     |
| `/studio`   | About, stats, five-step process (`#process`), services                  |
| `/enquire`  | Consultation and site-inspection booking form                          |

## Editing content

- **Business details, WhatsApp, email, phone:** `lib/site.ts` (or the env vars below)
- **Projects and images:** `lib/projects.ts`
- **Services, process steps, stats:** `lib/content.ts`
- **Media:** `public/media/stills` (JPG stills taken from the reels) and `public/media/video` (web-compressed, muted reels)
- **Logo:** `components/Wordmark.tsx` (vector, traced from the brand mark) and `public/brand/brea-wordmark.svg`

## Enquiry routing

The enquiry form needs no backend. On submit it builds a brief from the form fields and:

1. opens **WhatsApp** with the brief prefilled, if `NEXT_PUBLIC_WHATSAPP` is set; otherwise
2. opens an **email** draft, if `NEXT_PUBLIC_EMAIL` is set; otherwise
3. copies the brief and opens an **Instagram DM** to @interior_bybrea.

## Environment variables

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_WHATSAPP=2348000000000   # digits only, international format
NEXT_PUBLIC_EMAIL=hello@your-domain.com
NEXT_PUBLIC_PHONE=+234 800 000 0000
```

## Development

```bash
npm install
npm run dev
```
