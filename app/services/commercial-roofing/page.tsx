import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ServicePageContent from "@/components/ServicePageContent";
import {
  COMMERCIAL_ROOFING_INTRO,
  COMMERCIAL_ROOFING_SERVICES,
  COMMERCIAL_ROOFING_SUBTITLE,
} from "@/lib/services/commercial-roofing-content";

export const metadata: Metadata = {
  title: "Commercial Roofing | Universal Roof",
  description:
    "Commercial roofing inspections, repairs, replacements, and maintenance for offices, warehouses, and retail properties in Greater Houston.",
};

export default function CommercialRoofingPage() {
  return (
    <PageShell
      activeHref="/services"
      backHref="/services"
      backLabel="← Back to Services"
      title="Commercial Roofing"
      contentAlign="top"
      contentWidth="wide"
    >
      <ServicePageContent
        intro={COMMERCIAL_ROOFING_INTRO}
        subtitle={COMMERCIAL_ROOFING_SUBTITLE}
        services={COMMERCIAL_ROOFING_SERVICES}
      />
    </PageShell>
  );
}
