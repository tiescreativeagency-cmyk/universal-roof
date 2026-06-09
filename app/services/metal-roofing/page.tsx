import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ServicePageContent from "@/components/ServicePageContent";
import {
  R_PANEL_INTRO,
  R_PANEL_INTRO_HEADING,
  R_PANEL_INTRO_SUBHEADING,
  R_PANEL_SERVICES,
  R_PANEL_WHY_SUBTITLE,
  STANDING_SEAM_BENEFITS_SUBTITLE,
  STANDING_SEAM_INTRO,
  STANDING_SEAM_INTRO_HEADING,
  STANDING_SEAM_SERVICES,
} from "@/lib/services/metal-roofing-content";

export const metadata: Metadata = {
  title: "Metal Roofing | Universal Roof",
  description:
    "Standing seam and R-Panel metal roof installation, replacement, and repair in Houston and Greater Houston.",
};

export default function MetalRoofingPage() {
  return (
    <PageShell
      activeHref="/services"
      backHref="/services"
      backLabel="← Back to Services"
      title="Metal Roofing"
      contentAlign="top"
      contentWidth="wide"
    >
      <ServicePageContent
        introHeading={STANDING_SEAM_INTRO_HEADING}
        intro={STANDING_SEAM_INTRO}
        subtitle={STANDING_SEAM_BENEFITS_SUBTITLE}
        services={STANDING_SEAM_SERVICES}
      />
      <ServicePageContent
        className="mt-14 border-t border-cyan-400/20 pt-12 sm:mt-16 sm:pt-14"
        introHeading={R_PANEL_INTRO_HEADING}
        introSubheading={R_PANEL_INTRO_SUBHEADING}
        intro={R_PANEL_INTRO}
        subtitle={R_PANEL_WHY_SUBTITLE}
        services={R_PANEL_SERVICES}
      />
    </PageShell>
  );
}
