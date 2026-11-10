/**
 * Featured projects. Every project and image here is BREA's own work,
 * taken from the studio's Instagram reels. Rename titles and add
 * locations as the studio confirms them.
 */
export type Shot = { src: string; alt: string };

export type Project = {
  slug: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  cover: Shot;
  video: string;
  gallery: Shot[];
};

const s = (name: string, alt: string): Shot => ({ src: `/media/stills/${name}.jpg`, alt });

export const projects: Project[] = [
  {
    slug: "the-cove-residence",
    title: "The Cove Residence",
    type: "Full Interior",
    location: "Lagos",
    summary:
      "A layered lounge and dining suite wrapped in warm cove lighting. Recessed ceiling coffers, a bespoke media wall with display niches, sculptural pendants above a boucle dining set, and a palette of stone, sand and walnut.",
    cover: s("v2-lounge-wide", "Living room with cove-lit ceiling, cream sofas and a framed abstract artwork"),
    video: "/media/video/reel-lounge.mp4",
    gallery: [
      s("v2-lounge", "Cream sofa against a walnut wall with circular sconces"),
      s("v2-dining-pendants", "Dining room with sculptural globe pendants and floor-length drapes"),
      s("v2-dining-boucle", "White boucle dining chairs around an oval stone table"),
      s("v2-sofa-art", "Sofa beneath a large framed abstract and circular wall lights"),
      s("v2-tv-wall", "Bespoke media wall with lit shelving and floating console"),
      s("v2-sofa-cove", "Lounge corner with cove-lit ceiling and media niche"),
    ],
  },
  {
    slug: "the-gallery-apartment",
    title: "The Gallery Apartment",
    type: "Living & Dining",
    location: "Lagos",
    summary:
      "Open-plan living with an art-led point of view. A textured sofa, travertine-tone block tables, a lit walnut shelving column and a statement charcoal pillar that frames an oval dining table.",
    cover: s("v1-dining-art", "Dining area with oval table, white chairs and a black and white portrait artwork"),
    video: "/media/video/reel-living.mp4",
    gallery: [
      s("v1-living", "Living room with lit shelving, swivel chair and sheer curtains"),
      s("v1-dining-dark", "Charcoal pillar with framed textured art beside the dining table"),
      s("v1-wide", "Wide view of the sofa, block coffee tables and dining area"),
    ],
  },
  {
    slug: "shell-to-home",
    title: "Shell to Home",
    type: "Complete Transformation",
    location: "Lagos",
    summary:
      "We took a bare, unfinished shell and delivered a complete home: linear track lighting, a floating lit staircase with a pebble garden, a feature checkerboard ceiling over the dining table and a warm, minimal living space.",
    cover: s("v3-living", "Finished living room with linear lighting, grey sofa and lit media wall"),
    video: "/media/video/reel-transformation.mp4",
    gallery: [
      s("v3-before", "The space before: bare walls, exposed wiring and construction debris"),
      s("v3-stair", "Floating lit staircase above a pebble garden with a glowing sculpture"),
      s("v3-dining-checker", "Dining table beneath a black and white checkerboard ceiling feature"),
      s("v3-living-curtains", "Media wall with vertical cove light and floor-length grey drapes"),
    ],
  },
];

export const featuredStills = {
  hero: s("v2-wide-tv", "Cove-lit living room by BREA Interiors"),
  studio: s("v2-dining-boucle", "Boucle dining chairs under sculptural pendants"),
  studioAlt: s("v1-dining-art", "Art-led dining corner"),
  before: s("v3-before", "Unfinished room before the BREA transformation"),
  after: s("v3-living", "The same space finished by BREA"),
};
