import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ServicePageContent from "@/components/ServicePageContent";
import {
  GUTTERS_INTRO,
  GUTTERS_INTRO_HEADING,
  GUTTERS_SERVICES,
  GUTTERS_SUBTITLE,
  GUTTERS_TAGLINE,
} from "@/lib/services/gutters-content";

export const metadata: Metadata = {
  title: "Gutters | Universal Roof",
  description:
    "Professional gutter installation, replacement, repair, and gutter guards in Greater Houston.",
};

export default function GuttersPage() {
  return (
    <PageShell
      activeHref="/services"
      backHref="/services"
      backLabel="← Back to Services"
      title="Gutters"
      contentAlign="top"
      contentWidth="wide"
    >
      <ServicePageContent
        introHeading={GUTTERS_INTRO_HEADING}
        intro={GUTTERS_INTRO}
        introTagline={GUTTERS_TAGLINE}
        subtitle={GUTTERS_SUBTITLE}
        services={GUTTERS_SERVICES}
      />
    </PageShell>
  );
}
