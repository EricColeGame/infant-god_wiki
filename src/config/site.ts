export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Infant God Wiki",
  shortName: "Infant God",
  logoText: "IG",
  tagline: "Gameplay Guides, Mechanics, Updates & Resources",
  description: "Complete Infant God Wiki with gameplay information, mechanics, guides, updates, and essential resources for players exploring the mysterious divine fantasy world.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://infant-god.wiki",
  gameUrl: "",
  heroVideoId: "",
  social: {},
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
