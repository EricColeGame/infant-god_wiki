import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>{siteConfig.name} is an independent fan-built guide hub covering gameplay information, mechanics, guides, updates, and essential resources for players exploring the mysterious divine fantasy world.</p>
      <p>Our mission is to provide accurate, up-to-date, and comprehensive walkthroughs to help players master game features and progression.</p>
    </LegalPage>
  );
}
