import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ServicePageContent from "@/components/ServicePageContent";
import {
  SIDING_INTRO,
  SIDING_SERVICES,
  SIDING_SUBTITLE,
} from "@/lib/services/siding-content";

export const metadata: Metadata = {
  title: "Siding | Universal Roof",
  description:
    "Professional siding installation, replacement, and repair in Greater Houston.",
};

export default function SidingPage() {
  return (
    <PageShell
      activeHref="/services"
      backHref="/services"
      backLabel="← Back to Services"
      title="Siding"
      contentAlign="top"
      contentWidth="wide"
    >
      <ServicePageContent
        intro={SIDING_INTRO}
        subtitle={SIDING_SUBTITLE}
        services={SIDING_SERVICES}
      />
    </PageShell>
  );
}
