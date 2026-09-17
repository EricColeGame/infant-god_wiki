import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This fan wiki provides informational game guides for {siteConfig.shortName}. We do not request account credentials, passwords, or private payment information.</p>
      <p>Basic analytics, advertising, and hosting providers may process standard technical information such as device type, browser, approximate region, and visited pages.</p>
      <p>External links may lead to official platforms, Discord, YouTube, or community tools. Those services are governed by their own privacy policies.</p>
      {siteConfig.supportEmail && (
        <p>If you have any questions regarding privacy, contact us at <a href={`mailto:${siteConfig.supportEmail}`} className="underline hover:text-foreground">{siteConfig.supportEmail}</a>.</p>
      )}
    </LegalPage>
  );
}
