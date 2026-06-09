import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ServicePageContent from "@/components/ServicePageContent";
import {
  RESIDENTIAL_ROOFING_INTRO,
  RESIDENTIAL_ROOFING_SERVICES,
  RESIDENTIAL_ROOFING_SUBTITLE,
} from "@/lib/services/residential-roofing-content";

export const metadata: Metadata = {
  title: "Residential Roofing | Universal Roof",
  description:
    "Residential roofing repairs, replacements, and insurance recovery in Greater Houston.",
};

export default function ResidentialRoofingPage() {
  return (
    <PageShell
      activeHref="/services"
      backHref="/services"
      backLabel="← Back to Services"
      title="Residential Roofing"
      contentAlign="top"
      contentWidth="wide"
    >
      <ServicePageContent
        intro={RESIDENTIAL_ROOFING_INTRO}
        subtitle={RESIDENTIAL_ROOFING_SUBTITLE}
        services={RESIDENTIAL_ROOFING_SERVICES}
      />
    </PageShell>
  );
}
