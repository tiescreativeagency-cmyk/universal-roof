import type { Metadata } from "next";
import FaqContent from "@/components/FaqContent";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "FAQs | Universal Roof",
  description:
    "Frequently asked questions about roofing inspections, insurance claims, and our process in Houston.",
};

export default function FaqsPage() {
  return (
    <PageShell
      activeHref="/faqs"
      title="FAQs"
      description="Answers to common questions about our roofing process, warranties, and timelines."
      contentAlign="top"
      contentWidth="wide"
    >
      <FaqContent />
    </PageShell>
  );
}
