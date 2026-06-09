import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ServiceLinks from "@/components/ServiceLinks";

export const metadata: Metadata = {
  title: "Services | Universal Roof",
  description: "Roofing services in Houston — repairs, replacements, and inspections.",
};

export default function ServicesPage() {
  return (
    <PageShell activeHref="/services" title="Services" contentAlign="top">
      <ServiceLinks />
    </PageShell>
  );
}
