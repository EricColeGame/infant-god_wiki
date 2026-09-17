import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>{siteConfig.shortName}, logos, trademarks, and related media belong to their respective copyright owners and creators.</p>
      <p>This website is a non-official fan wiki implementation for educational, gameplay guide, and reference purposes under fair use.</p>
      <p>If you own rights to content displayed here and have concerns, please contact us at {siteConfig.supportEmail ? <a href={`mailto:${siteConfig.supportEmail}`} className="underline hover:text-foreground">{siteConfig.supportEmail}</a> : "the site operator"} for prompt review and resolution.</p>
    </LegalPage>
  );
}
