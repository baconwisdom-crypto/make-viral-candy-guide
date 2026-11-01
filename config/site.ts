import type { SiteConfig } from "@/lib/types";
export const siteConfig: SiteConfig = {
  siteName: "Make Viral Candy! Wiki",
  shortName: "MC",
  siteSlug: "make-viral-candy",
  description: {
    en: "Make candy by hand, match the design and grow your roadside shop into a seven-zone Candy Palace."
  },
  siteUrl: "https://www.makeviralcandy.wiki",
  searchVisibility: "public",
  architecture: {
    enabled: true,
    templates: [
      "landing",
      "hub"
    ]
  },
  theme: {
    accent: "#ff9ec9",
    accentSoft: "#ff9ec9",
    background: "#10121a",
    panel: "#191d29"
  },
  brandIcon: {
    src: "/images/official-icon.png",
    alt: {
      en: "Official Make Viral Candy! icon"
    },
    sourceId: "official-game"
  },
  navigationIcons: {
    home: "guides",
    start: "guides",
    perfect: "guides",
    supply: "guides",
    recipes: "guides",
    codes: "codes",
    about: "guides"
  },
  supportedLocales: [
    "en",
    "de",
    "fr",
    "es",
    "ja"
  ],
  publishedLocales: [
    "en"
  ],
  plannedLocales: [],
  lastVerified: "2026-11-01",
  officialLinks: [
    {
      label: "Play on Roblox",
      url: "https://www.roblox.com/games/92696280499166"
    },
    {
      label: "Quez Clan community",
      url: "https://www.roblox.com/communities/34033359"
    }
  ],
  heroImage: {
    src: "/images/official-hero.png",
    alt: {
      en: "Official Make Viral Candy! promotional artwork"
    },
    sourceId: "official-game",
    heroMediaType: "official-promotional-image",
    ratio: "video"
  },
  heroVideo: null,
  mediaPresentation: {
    showImageText: false
  },
  analytics: {
    enabled: true,
    measurementId: "G-9C2YHKVFBE"
  },
  ads: {
    enabled: false,
    previewPlaceholders: false,
    desktopChrome: {
      enabled: true
    },
    placements: {
      "top-sticky": false,
      "left-sticky": true,
      "home-banner": false,
      "article-banner": false,
      "sidebar-square": false
    }
  },
  evidenceLabels: [
    {
      label: "Official details and gameplay",
      note: {
        en: "Recorded interfaces can change."
      }
    }
  ],
  disclaimer: {
    en: "Independent fan guide. Not affiliated with Roblox or Quez Clan."
  }
} satisfies SiteConfig;
